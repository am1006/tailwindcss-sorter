# tailwindcss-sorter (npm)

The order oracle. A thin CLI over
[`@herb-tools/tailwind-class-sorter`](https://github.com/marcoroth/herb/tree/main/javascript/packages/tailwind-class-sorter)
with `tailwindcss` pinned exactly (4.3.1).

Not built yet. The contract, when it lands:

- JSON array of class strings on stdin, sorted strings on stdout.
- `--stylesheet path/to/application.css` loads the host project's theme.
- `baseDir` points at this package's own directory, so the pinned tailwindcss
  resolves from here - the host project needs no node_modules.
- Startup self-check: sort a known string, die loudly if it comes back
  unsorted. Herb degrades to a silent no-op when Tailwind fails to load; that
  must never masquerade as success.
