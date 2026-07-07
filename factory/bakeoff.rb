# The bake-off: one bundle, two embedded engines. Measures bundle eval,
# design-system init, and corpus sort; diffs both engines against truth.json
# (the official prettier plugin's output - regenerate with: npm run truth).
# Kept as the measurement harness for future engine re-evaluations; run with
# the gem's Gemfile, which carries both engines:
#
#   BUNDLE_GEMFILE=../gems/rubocop-tailwindcss/Gemfile bundle exec ruby bakeoff.rb
#
# Note: MiniRacer::Context#eval and Quickjs::VM#eval_code are these engines'
# public APIs for evaluating our own vendored bundle - no untrusted input.
require "json"

FACTORY_DIR = __dir__
BUNDLE = File.read(File.expand_path("../gems/rubocop-tailwindcss/vendor/tw-bundle.js", FACTORY_DIR))
CORPUS = JSON.parse(File.read(File.join(FACTORY_DIR, "corpus.json")))
TRUTH = JSON.parse(File.read(File.join(FACTORY_DIR, "truth.json")))

APP_CSS_PATH = ARGV[0] || File.join(FACTORY_DIR, "user.css")

# Inline relative @imports in Ruby (the gem's eventual job); leave
# `@import "tailwindcss"` for the bundle's embedded map.
def inline_relative_imports(css_path)
  dir = File.dirname(css_path)
  File.read(css_path).gsub(%r{@import\s+"(\./[^"]+)"\s*;}) do
    File.read(File.expand_path(Regexp.last_match(1), dir))
  end
end

USER_CSS = inline_relative_imports(APP_CSS_PATH)

def clock
  start = Process.clock_gettime(Process::CLOCK_MONOTONIC)
  result = yield
  [ result, ((Process.clock_gettime(Process::CLOCK_MONOTONIC) - start) * 1000).round(1) ]
end

def report(engine, eval_ms, init_ms, sort_ms, results)
  mismatches = results.each_index.reject { |i| results[i] == TRUTH[i] }
  puts "\n== #{engine}"
  puts "  bundle eval: #{eval_ms} ms"
  puts "  design init: #{init_ms} ms"
  puts "  sort #{CORPUS.size} strings: #{sort_ms} ms"
  puts "  fidelity: #{CORPUS.size - mismatches.size}/#{CORPUS.size} match truth"
  mismatches.first(5).each do |i|
    puts "    corpus:  #{CORPUS[i]}"
    puts "    engine:  #{results[i]}"
    puts "    truth:   #{TRUTH[i]}"
  end
  results
end

def run_engine(name, engine)
  _, eval_ms = clock { engine.run(BUNDLE) }

  _, init_ms = clock do
    engine.run("__twInit(#{USER_CSS.to_json})")
    50.times do
      engine.drain
      break if engine.run("__tw.ready || __tw.error !== null")
      sleep 0.02
    end
    if (error = engine.run("__tw.error"))
      raise "#{name} init failed: #{error}"
    end
    raise "#{name} init never became ready (promise jobs stalled)" unless engine.run("__tw.ready")
  end

  warnings = engine.run("JSON.stringify(__tw.warnings)")
  puts "  warnings: #{warnings}" unless warnings == "[]"

  results, sort_ms = clock { JSON.parse(engine.run("__twSortBatch(#{CORPUS.to_json.to_json})")) }
  report(name, eval_ms, init_ms, sort_ms, results)
rescue LoadError => e
  puts "\n== #{name}: UNAVAILABLE - #{e.message}"
  nil
rescue => e
  puts "\n== #{name}: FAILED - #{e.class}: #{e.message.lines.first(3).join}"
  nil
end

# Thin adapters over each engine's public evaluation API
class MiniRacerEngine
  def initialize
    require "mini_racer"
    @context = MiniRacer::Context.new
  end

  def run(code)
    @context.eval(code)
  end

  def drain
    # V8 drains microtasks at the end of each eval - nothing explicit needed
  end
end

class QuickjsEngine
  def initialize
    require "quickjs"
    @vm = Quickjs::VM.new(memory_limit: 512 * 1024 * 1024, timeout_msec: 60_000)
  end

  def run(code)
    @vm.eval_code(code)
  end

  def drain
    @vm.drain_jobs!
  end
end

puts "corpus: #{CORPUS.size} class strings | tailwindcss 4.3.1 | stylesheet: #{APP_CSS_PATH}"

mini = begin
  run_engine("mini_racer (V8)", MiniRacerEngine.new)
rescue LoadError => e
  puts "\n== mini_racer (V8): UNAVAILABLE - #{e.message}"
  nil
end

quick = begin
  run_engine("quickjs", QuickjsEngine.new)
rescue LoadError => e
  puts "\n== quickjs: UNAVAILABLE - #{e.message}"
  nil
end

if mini && quick
  cross = mini.each_index.count { |i| mini[i] != quick[i] }
  puts "\ncross-engine disagreement: #{cross}/#{CORPUS.size}"
end
