// tw-bundle.js - BUILT ARTIFACT, DO NOT EDIT
// source: factory/entry.ts (sha256 b8069c81b1b5fd49880cd73f742104d10a0aafbe74d78a8eefab6437ee337bc5)
// tailwindcss 4.3.1 - rebuild with: cd factory && npm run build
"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

  // node_modules/tailwindcss/dist/chunk-X4GG3EDV.mjs
  var l = { inherit: "inherit", current: "currentcolor", transparent: "transparent", black: "#000", white: "#fff", slate: { 50: "oklch(98.4% 0.003 247.858)", 100: "oklch(96.8% 0.007 247.896)", 200: "oklch(92.9% 0.013 255.508)", 300: "oklch(86.9% 0.022 252.894)", 400: "oklch(70.4% 0.04 256.788)", 500: "oklch(55.4% 0.046 257.417)", 600: "oklch(44.6% 0.043 257.281)", 700: "oklch(37.2% 0.044 257.287)", 800: "oklch(27.9% 0.041 260.031)", 900: "oklch(20.8% 0.042 265.755)", 950: "oklch(12.9% 0.042 264.695)" }, gray: { 50: "oklch(98.5% 0.002 247.839)", 100: "oklch(96.7% 0.003 264.542)", 200: "oklch(92.8% 0.006 264.531)", 300: "oklch(87.2% 0.01 258.338)", 400: "oklch(70.7% 0.022 261.325)", 500: "oklch(55.1% 0.027 264.364)", 600: "oklch(44.6% 0.03 256.802)", 700: "oklch(37.3% 0.034 259.733)", 800: "oklch(27.8% 0.033 256.848)", 900: "oklch(21% 0.034 264.665)", 950: "oklch(13% 0.028 261.692)" }, zinc: { 50: "oklch(98.5% 0 0)", 100: "oklch(96.7% 0.001 286.375)", 200: "oklch(92% 0.004 286.32)", 300: "oklch(87.1% 0.006 286.286)", 400: "oklch(70.5% 0.015 286.067)", 500: "oklch(55.2% 0.016 285.938)", 600: "oklch(44.2% 0.017 285.786)", 700: "oklch(37% 0.013 285.805)", 800: "oklch(27.4% 0.006 286.033)", 900: "oklch(21% 0.006 285.885)", 950: "oklch(14.1% 0.005 285.823)" }, neutral: { 50: "oklch(98.5% 0 0)", 100: "oklch(97% 0 0)", 200: "oklch(92.2% 0 0)", 300: "oklch(87% 0 0)", 400: "oklch(70.8% 0 0)", 500: "oklch(55.6% 0 0)", 600: "oklch(43.9% 0 0)", 700: "oklch(37.1% 0 0)", 800: "oklch(26.9% 0 0)", 900: "oklch(20.5% 0 0)", 950: "oklch(14.5% 0 0)" }, stone: { 50: "oklch(98.5% 0.001 106.423)", 100: "oklch(97% 0.001 106.424)", 200: "oklch(92.3% 0.003 48.717)", 300: "oklch(86.9% 0.005 56.366)", 400: "oklch(70.9% 0.01 56.259)", 500: "oklch(55.3% 0.013 58.071)", 600: "oklch(44.4% 0.011 73.639)", 700: "oklch(37.4% 0.01 67.558)", 800: "oklch(26.8% 0.007 34.298)", 900: "oklch(21.6% 0.006 56.043)", 950: "oklch(14.7% 0.004 49.25)" }, mauve: { 50: "oklch(98.5% 0 0)", 100: "oklch(96% 0.003 325.6)", 200: "oklch(92.2% 0.005 325.62)", 300: "oklch(86.5% 0.012 325.68)", 400: "oklch(71.1% 0.019 323.02)", 500: "oklch(54.2% 0.034 322.5)", 600: "oklch(43.5% 0.029 321.78)", 700: "oklch(36.4% 0.029 323.89)", 800: "oklch(26.3% 0.024 320.12)", 900: "oklch(21.2% 0.019 322.12)", 950: "oklch(14.5% 0.008 326)" }, olive: { 50: "oklch(98.8% 0.003 106.5)", 100: "oklch(96.6% 0.005 106.5)", 200: "oklch(93% 0.007 106.5)", 300: "oklch(88% 0.011 106.6)", 400: "oklch(73.7% 0.021 106.9)", 500: "oklch(58% 0.031 107.3)", 600: "oklch(46.6% 0.025 107.3)", 700: "oklch(39.4% 0.023 107.4)", 800: "oklch(28.6% 0.016 107.4)", 900: "oklch(22.8% 0.013 107.4)", 950: "oklch(15.3% 0.006 107.1)" }, mist: { 50: "oklch(98.7% 0.002 197.1)", 100: "oklch(96.3% 0.002 197.1)", 200: "oklch(92.5% 0.005 214.3)", 300: "oklch(87.2% 0.007 219.6)", 400: "oklch(72.3% 0.014 214.4)", 500: "oklch(56% 0.021 213.5)", 600: "oklch(45% 0.017 213.2)", 700: "oklch(37.8% 0.015 216)", 800: "oklch(27.5% 0.011 216.9)", 900: "oklch(21.8% 0.008 223.9)", 950: "oklch(14.8% 0.004 228.8)" }, taupe: { 50: "oklch(98.6% 0.002 67.8)", 100: "oklch(96% 0.002 17.2)", 200: "oklch(92.2% 0.005 34.3)", 300: "oklch(86.8% 0.007 39.5)", 400: "oklch(71.4% 0.014 41.2)", 500: "oklch(54.7% 0.021 43.1)", 600: "oklch(43.8% 0.017 39.3)", 700: "oklch(36.7% 0.016 35.7)", 800: "oklch(26.8% 0.011 36.5)", 900: "oklch(21.4% 0.009 43.1)", 950: "oklch(14.7% 0.004 49.3)" }, red: { 50: "oklch(97.1% 0.013 17.38)", 100: "oklch(93.6% 0.032 17.717)", 200: "oklch(88.5% 0.062 18.334)", 300: "oklch(80.8% 0.114 19.571)", 400: "oklch(70.4% 0.191 22.216)", 500: "oklch(63.7% 0.237 25.331)", 600: "oklch(57.7% 0.245 27.325)", 700: "oklch(50.5% 0.213 27.518)", 800: "oklch(44.4% 0.177 26.899)", 900: "oklch(39.6% 0.141 25.723)", 950: "oklch(25.8% 0.092 26.042)" }, orange: { 50: "oklch(98% 0.016 73.684)", 100: "oklch(95.4% 0.038 75.164)", 200: "oklch(90.1% 0.076 70.697)", 300: "oklch(83.7% 0.128 66.29)", 400: "oklch(75% 0.183 55.934)", 500: "oklch(70.5% 0.213 47.604)", 600: "oklch(64.6% 0.222 41.116)", 700: "oklch(55.3% 0.195 38.402)", 800: "oklch(47% 0.157 37.304)", 900: "oklch(40.8% 0.123 38.172)", 950: "oklch(26.6% 0.079 36.259)" }, amber: { 50: "oklch(98.7% 0.022 95.277)", 100: "oklch(96.2% 0.059 95.617)", 200: "oklch(92.4% 0.12 95.746)", 300: "oklch(87.9% 0.169 91.605)", 400: "oklch(82.8% 0.189 84.429)", 500: "oklch(76.9% 0.188 70.08)", 600: "oklch(66.6% 0.179 58.318)", 700: "oklch(55.5% 0.163 48.998)", 800: "oklch(47.3% 0.137 46.201)", 900: "oklch(41.4% 0.112 45.904)", 950: "oklch(27.9% 0.077 45.635)" }, yellow: { 50: "oklch(98.7% 0.026 102.212)", 100: "oklch(97.3% 0.071 103.193)", 200: "oklch(94.5% 0.129 101.54)", 300: "oklch(90.5% 0.182 98.111)", 400: "oklch(85.2% 0.199 91.936)", 500: "oklch(79.5% 0.184 86.047)", 600: "oklch(68.1% 0.162 75.834)", 700: "oklch(55.4% 0.135 66.442)", 800: "oklch(47.6% 0.114 61.907)", 900: "oklch(42.1% 0.095 57.708)", 950: "oklch(28.6% 0.066 53.813)" }, lime: { 50: "oklch(98.6% 0.031 120.757)", 100: "oklch(96.7% 0.067 122.328)", 200: "oklch(93.8% 0.127 124.321)", 300: "oklch(89.7% 0.196 126.665)", 400: "oklch(84.1% 0.238 128.85)", 500: "oklch(76.8% 0.233 130.85)", 600: "oklch(64.8% 0.2 131.684)", 700: "oklch(53.2% 0.157 131.589)", 800: "oklch(45.3% 0.124 130.933)", 900: "oklch(40.5% 0.101 131.063)", 950: "oklch(27.4% 0.072 132.109)" }, green: { 50: "oklch(98.2% 0.018 155.826)", 100: "oklch(96.2% 0.044 156.743)", 200: "oklch(92.5% 0.084 155.995)", 300: "oklch(87.1% 0.15 154.449)", 400: "oklch(79.2% 0.209 151.711)", 500: "oklch(72.3% 0.219 149.579)", 600: "oklch(62.7% 0.194 149.214)", 700: "oklch(52.7% 0.154 150.069)", 800: "oklch(44.8% 0.119 151.328)", 900: "oklch(39.3% 0.095 152.535)", 950: "oklch(26.6% 0.065 152.934)" }, emerald: { 50: "oklch(97.9% 0.021 166.113)", 100: "oklch(95% 0.052 163.051)", 200: "oklch(90.5% 0.093 164.15)", 300: "oklch(84.5% 0.143 164.978)", 400: "oklch(76.5% 0.177 163.223)", 500: "oklch(69.6% 0.17 162.48)", 600: "oklch(59.6% 0.145 163.225)", 700: "oklch(50.8% 0.118 165.612)", 800: "oklch(43.2% 0.095 166.913)", 900: "oklch(37.8% 0.077 168.94)", 950: "oklch(26.2% 0.051 172.552)" }, teal: { 50: "oklch(98.4% 0.014 180.72)", 100: "oklch(95.3% 0.051 180.801)", 200: "oklch(91% 0.096 180.426)", 300: "oklch(85.5% 0.138 181.071)", 400: "oklch(77.7% 0.152 181.912)", 500: "oklch(70.4% 0.14 182.503)", 600: "oklch(60% 0.118 184.704)", 700: "oklch(51.1% 0.096 186.391)", 800: "oklch(43.7% 0.078 188.216)", 900: "oklch(38.6% 0.063 188.416)", 950: "oklch(27.7% 0.046 192.524)" }, cyan: { 50: "oklch(98.4% 0.019 200.873)", 100: "oklch(95.6% 0.045 203.388)", 200: "oklch(91.7% 0.08 205.041)", 300: "oklch(86.5% 0.127 207.078)", 400: "oklch(78.9% 0.154 211.53)", 500: "oklch(71.5% 0.143 215.221)", 600: "oklch(60.9% 0.126 221.723)", 700: "oklch(52% 0.105 223.128)", 800: "oklch(45% 0.085 224.283)", 900: "oklch(39.8% 0.07 227.392)", 950: "oklch(30.2% 0.056 229.695)" }, sky: { 50: "oklch(97.7% 0.013 236.62)", 100: "oklch(95.1% 0.026 236.824)", 200: "oklch(90.1% 0.058 230.902)", 300: "oklch(82.8% 0.111 230.318)", 400: "oklch(74.6% 0.16 232.661)", 500: "oklch(68.5% 0.169 237.323)", 600: "oklch(58.8% 0.158 241.966)", 700: "oklch(50% 0.134 242.749)", 800: "oklch(44.3% 0.11 240.79)", 900: "oklch(39.1% 0.09 240.876)", 950: "oklch(29.3% 0.066 243.157)" }, blue: { 50: "oklch(97% 0.014 254.604)", 100: "oklch(93.2% 0.032 255.585)", 200: "oklch(88.2% 0.059 254.128)", 300: "oklch(80.9% 0.105 251.813)", 400: "oklch(70.7% 0.165 254.624)", 500: "oklch(62.3% 0.214 259.815)", 600: "oklch(54.6% 0.245 262.881)", 700: "oklch(48.8% 0.243 264.376)", 800: "oklch(42.4% 0.199 265.638)", 900: "oklch(37.9% 0.146 265.522)", 950: "oklch(28.2% 0.091 267.935)" }, indigo: { 50: "oklch(96.2% 0.018 272.314)", 100: "oklch(93% 0.034 272.788)", 200: "oklch(87% 0.065 274.039)", 300: "oklch(78.5% 0.115 274.713)", 400: "oklch(67.3% 0.182 276.935)", 500: "oklch(58.5% 0.233 277.117)", 600: "oklch(51.1% 0.262 276.966)", 700: "oklch(45.7% 0.24 277.023)", 800: "oklch(39.8% 0.195 277.366)", 900: "oklch(35.9% 0.144 278.697)", 950: "oklch(25.7% 0.09 281.288)" }, violet: { 50: "oklch(96.9% 0.016 293.756)", 100: "oklch(94.3% 0.029 294.588)", 200: "oklch(89.4% 0.057 293.283)", 300: "oklch(81.1% 0.111 293.571)", 400: "oklch(70.2% 0.183 293.541)", 500: "oklch(60.6% 0.25 292.717)", 600: "oklch(54.1% 0.281 293.009)", 700: "oklch(49.1% 0.27 292.581)", 800: "oklch(43.2% 0.232 292.759)", 900: "oklch(38% 0.189 293.745)", 950: "oklch(28.3% 0.141 291.089)" }, purple: { 50: "oklch(97.7% 0.014 308.299)", 100: "oklch(94.6% 0.033 307.174)", 200: "oklch(90.2% 0.063 306.703)", 300: "oklch(82.7% 0.119 306.383)", 400: "oklch(71.4% 0.203 305.504)", 500: "oklch(62.7% 0.265 303.9)", 600: "oklch(55.8% 0.288 302.321)", 700: "oklch(49.6% 0.265 301.924)", 800: "oklch(43.8% 0.218 303.724)", 900: "oklch(38.1% 0.176 304.987)", 950: "oklch(29.1% 0.149 302.717)" }, fuchsia: { 50: "oklch(97.7% 0.017 320.058)", 100: "oklch(95.2% 0.037 318.852)", 200: "oklch(90.3% 0.076 319.62)", 300: "oklch(83.3% 0.145 321.434)", 400: "oklch(74% 0.238 322.16)", 500: "oklch(66.7% 0.295 322.15)", 600: "oklch(59.1% 0.293 322.896)", 700: "oklch(51.8% 0.253 323.949)", 800: "oklch(45.2% 0.211 324.591)", 900: "oklch(40.1% 0.17 325.612)", 950: "oklch(29.3% 0.136 325.661)" }, pink: { 50: "oklch(97.1% 0.014 343.198)", 100: "oklch(94.8% 0.028 342.258)", 200: "oklch(89.9% 0.061 343.231)", 300: "oklch(82.3% 0.12 346.018)", 400: "oklch(71.8% 0.202 349.761)", 500: "oklch(65.6% 0.241 354.308)", 600: "oklch(59.2% 0.249 0.584)", 700: "oklch(52.5% 0.223 3.958)", 800: "oklch(45.9% 0.187 3.815)", 900: "oklch(40.8% 0.153 2.432)", 950: "oklch(28.4% 0.109 3.907)" }, rose: { 50: "oklch(96.9% 0.015 12.422)", 100: "oklch(94.1% 0.03 12.58)", 200: "oklch(89.2% 0.058 10.001)", 300: "oklch(81% 0.117 11.638)", 400: "oklch(71.2% 0.194 13.428)", 500: "oklch(64.5% 0.246 16.439)", 600: "oklch(58.6% 0.253 17.585)", 700: "oklch(51.4% 0.222 16.935)", 800: "oklch(45.5% 0.188 13.697)", 900: "oklch(41% 0.159 10.272)", 950: "oklch(27.1% 0.105 12.094)" } };

  // node_modules/tailwindcss/dist/chunk-XVOTX5KS.mjs
  var S = /* @__PURE__ */ new Set(["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen", "transparent", "currentcolor", "canvas", "canvastext", "linktext", "visitedtext", "activetext", "buttonface", "buttontext", "buttonborder", "field", "fieldtext", "highlight", "highlighttext", "selecteditem", "selecteditemtext", "mark", "marktext", "graytext", "accentcolor", "accentcolortext"]);
  var U = /^(rgba?|hsla?|hwb|color|(ok)?(lab|lch)|light-dark|color-mix)\(/i;
  function R(e2) {
    return e2.charCodeAt(0) === 35 || U.test(e2) || S.has(e2.toLowerCase());
  }
  function ne(e2) {
    return S.has(e2.toLowerCase());
  }
  var A = ["calc", "min", "max", "clamp", "mod", "rem", "sin", "cos", "tan", "asin", "acos", "atan", "atan2", "pow", "sqrt", "hypot", "log", "exp", "round"];
  function b(e2) {
    return e2.indexOf("(") !== -1 && A.some((t) => e2.includes(`${t}(`));
  }
  function ie(e2) {
    if (!A.some((n) => e2.includes(n))) return e2;
    let t = "", r = [], s = null, m = null;
    for (let n = 0; n < e2.length; n++) {
      let a2 = e2.charCodeAt(n);
      if (a2 >= 48 && a2 <= 57 || s !== null && (a2 === 37 || a2 >= 97 && a2 <= 122 || a2 >= 65 && a2 <= 90) ? s = n : (m = s, s = null), a2 === 40) {
        t += e2[n];
        let i = n;
        for (let p2 = n - 1; p2 >= 0; p2--) {
          let c2 = e2.charCodeAt(p2);
          if (c2 >= 48 && c2 <= 57) i = p2;
          else if (c2 >= 97 && c2 <= 122) i = p2;
          else break;
        }
        let o2 = e2.slice(i, n);
        if (A.includes(o2)) {
          r.unshift(true);
          continue;
        } else if (r[0] && o2 === "") {
          r.unshift(true);
          continue;
        }
        r.unshift(false);
        continue;
      } else if (a2 === 41) t += e2[n], r.shift();
      else if (a2 === 44 && r[0]) {
        t += ", ";
        continue;
      } else {
        if (a2 === 32 && r[0] && t.charCodeAt(t.length - 1) === 32) continue;
        if ((a2 === 43 || a2 === 42 || a2 === 47 || a2 === 45) && r[0]) {
          let i = t.trimEnd(), o2 = i.charCodeAt(i.length - 1), p2 = i.charCodeAt(i.length - 2), c2 = e2.charCodeAt(n + 1);
          if ((o2 === 101 || o2 === 69) && p2 >= 48 && p2 <= 57) {
            t += e2[n];
            continue;
          } else if (o2 === 43 || o2 === 42 || o2 === 47 || o2 === 45) {
            t += e2[n];
            continue;
          } else if (o2 === 40 || o2 === 44) {
            t += e2[n];
            continue;
          } else e2.charCodeAt(n - 1) === 32 ? t += `${e2[n]} ` : o2 >= 48 && o2 <= 57 || c2 >= 48 && c2 <= 57 || o2 === 41 || c2 === 40 || c2 === 43 || c2 === 42 || c2 === 47 || c2 === 45 || m !== null && m === n - 1 ? t += ` ${e2[n]} ` : t += e2[n];
        } else t += e2[n];
      }
    }
    return t;
  }
  var E = new Uint8Array(256);
  function d(e2, t) {
    let r = 0, s = [], m = 0, n = e2.length, a2 = t.charCodeAt(0);
    for (let i = 0; i < n; i++) {
      let o2 = e2.charCodeAt(i);
      if (r === 0 && o2 === a2) {
        s.push(e2.slice(m, i)), m = i + 1;
        continue;
      }
      switch (o2) {
        case 92:
          i += 1;
          break;
        case 39:
        case 34:
          for (; ++i < n; ) {
            let p2 = e2.charCodeAt(i);
            if (p2 === 92) {
              i += 1;
              continue;
            }
            if (p2 === o2) break;
          }
          break;
        case 40:
          E[r] = 41, r++;
          break;
        case 91:
          E[r] = 93, r++;
          break;
        case 123:
          E[r] = 125, r++;
          break;
        case 93:
        case 125:
        case 41:
          r > 0 && o2 === E[r - 1] && r--;
          break;
      }
    }
    return s.push(e2.slice(m)), s;
  }
  var P = { color: R, length: y, percentage: C, ratio: G, number: v, integer: u, url: N, position: K, "bg-size": Y, "line-width": T, image: F, "family-name": M, "generic-name": H, "absolute-size": $, "relative-size": W, angle: X, vector: te };
  function pe(e2, t) {
    if (e2.startsWith("var(")) return null;
    for (let r of t) if (P[r]?.(e2)) return r;
    return null;
  }
  var z = /^url\(.*\)$/;
  function N(e2) {
    return z.test(e2);
  }
  function T(e2) {
    return d(e2, " ").every((t) => y(t) || v(t) || t === "thin" || t === "medium" || t === "thick");
  }
  var D = /^(?:element|image|cross-fade|image-set)\(/;
  var I = /^(repeating-)?(conic|linear|radial)-gradient\(/;
  function F(e2) {
    let t = 0;
    for (let r of d(e2, ",")) if (!r.startsWith("var(")) {
      if (N(r)) {
        t += 1;
        continue;
      }
      if (I.test(r)) {
        t += 1;
        continue;
      }
      if (D.test(r)) {
        t += 1;
        continue;
      }
      return false;
    }
    return t > 0;
  }
  function H(e2) {
    return e2 === "serif" || e2 === "sans-serif" || e2 === "monospace" || e2 === "cursive" || e2 === "fantasy" || e2 === "system-ui" || e2 === "ui-serif" || e2 === "ui-sans-serif" || e2 === "ui-monospace" || e2 === "ui-rounded" || e2 === "math" || e2 === "emoji" || e2 === "fangsong";
  }
  function M(e2) {
    let t = 0;
    for (let r of d(e2, ",")) {
      let s = r.charCodeAt(0);
      if (s >= 48 && s <= 57) return false;
      r.startsWith("var(") || (t += 1);
    }
    return t > 0;
  }
  function $(e2) {
    return e2 === "xx-small" || e2 === "x-small" || e2 === "small" || e2 === "medium" || e2 === "large" || e2 === "x-large" || e2 === "xx-large" || e2 === "xxx-large";
  }
  function W(e2) {
    return e2 === "larger" || e2 === "smaller";
  }
  var x = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/;
  var B = new RegExp(`^${x.source}$`);
  function v(e2) {
    return B.test(e2) || b(e2);
  }
  var q = new RegExp(`^${x.source}%$`);
  function C(e2) {
    return q.test(e2) || b(e2);
  }
  var V = new RegExp(`^${x.source}\\s*/\\s*${x.source}$`);
  function G(e2) {
    return V.test(e2) || b(e2);
  }
  var Z = ["cm", "mm", "Q", "in", "pc", "pt", "px", "em", "ex", "ch", "rem", "lh", "rlh", "vw", "vh", "vmin", "vmax", "vb", "vi", "svw", "svh", "lvw", "lvh", "dvw", "dvh", "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax"];
  var j = new RegExp(`^${x.source}(${Z.join("|")})$`);
  function y(e2) {
    return j.test(e2) || b(e2);
  }
  function K(e2) {
    let t = 0;
    for (let r of d(e2, " ")) {
      if (r === "center" || r === "top" || r === "right" || r === "bottom" || r === "left") {
        t += 1;
        continue;
      }
      if (!r.startsWith("var(")) {
        if (y(r) || C(r)) {
          t += 1;
          continue;
        }
        return false;
      }
    }
    return t > 0;
  }
  function Y(e2) {
    let t = 0;
    for (let r of d(e2, ",")) {
      if (r === "cover" || r === "contain") {
        t += 1;
        continue;
      }
      let s = d(r, " ");
      if (s.length !== 1 && s.length !== 2) return false;
      if (s.every((m) => m === "auto" || y(m) || C(m))) {
        t += 1;
        continue;
      }
    }
    return t > 0;
  }
  var Q = ["deg", "rad", "grad", "turn"];
  var J = new RegExp(`^${x.source}(${Q.join("|")})$`);
  function X(e2) {
    return J.test(e2);
  }
  var ee = new RegExp(`^${x.source} +${x.source} +${x.source}$`);
  function te(e2) {
    return ee.test(e2);
  }
  function u(e2) {
    let t = Number(e2);
    return Number.isInteger(t) && t >= 0 && String(t) === String(e2);
  }
  function ge(e2) {
    let t = Number(e2);
    return Number.isInteger(t) && t > 0 && String(t) === String(e2);
  }
  function ue(e2) {
    return O(e2, 0.25);
  }
  function de(e2) {
    return O(e2, 0.25);
  }
  function O(e2, t) {
    let r = Number(e2);
    return r >= 0 && r % t === 0 && String(r) === String(e2);
  }
  function h(e2) {
    return { __BARE_VALUE__: e2 };
  }
  var g = h((e2) => {
    if (u(e2.value)) return e2.value;
  });
  var l2 = h((e2) => {
    if (u(e2.value)) return `${e2.value}%`;
  });
  var f = h((e2) => {
    if (u(e2.value)) return `${e2.value}px`;
  });
  var L = h((e2) => {
    if (u(e2.value)) return `${e2.value}ms`;
  });
  var w = h((e2) => {
    if (u(e2.value)) return `${e2.value}deg`;
  });
  var re = h((e2) => {
    if (e2.fraction === null) return;
    let [t, r] = d(e2.fraction, "/");
    if (!(!u(t) || !u(r))) return e2.fraction;
  });
  var _ = h((e2) => {
    if (u(Number(e2.value))) return `repeat(${e2.value}, minmax(0, 1fr))`;
  });
  var Ee = { accentColor: ({ theme: e2 }) => e2("colors"), animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", bounce: "bounce 1s infinite" }, aria: { busy: 'busy="true"', checked: 'checked="true"', disabled: 'disabled="true"', expanded: 'expanded="true"', hidden: 'hidden="true"', pressed: 'pressed="true"', readonly: 'readonly="true"', required: 'required="true"', selected: 'selected="true"' }, aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9", ...re }, backdropBlur: ({ theme: e2 }) => e2("blur"), backdropBrightness: ({ theme: e2 }) => ({ ...e2("brightness"), ...l2 }), backdropContrast: ({ theme: e2 }) => ({ ...e2("contrast"), ...l2 }), backdropGrayscale: ({ theme: e2 }) => ({ ...e2("grayscale"), ...l2 }), backdropHueRotate: ({ theme: e2 }) => ({ ...e2("hueRotate"), ...w }), backdropInvert: ({ theme: e2 }) => ({ ...e2("invert"), ...l2 }), backdropOpacity: ({ theme: e2 }) => ({ ...e2("opacity"), ...l2 }), backdropSaturate: ({ theme: e2 }) => ({ ...e2("saturate"), ...l2 }), backdropSepia: ({ theme: e2 }) => ({ ...e2("sepia"), ...l2 }), backgroundColor: ({ theme: e2 }) => e2("colors"), backgroundImage: { none: "none", "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))", "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))", "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))", "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))", "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))", "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))", "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))", "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))" }, backgroundOpacity: ({ theme: e2 }) => e2("opacity"), backgroundPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { 0: "0", none: "", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, borderColor: ({ theme: e2 }) => ({ DEFAULT: "currentcolor", ...e2("colors") }), borderOpacity: ({ theme: e2 }) => e2("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", full: "9999px" }, borderSpacing: ({ theme: e2 }) => e2("spacing"), borderWidth: { DEFAULT: "1px", 0: "0px", 2: "2px", 4: "4px", 8: "8px", ...f }, boxShadow: { sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)", DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)", inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", none: "none" }, boxShadowColor: ({ theme: e2 }) => e2("colors"), brightness: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", 200: "2", ...l2 }, caretColor: ({ theme: e2 }) => e2("colors"), colors: () => ({ ...l }), columns: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", ...g }, container: {}, content: { none: "none" }, contrast: { 0: "0", 50: ".5", 75: ".75", 100: "1", 125: "1.25", 150: "1.5", 200: "2", ...l2 }, cursor: { auto: "auto", default: "default", pointer: "pointer", wait: "wait", text: "text", move: "move", help: "help", "not-allowed": "not-allowed", none: "none", "context-menu": "context-menu", progress: "progress", cell: "cell", crosshair: "crosshair", "vertical-text": "vertical-text", alias: "alias", copy: "copy", "no-drop": "no-drop", grab: "grab", grabbing: "grabbing", "all-scroll": "all-scroll", "col-resize": "col-resize", "row-resize": "row-resize", "n-resize": "n-resize", "e-resize": "e-resize", "s-resize": "s-resize", "w-resize": "w-resize", "ne-resize": "ne-resize", "nw-resize": "nw-resize", "se-resize": "se-resize", "sw-resize": "sw-resize", "ew-resize": "ew-resize", "ns-resize": "ns-resize", "nesw-resize": "nesw-resize", "nwse-resize": "nwse-resize", "zoom-in": "zoom-in", "zoom-out": "zoom-out" }, divideColor: ({ theme: e2 }) => e2("borderColor"), divideOpacity: ({ theme: e2 }) => e2("borderOpacity"), divideWidth: ({ theme: e2 }) => ({ ...e2("borderWidth"), ...f }), dropShadow: { sm: "0 1px 1px rgb(0 0 0 / 0.05)", DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"], md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"], lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"], xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"], "2xl": "0 25px 25px rgb(0 0 0 / 0.15)", none: "0 0 #0000" }, fill: ({ theme: e2 }) => e2("colors"), flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e2 }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", ...e2("spacing") }), flexGrow: { 0: "0", DEFAULT: "1", ...g }, flexShrink: { 0: "0", DEFAULT: "1", ...g }, fontFamily: { sans: ["ui-sans-serif", "system-ui", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"], mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"] }, fontSize: { xs: ["0.75rem", { lineHeight: "1rem" }], sm: ["0.875rem", { lineHeight: "1.25rem" }], base: ["1rem", { lineHeight: "1.5rem" }], lg: ["1.125rem", { lineHeight: "1.75rem" }], xl: ["1.25rem", { lineHeight: "1.75rem" }], "2xl": ["1.5rem", { lineHeight: "2rem" }], "3xl": ["1.875rem", { lineHeight: "2.25rem" }], "4xl": ["2.25rem", { lineHeight: "2.5rem" }], "5xl": ["3rem", { lineHeight: "1" }], "6xl": ["3.75rem", { lineHeight: "1" }], "7xl": ["4.5rem", { lineHeight: "1" }], "8xl": ["6rem", { lineHeight: "1" }], "9xl": ["8rem", { lineHeight: "1" }] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: ({ theme: e2 }) => e2("spacing"), gradientColorStops: ({ theme: e2 }) => e2("colors"), gradientColorStopPositions: { "0%": "0%", "5%": "5%", "10%": "10%", "15%": "15%", "20%": "20%", "25%": "25%", "30%": "30%", "35%": "35%", "40%": "40%", "45%": "45%", "50%": "50%", "55%": "55%", "60%": "60%", "65%": "65%", "70%": "70%", "75%": "75%", "80%": "80%", "85%": "85%", "90%": "90%", "95%": "95%", "100%": "100%", ...l2 }, grayscale: { 0: "0", DEFAULT: "100%", ...l2 }, gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridColumn: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridColumnEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...g }, gridColumnStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...g }, gridRow: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridRowEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...g }, gridRowStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...g }, gridTemplateColumns: { none: "none", subgrid: "subgrid", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))", ..._ }, gridTemplateRows: { none: "none", subgrid: "subgrid", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))", ..._ }, height: ({ theme: e2 }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e2("spacing") }), hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg", ...w }, inset: ({ theme: e2 }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%", ...e2("spacing") }), invert: { 0: "0", DEFAULT: "100%", ...l2 }, keyframes: { spin: { to: { transform: "rotate(360deg)" } }, ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2", 3: ".75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem" }, listStyleType: { none: "none", disc: "disc", decimal: "decimal" }, listStyleImage: { none: "none" }, margin: ({ theme: e2 }) => ({ auto: "auto", ...e2("spacing") }), lineClamp: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", ...g }, maxHeight: ({ theme: e2 }) => ({ none: "none", full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e2("spacing") }), maxWidth: ({ theme: e2 }) => ({ none: "none", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch", ...e2("spacing") }), minHeight: ({ theme: e2 }) => ({ full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e2("spacing") }), minWidth: ({ theme: e2 }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", ...e2("spacing") }), objectPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, opacity: { 0: "0", 5: "0.05", 10: "0.1", 15: "0.15", 20: "0.2", 25: "0.25", 30: "0.3", 35: "0.35", 40: "0.4", 45: "0.45", 50: "0.5", 55: "0.55", 60: "0.6", 65: "0.65", 70: "0.7", 75: "0.75", 80: "0.8", 85: "0.85", 90: "0.9", 95: "0.95", 100: "1", ...l2 }, order: { first: "-9999", last: "9999", none: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", ...g }, outlineColor: ({ theme: e2 }) => e2("colors"), outlineOffset: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, padding: ({ theme: e2 }) => e2("spacing"), placeholderColor: ({ theme: e2 }) => e2("colors"), placeholderOpacity: ({ theme: e2 }) => e2("opacity"), ringColor: ({ theme: e2 }) => ({ DEFAULT: "currentcolor", ...e2("colors") }), ringOffsetColor: ({ theme: e2 }) => e2("colors"), ringOffsetWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, ringOpacity: ({ theme: e2 }) => ({ DEFAULT: "0.5", ...e2("opacity") }), ringWidth: { DEFAULT: "3px", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, rotate: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", 45: "45deg", 90: "90deg", 180: "180deg", ...w }, saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2", ...l2 }, scale: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", ...l2 }, screens: { sm: "40rem", md: "48rem", lg: "64rem", xl: "80rem", "2xl": "96rem" }, scrollMargin: ({ theme: e2 }) => e2("spacing"), scrollPadding: ({ theme: e2 }) => e2("spacing"), sepia: { 0: "0", DEFAULT: "100%", ...l2 }, skew: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", ...w }, space: ({ theme: e2 }) => e2("spacing"), spacing: { px: "1px", 0: "0px", 0.5: "0.125rem", 1: "0.25rem", 1.5: "0.375rem", 2: "0.5rem", 2.5: "0.625rem", 3: "0.75rem", 3.5: "0.875rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem", 11: "2.75rem", 12: "3rem", 14: "3.5rem", 16: "4rem", 20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem", 44: "11rem", 48: "12rem", 52: "13rem", 56: "14rem", 60: "15rem", 64: "16rem", 72: "18rem", 80: "20rem", 96: "24rem" }, stroke: ({ theme: e2 }) => ({ none: "none", ...e2("colors") }), strokeWidth: { 0: "0", 1: "1", 2: "2", ...g }, supports: {}, data: {}, textColor: ({ theme: e2 }) => e2("colors"), textDecorationColor: ({ theme: e2 }) => e2("colors"), textDecorationThickness: { auto: "auto", "from-font": "from-font", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, textIndent: ({ theme: e2 }) => e2("spacing"), textOpacity: ({ theme: e2 }) => e2("opacity"), textUnderlineOffset: { auto: "auto", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, transformOrigin: { center: "center", top: "top", "top-right": "top right", right: "right", "bottom-right": "bottom right", bottom: "bottom", "bottom-left": "bottom left", left: "left", "top-left": "top left" }, transitionDelay: { 0: "0s", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms", ...L }, transitionDuration: { DEFAULT: "150ms", 0: "0s", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms", ...L }, transitionProperty: { none: "none", all: "all", DEFAULT: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter", colors: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)", linear: "linear", in: "cubic-bezier(0.4, 0, 1, 1)", out: "cubic-bezier(0, 0, 0.2, 1)", "in-out": "cubic-bezier(0.4, 0, 0.2, 1)" }, translate: ({ theme: e2 }) => ({ "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%", ...e2("spacing") }), size: ({ theme: e2 }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", ...e2("spacing") }), width: ({ theme: e2 }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", screen: "100vw", svw: "100svw", lvw: "100lvw", dvw: "100dvw", min: "min-content", max: "max-content", fit: "fit-content", ...e2("spacing") }), willChange: { auto: "auto", scroll: "scroll-position", contents: "contents", transform: "transform" }, zIndex: { auto: "auto", 0: "0", 10: "10", 20: "20", 30: "30", 40: "40", 50: "50", ...g } };

  // node_modules/tailwindcss/dist/chunk-5JIJA4QV.mjs
  function h2(n) {
    if (arguments.length === 0) throw new TypeError("`CSS.escape` requires an argument.");
    let e2 = String(n), i = e2.length, r = -1, t, s = "", l3 = e2.charCodeAt(0);
    if (i === 1 && l3 === 45) return "\\" + e2;
    for (; ++r < i; ) {
      if (t = e2.charCodeAt(r), t === 0) {
        s += "\uFFFD";
        continue;
      }
      if (t >= 1 && t <= 31 || t === 127 || r === 0 && t >= 48 && t <= 57 || r === 1 && t >= 48 && t <= 57 && l3 === 45) {
        s += "\\" + t.toString(16) + " ";
        continue;
      }
      if (t >= 128 || t === 45 || t === 95 || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122) {
        s += e2.charAt(r);
        continue;
      }
      s += "\\" + e2.charAt(r);
    }
    return s;
  }
  function a(n) {
    return n.replace(/\\([\dA-Fa-f]{1,6}[\t\n\f\r ]?|[\S\s])/g, (e2) => {
      if (e2.length <= 2) return e2[1];
      let i = Number.parseInt(e2.slice(1).trim(), 16);
      return i === 0 || i > 1114111 || i >= 55296 && i <= 57343 ? "\uFFFD" : String.fromCodePoint(i);
    });
  }
  var c = /* @__PURE__ */ new Map([["--font", ["--font-weight", "--font-size"]], ["--inset", ["--inset-shadow", "--inset-ring"]], ["--text", ["--text-color", "--text-decoration-color", "--text-decoration-thickness", "--text-indent", "--text-shadow", "--text-underline-offset"]], ["--grid-column", ["--grid-column-start", "--grid-column-end"]], ["--grid-row", ["--grid-row-start", "--grid-row-end"]]]);
  function g2(n, e2) {
    return (c.get(e2) ?? []).some((i) => n === i || n.startsWith(`${i}-`));
  }
  var _p_instances, i_fn, e_fn, t_fn, _a;
  var p = (_a = class {
    constructor(e2 = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set([])) {
      __privateAdd(this, _p_instances);
      __publicField(this, "values");
      __publicField(this, "keyframes");
      __publicField(this, "prefix", null);
      this.values = e2;
      this.keyframes = i;
    }
    get size() {
      return this.values.size;
    }
    add(e2, i, r = 0, t) {
      if (e2.endsWith("-*")) {
        if (i !== "initial") throw new Error(`Invalid theme value \`${i}\` for namespace \`${e2}\``);
        e2 === "--*" ? this.values.clear() : this.clearNamespace(e2.slice(0, -2), 0);
      }
      if (r & 4) {
        let s = this.values.get(e2);
        if (s && !(s.options & 4)) return;
      }
      i === "initial" ? this.values.delete(e2) : this.values.set(e2, { value: i, options: r, src: t });
    }
    keysInNamespaces(e2) {
      let i = [];
      for (let r of e2) {
        let t = `${r}-`;
        for (let s of this.values.keys()) s.startsWith(t) && s.indexOf("--", 2) === -1 && (g2(s, r) || i.push(s.slice(t.length)));
      }
      return i;
    }
    get(e2) {
      for (let i of e2) {
        let r = this.values.get(i);
        if (r) return r.value;
      }
      return null;
    }
    hasDefault(e2) {
      return (this.getOptions(e2) & 4) === 4;
    }
    getOptions(e2) {
      return e2 = a(__privateMethod(this, _p_instances, i_fn).call(this, e2)), this.values.get(e2)?.options ?? 0;
    }
    entries() {
      return this.prefix ? Array.from(this.values, (e2) => (e2[0] = this.prefixKey(e2[0]), e2)) : this.values.entries();
    }
    prefixKey(e2) {
      return this.prefix ? `--${this.prefix}-${e2.slice(2)}` : e2;
    }
    clearNamespace(e2, i) {
      let r = c.get(e2) ?? [];
      e: for (let t of this.values.keys()) if (t.startsWith(e2)) {
        if (i !== 0 && (this.getOptions(t) & i) !== i) continue;
        for (let s of r) if (t.startsWith(s)) continue e;
        this.values.delete(t);
      }
    }
    markUsedVariable(e2) {
      let i = a(__privateMethod(this, _p_instances, i_fn).call(this, e2)), r = this.values.get(i);
      if (!r) return false;
      let t = r.options & 16;
      return r.options |= 16, !t;
    }
    resolve(e2, i, r = 0) {
      let t = __privateMethod(this, _p_instances, e_fn).call(this, e2, i);
      if (!t) return null;
      let s = this.values.get(t);
      return (r | s.options) & 1 ? s.value : __privateMethod(this, _p_instances, t_fn).call(this, t);
    }
    resolveValue(e2, i) {
      let r = __privateMethod(this, _p_instances, e_fn).call(this, e2, i);
      return r ? this.values.get(r).value : null;
    }
    resolveWith(e2, i, r = []) {
      let t = __privateMethod(this, _p_instances, e_fn).call(this, e2, i);
      if (!t) return null;
      let s = {};
      for (let u2 of r) {
        let f2 = `${t}${u2}`, o2 = this.values.get(f2);
        o2 && (o2.options & 1 ? s[u2] = o2.value : s[u2] = __privateMethod(this, _p_instances, t_fn).call(this, f2));
      }
      let l3 = this.values.get(t);
      return l3.options & 1 ? [l3.value, s] : [__privateMethod(this, _p_instances, t_fn).call(this, t), s];
    }
    namespace(e2) {
      let i = /* @__PURE__ */ new Map(), r = `${e2}-`;
      for (let [t, s] of this.values) t === e2 ? i.set(null, s.value) : t.startsWith(`${r}-`) ? i.set(t.slice(e2.length), s.value) : t.startsWith(r) && i.set(t.slice(r.length), s.value);
      return i;
    }
    addKeyframes(e2) {
      this.keyframes.add(e2);
    }
    getKeyframes() {
      return Array.from(this.keyframes);
    }
  }, _p_instances = new WeakSet(), i_fn = function(e2) {
    return this.prefix ? `--${e2.slice(3 + this.prefix.length)}` : e2;
  }, e_fn = function(e2, i) {
    for (let r of i) {
      let t = e2 !== null ? `${r}-${e2}` : r;
      if (!this.values.has(t)) if (e2 !== null && e2.includes(".")) {
        if (t = `${r}-${e2.replaceAll(".", "_")}`, !this.values.has(t)) continue;
      } else continue;
      if (!g2(t, r)) return t;
    }
    return null;
  }, t_fn = function(e2) {
    let i = this.values.get(e2);
    if (!i) return null;
    let r = null;
    return i.options & 2 && (r = i.value), `var(${h2(this.prefixKey(e2))}${r ? `, ${r}` : ""})`;
  }, _a);

  // node_modules/tailwindcss/dist/lib.mjs
  function at(e2) {
    let i = [0];
    for (let n = 0; n < e2.length; n++) e2.charCodeAt(n) === 10 && i.push(n + 1);
    function r(n) {
      let s = 0, l3 = i.length;
      for (; l3 > 0; ) {
        let f2 = (l3 | 0) >> 1, c2 = s + f2;
        i[c2] <= n ? (s = c2 + 1, l3 = l3 - f2 - 1) : l3 = f2;
      }
      s -= 1;
      let p2 = n - i[s];
      return { line: s + 1, column: p2 };
    }
    function t({ line: n, column: s }) {
      n -= 1, n = Math.min(Math.max(n, 0), i.length - 1);
      let l3 = i[n], p2 = i[n + 1] ?? l3;
      return Math.min(Math.max(l3 + s, 0), p2);
    }
    return { find: r, findOffset: t };
  }
  var Ge = 92;
  var st = 47;
  var ut = 42;
  var gr = 34;
  var hr = 39;
  var ln = 58;
  var ft = 59;
  var de2 = 10;
  var ct = 13;
  var qe = 32;
  var He = 9;
  var vr = 123;
  var Pt = 125;
  var It = 40;
  var wr = 41;
  var on = 91;
  var an = 93;
  var kr = 45;
  var Ot = 64;
  var sn = 33;
  var me = class e extends Error {
    constructor(i, r) {
      if (r) {
        let t = r[0], n = at(t.code).find(r[1]);
        i = `${t.file}:${n.line}:${n.column + 1}: ${i}`;
      }
      super(i);
      __publicField(this, "loc");
      this.name = "CssSyntaxError", this.loc = r, Error.captureStackTrace && Error.captureStackTrace(this, e);
    }
  };
  function Se(e2, i) {
    let r = i?.from ? { file: i.from, code: e2 } : null;
    e2[0] === "\uFEFF" && (e2 = " " + e2.slice(1));
    let t = [], n = [], s = [], l3 = null, p2 = null, f2 = "", c2 = "", m = 0, d2;
    for (let u2 = 0; u2 < e2.length; u2++) {
      let h3 = e2.charCodeAt(u2);
      if (!(h3 === ct && (d2 = e2.charCodeAt(u2 + 1), d2 === de2))) if (h3 === Ge) f2 === "" && (m = u2), f2 += e2.slice(u2, u2 + 2), u2 += 1;
      else if (h3 === st && e2.charCodeAt(u2 + 1) === ut) {
        let v2 = u2;
        for (let y2 = u2 + 2; y2 < e2.length; y2++) if (d2 = e2.charCodeAt(y2), d2 === Ge) y2 += 1;
        else if (d2 === ut && e2.charCodeAt(y2 + 1) === st) {
          u2 = y2 + 1;
          break;
        }
        let k = e2.slice(v2, u2 + 1);
        if (k.charCodeAt(2) === sn) {
          let y2 = pt(k.slice(2, -2));
          n.push(y2), r && (y2.src = [r, v2, u2 + 1], y2.dst = [r, v2, u2 + 1]);
        }
      } else if (h3 === hr || h3 === gr) {
        let v2 = br(e2, u2, h3, r);
        f2 += e2.slice(u2, v2 + 1), u2 = v2;
      } else {
        if ((h3 === qe || h3 === de2 || h3 === He) && (d2 = e2.charCodeAt(u2 + 1)) && (d2 === qe || d2 === de2 || d2 === He || d2 === ct && (d2 = e2.charCodeAt(u2 + 2)) && d2 == de2)) continue;
        if (h3 === de2) {
          if (f2.length === 0) continue;
          d2 = f2.charCodeAt(f2.length - 1), d2 !== qe && d2 !== de2 && d2 !== He && (f2 += " ");
        } else if (h3 === kr && e2.charCodeAt(u2 + 1) === kr && f2.length === 0) {
          let v2 = "", k = u2, y2 = -1;
          for (let A2 = u2 + 2; A2 < e2.length; A2++) if (d2 = e2.charCodeAt(A2), d2 === Ge) A2 += 1;
          else if (d2 === hr || d2 === gr) A2 = br(e2, A2, d2, r);
          else if (d2 === st && e2.charCodeAt(A2 + 1) === ut) {
            for (let b2 = A2 + 2; b2 < e2.length; b2++) if (d2 = e2.charCodeAt(b2), d2 === Ge) b2 += 1;
            else if (d2 === ut && e2.charCodeAt(b2 + 1) === st) {
              A2 = b2 + 1;
              break;
            }
          } else if (y2 === -1 && d2 === ln) y2 = f2.length + A2 - k;
          else if (d2 === ft && v2.length === 0) {
            f2 += e2.slice(k, A2), u2 = A2;
            break;
          } else if (d2 === It) v2 += ")";
          else if (d2 === on) v2 += "]";
          else if (d2 === vr) v2 += "}";
          else if ((d2 === Pt || e2.length - 1 === A2) && v2.length === 0) {
            u2 = A2 - 1, f2 += e2.slice(k, A2);
            break;
          } else (d2 === wr || d2 === an || d2 === Pt) && v2.length > 0 && e2[A2] === v2[v2.length - 1] && (v2 = v2.slice(0, -1));
          let N2 = _t(f2, y2);
          if (!N2) throw new me("Invalid custom property, expected a value", r ? [r, k, u2] : null);
          r && (N2.src = [r, k, u2], N2.dst = [r, k, u2]), l3 ? l3.nodes.push(N2) : t.push(N2), f2 = "";
        } else if (h3 === ft && f2.charCodeAt(0) === Ot) p2 = Ze(f2), r && (p2.src = [r, m, u2], p2.dst = [r, m, u2]), l3 ? l3.nodes.push(p2) : t.push(p2), f2 = "", p2 = null;
        else if (h3 === ft && c2[c2.length - 1] !== ")") {
          let v2 = _t(f2);
          if (!v2) {
            if (f2.length === 0) continue;
            throw new me(`Invalid declaration: \`${f2.trim()}\``, r ? [r, m, u2] : null);
          }
          r && (v2.src = [r, m, u2], v2.dst = [r, m, u2]), l3 ? l3.nodes.push(v2) : t.push(v2), f2 = "";
        } else if (h3 === vr && c2[c2.length - 1] !== ")") c2 += "}", p2 = J2(f2.trim()), r && (p2.src = [r, m, u2], p2.dst = [r, m, u2]), l3 && l3.nodes.push(p2), s.push(l3), l3 = p2, f2 = "", p2 = null;
        else if (h3 === Pt && c2[c2.length - 1] !== ")") {
          if (c2 === "") throw new me("Missing opening {", r ? [r, u2, u2] : null);
          if (c2 = c2.slice(0, -1), f2.length > 0) if (f2.charCodeAt(0) === Ot) p2 = Ze(f2), r && (p2.src = [r, m, u2], p2.dst = [r, m, u2]), l3 ? l3.nodes.push(p2) : t.push(p2), f2 = "", p2 = null;
          else {
            let k = f2.indexOf(":");
            if (l3) {
              let y2 = _t(f2, k);
              if (!y2) throw new me(`Invalid declaration: \`${f2.trim()}\``, r ? [r, m, u2] : null);
              r && (y2.src = [r, m, u2], y2.dst = [r, m, u2]), l3.nodes.push(y2);
            }
          }
          let v2 = s.pop() ?? null;
          v2 === null && l3 && t.push(l3), l3 = v2, f2 = "", p2 = null;
        } else if (h3 === It) c2 += ")", f2 += "(";
        else if (h3 === wr) {
          if (c2[c2.length - 1] !== ")") throw new me("Missing opening (", r ? [r, u2, u2] : null);
          c2 = c2.slice(0, -1), f2 += ")";
        } else {
          if (f2.length === 0 && (h3 === qe || h3 === de2 || h3 === He)) continue;
          f2 === "" && (m = u2), f2 += String.fromCharCode(h3);
        }
      }
    }
    if (f2.charCodeAt(0) === Ot) {
      let u2 = Ze(f2);
      r && (u2.src = [r, m, e2.length], u2.dst = [r, m, e2.length]), t.push(u2);
    }
    if (c2.length > 0 && l3) {
      if (l3.kind === "rule") throw new me(`Missing closing } at ${l3.selector}`, l3.src ? [l3.src[0], l3.src[1], l3.src[1]] : null);
      if (l3.kind === "at-rule") throw new me(`Missing closing } at ${l3.name} ${l3.params}`, l3.src ? [l3.src[0], l3.src[1], l3.src[1]] : null);
    }
    return n.length > 0 ? n.concat(t) : t;
  }
  function Ze(e2, i = []) {
    let r = e2, t = "";
    for (let n = 5; n < e2.length; n++) {
      let s = e2.charCodeAt(n);
      if (s === qe || s === He || s === It) {
        r = e2.slice(0, n), t = e2.slice(n);
        break;
      }
    }
    return B2(r.trim(), t.trim(), i);
  }
  function _t(e2, i = e2.indexOf(":")) {
    if (i === -1) return null;
    let r = e2.indexOf("!important", i + 1);
    return o(e2.slice(0, i).trim(), e2.slice(i + 1, r === -1 ? e2.length : r).trim(), r !== -1);
  }
  function br(e2, i, r, t = null) {
    let n;
    for (let s = i + 1; s < e2.length; s++) if (n = e2.charCodeAt(s), n === Ge) s += 1;
    else {
      if (n === r) return s;
      if (n === ft && (e2.charCodeAt(s + 1) === de2 || e2.charCodeAt(s + 1) === ct && e2.charCodeAt(s + 2) === de2)) throw new me(`Unterminated string: ${e2.slice(i, s + 1) + String.fromCharCode(r)}`, t ? [t, i, s + 1] : null);
      if (n === de2 || n === ct && e2.charCodeAt(s + 1) === de2) throw new me(`Unterminated string: ${e2.slice(i, s) + String.fromCharCode(r)}`, t ? [t, i, s + 1] : null);
    }
    return i;
  }
  var U2 = class extends Map {
    constructor(r) {
      super();
      __publicField(this, "factory");
      this.factory = r;
    }
    get(r) {
      let t = super.get(r);
      return t === void 0 && (t = this.factory(r, this), this.set(r, t)), t;
    }
  };
  function ne2(e2) {
    return { kind: "word", value: e2 };
  }
  function un(e2, i) {
    return { kind: "function", value: e2, nodes: i };
  }
  function fn(e2) {
    return { kind: "separator", value: e2 };
  }
  function F2(e2) {
    let i = "";
    for (let r of e2) switch (r.kind) {
      case "word":
      case "separator": {
        i += r.value;
        break;
      }
      case "function":
        i += r.value + "(" + F2(r.nodes) + ")";
    }
    return i;
  }
  var yr = 92;
  var cn = 41;
  var xr = 58;
  var Ar = 44;
  var pn = 34;
  var Cr = 61;
  var Vr = 62;
  var Sr = 60;
  var $r = 10;
  var dn = 40;
  var mn = 39;
  var gn = 47;
  var Tr = 32;
  var Nr = 9;
  function M2(e2) {
    e2 = e2.replaceAll(`\r
`, `
`);
    let i = [], r = [], t = null, n = "", s;
    for (let l3 = 0; l3 < e2.length; l3++) {
      let p2 = e2.charCodeAt(l3);
      switch (p2) {
        case yr: {
          n += e2[l3] + e2[l3 + 1], l3++;
          break;
        }
        case gn: {
          if (n.length > 0) {
            let c2 = ne2(n);
            t ? t.nodes.push(c2) : i.push(c2), n = "";
          }
          let f2 = ne2(e2[l3]);
          t ? t.nodes.push(f2) : i.push(f2);
          break;
        }
        case xr:
        case Ar:
        case Cr:
        case Vr:
        case Sr:
        case $r:
        case Tr:
        case Nr: {
          if (n.length > 0) {
            let d2 = ne2(n);
            t ? t.nodes.push(d2) : i.push(d2), n = "";
          }
          let f2 = l3, c2 = l3 + 1;
          for (; c2 < e2.length && (s = e2.charCodeAt(c2), !(s !== xr && s !== Ar && s !== Cr && s !== Vr && s !== Sr && s !== $r && s !== Tr && s !== Nr)); c2++) ;
          l3 = c2 - 1;
          let m = fn(e2.slice(f2, c2));
          t ? t.nodes.push(m) : i.push(m);
          break;
        }
        case mn:
        case pn: {
          let f2 = l3;
          for (let c2 = l3 + 1; c2 < e2.length; c2++) if (s = e2.charCodeAt(c2), s === yr) c2 += 1;
          else if (s === p2) {
            l3 = c2;
            break;
          }
          n += e2.slice(f2, l3 + 1);
          break;
        }
        case dn: {
          let f2 = un(n, []);
          n = "", t ? t.nodes.push(f2) : i.push(f2), r.push(f2), t = f2;
          break;
        }
        case cn: {
          let f2 = r.pop();
          if (n.length > 0) {
            let c2 = ne2(n);
            f2?.nodes.push(c2), n = "";
          }
          r.length > 0 ? t = r[r.length - 1] : t = null;
          break;
        }
        default:
          n += String.fromCharCode(p2);
      }
    }
    return n.length > 0 && i.push(ne2(n)), i;
  }
  var Kt = ((l3) => (l3[l3.Continue = 0] = "Continue", l3[l3.Skip = 1] = "Skip", l3[l3.Stop = 2] = "Stop", l3[l3.Replace = 3] = "Replace", l3[l3.ReplaceSkip = 4] = "ReplaceSkip", l3[l3.ReplaceStop = 5] = "ReplaceStop", l3))(Kt || {});
  var V2 = { Continue: { kind: 0 }, Skip: { kind: 1 }, Stop: { kind: 2 }, Replace: (e2) => ({ kind: 3, nodes: Array.isArray(e2) ? e2 : [e2] }), ReplaceSkip: (e2) => ({ kind: 4, nodes: Array.isArray(e2) ? e2 : [e2] }), ReplaceStop: (e2) => ({ kind: 5, nodes: Array.isArray(e2) ? e2 : [e2] }) };
  function _2(e2, i) {
    typeof i == "function" ? Er(e2, i) : Er(e2, i.enter, i.exit);
  }
  function Er(e2, i = () => V2.Continue, r = () => V2.Continue) {
    let t = { value: [e2, 0, null], prev: null }, n = { parent: null, depth: 0, index: 0, siblings: e2, path() {
      let s = [], l3 = t;
      for (; l3; ) {
        let p2 = l3.value[2];
        p2 && s.push(p2), l3 = l3.prev;
      }
      return s.reverse(), s;
    } };
    for (; t !== null; ) {
      let s = t.value, l3 = s[0], p2 = s[1], f2 = s[2];
      if (p2 >= l3.length) {
        t = t.prev, n.depth -= 1;
        continue;
      }
      if (n.parent = f2, n.siblings = l3, p2 >= 0) {
        n.index = p2;
        let u2 = l3[p2], h3 = i(u2, n) ?? V2.Continue;
        switch (h3.kind) {
          case 0: {
            u2.nodes && u2.nodes.length > 0 && (n.depth += 1, t = { value: [u2.nodes, 0, u2], prev: t }), s[1] = ~p2;
            continue;
          }
          case 2:
            return;
          case 1: {
            s[1] = ~p2;
            continue;
          }
          case 3: {
            l3.splice(p2, 1, ...h3.nodes);
            continue;
          }
          case 5: {
            l3.splice(p2, 1, ...h3.nodes);
            return;
          }
          case 4: {
            l3.splice(p2, 1, ...h3.nodes), s[1] += h3.nodes.length;
            continue;
          }
          default:
            throw new Error(`Invalid \`WalkAction.${Kt[h3.kind] ?? `Unknown(${h3.kind})`}\` in enter.`);
        }
      }
      let c2 = ~p2;
      n.index = c2;
      let m = l3[c2], d2 = r(m, n) ?? V2.Continue;
      switch (d2.kind) {
        case 0:
          s[1] = c2 + 1;
          continue;
        case 2:
          return;
        case 3: {
          l3.splice(c2, 1, ...d2.nodes), s[1] = c2 + d2.nodes.length;
          continue;
        }
        case 5: {
          l3.splice(c2, 1, ...d2.nodes);
          return;
        }
        case 4: {
          l3.splice(c2, 1, ...d2.nodes), s[1] = c2 + d2.nodes.length;
          continue;
        }
        default:
          throw new Error(`Invalid \`WalkAction.${Kt[d2.kind] ?? `Unknown(${d2.kind})`}\` in exit.`);
      }
    }
  }
  function dt(e2) {
    let i = [];
    return _2(M2(e2), (r) => {
      if (!(r.kind !== "function" || r.value !== "var")) return _2(r.nodes, (t) => {
        t.kind !== "word" || t.value[0] !== "-" || t.value[1] !== "-" || i.push(t.value);
      }), V2.Skip;
    }), i;
  }
  var hn = 64;
  function H2(e2, i = []) {
    return { kind: "rule", selector: e2, nodes: i };
  }
  function B2(e2, i = "", r = []) {
    return { kind: "at-rule", name: e2, params: i, nodes: r };
  }
  function J2(e2, i = []) {
    return e2.charCodeAt(0) === hn ? Ze(e2, i) : H2(e2, i);
  }
  function o(e2, i, r = false) {
    return { kind: "declaration", property: e2, value: i, important: r };
  }
  function pt(e2) {
    return { kind: "comment", value: e2 };
  }
  function he(e2, i) {
    return { kind: "context", context: e2, nodes: i };
  }
  function Y2(e2) {
    return { kind: "at-root", nodes: e2 };
  }
  function re2(e2) {
    switch (e2.kind) {
      case "rule":
        return { kind: e2.kind, selector: e2.selector, nodes: e2.nodes.map(re2), src: e2.src, dst: e2.dst };
      case "at-rule":
        return { kind: e2.kind, name: e2.name, params: e2.params, nodes: e2.nodes.map(re2), src: e2.src, dst: e2.dst };
      case "at-root":
        return { kind: e2.kind, nodes: e2.nodes.map(re2), src: e2.src, dst: e2.dst };
      case "context":
        return { kind: e2.kind, context: { ...e2.context }, nodes: e2.nodes.map(re2), src: e2.src, dst: e2.dst };
      case "declaration":
        return { kind: e2.kind, property: e2.property, value: e2.value, important: e2.important, src: e2.src, dst: e2.dst };
      case "comment":
        return { kind: e2.kind, value: e2.value, src: e2.src, dst: e2.dst };
      default:
        throw new Error(`Unknown node kind: ${e2.kind}`);
    }
  }
  function Qe(e2) {
    return { depth: e2.depth, index: e2.index, siblings: e2.siblings, get context() {
      let i = {};
      for (let r of e2.path()) r.kind === "context" && Object.assign(i, r.context);
      return Object.defineProperty(this, "context", { value: i }), i;
    }, get parent() {
      let i = this.path().pop() ?? null;
      return Object.defineProperty(this, "parent", { value: i }), i;
    }, path() {
      return e2.path().filter((i) => i.kind !== "context");
    } };
  }
  function $e(e2, i, r = 3) {
    let t = [], n = /* @__PURE__ */ new Set(), s = new U2(() => /* @__PURE__ */ new Set()), l3 = new U2(() => /* @__PURE__ */ new Set()), p2 = /* @__PURE__ */ new Set(), f2 = /* @__PURE__ */ new Set(), c2 = [], m = [], d2 = new U2(() => /* @__PURE__ */ new Set());
    function u2(v2, k, y2 = {}, N2 = 0) {
      if (v2.kind === "declaration") {
        if (v2.property === "--tw-sort" || v2.value === void 0 || v2.value === null) return;
        if (y2.theme && v2.property[0] === "-" && v2.property[1] === "-") {
          if (v2.value === "initial") {
            v2.value = void 0;
            return;
          }
          y2.keyframes || s.get(k).add(v2);
        }
        if (v2.value.includes("var(")) if (y2.theme && v2.property[0] === "-" && v2.property[1] === "-") for (let A2 of dt(v2.value)) d2.get(A2).add(v2.property);
        else i.trackUsedVariables(v2.value);
        if (v2.property === "animation") for (let A2 of Rr(v2.value)) f2.add(A2);
        r & 2 && v2.value.includes("color-mix(") && !y2.supportsColorMix && !y2.keyframes && l3.get(k).add(v2), k.push(v2);
      } else if (v2.kind === "rule") {
        let A2 = [];
        for (let O2 of v2.nodes) u2(O2, A2, y2, N2 + 1);
        let b2 = {}, D2 = /* @__PURE__ */ new Set();
        for (let O2 of A2) {
          if (O2.kind !== "declaration") continue;
          let P2 = `${O2.property}:${O2.value}:${O2.important}`;
          b2[P2] ?? (b2[P2] = []), b2[P2].push(O2);
        }
        for (let O2 in b2) for (let P2 = 0; P2 < b2[O2].length - 1; ++P2) D2.add(b2[O2][P2]);
        if (D2.size > 0 && (A2 = A2.filter((O2) => !D2.has(O2))), A2.length === 0) return;
        v2.selector === "&" ? k.push(...A2) : k.push({ ...v2, nodes: A2 });
      } else if (v2.kind === "at-rule" && v2.name === "@property" && N2 === 0) {
        if (n.has(v2.params)) return;
        if (r & 1) {
          let b2 = v2.params, D2 = null, O2 = false;
          for (let z2 of v2.nodes) z2.kind === "declaration" && (z2.property === "initial-value" ? D2 = z2.value : z2.property === "inherits" && (O2 = z2.value === "true"));
          let P2 = o(b2, D2 ?? "initial");
          P2.src = v2.src, O2 ? c2.push(P2) : m.push(P2);
        }
        n.add(v2.params);
        let A2 = { ...v2, nodes: [] };
        for (let b2 of v2.nodes) u2(b2, A2.nodes, y2, N2 + 1);
        k.push(A2);
      } else if (v2.kind === "at-rule") {
        v2.name === "@keyframes" ? y2 = { ...y2, keyframes: true } : v2.name === "@supports" && v2.params.includes("color-mix(") && (y2 = { ...y2, supportsColorMix: true });
        let A2 = { ...v2, nodes: [] };
        for (let b2 of v2.nodes) u2(b2, A2.nodes, y2, N2 + 1);
        v2.name === "@keyframes" && y2.theme && p2.add(A2), (A2.nodes.length > 0 || A2.name === "@layer" || A2.name === "@charset" || A2.name === "@custom-media" || A2.name === "@namespace" || A2.name === "@import" || A2.name === "@apply") && k.push(A2);
      } else if (v2.kind === "at-root") for (let A2 of v2.nodes) {
        let b2 = [];
        u2(A2, b2, y2, 0);
        for (let D2 of b2) t.push(D2);
      }
      else if (v2.kind === "context") {
        if (v2.context.reference) return;
        for (let A2 of v2.nodes) u2(A2, k, { ...y2, ...v2.context }, N2);
      } else v2.kind === "comment" && k.push(v2);
    }
    let h3 = [];
    for (let v2 of e2) u2(v2, h3, {}, 0);
    e: for (let [v2, k] of s) for (let y2 of k) {
      if (Pr(y2.property, i.theme, d2)) {
        if (y2.property.startsWith(i.theme.prefixKey("--animate-"))) for (let b2 of Rr(y2.value)) f2.add(b2);
        continue;
      }
      let A2 = v2.indexOf(y2);
      if (v2.splice(A2, 1), v2.length === 0) {
        let b2 = vn(h3, (D2) => D2.kind === "rule" && D2.nodes === v2);
        if (!b2 || b2.length === 0) continue e;
        b2.unshift({ kind: "at-root", nodes: h3 });
        do {
          let D2 = b2.pop();
          if (!D2) break;
          let O2 = b2[b2.length - 1];
          if (!O2 || O2.kind !== "at-root" && O2.kind !== "at-rule") break;
          let P2 = O2.nodes.indexOf(D2);
          if (P2 === -1) break;
          O2.nodes.splice(P2, 1);
        } while (true);
        continue e;
      }
    }
    for (let v2 of p2) if (!f2.has(v2.params)) {
      let k = t.indexOf(v2);
      t.splice(k, 1);
    }
    if (h3 = h3.concat(t), r & 2) for (let [v2, k] of l3) for (let y2 of k) {
      let N2 = v2.indexOf(y2);
      if (N2 === -1 || y2.value == null) continue;
      let A2 = M2(y2.value), b2 = false;
      if (_2(A2, (P2) => {
        if (P2.kind !== "function" || P2.value !== "color-mix") return;
        let z2 = false, E2 = false;
        if (_2(P2.nodes, (j2) => {
          if (j2.kind == "word" && j2.value.toLowerCase() === "currentcolor") {
            E2 = true, b2 = true;
            return;
          }
          let q2 = j2, G2 = null, X2 = /* @__PURE__ */ new Set();
          do {
            if (q2.kind !== "function" || q2.value !== "var") return;
            let ie2 = q2.nodes[0];
            if (!ie2 || ie2.kind !== "word") return;
            let a2 = ie2.value;
            if (X2.has(a2)) {
              z2 = true;
              return;
            }
            if (X2.add(a2), b2 = true, G2 = i.theme.resolveValue(null, [ie2.value]), !G2) {
              z2 = true;
              return;
            }
            if (G2.toLowerCase() === "currentcolor") {
              E2 = true;
              return;
            }
            G2.startsWith("var(") ? q2 = M2(G2)[0] : q2 = null;
          } while (q2);
          return V2.Replace({ kind: "word", value: G2 });
        }), z2 || E2) {
          let j2 = P2.nodes.findIndex((G2) => G2.kind === "separator" && G2.value.trim().includes(","));
          if (j2 === -1) return;
          let q2 = P2.nodes.length > j2 ? P2.nodes[j2 + 1] : null;
          return q2 ? V2.Replace(q2) : void 0;
        } else if (b2) {
          let j2 = P2.nodes[2];
          j2.kind === "word" && (j2.value === "oklab" || j2.value === "oklch" || j2.value === "lab" || j2.value === "lch") && (j2.value = "srgb");
        }
      }), !b2) continue;
      let D2 = { ...y2, value: F2(A2) }, O2 = J2("@supports (color: color-mix(in lab, red, red))", [y2]);
      O2.src = y2.src, v2.splice(N2, 1, D2, O2);
    }
    if (r & 1) {
      let v2 = [];
      if (c2.length > 0) {
        let k = J2(":root, :host", c2);
        k.src = c2[0].src, v2.push(k);
      }
      if (m.length > 0) {
        let k = J2("*, ::before, ::after, ::backdrop", m);
        k.src = m[0].src, v2.push(k);
      }
      if (v2.length > 0) {
        let k = h3.findIndex((A2) => !(A2.kind === "comment" || A2.kind === "at-rule" && (A2.name === "@charset" || A2.name === "@import"))), y2 = B2("@layer", "properties", []);
        y2.src = v2[0].src, h3.splice(k < 0 ? h3.length : k, 0, y2);
        let N2 = J2("@layer properties", [B2("@supports", "((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b))))", v2)]);
        N2.src = v2[0].src, N2.nodes[0].src = v2[0].src, h3.push(N2);
      }
    }
    return h3;
  }
  function ae(e2, i) {
    let r = 0, t = { file: null, code: "" };
    function n(l3, p2 = 0) {
      let f2 = "", c2 = "  ".repeat(p2);
      if (l3.kind === "declaration") {
        if (f2 += `${c2}${l3.property}: ${l3.value}${l3.important ? " !important" : ""};
`, i) {
          r += c2.length;
          let m = r;
          r += l3.property.length, r += 2, r += l3.value?.length ?? 0, l3.important && (r += 11);
          let d2 = r;
          r += 2, l3.dst = [t, m, d2];
        }
      } else if (l3.kind === "rule") {
        if (f2 += `${c2}${l3.selector} {
`, i) {
          r += c2.length;
          let m = r;
          r += l3.selector.length, r += 1;
          let d2 = r;
          l3.dst = [t, m, d2], r += 2;
        }
        for (let m of l3.nodes) f2 += n(m, p2 + 1);
        f2 += `${c2}}
`, i && (r += c2.length, r += 2);
      } else if (l3.kind === "at-rule") {
        if (l3.nodes.length === 0) {
          let m = `${c2}${l3.name} ${l3.params};
`;
          if (i) {
            r += c2.length;
            let d2 = r;
            r += l3.name.length, r += 1, r += l3.params.length;
            let u2 = r;
            r += 2, l3.dst = [t, d2, u2];
          }
          return m;
        }
        if (f2 += `${c2}${l3.name}${l3.params ? ` ${l3.params} ` : " "}{
`, i) {
          r += c2.length;
          let m = r;
          r += l3.name.length, l3.params && (r += 1, r += l3.params.length), r += 1;
          let d2 = r;
          l3.dst = [t, m, d2], r += 2;
        }
        for (let m of l3.nodes) f2 += n(m, p2 + 1);
        f2 += `${c2}}
`, i && (r += c2.length, r += 2);
      } else if (l3.kind === "comment") {
        if (f2 += `${c2}/*${l3.value}*/
`, i) {
          r += c2.length;
          let m = r;
          r += 2 + l3.value.length + 2;
          let d2 = r;
          l3.dst = [t, m, d2], r += 1;
        }
      } else if (l3.kind === "context" || l3.kind === "at-root") return "";
      return f2;
    }
    let s = "";
    for (let l3 of e2) s += n(l3, 0);
    return t.code = s, s;
  }
  function vn(e2, i) {
    let r = [];
    return _2(e2, (t, n) => {
      if (i(t)) return r = n.path(), r.push(t), V2.Stop;
    }), r;
  }
  function Pr(e2, i, r, t = /* @__PURE__ */ new Set()) {
    if (t.has(e2) || (t.add(e2), i.getOptions(e2) & 24)) return true;
    {
      let s = r.get(e2) ?? [];
      for (let l3 of s) if (Pr(l3, i, r, t)) return true;
    }
    return false;
  }
  function Rr(e2) {
    return e2.split(/[\s,]+/);
  }
  function ye(e2) {
    if (e2.indexOf("(") === -1) return De(e2);
    let i = M2(e2);
    return zt(i), e2 = F2(i), e2 = ie(e2), e2;
  }
  function De(e2, i = false) {
    let r = "";
    for (let t = 0; t < e2.length; t++) {
      let n = e2[t];
      n === "\\" && e2[t + 1] === "_" ? (r += "_", t += 1) : n === "_" && !i ? r += " " : r += n;
    }
    return r;
  }
  function zt(e2) {
    for (let i of e2) switch (i.kind) {
      case "function": {
        if (i.value === "url" || i.value.endsWith("_url")) {
          i.value = De(i.value);
          break;
        }
        if (i.value === "var" || i.value.endsWith("_var") || i.value === "theme" || i.value.endsWith("_theme")) {
          i.value = De(i.value);
          for (let r = 0; r < i.nodes.length; r++) {
            if (r == 0 && i.nodes[r].kind === "word") {
              i.nodes[r].value = De(i.nodes[r].value, true);
              continue;
            }
            zt([i.nodes[r]]);
          }
          break;
        }
        i.value = De(i.value), zt(i.nodes);
        break;
      }
      case "separator":
      case "word": {
        i.value = De(i.value);
        break;
      }
      default:
        wn(i);
    }
  }
  function wn(e2) {
    throw new Error(`Unexpected value: ${e2}`);
  }
  var Lt = new Uint8Array(256);
  function ke(e2) {
    let i = 0, r = e2.length;
    for (let t = 0; t < r; t++) {
      let n = e2.charCodeAt(t);
      switch (n) {
        case 92:
          t += 1;
          break;
        case 39:
        case 34:
          for (; ++t < r; ) {
            let s = e2.charCodeAt(t);
            if (s === 92) {
              t += 1;
              continue;
            }
            if (s === n) break;
          }
          break;
        case 40:
          Lt[i] = 41, i++;
          break;
        case 91:
          Lt[i] = 93, i++;
          break;
        case 123:
          break;
        case 93:
        case 125:
        case 41:
          if (i === 0) return false;
          i > 0 && n === Lt[i - 1] && i--;
          break;
        case 59:
          if (i === 0) return false;
          break;
      }
    }
    return true;
  }
  var kn = 58;
  var Or = 45;
  var _r = 97;
  var Ir = 122;
  var Ft = /^[a-zA-Z0-9_.%-]+$/;
  function Ue(e2) {
    switch (e2.kind) {
      case "arbitrary":
        return { kind: e2.kind, property: e2.property, value: e2.value, modifier: e2.modifier ? { kind: e2.modifier.kind, value: e2.modifier.value } : null, variants: e2.variants.map(Ke), important: e2.important, raw: e2.raw };
      case "static":
        return { kind: e2.kind, root: e2.root, variants: e2.variants.map(Ke), important: e2.important, raw: e2.raw };
      case "functional":
        return { kind: e2.kind, root: e2.root, value: e2.value ? e2.value.kind === "arbitrary" ? { kind: e2.value.kind, dataType: e2.value.dataType, value: e2.value.value } : { kind: e2.value.kind, value: e2.value.value, fraction: e2.value.fraction } : null, modifier: e2.modifier ? { kind: e2.modifier.kind, value: e2.modifier.value } : null, variants: e2.variants.map(Ke), important: e2.important, raw: e2.raw };
      default:
        throw new Error("Unknown candidate kind");
    }
  }
  function Ke(e2) {
    switch (e2.kind) {
      case "arbitrary":
        return { kind: e2.kind, selector: e2.selector, relative: e2.relative };
      case "static":
        return { kind: e2.kind, root: e2.root };
      case "functional":
        return { kind: e2.kind, root: e2.root, value: e2.value ? { kind: e2.value.kind, value: e2.value.value } : null, modifier: e2.modifier ? { kind: e2.modifier.kind, value: e2.modifier.value } : null };
      case "compound":
        return { kind: e2.kind, root: e2.root, variant: Ke(e2.variant), modifier: e2.modifier ? { kind: e2.modifier.kind, value: e2.modifier.value } : null };
      default:
        throw new Error("Unknown variant kind");
    }
  }
  function* Dr(e2, i) {
    let r = d(e2, ":");
    if (i.theme.prefix) {
      if (r.length === 1 || r[0] !== i.theme.prefix) return null;
      r.shift();
    }
    let t = r.pop(), n = [];
    for (let d2 = r.length - 1; d2 >= 0; --d2) {
      let u2 = i.parseVariant(r[d2]);
      if (u2 === null) return;
      n.push(u2);
    }
    let s = false;
    t[t.length - 1] === "!" ? (s = true, t = t.slice(0, -1)) : t[0] === "!" && (s = true, t = t.slice(1)), i.utilities.has(t, "static") && !t.includes("[") && (yield { kind: "static", root: t, variants: n, important: s, raw: e2 });
    let [l3, p2 = null, f2] = d(t, "/");
    if (f2) return;
    let c2 = p2 === null ? null : jt(p2);
    if (p2 !== null && c2 === null) return;
    if (l3[0] === "[") {
      if (l3[l3.length - 1] !== "]") return;
      let d2 = l3.charCodeAt(1);
      if (d2 !== Or && !(d2 >= _r && d2 <= Ir)) return;
      l3 = l3.slice(1, -1);
      let u2 = l3.indexOf(":");
      if (u2 === -1 || u2 === 0 || u2 === l3.length - 1) return;
      let h3 = l3.slice(0, u2), v2 = ye(l3.slice(u2 + 1));
      if (!ke(v2)) return;
      yield { kind: "arbitrary", property: h3, value: v2, modifier: c2, variants: n, important: s, raw: e2 };
      return;
    }
    let m;
    if (l3[l3.length - 1] === "]") {
      let d2 = l3.indexOf("-[");
      if (d2 === -1) return;
      let u2 = l3.slice(0, d2);
      if (!i.utilities.has(u2, "functional")) return;
      let h3 = l3.slice(d2 + 1);
      m = [[u2, h3]];
    } else if (l3[l3.length - 1] === ")") {
      let d2 = l3.indexOf("-(");
      if (d2 === -1) return;
      let u2 = l3.slice(0, d2);
      if (!i.utilities.has(u2, "functional")) return;
      let h3 = l3.slice(d2 + 2, -1), v2 = d(h3, ":"), k = null;
      if (v2.length === 2 && (k = v2[0], h3 = v2[1]), h3[0] !== "-" || h3[1] !== "-" || !ke(h3)) return;
      m = [[u2, k === null ? `[var(${h3})]` : `[${k}:var(${h3})]`]];
    } else m = Ur(l3, (d2) => i.utilities.has(d2, "functional"));
    for (let [d2, u2] of m) {
      let h3 = { kind: "functional", root: d2, modifier: c2, value: null, variants: n, important: s, raw: e2 };
      if (u2 === null) {
        yield h3;
        continue;
      }
      {
        let v2 = u2.indexOf("[");
        if (v2 !== -1) {
          if (u2[u2.length - 1] !== "]") return;
          let y2 = ye(u2.slice(v2 + 1, -1));
          if (!ke(y2)) continue;
          let N2 = null;
          for (let A2 = 0; A2 < y2.length; A2++) {
            let b2 = y2.charCodeAt(A2);
            if (b2 === kn) {
              N2 = y2.slice(0, A2), y2 = y2.slice(A2 + 1);
              break;
            }
            if (!(b2 === Or || b2 >= _r && b2 <= Ir)) break;
          }
          if (y2.length === 0 || y2.trim().length === 0 || N2 === "") continue;
          h3.value = { kind: "arbitrary", dataType: N2 || null, value: y2 };
        } else {
          let y2 = p2 === null || h3.modifier?.kind === "arbitrary" ? null : `${u2}/${p2}`;
          if (!Ft.test(u2)) continue;
          h3.value = { kind: "named", value: u2, fraction: y2 };
        }
      }
      yield h3;
    }
  }
  function jt(e2) {
    if (e2[0] === "[" && e2[e2.length - 1] === "]") {
      let i = ye(e2.slice(1, -1));
      return !ke(i) || i.length === 0 || i.trim().length === 0 ? null : { kind: "arbitrary", value: i };
    }
    return e2[0] === "(" && e2[e2.length - 1] === ")" ? (e2 = e2.slice(1, -1), e2[0] !== "-" || e2[1] !== "-" || !ke(e2) ? null : (e2 = `var(${e2})`, { kind: "arbitrary", value: ye(e2) })) : Ft.test(e2) ? { kind: "named", value: e2 } : null;
  }
  function Kr(e2, i) {
    if (e2[0] === "[" && e2[e2.length - 1] === "]") {
      if (e2[1] === "@" && e2.includes("&")) return null;
      let r = ye(e2.slice(1, -1));
      if (!ke(r) || r.length === 0 || r.trim().length === 0) return null;
      let t = r[0] === ">" || r[0] === "+" || r[0] === "~";
      return !t && r[0] !== "@" && !r.includes("&") && (r = `&:is(${r})`), { kind: "arbitrary", selector: r, relative: t };
    }
    {
      let [r, t = null, n] = d(e2, "/");
      if (n) return null;
      let s = Ur(r, (l3) => i.variants.has(l3));
      for (let [l3, p2] of s) switch (i.variants.kind(l3)) {
        case "static":
          return p2 !== null || t !== null ? null : { kind: "static", root: l3 };
        case "functional": {
          let f2 = t === null ? null : jt(t);
          if (t !== null && f2 === null) return null;
          if (p2 === null) return { kind: "functional", root: l3, modifier: f2, value: null };
          if (p2[p2.length - 1] === "]") {
            if (p2[0] !== "[") continue;
            let c2 = ye(p2.slice(1, -1));
            return !ke(c2) || c2.length === 0 || c2.trim().length === 0 ? null : { kind: "functional", root: l3, modifier: f2, value: { kind: "arbitrary", value: c2 } };
          }
          if (p2[p2.length - 1] === ")") {
            if (p2[0] !== "(") continue;
            let c2 = ye(p2.slice(1, -1));
            return !ke(c2) || c2.length === 0 || c2.trim().length === 0 || c2[0] !== "-" || c2[1] !== "-" ? null : { kind: "functional", root: l3, modifier: f2, value: { kind: "arbitrary", value: `var(${c2})` } };
          }
          if (!Ft.test(p2)) continue;
          return { kind: "functional", root: l3, modifier: f2, value: { kind: "named", value: p2 } };
        }
        case "compound": {
          if (p2 === null) return null;
          t && (l3 === "not" || l3 === "has" || l3 === "in") && (p2 = `${p2}/${t}`, t = null);
          let f2 = i.parseVariant(p2);
          if (f2 === null || !i.variants.compoundsWith(l3, f2)) return null;
          let c2 = t === null ? null : jt(t);
          return t !== null && c2 === null ? null : { kind: "compound", root: l3, modifier: c2, variant: f2 };
        }
      }
    }
    return null;
  }
  function* Ur(e2, i) {
    i(e2) && (yield [e2, null]);
    let r = e2.lastIndexOf("-");
    for (; r > 0; ) {
      let t = e2.slice(0, r);
      if (i(t)) {
        let n = [t, e2.slice(r + 1)];
        if (n[1] === "" || n[0] === "@" && i("@") && e2[r] === "-") break;
        yield n;
      }
      r = e2.lastIndexOf("-", r - 1);
    }
    e2[0] === "@" && i("@") && (yield ["@", e2.slice(1)]);
  }
  function zr(e2, i) {
    let r = [];
    for (let n of i.variants) r.unshift(mt(n));
    e2.theme.prefix && r.unshift(e2.theme.prefix);
    let t = "";
    if (i.kind === "static" && (t += i.root), i.kind === "functional" && (t += i.root, i.value)) if (i.value.kind === "arbitrary") {
      if (i.value !== null) {
        let n = Wt(i.value.value), s = n ? i.value.value.slice(4, -1) : i.value.value, [l3, p2] = n ? ["(", ")"] : ["[", "]"];
        i.value.dataType ? t += `-${l3}${i.value.dataType}:${xe(s)}${p2}` : t += `-${l3}${xe(s)}${p2}`;
      }
    } else i.value.kind === "named" && (t += `-${i.value.value}`);
    return i.kind === "arbitrary" && (t += `[${i.property}:${xe(i.value)}]`), (i.kind === "arbitrary" || i.kind === "functional") && (t += et(i.modifier)), i.important && (t += "!"), r.push(t), r.join(":");
  }
  function et(e2) {
    if (e2 === null) return "";
    let i = Wt(e2.value), r = i ? e2.value.slice(4, -1) : e2.value, [t, n] = i ? ["(", ")"] : ["[", "]"];
    return e2.kind === "arbitrary" ? `/${t}${xe(r)}${n}` : e2.kind === "named" ? `/${e2.value}` : "";
  }
  function mt(e2) {
    if (e2.kind === "static") return e2.root;
    if (e2.kind === "arbitrary") return `[${xe(xn(e2.selector))}]`;
    let i = "";
    if (e2.kind === "functional") {
      i += e2.root;
      let r = e2.root !== "@";
      if (e2.value) if (e2.value.kind === "arbitrary") {
        let t = Wt(e2.value.value), n = t ? e2.value.value.slice(4, -1) : e2.value.value, [s, l3] = t ? ["(", ")"] : ["[", "]"];
        i += `${r ? "-" : ""}${s}${xe(n)}${l3}`;
      } else e2.value.kind === "named" && (i += `${r ? "-" : ""}${e2.value.value}`);
    }
    return e2.kind === "compound" && (i += e2.root, i += "-", i += mt(e2.variant)), (e2.kind === "functional" || e2.kind === "compound") && (i += et(e2.modifier)), i;
  }
  var bn = new U2((e2) => {
    let i = M2(e2), r = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(["~", ">", "+", "-", "*", "/"]);
    return _2(i, (n, s) => {
      if (n.kind === "word" && t.has(n.value)) {
        let l3 = s.index;
        if (l3 === -1) return;
        let p2 = s.siblings[l3 - 1];
        if (p2?.kind !== "separator" || p2.value !== " ") return;
        let f2 = s.siblings[l3 + 1];
        if (f2?.kind !== "separator" || f2.value !== " ") return;
        let c2 = s.siblings[l3 - 2];
        if (c2 && t.has(c2.value)) return;
        let m = s.siblings[l3 + 2];
        if (m && t.has(m.value)) return;
        r.add(p2), r.add(f2);
      } else if (n.kind === "separator" && n.value.length > 0 && n.value.trim() === "") (s.siblings[0] === n || s.siblings[s.siblings.length - 1] === n) && r.add(n);
      else if (n.kind === "separator" && n.value.trim() === ",") n.value = ",";
      else if (n.kind === "function" && n.value.startsWith("--")) {
        let l3 = s.index;
        if (l3 <= 0) return;
        let p2 = s.siblings[l3 - 1];
        if (p2?.kind === "separator" && p2.value === ",") return;
        let f2 = s.siblings[l3 - 2];
        return f2 && !t.has(f2.value) ? void 0 : V2.ReplaceSkip({ kind: "function", value: "", nodes: [n] });
      }
    }), r.size > 0 && _2(i, (n) => {
      if (r.has(n)) return r.delete(n), V2.ReplaceSkip([]);
    }), Mt(i), F2(i);
  });
  function xe(e2) {
    return bn.get(e2);
  }
  var yn = new U2((e2) => {
    let i = M2(e2);
    return i.length === 3 && i[0].kind === "word" && i[0].value === "&" && i[1].kind === "separator" && i[1].value === ":" && i[2].kind === "function" && i[2].value === "is" ? F2(i[2].nodes) : e2;
  });
  function xn(e2) {
    return yn.get(e2);
  }
  function Mt(e2) {
    for (let i of e2) switch (i.kind) {
      case "function": {
        if (i.value === "url" || i.value.endsWith("_url")) {
          i.value = Xe(i.value);
          break;
        }
        if (i.value === "var" || i.value.endsWith("_var") || i.value === "theme" || i.value.endsWith("_theme")) {
          i.value = Xe(i.value);
          for (let r = 0; r < i.nodes.length; r++) Mt([i.nodes[r]]);
          break;
        }
        i.value = Xe(i.value), Mt(i.nodes);
        break;
      }
      case "separator":
        i.value = Xe(i.value);
        break;
      case "word": {
        (i.value[0] !== "-" || i.value[1] !== "-") && (i.value = Xe(i.value));
        break;
      }
      default:
        Cn(i);
    }
  }
  var An = new U2((e2) => {
    let i = M2(e2);
    return i.length === 1 && i[0].kind === "function" && i[0].value === "var";
  });
  function Wt(e2) {
    return An.get(e2);
  }
  function Cn(e2) {
    throw new Error(`Unexpected value: ${e2}`);
  }
  function Xe(e2) {
    return e2.replaceAll("_", String.raw`\_`).replaceAll(" ", "_");
  }
  function Te(e2, i, r) {
    if (e2 === i) return 0;
    let t = e2.indexOf("("), n = i.indexOf("("), s = t === -1 ? e2.replace(/[\d.]+/g, "") : e2.slice(0, t), l3 = n === -1 ? i.replace(/[\d.]+/g, "") : i.slice(0, n), p2 = (s === l3 ? 0 : s < l3 ? -1 : 1) || (r === "asc" ? parseInt(e2) - parseInt(i) : parseInt(i) - parseInt(e2));
    return Number.isNaN(p2) ? e2 < i ? -1 : 1 : p2;
  }
  var Vn = /^(?<value>[-+]?(?:\d*\.)?\d+)(?<unit>[a-z]+|%)?$/i;
  var le = new U2((e2) => {
    let i = Vn.exec(e2);
    if (!i) return null;
    let r = i.groups?.value;
    if (r === void 0) return null;
    let t = Number(r);
    if (Number.isNaN(t)) return null;
    let n = i.groups?.unit;
    return n === void 0 ? [t, null] : [t, n];
  });
  var Sn = /* @__PURE__ */ new Set(["inset", "inherit", "initial", "revert", "unset"]);
  var $n = /* @__PURE__ */ new Set(["calc", "clamp", "max", "min", "--spacing"]);
  var Tn = /* @__PURE__ */ new Set(["color", "color-mix", "contrast-color", "device-cmyk", "hsl", "hsla", "hwb", "lab", "lch", "light-dark", "oklab", "oklch", "rgb", "rgba", "--alpha"]);
  var Nn = /^-?(\d+|\.\d+)(.*?)$/;
  function tt(e2, i) {
    function r(n) {
      let s = F2([n]), l3 = i(s);
      return M2(l3);
    }
    return d(e2, ",").map((n) => {
      n = n.trim();
      let s = M2(n), l3 = null, p2 = 0, f2 = 0, c2 = false;
      return _2(s, (m) => {
        switch (m.kind) {
          case "word": {
            if (Sn.has(m.value.toLowerCase())) return V2.Continue;
            if (Nn.test(m.value.toLowerCase())) return f2++, V2.Continue;
            if (m.value[0] === "#" || ne(m.value)) return c2 = true, V2.ReplaceStop(r(m));
            l3 = m, p2++;
            break;
          }
          case "function":
            return Tn.has(m.value.toLowerCase()) ? (c2 = true, V2.ReplaceStop(r(m))) : $n.has(m.value.toLowerCase()) ? (f2++, V2.Skip) : (l3 = m, p2++, V2.Skip);
          case "separator":
            return V2.Continue;
          default:
        }
      }), c2 ? F2(s) : f2 < 2 ? n : p2 === 0 ? `${n} ${i("currentcolor")}` : (p2 === 1 && _2(s, (m) => m === l3 ? (c2 = true, V2.ReplaceStop(r(m))) : V2.Skip), c2 ? F2(s) : n);
    }).join(", ");
  }
  var wt = ["0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96"];
  var Bt = class {
    constructor() {
      __publicField(this, "utilities", new U2(() => []));
      __publicField(this, "completions", /* @__PURE__ */ new Map());
    }
    static(i, r) {
      this.utilities.get(i).push({ kind: "static", compileFn: r });
    }
    functional(i, r, t) {
      this.utilities.get(i).push({ kind: "functional", compileFn: r, options: t });
    }
    has(i, r) {
      return this.utilities.has(i) && this.utilities.get(i).some((t) => t.kind === r);
    }
    get(i) {
      return this.utilities.has(i) ? this.utilities.get(i) : [];
    }
    getCompletions(i) {
      return this.has(i, "static") ? this.completions.get(i)?.() ?? [{ supportsNegative: false, values: [], modifiers: [] }] : this.completions.get(i)?.() ?? [];
    }
    suggest(i, r) {
      let t = this.completions.get(i);
      t ? this.completions.set(i, () => [...t?.(), ...r?.()]) : this.completions.set(i, r);
    }
    keys(i) {
      let r = [];
      for (let [t, n] of this.utilities.entries()) for (let s of n) if (s.kind === i) {
        r.push(t);
        break;
      }
      return r;
    }
  };
  function S2(e2, i, r) {
    return B2("@property", e2, [o("syntax", r ? `"${r}"` : '"*"'), o("inherits", "false"), ...i ? [o("initial-value", i)] : []]);
  }
  function Q2(e2, i) {
    if (i === null) return e2;
    let r = Number(i);
    return Number.isNaN(r) || (i = `${r * 100}%`), i === "100%" ? e2 : `color-mix(in oklab, ${e2} ${i}, transparent)`;
  }
  function jr(e2, i) {
    let r = Number(i);
    return Number.isNaN(r) || (i = `${r * 100}%`), `oklab(from ${e2} l a b / ${i})`;
  }
  function te2(e2, i, r) {
    if (!i) return e2;
    if (i.kind === "arbitrary") return Q2(e2, i.value);
    let t = r.resolve(i.value, ["--opacity"]);
    return t ? Q2(e2, t) : de(i.value) ? Q2(e2, `${i.value}%`) : null;
  }
  function oe(e2, i, r) {
    let t = null;
    switch (e2.value.value) {
      case "inherit": {
        t = "inherit";
        break;
      }
      case "transparent": {
        t = "transparent";
        break;
      }
      case "current": {
        t = "currentcolor";
        break;
      }
      default: {
        t = i.resolve(e2.value.value, r);
        break;
      }
    }
    return t ? te2(t, e2.modifier, i) : null;
  }
  var Mr = /(\d+)_(\d+)/g;
  function Fr(e2) {
    let i = new Bt();
    function r(a2, g3) {
      function* w2(x2) {
        for (let $2 of e2.keysInNamespaces(x2)) yield $2.replace(Mr, (K2, T2, R2) => `${T2}.${R2}`);
      }
      let C2 = ["1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "2/5", "3/5", "4/5", "1/6", "2/6", "3/6", "4/6", "5/6", "1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12"];
      i.suggest(a2, () => {
        let x2 = [];
        for (let $2 of g3()) {
          if (typeof $2 == "string") {
            x2.push({ values: [$2], modifiers: [] });
            continue;
          }
          let K2 = [...$2.values ?? [], ...w2($2.valueThemeKeys ?? [])], T2 = [...$2.modifiers ?? [], ...w2($2.modifierThemeKeys ?? [])];
          $2.supportsFractions && K2.push(...C2), $2.hasDefaultValue && K2.unshift(null), x2.push({ supportsNegative: $2.supportsNegative, values: K2, modifiers: T2 });
        }
        return x2;
      });
    }
    function t(a2, g3) {
      i.static(a2, () => g3.map((w2) => typeof w2 == "function" ? w2() : o(w2[0], w2[1])));
    }
    function n(a2, g3) {
      g3.staticValues && (g3.staticValues = Object.assign(/* @__PURE__ */ Object.create(null), g3.staticValues));
      function w2({ negative: C2 }) {
        return (x2) => {
          let $2 = null, K2 = null;
          if (x2.value) if (x2.value.kind === "arbitrary") {
            if (x2.modifier) return;
            $2 = x2.value.value, K2 = x2.value.dataType;
          } else {
            if ($2 = e2.resolve(x2.value.fraction ?? x2.value.value, g3.themeKeys ?? []), $2 === null && g3.supportsFractions && x2.value.fraction) {
              let [T2, R2] = d(x2.value.fraction, "/");
              if (!u(T2) || !u(R2)) return;
              $2 = `calc(${T2} / ${R2} * 100%)`;
            }
            if ($2 === null && C2 && g3.handleNegativeBareValue) {
              if ($2 = g3.handleNegativeBareValue(x2.value), !$2?.includes("/") && x2.modifier) return;
              if ($2 !== null) return g3.handle($2, null);
            }
            if ($2 === null && g3.handleBareValue && ($2 = g3.handleBareValue(x2.value), !$2?.includes("/") && x2.modifier)) return;
            if ($2 === null && !C2 && g3.staticValues && !x2.modifier) {
              let T2 = g3.staticValues[x2.value.value];
              if (T2) return T2.map(re2);
            }
          }
          else {
            if (x2.modifier) return;
            $2 = g3.defaultValue !== void 0 ? g3.defaultValue : e2.resolve(null, g3.themeKeys ?? []);
          }
          if ($2 !== null) return g3.handle(C2 ? ie(`calc(${$2} * -1)`) : $2, K2);
        };
      }
      if (g3.supportsNegative && i.functional(`-${a2}`, w2({ negative: true })), i.functional(a2, w2({ negative: false })), r(a2, () => [{ supportsNegative: g3.supportsNegative, valueThemeKeys: g3.themeKeys ?? [], hasDefaultValue: g3.defaultValue !== void 0 && g3.defaultValue !== null, supportsFractions: g3.supportsFractions }]), g3.staticValues && Object.keys(g3.staticValues).length > 0) {
        let C2 = Object.keys(g3.staticValues);
        r(a2, () => [{ values: C2 }]);
      }
    }
    function s(a2, g3) {
      i.functional(a2, (w2) => {
        if (!w2.value) return;
        let C2 = null;
        if (w2.value.kind === "arbitrary" ? (C2 = w2.value.value, C2 = te2(C2, w2.modifier, e2)) : C2 = oe(w2, e2, g3.themeKeys), C2 !== null) return g3.handle(C2);
      }), r(a2, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: g3.themeKeys, modifiers: Array.from({ length: 21 }, (w2, C2) => `${C2 * 5}`) }]);
    }
    function l3(a2, g3, w2, { supportsNegative: C2 = false, supportsFractions: x2 = false, staticValues: $2 } = {}) {
      C2 && i.static(`-${a2}-px`, () => w2("-1px")), i.static(`${a2}-px`, () => w2("1px")), n(a2, { themeKeys: g3, supportsFractions: x2, supportsNegative: C2, defaultValue: null, handleBareValue: ({ value: K2 }) => !e2.resolve(null, ["--spacing"]) || !ue(K2) ? null : `--spacing(${K2})`, handleNegativeBareValue: ({ value: K2 }) => !e2.resolve(null, ["--spacing"]) || !ue(K2) ? null : `--spacing(-${K2})`, handle: w2, staticValues: $2 }), r(a2, () => [{ values: e2.get(["--spacing"]) ? wt : [], supportsNegative: C2, supportsFractions: x2, valueThemeKeys: g3 }]);
    }
    t("sr-only", [["position", "absolute"], ["width", "1px"], ["height", "1px"], ["padding", "0"], ["margin", "-1px"], ["overflow", "hidden"], ["clip-path", "inset(50%)"], ["white-space", "nowrap"], ["border-width", "0"]]), t("not-sr-only", [["position", "static"], ["width", "auto"], ["height", "auto"], ["padding", "0"], ["margin", "0"], ["overflow", "visible"], ["clip-path", "none"], ["white-space", "normal"]]), t("pointer-events-none", [["pointer-events", "none"]]), t("pointer-events-auto", [["pointer-events", "auto"]]), t("visible", [["visibility", "visible"]]), t("invisible", [["visibility", "hidden"]]), t("collapse", [["visibility", "collapse"]]), t("static", [["position", "static"]]), t("fixed", [["position", "fixed"]]), t("absolute", [["position", "absolute"]]), t("relative", [["position", "relative"]]), t("sticky", [["position", "sticky"]]);
    for (let [a2, g3] of [["inset", "inset"], ["inset-x", "inset-inline"], ["inset-y", "inset-block"], ["inset-s", "inset-inline-start"], ["inset-e", "inset-inline-end"], ["inset-bs", "inset-block-start"], ["inset-be", "inset-block-end"], ["top", "top"], ["right", "right"], ["bottom", "bottom"], ["left", "left"]]) t(`${a2}-auto`, [[g3, "auto"]]), t(`${a2}-full`, [[g3, "100%"]]), t(`-${a2}-full`, [[g3, "-100%"]]), l3(a2, ["--inset", "--spacing"], (w2) => [o(g3, w2)], { supportsNegative: true, supportsFractions: true });
    t("isolate", [["isolation", "isolate"]]), t("isolation-auto", [["isolation", "auto"]]), n("z", { supportsNegative: true, handleBareValue: ({ value: a2 }) => u(a2) ? a2 : null, themeKeys: ["--z-index"], handle: (a2) => [o("z-index", a2)], staticValues: { auto: [o("z-index", "auto")] } }), r("z", () => [{ supportsNegative: true, values: ["0", "10", "20", "30", "40", "50"], valueThemeKeys: ["--z-index"] }]), n("order", { supportsNegative: true, handleBareValue: ({ value: a2 }) => u(a2) ? a2 : null, themeKeys: ["--order"], handle: (a2) => [o("order", a2)], staticValues: { first: [o("order", "-9999")], last: [o("order", "9999")] } }), r("order", () => [{ supportsNegative: true, values: Array.from({ length: 12 }, (a2, g3) => `${g3 + 1}`), valueThemeKeys: ["--order"] }]), n("col", { supportsNegative: true, handleBareValue: ({ value: a2 }) => u(a2) ? a2 : null, themeKeys: ["--grid-column"], handle: (a2) => [o("grid-column", a2)], staticValues: { auto: [o("grid-column", "auto")] } }), n("col-span", { handleBareValue: ({ value: a2 }) => u(a2) ? a2 : null, handle: (a2) => [o("grid-column", `span ${a2} / span ${a2}`)], staticValues: { full: [o("grid-column", "1 / -1")] } }), n("col-start", { supportsNegative: true, handleBareValue: ({ value: a2 }) => u(a2) ? a2 : null, themeKeys: ["--grid-column-start"], handle: (a2) => [o("grid-column-start", a2)], staticValues: { auto: [o("grid-column-start", "auto")] } }), n("col-end", { supportsNegative: true, handleBareValue: ({ value: a2 }) => u(a2) ? a2 : null, themeKeys: ["--grid-column-end"], handle: (a2) => [o("grid-column-end", a2)], staticValues: { auto: [o("grid-column-end", "auto")] } }), r("col-span", () => [{ values: Array.from({ length: 12 }, (a2, g3) => `${g3 + 1}`), valueThemeKeys: [] }]), r("col-start", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (a2, g3) => `${g3 + 1}`), valueThemeKeys: ["--grid-column-start"] }]), r("col-end", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (a2, g3) => `${g3 + 1}`), valueThemeKeys: ["--grid-column-end"] }]), n("row", { supportsNegative: true, handleBareValue: ({ value: a2 }) => u(a2) ? a2 : null, themeKeys: ["--grid-row"], handle: (a2) => [o("grid-row", a2)], staticValues: { auto: [o("grid-row", "auto")] } }), n("row-span", { themeKeys: [], handleBareValue: ({ value: a2 }) => u(a2) ? a2 : null, handle: (a2) => [o("grid-row", `span ${a2} / span ${a2}`)], staticValues: { full: [o("grid-row", "1 / -1")] } }), n("row-start", { supportsNegative: true, handleBareValue: ({ value: a2 }) => u(a2) ? a2 : null, themeKeys: ["--grid-row-start"], handle: (a2) => [o("grid-row-start", a2)], staticValues: { auto: [o("grid-row-start", "auto")] } }), n("row-end", { supportsNegative: true, handleBareValue: ({ value: a2 }) => u(a2) ? a2 : null, themeKeys: ["--grid-row-end"], handle: (a2) => [o("grid-row-end", a2)], staticValues: { auto: [o("grid-row-end", "auto")] } }), r("row-span", () => [{ values: Array.from({ length: 12 }, (a2, g3) => `${g3 + 1}`), valueThemeKeys: [] }]), r("row-start", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (a2, g3) => `${g3 + 1}`), valueThemeKeys: ["--grid-row-start"] }]), r("row-end", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (a2, g3) => `${g3 + 1}`), valueThemeKeys: ["--grid-row-end"] }]), t("float-start", [["float", "inline-start"]]), t("float-end", [["float", "inline-end"]]), t("float-right", [["float", "right"]]), t("float-left", [["float", "left"]]), t("float-none", [["float", "none"]]), t("clear-start", [["clear", "inline-start"]]), t("clear-end", [["clear", "inline-end"]]), t("clear-right", [["clear", "right"]]), t("clear-left", [["clear", "left"]]), t("clear-both", [["clear", "both"]]), t("clear-none", [["clear", "none"]]);
    for (let [a2, g3] of [["m", "margin"], ["mx", "margin-inline"], ["my", "margin-block"], ["ms", "margin-inline-start"], ["me", "margin-inline-end"], ["mbs", "margin-block-start"], ["mbe", "margin-block-end"], ["mt", "margin-top"], ["mr", "margin-right"], ["mb", "margin-bottom"], ["ml", "margin-left"]]) t(`${a2}-auto`, [[g3, "auto"]]), l3(a2, ["--margin", "--spacing"], (w2) => [o(g3, w2)], { supportsNegative: true });
    t("box-border", [["box-sizing", "border-box"]]), t("box-content", [["box-sizing", "content-box"]]), n("line-clamp", { themeKeys: ["--line-clamp"], handleBareValue: ({ value: a2 }) => u(a2) ? a2 : null, handle: (a2) => [o("overflow", "hidden"), o("display", "-webkit-box"), o("-webkit-box-orient", "vertical"), o("-webkit-line-clamp", a2)], staticValues: { none: [o("overflow", "visible"), o("display", "block"), o("-webkit-box-orient", "horizontal"), o("-webkit-line-clamp", "unset")] } }), r("line-clamp", () => [{ values: ["1", "2", "3", "4", "5", "6"], valueThemeKeys: ["--line-clamp"] }]), t("block", [["display", "block"]]), t("inline-block", [["display", "inline-block"]]), t("inline", [["display", "inline"]]), t("hidden", [["display", "none"]]), t("inline-flex", [["display", "inline-flex"]]), t("table", [["display", "table"]]), t("inline-table", [["display", "inline-table"]]), t("table-caption", [["display", "table-caption"]]), t("table-cell", [["display", "table-cell"]]), t("table-column", [["display", "table-column"]]), t("table-column-group", [["display", "table-column-group"]]), t("table-footer-group", [["display", "table-footer-group"]]), t("table-header-group", [["display", "table-header-group"]]), t("table-row-group", [["display", "table-row-group"]]), t("table-row", [["display", "table-row"]]), t("flow-root", [["display", "flow-root"]]), t("flex", [["display", "flex"]]), t("grid", [["display", "grid"]]), t("inline-grid", [["display", "inline-grid"]]), t("contents", [["display", "contents"]]), t("list-item", [["display", "list-item"]]), t("field-sizing-content", [["field-sizing", "content"]]), t("field-sizing-fixed", [["field-sizing", "fixed"]]), n("aspect", { themeKeys: ["--aspect"], handleBareValue: ({ fraction: a2 }) => {
      if (a2 === null) return null;
      let [g3, w2] = d(a2, "/");
      return !ue(g3) || !ue(w2) ? null : a2;
    }, handle: (a2) => [o("aspect-ratio", a2)], staticValues: { auto: [o("aspect-ratio", "auto")], square: [o("aspect-ratio", "1 / 1")] } });
    for (let [a2, g3] of [["full", "100%"], ["svw", "100svw"], ["lvw", "100lvw"], ["dvw", "100dvw"], ["svh", "100svh"], ["lvh", "100lvh"], ["dvh", "100dvh"], ["min", "min-content"], ["max", "max-content"], ["fit", "fit-content"]]) t(`size-${a2}`, [["--tw-sort", "size"], ["width", g3], ["height", g3]]), t(`w-${a2}`, [["width", g3]]), t(`h-${a2}`, [["height", g3]]), t(`min-w-${a2}`, [["min-width", g3]]), t(`min-h-${a2}`, [["min-height", g3]]), t(`max-w-${a2}`, [["max-width", g3]]), t(`max-h-${a2}`, [["max-height", g3]]);
    t("size-auto", [["--tw-sort", "size"], ["width", "auto"], ["height", "auto"]]), t("w-auto", [["width", "auto"]]), t("h-auto", [["height", "auto"]]), t("min-w-auto", [["min-width", "auto"]]), t("min-h-auto", [["min-height", "auto"]]), t("h-lh", [["height", "1lh"]]), t("min-h-lh", [["min-height", "1lh"]]), t("max-h-lh", [["max-height", "1lh"]]), t("w-screen", [["width", "100vw"]]), t("min-w-screen", [["min-width", "100vw"]]), t("max-w-screen", [["max-width", "100vw"]]), t("h-screen", [["height", "100vh"]]), t("min-h-screen", [["min-height", "100vh"]]), t("max-h-screen", [["max-height", "100vh"]]), t("max-w-none", [["max-width", "none"]]), t("max-h-none", [["max-height", "none"]]), l3("size", ["--size", "--spacing"], (a2) => [o("--tw-sort", "size"), o("width", a2), o("height", a2)], { supportsFractions: true });
    for (let [a2, g3, w2] of [["w", ["--width", "--spacing", "--container"], "width"], ["min-w", ["--min-width", "--spacing", "--container"], "min-width"], ["max-w", ["--max-width", "--spacing", "--container"], "max-width"], ["h", ["--height", "--spacing"], "height"], ["min-h", ["--min-height", "--height", "--spacing"], "min-height"], ["max-h", ["--max-height", "--height", "--spacing"], "max-height"]]) l3(a2, g3, (C2) => [o(w2, C2)], { supportsFractions: true });
    for (let [a2, g3] of [["full", "100%"], ["min", "min-content"], ["max", "max-content"], ["fit", "fit-content"]]) t(`inline-${a2}`, [["inline-size", g3]]), t(`block-${a2}`, [["block-size", g3]]), t(`min-inline-${a2}`, [["min-inline-size", g3]]), t(`min-block-${a2}`, [["min-block-size", g3]]), t(`max-inline-${a2}`, [["max-inline-size", g3]]), t(`max-block-${a2}`, [["max-block-size", g3]]);
    for (let [a2, g3] of [["svw", "100svw"], ["lvw", "100lvw"], ["dvw", "100dvw"]]) t(`inline-${a2}`, [["inline-size", g3]]), t(`min-inline-${a2}`, [["min-inline-size", g3]]), t(`max-inline-${a2}`, [["max-inline-size", g3]]);
    for (let [a2, g3] of [["svh", "100svh"], ["lvh", "100lvh"], ["dvh", "100dvh"]]) t(`block-${a2}`, [["block-size", g3]]), t(`min-block-${a2}`, [["min-block-size", g3]]), t(`max-block-${a2}`, [["max-block-size", g3]]);
    t("inline-auto", [["inline-size", "auto"]]), t("block-auto", [["block-size", "auto"]]), t("min-inline-auto", [["min-inline-size", "auto"]]), t("min-block-auto", [["min-block-size", "auto"]]), t("block-lh", [["block-size", "1lh"]]), t("min-block-lh", [["min-block-size", "1lh"]]), t("max-block-lh", [["max-block-size", "1lh"]]), t("inline-screen", [["inline-size", "100vw"]]), t("min-inline-screen", [["min-inline-size", "100vw"]]), t("max-inline-screen", [["max-inline-size", "100vw"]]), t("block-screen", [["block-size", "100vh"]]), t("min-block-screen", [["min-block-size", "100vh"]]), t("max-block-screen", [["max-block-size", "100vh"]]), t("max-inline-none", [["max-inline-size", "none"]]), t("max-block-none", [["max-block-size", "none"]]);
    for (let [a2, g3, w2] of [["inline", ["--spacing", "--container"], "inline-size"], ["min-inline", ["--spacing", "--container"], "min-inline-size"], ["max-inline", ["--spacing", "--container"], "max-inline-size"], ["block", ["--spacing"], "block-size"], ["min-block", ["--spacing"], "min-block-size"], ["max-block", ["--spacing"], "max-block-size"]]) l3(a2, g3, (C2) => [o(w2, C2)], { supportsFractions: true });
    i.static("container", () => {
      let a2 = [...e2.namespace("--breakpoint").values()];
      a2.sort((w2, C2) => Te(w2, C2, "asc"));
      let g3 = [o("--tw-sort", "--tw-container-component"), o("width", "100%")];
      for (let w2 of a2) g3.push(B2("@media", `(width >= ${w2})`, [o("max-width", w2)]));
      return g3;
    }), t("flex-auto", [["flex", "auto"]]), t("flex-initial", [["flex", "0 auto"]]), t("flex-none", [["flex", "none"]]), i.functional("flex", (a2) => {
      if (a2.value) {
        if (a2.value.kind === "arbitrary") return a2.modifier ? void 0 : [o("flex", a2.value.value)];
        if (a2.value.fraction) {
          let [g3, w2] = d(a2.value.fraction, "/");
          return !u(g3) || !u(w2) ? void 0 : [o("flex", `calc(${a2.value.fraction} * 100%)`)];
        }
        if (u(a2.value.value)) return a2.modifier ? void 0 : [o("flex", a2.value.value)];
      }
    }), r("flex", () => [{ supportsFractions: true }, { values: Array.from({ length: 12 }, (a2, g3) => `${g3 + 1}`) }]), n("shrink", { defaultValue: "1", handleBareValue: ({ value: a2 }) => u(a2) ? a2 : null, handle: (a2) => [o("flex-shrink", a2)] }), n("grow", { defaultValue: "1", handleBareValue: ({ value: a2 }) => u(a2) ? a2 : null, handle: (a2) => [o("flex-grow", a2)] }), r("shrink", () => [{ values: ["0"], valueThemeKeys: [], hasDefaultValue: true }]), r("grow", () => [{ values: ["0"], valueThemeKeys: [], hasDefaultValue: true }]), t("basis-auto", [["flex-basis", "auto"]]), t("basis-full", [["flex-basis", "100%"]]), l3("basis", ["--flex-basis", "--spacing", "--container"], (a2) => [o("flex-basis", a2)], { supportsFractions: true }), t("table-auto", [["table-layout", "auto"]]), t("table-fixed", [["table-layout", "fixed"]]), t("caption-top", [["caption-side", "top"]]), t("caption-bottom", [["caption-side", "bottom"]]), t("border-collapse", [["border-collapse", "collapse"]]), t("border-separate", [["border-collapse", "separate"]]);
    let p2 = () => Y2([S2("--tw-border-spacing-x", "0", "<length>"), S2("--tw-border-spacing-y", "0", "<length>")]);
    l3("border-spacing", ["--border-spacing", "--spacing"], (a2) => [p2(), o("--tw-border-spacing-x", a2), o("--tw-border-spacing-y", a2), o("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), l3("border-spacing-x", ["--border-spacing", "--spacing"], (a2) => [p2(), o("--tw-border-spacing-x", a2), o("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), l3("border-spacing-y", ["--border-spacing", "--spacing"], (a2) => [p2(), o("--tw-border-spacing-y", a2), o("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), n("origin", { themeKeys: ["--transform-origin"], handle: (a2) => [o("transform-origin", a2)], staticValues: { center: [o("transform-origin", "center")], top: [o("transform-origin", "top")], "top-right": [o("transform-origin", "100% 0")], right: [o("transform-origin", "100%")], "bottom-right": [o("transform-origin", "100% 100%")], bottom: [o("transform-origin", "bottom")], "bottom-left": [o("transform-origin", "0 100%")], left: [o("transform-origin", "0")], "top-left": [o("transform-origin", "0 0")] } }), n("perspective-origin", { themeKeys: ["--perspective-origin"], handle: (a2) => [o("perspective-origin", a2)], staticValues: { center: [o("perspective-origin", "center")], top: [o("perspective-origin", "top")], "top-right": [o("perspective-origin", "100% 0")], right: [o("perspective-origin", "100%")], "bottom-right": [o("perspective-origin", "100% 100%")], bottom: [o("perspective-origin", "bottom")], "bottom-left": [o("perspective-origin", "0 100%")], left: [o("perspective-origin", "0")], "top-left": [o("perspective-origin", "0 0")] } }), n("perspective", { themeKeys: ["--perspective"], handle: (a2) => [o("perspective", a2)], staticValues: { none: [o("perspective", "none")] } });
    let f2 = () => Y2([S2("--tw-translate-x", "0"), S2("--tw-translate-y", "0"), S2("--tw-translate-z", "0")]);
    t("translate-none", [["translate", "none"]]), t("-translate-full", [f2, ["--tw-translate-x", "-100%"], ["--tw-translate-y", "-100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), t("translate-full", [f2, ["--tw-translate-x", "100%"], ["--tw-translate-y", "100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), l3("translate", ["--translate", "--spacing"], (a2) => [f2(), o("--tw-translate-x", a2), o("--tw-translate-y", a2), o("translate", "var(--tw-translate-x) var(--tw-translate-y)")], { supportsNegative: true, supportsFractions: true });
    for (let a2 of ["x", "y"]) t(`-translate-${a2}-full`, [f2, [`--tw-translate-${a2}`, "-100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), t(`translate-${a2}-full`, [f2, [`--tw-translate-${a2}`, "100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), l3(`translate-${a2}`, ["--translate", "--spacing"], (g3) => [f2(), o(`--tw-translate-${a2}`, g3), o("translate", "var(--tw-translate-x) var(--tw-translate-y)")], { supportsNegative: true, supportsFractions: true });
    l3("translate-z", ["--translate", "--spacing"], (a2) => [f2(), o("--tw-translate-z", a2), o("translate", "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)")], { supportsNegative: true }), t("translate-3d", [f2, ["translate", "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)"]]);
    let c2 = () => Y2([S2("--tw-scale-x", "1"), S2("--tw-scale-y", "1"), S2("--tw-scale-z", "1")]);
    t("scale-none", [["scale", "none"]]);
    function m({ negative: a2 }) {
      return (g3) => {
        if (!g3.value || g3.modifier) return;
        let w2;
        return g3.value.kind === "arbitrary" ? (w2 = g3.value.value, w2 = a2 ? `calc(${w2} * -1)` : w2, [o("scale", w2)]) : (w2 = e2.resolve(g3.value.value, ["--scale"]), !w2 && u(g3.value.value) && (w2 = `${g3.value.value}%`), w2 ? (w2 = a2 ? `calc(${w2} * -1)` : w2, [c2(), o("--tw-scale-x", w2), o("--tw-scale-y", w2), o("--tw-scale-z", w2), o("scale", "var(--tw-scale-x) var(--tw-scale-y)")]) : void 0);
      };
    }
    i.functional("-scale", m({ negative: true })), i.functional("scale", m({ negative: false })), r("scale", () => [{ supportsNegative: true, values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--scale"] }]);
    for (let a2 of ["x", "y", "z"]) n(`scale-${a2}`, { supportsNegative: true, themeKeys: ["--scale"], handleBareValue: ({ value: g3 }) => u(g3) ? `${g3}%` : null, handle: (g3) => [c2(), o(`--tw-scale-${a2}`, g3), o("scale", `var(--tw-scale-x) var(--tw-scale-y)${a2 === "z" ? " var(--tw-scale-z)" : ""}`)] }), r(`scale-${a2}`, () => [{ supportsNegative: true, values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--scale"] }]);
    t("scale-3d", [c2, ["scale", "var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)"]]), t("rotate-none", [["rotate", "none"]]);
    function d2({ negative: a2 }) {
      return (g3) => {
        if (!g3.value || g3.modifier) return;
        let w2;
        if (g3.value.kind === "arbitrary") {
          w2 = g3.value.value;
          let C2 = g3.value.dataType ?? pe(w2, ["angle", "vector"]);
          if (C2 === "vector") return [o("rotate", `${w2} var(--tw-rotate)`)];
          if (C2 !== "angle") return [o("rotate", a2 ? `calc(${w2} * -1)` : w2)];
        } else if (w2 = e2.resolve(g3.value.value, ["--rotate"]), !w2 && u(g3.value.value) && (w2 = `${g3.value.value}deg`), !w2) return;
        return [o("rotate", a2 ? `calc(${w2} * -1)` : w2)];
      };
    }
    i.functional("-rotate", d2({ negative: true })), i.functional("rotate", d2({ negative: false })), r("rotate", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"], valueThemeKeys: ["--rotate"] }]);
    {
      let a2 = ["var(--tw-rotate-x,)", "var(--tw-rotate-y,)", "var(--tw-rotate-z,)", "var(--tw-skew-x,)", "var(--tw-skew-y,)"].join(" "), g3 = () => Y2([S2("--tw-rotate-x"), S2("--tw-rotate-y"), S2("--tw-rotate-z"), S2("--tw-skew-x"), S2("--tw-skew-y")]);
      for (let w2 of ["x", "y", "z"]) n(`rotate-${w2}`, { supportsNegative: true, themeKeys: ["--rotate"], handleBareValue: ({ value: C2 }) => u(C2) ? `${C2}deg` : null, handle: (C2) => [g3(), o(`--tw-rotate-${w2}`, `rotate${w2.toUpperCase()}(${C2})`), o("transform", a2)] }), r(`rotate-${w2}`, () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"], valueThemeKeys: ["--rotate"] }]);
      n("skew", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: w2 }) => u(w2) ? `${w2}deg` : null, handle: (w2) => [g3(), o("--tw-skew-x", `skewX(${w2})`), o("--tw-skew-y", `skewY(${w2})`), o("transform", a2)] }), n("skew-x", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: w2 }) => u(w2) ? `${w2}deg` : null, handle: (w2) => [g3(), o("--tw-skew-x", `skewX(${w2})`), o("transform", a2)] }), n("skew-y", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: w2 }) => u(w2) ? `${w2}deg` : null, handle: (w2) => [g3(), o("--tw-skew-y", `skewY(${w2})`), o("transform", a2)] }), r("skew", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), r("skew-x", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), r("skew-y", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), i.functional("transform", (w2) => {
        if (w2.modifier) return;
        let C2 = null;
        if (w2.value ? w2.value.kind === "arbitrary" && (C2 = w2.value.value) : C2 = a2, C2 !== null) return [g3(), o("transform", C2)];
      }), r("transform", () => [{ hasDefaultValue: true }]), t("transform-cpu", [["transform", a2]]), t("transform-gpu", [["transform", `translateZ(0) ${a2}`]]), t("transform-none", [["transform", "none"]]);
    }
    n("zoom", { handleBareValue: ({ value: a2 }) => u(a2) ? `${a2}%` : null, handle: (a2) => [o("zoom", a2)] }), r("zoom", () => [{ values: ["50", "75", "90", "95", "100", "105", "110", "125", "150", "200"] }]), t("transform-flat", [["transform-style", "flat"]]), t("transform-3d", [["transform-style", "preserve-3d"]]), t("transform-content", [["transform-box", "content-box"]]), t("transform-border", [["transform-box", "border-box"]]), t("transform-fill", [["transform-box", "fill-box"]]), t("transform-stroke", [["transform-box", "stroke-box"]]), t("transform-view", [["transform-box", "view-box"]]), t("backface-visible", [["backface-visibility", "visible"]]), t("backface-hidden", [["backface-visibility", "hidden"]]);
    for (let a2 of ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"]) t(`cursor-${a2}`, [["cursor", a2]]);
    n("cursor", { themeKeys: ["--cursor"], handle: (a2) => [o("cursor", a2)] });
    for (let a2 of ["auto", "none", "manipulation"]) t(`touch-${a2}`, [["touch-action", a2]]);
    let u2 = () => Y2([S2("--tw-pan-x"), S2("--tw-pan-y"), S2("--tw-pinch-zoom")]);
    for (let a2 of ["x", "left", "right"]) t(`touch-pan-${a2}`, [u2, ["--tw-pan-x", `pan-${a2}`], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
    for (let a2 of ["y", "up", "down"]) t(`touch-pan-${a2}`, [u2, ["--tw-pan-y", `pan-${a2}`], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
    t("touch-pinch-zoom", [u2, ["--tw-pinch-zoom", "pinch-zoom"], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
    for (let a2 of ["none", "text", "all", "auto"]) t(`select-${a2}`, [["-webkit-user-select", a2], ["user-select", a2]]);
    t("resize-none", [["resize", "none"]]), t("resize-x", [["resize", "horizontal"]]), t("resize-y", [["resize", "vertical"]]), t("resize", [["resize", "both"]]), t("snap-none", [["scroll-snap-type", "none"]]);
    let h3 = () => Y2([S2("--tw-scroll-snap-strictness", "proximity", "*")]);
    for (let a2 of ["x", "y", "both"]) t(`snap-${a2}`, [h3, ["scroll-snap-type", `${a2} var(--tw-scroll-snap-strictness)`]]);
    t("snap-mandatory", [h3, ["--tw-scroll-snap-strictness", "mandatory"]]), t("snap-proximity", [h3, ["--tw-scroll-snap-strictness", "proximity"]]), t("snap-align-none", [["scroll-snap-align", "none"]]), t("snap-start", [["scroll-snap-align", "start"]]), t("snap-end", [["scroll-snap-align", "end"]]), t("snap-center", [["scroll-snap-align", "center"]]), t("snap-normal", [["scroll-snap-stop", "normal"]]), t("snap-always", [["scroll-snap-stop", "always"]]);
    for (let [a2, g3] of [["scroll-m", "scroll-margin"], ["scroll-mx", "scroll-margin-inline"], ["scroll-my", "scroll-margin-block"], ["scroll-ms", "scroll-margin-inline-start"], ["scroll-me", "scroll-margin-inline-end"], ["scroll-mbs", "scroll-margin-block-start"], ["scroll-mbe", "scroll-margin-block-end"], ["scroll-mt", "scroll-margin-top"], ["scroll-mr", "scroll-margin-right"], ["scroll-mb", "scroll-margin-bottom"], ["scroll-ml", "scroll-margin-left"]]) l3(a2, ["--scroll-margin", "--spacing"], (w2) => [o(g3, w2)], { supportsNegative: true });
    for (let [a2, g3] of [["scroll-p", "scroll-padding"], ["scroll-px", "scroll-padding-inline"], ["scroll-py", "scroll-padding-block"], ["scroll-ps", "scroll-padding-inline-start"], ["scroll-pe", "scroll-padding-inline-end"], ["scroll-pbs", "scroll-padding-block-start"], ["scroll-pbe", "scroll-padding-block-end"], ["scroll-pt", "scroll-padding-top"], ["scroll-pr", "scroll-padding-right"], ["scroll-pb", "scroll-padding-bottom"], ["scroll-pl", "scroll-padding-left"]]) l3(a2, ["--scroll-padding", "--spacing"], (w2) => [o(g3, w2)]);
    t("list-inside", [["list-style-position", "inside"]]), t("list-outside", [["list-style-position", "outside"]]), n("list", { themeKeys: ["--list-style-type"], handle: (a2) => [o("list-style-type", a2)], staticValues: { none: [o("list-style-type", "none")], disc: [o("list-style-type", "disc")], decimal: [o("list-style-type", "decimal")] } }), n("list-image", { themeKeys: ["--list-style-image"], handle: (a2) => [o("list-style-image", a2)], staticValues: { none: [o("list-style-image", "none")] } }), t("appearance-none", [["appearance", "none"]]), t("appearance-auto", [["appearance", "auto"]]), t("scheme-normal", [["color-scheme", "normal"]]), t("scheme-dark", [["color-scheme", "dark"]]), t("scheme-light", [["color-scheme", "light"]]), t("scheme-light-dark", [["color-scheme", "light dark"]]), t("scheme-only-dark", [["color-scheme", "only dark"]]), t("scheme-only-light", [["color-scheme", "only light"]]), n("columns", { themeKeys: ["--columns", "--container"], handleBareValue: ({ value: a2 }) => u(a2) ? a2 : null, handle: (a2) => [o("columns", a2)], staticValues: { auto: [o("columns", "auto")] } }), r("columns", () => [{ values: Array.from({ length: 12 }, (a2, g3) => `${g3 + 1}`), valueThemeKeys: ["--columns", "--container"] }]);
    for (let a2 of ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]) t(`break-before-${a2}`, [["break-before", a2]]);
    for (let a2 of ["auto", "avoid", "avoid-page", "avoid-column"]) t(`break-inside-${a2}`, [["break-inside", a2]]);
    for (let a2 of ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]) t(`break-after-${a2}`, [["break-after", a2]]);
    t("grid-flow-row", [["grid-auto-flow", "row"]]), t("grid-flow-col", [["grid-auto-flow", "column"]]), t("grid-flow-dense", [["grid-auto-flow", "dense"]]), t("grid-flow-row-dense", [["grid-auto-flow", "row dense"]]), t("grid-flow-col-dense", [["grid-auto-flow", "column dense"]]), n("auto-cols", { themeKeys: ["--grid-auto-columns"], handle: (a2) => [o("grid-auto-columns", a2)], staticValues: { auto: [o("grid-auto-columns", "auto")], min: [o("grid-auto-columns", "min-content")], max: [o("grid-auto-columns", "max-content")], fr: [o("grid-auto-columns", "minmax(0, 1fr)")] } }), n("auto-rows", { themeKeys: ["--grid-auto-rows"], handle: (a2) => [o("grid-auto-rows", a2)], staticValues: { auto: [o("grid-auto-rows", "auto")], min: [o("grid-auto-rows", "min-content")], max: [o("grid-auto-rows", "max-content")], fr: [o("grid-auto-rows", "minmax(0, 1fr)")] } }), n("grid-cols", { themeKeys: ["--grid-template-columns"], handleBareValue: ({ value: a2 }) => ge(a2) ? `repeat(${a2}, minmax(0, 1fr))` : null, handle: (a2) => [o("grid-template-columns", a2)], staticValues: { none: [o("grid-template-columns", "none")], subgrid: [o("grid-template-columns", "subgrid")] } }), n("grid-rows", { themeKeys: ["--grid-template-rows"], handleBareValue: ({ value: a2 }) => ge(a2) ? `repeat(${a2}, minmax(0, 1fr))` : null, handle: (a2) => [o("grid-template-rows", a2)], staticValues: { none: [o("grid-template-rows", "none")], subgrid: [o("grid-template-rows", "subgrid")] } }), r("grid-cols", () => [{ values: Array.from({ length: 12 }, (a2, g3) => `${g3 + 1}`), valueThemeKeys: ["--grid-template-columns"] }]), r("grid-rows", () => [{ values: Array.from({ length: 12 }, (a2, g3) => `${g3 + 1}`), valueThemeKeys: ["--grid-template-rows"] }]), t("flex-row", [["flex-direction", "row"]]), t("flex-row-reverse", [["flex-direction", "row-reverse"]]), t("flex-col", [["flex-direction", "column"]]), t("flex-col-reverse", [["flex-direction", "column-reverse"]]), t("flex-wrap", [["flex-wrap", "wrap"]]), t("flex-nowrap", [["flex-wrap", "nowrap"]]), t("flex-wrap-reverse", [["flex-wrap", "wrap-reverse"]]), t("place-content-center", [["place-content", "center"]]), t("place-content-start", [["place-content", "start"]]), t("place-content-end", [["place-content", "end"]]), t("place-content-center-safe", [["place-content", "safe center"]]), t("place-content-end-safe", [["place-content", "safe end"]]), t("place-content-between", [["place-content", "space-between"]]), t("place-content-around", [["place-content", "space-around"]]), t("place-content-evenly", [["place-content", "space-evenly"]]), t("place-content-baseline", [["place-content", "baseline"]]), t("place-content-stretch", [["place-content", "stretch"]]), t("place-items-center", [["place-items", "center"]]), t("place-items-start", [["place-items", "start"]]), t("place-items-end", [["place-items", "end"]]), t("place-items-center-safe", [["place-items", "safe center"]]), t("place-items-end-safe", [["place-items", "safe end"]]), t("place-items-baseline", [["place-items", "baseline"]]), t("place-items-stretch", [["place-items", "stretch"]]), t("content-normal", [["align-content", "normal"]]), t("content-center", [["align-content", "center"]]), t("content-start", [["align-content", "flex-start"]]), t("content-end", [["align-content", "flex-end"]]), t("content-center-safe", [["align-content", "safe center"]]), t("content-end-safe", [["align-content", "safe flex-end"]]), t("content-between", [["align-content", "space-between"]]), t("content-around", [["align-content", "space-around"]]), t("content-evenly", [["align-content", "space-evenly"]]), t("content-baseline", [["align-content", "baseline"]]), t("content-stretch", [["align-content", "stretch"]]), t("items-center", [["align-items", "center"]]), t("items-start", [["align-items", "flex-start"]]), t("items-end", [["align-items", "flex-end"]]), t("items-center-safe", [["align-items", "safe center"]]), t("items-end-safe", [["align-items", "safe flex-end"]]), t("items-baseline", [["align-items", "baseline"]]), t("items-baseline-last", [["align-items", "last baseline"]]), t("items-stretch", [["align-items", "stretch"]]), t("justify-normal", [["justify-content", "normal"]]), t("justify-center", [["justify-content", "center"]]), t("justify-start", [["justify-content", "flex-start"]]), t("justify-end", [["justify-content", "flex-end"]]), t("justify-center-safe", [["justify-content", "safe center"]]), t("justify-end-safe", [["justify-content", "safe flex-end"]]), t("justify-between", [["justify-content", "space-between"]]), t("justify-around", [["justify-content", "space-around"]]), t("justify-evenly", [["justify-content", "space-evenly"]]), t("justify-baseline", [["justify-content", "baseline"]]), t("justify-stretch", [["justify-content", "stretch"]]), t("justify-items-normal", [["justify-items", "normal"]]), t("justify-items-center", [["justify-items", "center"]]), t("justify-items-start", [["justify-items", "start"]]), t("justify-items-end", [["justify-items", "end"]]), t("justify-items-center-safe", [["justify-items", "safe center"]]), t("justify-items-end-safe", [["justify-items", "safe end"]]), t("justify-items-stretch", [["justify-items", "stretch"]]), l3("gap", ["--gap", "--spacing"], (a2) => [o("gap", a2)]), l3("gap-x", ["--gap", "--spacing"], (a2) => [o("column-gap", a2)]), l3("gap-y", ["--gap", "--spacing"], (a2) => [o("row-gap", a2)]), l3("space-x", ["--space", "--spacing"], (a2) => {
      let g3 = (() => {
        if (a2 === "--spacing(0)" || a2 === "--spacing(-0)") return true;
        let w2 = le.get(a2);
        return !!(w2 && w2[0] === 0 && (w2[1] === null || y(a2)));
      })();
      return [Y2([S2("--tw-space-x-reverse", "0")]), H2(":where(& > :not(:last-child))", [o("--tw-sort", "row-gap"), o("--tw-space-x-reverse", "0"), o("margin-inline-start", g3 ? "0" : `calc(${a2} * var(--tw-space-x-reverse))`), o("margin-inline-end", g3 ? "0" : `calc(${a2} * calc(1 - var(--tw-space-x-reverse)))`)])];
    }, { supportsNegative: true }), l3("space-y", ["--space", "--spacing"], (a2) => {
      let g3 = (() => {
        if (a2 === "--spacing(0)" || a2 === "--spacing(-0)") return true;
        let w2 = le.get(a2);
        return !!(w2 && w2[0] === 0 && (w2[1] === null || y(a2)));
      })();
      return [Y2([S2("--tw-space-y-reverse", "0")]), H2(":where(& > :not(:last-child))", [o("--tw-sort", "column-gap"), o("--tw-space-y-reverse", "0"), o("margin-block-start", g3 ? "0" : `calc(${a2} * var(--tw-space-y-reverse))`), o("margin-block-end", g3 ? "0" : `calc(${a2} * calc(1 - var(--tw-space-y-reverse)))`)])];
    }, { supportsNegative: true }), t("space-x-reverse", [() => Y2([S2("--tw-space-x-reverse", "0")]), () => H2(":where(& > :not(:last-child))", [o("--tw-sort", "row-gap"), o("--tw-space-x-reverse", "1")])]), t("space-y-reverse", [() => Y2([S2("--tw-space-y-reverse", "0")]), () => H2(":where(& > :not(:last-child))", [o("--tw-sort", "column-gap"), o("--tw-space-y-reverse", "1")])]), t("accent-auto", [["accent-color", "auto"]]), s("accent", { themeKeys: ["--accent-color", "--color"], handle: (a2) => [o("accent-color", a2)] }), s("caret", { themeKeys: ["--caret-color", "--color"], handle: (a2) => [o("caret-color", a2)] }), s("divide", { themeKeys: ["--divide-color", "--border-color", "--color"], handle: (a2) => [H2(":where(& > :not(:last-child))", [o("--tw-sort", "divide-color"), o("border-color", a2)])] }), t("place-self-auto", [["place-self", "auto"]]), t("place-self-start", [["place-self", "start"]]), t("place-self-end", [["place-self", "end"]]), t("place-self-center", [["place-self", "center"]]), t("place-self-end-safe", [["place-self", "safe end"]]), t("place-self-center-safe", [["place-self", "safe center"]]), t("place-self-stretch", [["place-self", "stretch"]]), t("self-auto", [["align-self", "auto"]]), t("self-start", [["align-self", "flex-start"]]), t("self-end", [["align-self", "flex-end"]]), t("self-center", [["align-self", "center"]]), t("self-end-safe", [["align-self", "safe flex-end"]]), t("self-center-safe", [["align-self", "safe center"]]), t("self-stretch", [["align-self", "stretch"]]), t("self-baseline", [["align-self", "baseline"]]), t("self-baseline-last", [["align-self", "last baseline"]]), t("justify-self-auto", [["justify-self", "auto"]]), t("justify-self-start", [["justify-self", "flex-start"]]), t("justify-self-end", [["justify-self", "flex-end"]]), t("justify-self-center", [["justify-self", "center"]]), t("justify-self-end-safe", [["justify-self", "safe flex-end"]]), t("justify-self-center-safe", [["justify-self", "safe center"]]), t("justify-self-stretch", [["justify-self", "stretch"]]);
    for (let a2 of ["auto", "hidden", "clip", "visible", "scroll"]) t(`overflow-${a2}`, [["overflow", a2]]), t(`overflow-x-${a2}`, [["overflow-x", a2]]), t(`overflow-y-${a2}`, [["overflow-y", a2]]);
    for (let a2 of ["auto", "contain", "none"]) t(`overscroll-${a2}`, [["overscroll-behavior", a2]]), t(`overscroll-x-${a2}`, [["overscroll-behavior-x", a2]]), t(`overscroll-y-${a2}`, [["overscroll-behavior-y", a2]]);
    t("scroll-auto", [["scroll-behavior", "auto"]]), t("scroll-smooth", [["scroll-behavior", "smooth"]]), t("scrollbar-auto", [["scrollbar-width", "auto"]]), t("scrollbar-thin", [["scrollbar-width", "thin"]]), t("scrollbar-none", [["scrollbar-width", "none"]]);
    {
      let a2 = () => Y2([S2("--tw-scrollbar-thumb", "#0000", "<color>"), S2("--tw-scrollbar-track", "#0000", "<color>")]);
      s("scrollbar-thumb", { themeKeys: ["--color"], handle: (g3) => [a2(), o("--tw-scrollbar-thumb", g3), o("scrollbar-color", "var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)")] }), s("scrollbar-track", { themeKeys: ["--color"], handle: (g3) => [a2(), o("--tw-scrollbar-track", g3), o("scrollbar-color", "var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)")] });
    }
    t("scrollbar-gutter-auto", [["scrollbar-gutter", "auto"]]), t("scrollbar-gutter-stable", [["scrollbar-gutter", "stable"]]), t("scrollbar-gutter-both", [["scrollbar-gutter", "stable both-edges"]]), t("truncate", [["overflow", "hidden"], ["text-overflow", "ellipsis"], ["white-space", "nowrap"]]), t("text-ellipsis", [["text-overflow", "ellipsis"]]), t("text-clip", [["text-overflow", "clip"]]), t("hyphens-none", [["-webkit-hyphens", "none"], ["hyphens", "none"]]), t("hyphens-manual", [["-webkit-hyphens", "manual"], ["hyphens", "manual"]]), t("hyphens-auto", [["-webkit-hyphens", "auto"], ["hyphens", "auto"]]), t("whitespace-normal", [["white-space", "normal"]]), t("whitespace-nowrap", [["white-space", "nowrap"]]), t("whitespace-pre", [["white-space", "pre"]]), t("whitespace-pre-line", [["white-space", "pre-line"]]), t("whitespace-pre-wrap", [["white-space", "pre-wrap"]]), t("whitespace-break-spaces", [["white-space", "break-spaces"]]), n("tab", { handleBareValue: ({ value: a2 }) => u(a2) ? a2 : null, handle: (a2) => [o("tab-size", a2)] }), r("tab", () => [{ values: ["2", "4", "8"] }]), t("text-wrap", [["text-wrap", "wrap"]]), t("text-nowrap", [["text-wrap", "nowrap"]]), t("text-balance", [["text-wrap", "balance"]]), t("text-pretty", [["text-wrap", "pretty"]]), t("break-normal", [["overflow-wrap", "normal"], ["word-break", "normal"]]), t("break-all", [["word-break", "break-all"]]), t("break-keep", [["word-break", "keep-all"]]), t("wrap-anywhere", [["overflow-wrap", "anywhere"]]), t("wrap-break-word", [["overflow-wrap", "break-word"]]), t("wrap-normal", [["overflow-wrap", "normal"]]);
    for (let [a2, g3] of [["rounded", ["border-radius"]], ["rounded-s", ["border-start-start-radius", "border-end-start-radius"]], ["rounded-e", ["border-start-end-radius", "border-end-end-radius"]], ["rounded-t", ["border-top-left-radius", "border-top-right-radius"]], ["rounded-r", ["border-top-right-radius", "border-bottom-right-radius"]], ["rounded-b", ["border-bottom-right-radius", "border-bottom-left-radius"]], ["rounded-l", ["border-top-left-radius", "border-bottom-left-radius"]], ["rounded-ss", ["border-start-start-radius"]], ["rounded-se", ["border-start-end-radius"]], ["rounded-ee", ["border-end-end-radius"]], ["rounded-es", ["border-end-start-radius"]], ["rounded-tl", ["border-top-left-radius"]], ["rounded-tr", ["border-top-right-radius"]], ["rounded-br", ["border-bottom-right-radius"]], ["rounded-bl", ["border-bottom-left-radius"]]]) n(a2, { themeKeys: ["--radius"], handle: (w2) => g3.map((C2) => o(C2, w2)), staticValues: { none: g3.map((w2) => o(w2, "0")), full: g3.map((w2) => o(w2, "calc(infinity * 1px)")) } });
    t("border-solid", [["--tw-border-style", "solid"], ["border-style", "solid"]]), t("border-dashed", [["--tw-border-style", "dashed"], ["border-style", "dashed"]]), t("border-dotted", [["--tw-border-style", "dotted"], ["border-style", "dotted"]]), t("border-double", [["--tw-border-style", "double"], ["border-style", "double"]]), t("border-hidden", [["--tw-border-style", "hidden"], ["border-style", "hidden"]]), t("border-none", [["--tw-border-style", "none"], ["border-style", "none"]]);
    {
      let g3 = function(w2, C2) {
        i.functional(w2, (x2) => {
          if (!x2.value) {
            if (x2.modifier) return;
            let $2 = e2.get(["--default-border-width"]) ?? "1px", K2 = C2.width($2);
            return K2 ? [a2(), ...K2] : void 0;
          }
          if (x2.value.kind === "arbitrary") {
            let $2 = x2.value.value;
            switch (x2.value.dataType ?? pe($2, ["color", "line-width", "length"])) {
              case "line-width":
              case "length": {
                if (x2.modifier) return;
                let T2 = C2.width($2);
                return T2 ? [a2(), ...T2] : void 0;
              }
              default:
                return $2 = te2($2, x2.modifier, e2), $2 === null ? void 0 : C2.color($2);
            }
          }
          {
            let $2 = oe(x2, e2, ["--border-color", "--color"]);
            if ($2) return C2.color($2);
          }
          {
            if (x2.modifier) return;
            let $2 = e2.resolve(x2.value.value, ["--border-width"]);
            if ($2) {
              let K2 = C2.width($2);
              return K2 ? [a2(), ...K2] : void 0;
            }
            if (u(x2.value.value)) {
              let K2 = C2.width(`${x2.value.value}px`);
              return K2 ? [a2(), ...K2] : void 0;
            }
          }
        }), r(w2, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--border-color", "--color"], modifiers: Array.from({ length: 21 }, (x2, $2) => `${$2 * 5}`), hasDefaultValue: true }, { values: ["0", "2", "4", "8"], valueThemeKeys: ["--border-width"] }]);
      };
      var E2 = g3;
      let a2 = () => Y2([S2("--tw-border-style", "solid")]);
      g3("border", { width: (w2) => [o("border-style", "var(--tw-border-style)"), o("border-width", w2)], color: (w2) => [o("border-color", w2)] }), g3("border-x", { width: (w2) => [o("border-inline-style", "var(--tw-border-style)"), o("border-inline-width", w2)], color: (w2) => [o("border-inline-color", w2)] }), g3("border-y", { width: (w2) => [o("border-block-style", "var(--tw-border-style)"), o("border-block-width", w2)], color: (w2) => [o("border-block-color", w2)] }), g3("border-s", { width: (w2) => [o("border-inline-start-style", "var(--tw-border-style)"), o("border-inline-start-width", w2)], color: (w2) => [o("border-inline-start-color", w2)] }), g3("border-e", { width: (w2) => [o("border-inline-end-style", "var(--tw-border-style)"), o("border-inline-end-width", w2)], color: (w2) => [o("border-inline-end-color", w2)] }), g3("border-bs", { width: (w2) => [o("border-block-start-style", "var(--tw-border-style)"), o("border-block-start-width", w2)], color: (w2) => [o("border-block-start-color", w2)] }), g3("border-be", { width: (w2) => [o("border-block-end-style", "var(--tw-border-style)"), o("border-block-end-width", w2)], color: (w2) => [o("border-block-end-color", w2)] }), g3("border-t", { width: (w2) => [o("border-top-style", "var(--tw-border-style)"), o("border-top-width", w2)], color: (w2) => [o("border-top-color", w2)] }), g3("border-r", { width: (w2) => [o("border-right-style", "var(--tw-border-style)"), o("border-right-width", w2)], color: (w2) => [o("border-right-color", w2)] }), g3("border-b", { width: (w2) => [o("border-bottom-style", "var(--tw-border-style)"), o("border-bottom-width", w2)], color: (w2) => [o("border-bottom-color", w2)] }), g3("border-l", { width: (w2) => [o("border-left-style", "var(--tw-border-style)"), o("border-left-width", w2)], color: (w2) => [o("border-left-color", w2)] }), n("divide-x", { defaultValue: e2.get(["--default-border-width"]) ?? "1px", themeKeys: ["--divide-width", "--border-width"], handleBareValue: ({ value: w2 }) => u(w2) ? `${w2}px` : null, handle: (w2) => [Y2([S2("--tw-divide-x-reverse", "0")]), H2(":where(& > :not(:last-child))", [o("--tw-sort", "divide-x-width"), a2(), o("--tw-divide-x-reverse", "0"), o("border-inline-style", "var(--tw-border-style)"), o("border-inline-start-width", `calc(${w2} * var(--tw-divide-x-reverse))`), o("border-inline-end-width", `calc(${w2} * calc(1 - var(--tw-divide-x-reverse)))`)])] }), n("divide-y", { defaultValue: e2.get(["--default-border-width"]) ?? "1px", themeKeys: ["--divide-width", "--border-width"], handleBareValue: ({ value: w2 }) => u(w2) ? `${w2}px` : null, handle: (w2) => [Y2([S2("--tw-divide-y-reverse", "0")]), H2(":where(& > :not(:last-child))", [o("--tw-sort", "divide-y-width"), a2(), o("--tw-divide-y-reverse", "0"), o("border-bottom-style", "var(--tw-border-style)"), o("border-top-style", "var(--tw-border-style)"), o("border-top-width", `calc(${w2} * var(--tw-divide-y-reverse))`), o("border-bottom-width", `calc(${w2} * calc(1 - var(--tw-divide-y-reverse)))`)])] }), r("divide-x", () => [{ values: ["0", "2", "4", "8"], valueThemeKeys: ["--divide-width", "--border-width"], hasDefaultValue: true }]), r("divide-y", () => [{ values: ["0", "2", "4", "8"], valueThemeKeys: ["--divide-width", "--border-width"], hasDefaultValue: true }]), t("divide-x-reverse", [() => Y2([S2("--tw-divide-x-reverse", "0")]), () => H2(":where(& > :not(:last-child))", [o("--tw-divide-x-reverse", "1")])]), t("divide-y-reverse", [() => Y2([S2("--tw-divide-y-reverse", "0")]), () => H2(":where(& > :not(:last-child))", [o("--tw-divide-y-reverse", "1")])]);
      for (let w2 of ["solid", "dashed", "dotted", "double", "none"]) t(`divide-${w2}`, [() => H2(":where(& > :not(:last-child))", [o("--tw-sort", "divide-style"), o("--tw-border-style", w2), o("border-style", w2)])]);
    }
    t("bg-auto", [["background-size", "auto"]]), t("bg-cover", [["background-size", "cover"]]), t("bg-contain", [["background-size", "contain"]]), n("bg-size", { handle(a2) {
      if (a2) return [o("background-size", a2)];
    } }), t("bg-fixed", [["background-attachment", "fixed"]]), t("bg-local", [["background-attachment", "local"]]), t("bg-scroll", [["background-attachment", "scroll"]]), t("bg-top", [["background-position", "top"]]), t("bg-top-left", [["background-position", "left top"]]), t("bg-top-right", [["background-position", "right top"]]), t("bg-bottom", [["background-position", "bottom"]]), t("bg-bottom-left", [["background-position", "left bottom"]]), t("bg-bottom-right", [["background-position", "right bottom"]]), t("bg-left", [["background-position", "left"]]), t("bg-right", [["background-position", "right"]]), t("bg-center", [["background-position", "center"]]), n("bg-position", { handle(a2) {
      if (a2) return [o("background-position", a2)];
    } }), t("bg-repeat", [["background-repeat", "repeat"]]), t("bg-no-repeat", [["background-repeat", "no-repeat"]]), t("bg-repeat-x", [["background-repeat", "repeat-x"]]), t("bg-repeat-y", [["background-repeat", "repeat-y"]]), t("bg-repeat-round", [["background-repeat", "round"]]), t("bg-repeat-space", [["background-repeat", "space"]]), t("bg-none", [["background-image", "none"]]);
    {
      let w2 = function($2) {
        let K2 = "in oklab";
        if ($2?.kind === "named") switch ($2.value) {
          case "longer":
          case "shorter":
          case "increasing":
          case "decreasing":
            K2 = `in oklch ${$2.value} hue`;
            break;
          default:
            K2 = `in ${$2.value}`;
        }
        else $2?.kind === "arbitrary" && (K2 = $2.value);
        return K2;
      }, C2 = function({ negative: $2 }) {
        return (K2) => {
          if (!K2.value) return;
          if (K2.value.kind === "arbitrary") {
            if (K2.modifier) return;
            let W2 = K2.value.value;
            return (K2.value.dataType ?? pe(W2, ["angle"])) === "angle" ? (W2 = $2 ? `calc(${W2} * -1)` : `${W2}`, [o("--tw-gradient-position", W2), o("background-image", `linear-gradient(var(--tw-gradient-stops,${W2}))`)]) : $2 ? void 0 : [o("--tw-gradient-position", W2), o("background-image", `linear-gradient(var(--tw-gradient-stops,${W2}))`)];
          }
          let T2 = K2.value.value;
          if (!$2 && g3.has(T2)) T2 = g3.get(T2);
          else if (u(T2)) T2 = $2 ? `calc(${T2}deg * -1)` : `${T2}deg`;
          else return;
          let R2 = w2(K2.modifier);
          return [o("--tw-gradient-position", `${T2}`), J2("@supports (background-image: linear-gradient(in lab, red, red))", [o("--tw-gradient-position", `${T2} ${R2}`)]), o("background-image", "linear-gradient(var(--tw-gradient-stops))")];
        };
      }, x2 = function({ negative: $2 }) {
        return (K2) => {
          if (K2.value?.kind === "arbitrary") {
            if (K2.modifier) return;
            let W2 = K2.value.value;
            return [o("--tw-gradient-position", W2), o("background-image", `conic-gradient(var(--tw-gradient-stops,${W2}))`)];
          }
          let T2 = w2(K2.modifier);
          if (!K2.value) return [o("--tw-gradient-position", T2), o("background-image", "conic-gradient(var(--tw-gradient-stops))")];
          let R2 = K2.value.value;
          if (u(R2)) return R2 = $2 ? `calc(${R2}deg * -1)` : `${R2}deg`, [o("--tw-gradient-position", `from ${R2} ${T2}`), o("background-image", "conic-gradient(var(--tw-gradient-stops))")];
        };
      };
      var j2 = w2, q2 = C2, G2 = x2;
      let a2 = ["oklab", "oklch", "srgb", "hsl", "longer", "shorter", "increasing", "decreasing"], g3 = /* @__PURE__ */ new Map([["to-t", "to top"], ["to-tr", "to top right"], ["to-r", "to right"], ["to-br", "to bottom right"], ["to-b", "to bottom"], ["to-bl", "to bottom left"], ["to-l", "to left"], ["to-tl", "to top left"]]);
      i.functional("-bg-linear", C2({ negative: true })), i.functional("bg-linear", C2({ negative: false })), r("bg-linear", () => [{ values: [...g3.keys()], modifiers: a2 }, { values: ["0", "30", "60", "90", "120", "150", "180", "210", "240", "270", "300", "330"], supportsNegative: true, modifiers: a2 }]), i.functional("-bg-conic", x2({ negative: true })), i.functional("bg-conic", x2({ negative: false })), r("bg-conic", () => [{ hasDefaultValue: true, modifiers: a2 }, { values: ["0", "30", "60", "90", "120", "150", "180", "210", "240", "270", "300", "330"], supportsNegative: true, modifiers: a2 }]), i.functional("bg-radial", ($2) => {
        if (!$2.value) {
          let K2 = w2($2.modifier);
          return [o("--tw-gradient-position", K2), o("background-image", "radial-gradient(var(--tw-gradient-stops))")];
        }
        if ($2.value.kind === "arbitrary") {
          if ($2.modifier) return;
          let K2 = $2.value.value;
          return [o("--tw-gradient-position", K2), o("background-image", `radial-gradient(var(--tw-gradient-stops,${K2}))`)];
        }
      }), r("bg-radial", () => [{ hasDefaultValue: true, modifiers: a2 }]);
    }
    i.functional("bg", (a2) => {
      if (a2.value) {
        if (a2.value.kind === "arbitrary") {
          let g3 = a2.value.value;
          switch (a2.value.dataType ?? pe(g3, ["image", "color", "percentage", "position", "bg-size", "length", "url"])) {
            case "percentage":
            case "position":
              return a2.modifier ? void 0 : [o("background-position", g3)];
            case "bg-size":
            case "length":
            case "size":
              return a2.modifier ? void 0 : [o("background-size", g3)];
            case "image":
            case "url":
              return a2.modifier ? void 0 : [o("background-image", g3)];
            default:
              return g3 = te2(g3, a2.modifier, e2), g3 === null ? void 0 : [o("background-color", g3)];
          }
        }
        {
          let g3 = oe(a2, e2, ["--background-color", "--color"]);
          if (g3) return [o("background-color", g3)];
        }
        {
          if (a2.modifier) return;
          let g3 = e2.resolve(a2.value.value, ["--background-image"]);
          if (g3) return [o("background-image", g3)];
        }
      }
    }), r("bg", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (a2, g3) => `${g3 * 5}`) }, { values: [], valueThemeKeys: ["--background-image"] }]);
    let v2 = () => Y2([S2("--tw-gradient-position"), S2("--tw-gradient-from", "#0000", "<color>"), S2("--tw-gradient-via", "#0000", "<color>"), S2("--tw-gradient-to", "#0000", "<color>"), S2("--tw-gradient-stops"), S2("--tw-gradient-via-stops"), S2("--tw-gradient-from-position", "0%", "<length-percentage>"), S2("--tw-gradient-via-position", "50%", "<length-percentage>"), S2("--tw-gradient-to-position", "100%", "<length-percentage>")]);
    function k(a2, g3) {
      i.functional(a2, (w2) => {
        if (w2.value) {
          if (w2.value.kind === "arbitrary") {
            let C2 = w2.value.value;
            switch (w2.value.dataType ?? pe(C2, ["color", "length", "percentage"])) {
              case "length":
              case "percentage":
                return w2.modifier ? void 0 : g3.position(C2);
              default:
                return C2 = te2(C2, w2.modifier, e2), C2 === null ? void 0 : g3.color(C2);
            }
          }
          {
            let C2 = oe(w2, e2, ["--background-color", "--color"]);
            if (C2) return g3.color(C2);
          }
          {
            if (w2.modifier) return;
            let C2 = e2.resolve(w2.value.value, ["--gradient-color-stop-positions"]);
            if (C2) return g3.position(C2);
            if (w2.value.value[w2.value.value.length - 1] === "%" && u(w2.value.value.slice(0, -1))) return g3.position(w2.value.value);
          }
        }
      }), r(a2, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (w2, C2) => `${C2 * 5}`) }, { values: Array.from({ length: 21 }, (w2, C2) => `${C2 * 5}%`), valueThemeKeys: ["--gradient-color-stop-positions"] }]);
    }
    k("from", { color: (a2) => [v2(), o("--tw-sort", "--tw-gradient-from"), o("--tw-gradient-from", a2), o("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")], position: (a2) => [v2(), o("--tw-gradient-from-position", a2)] }), t("via-none", [["--tw-gradient-via-stops", "initial"]]), k("via", { color: (a2) => [v2(), o("--tw-sort", "--tw-gradient-via"), o("--tw-gradient-via", a2), o("--tw-gradient-via-stops", "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)"), o("--tw-gradient-stops", "var(--tw-gradient-via-stops)")], position: (a2) => [v2(), o("--tw-gradient-via-position", a2)] }), k("to", { color: (a2) => [v2(), o("--tw-sort", "--tw-gradient-to"), o("--tw-gradient-to", a2), o("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")], position: (a2) => [v2(), o("--tw-gradient-to-position", a2)] }), t("mask-none", [["mask-image", "none"]]), i.functional("mask", (a2) => {
      if (!a2.value || a2.modifier || a2.value.kind !== "arbitrary") return;
      let g3 = a2.value.value;
      switch (a2.value.dataType ?? pe(g3, ["image", "percentage", "position", "bg-size", "length", "url"])) {
        case "percentage":
        case "position":
          return a2.modifier ? void 0 : [o("mask-position", g3)];
        case "bg-size":
        case "length":
        case "size":
          return [o("mask-size", g3)];
        default:
          return [o("mask-image", g3)];
      }
    }), t("mask-add", [["mask-composite", "add"]]), t("mask-subtract", [["mask-composite", "subtract"]]), t("mask-intersect", [["mask-composite", "intersect"]]), t("mask-exclude", [["mask-composite", "exclude"]]), t("mask-alpha", [["mask-mode", "alpha"]]), t("mask-luminance", [["mask-mode", "luminance"]]), t("mask-match", [["mask-mode", "match-source"]]), t("mask-type-alpha", [["mask-type", "alpha"]]), t("mask-type-luminance", [["mask-type", "luminance"]]), t("mask-auto", [["mask-size", "auto"]]), t("mask-cover", [["mask-size", "cover"]]), t("mask-contain", [["mask-size", "contain"]]), n("mask-size", { handle(a2) {
      if (a2) return [o("mask-size", a2)];
    } }), t("mask-top", [["mask-position", "top"]]), t("mask-top-left", [["mask-position", "left top"]]), t("mask-top-right", [["mask-position", "right top"]]), t("mask-bottom", [["mask-position", "bottom"]]), t("mask-bottom-left", [["mask-position", "left bottom"]]), t("mask-bottom-right", [["mask-position", "right bottom"]]), t("mask-left", [["mask-position", "left"]]), t("mask-right", [["mask-position", "right"]]), t("mask-center", [["mask-position", "center"]]), n("mask-position", { handle(a2) {
      if (a2) return [o("mask-position", a2)];
    } }), t("mask-repeat", [["mask-repeat", "repeat"]]), t("mask-no-repeat", [["mask-repeat", "no-repeat"]]), t("mask-repeat-x", [["mask-repeat", "repeat-x"]]), t("mask-repeat-y", [["mask-repeat", "repeat-y"]]), t("mask-repeat-round", [["mask-repeat", "round"]]), t("mask-repeat-space", [["mask-repeat", "space"]]), t("mask-clip-border", [["mask-clip", "border-box"]]), t("mask-clip-padding", [["mask-clip", "padding-box"]]), t("mask-clip-content", [["mask-clip", "content-box"]]), t("mask-clip-fill", [["mask-clip", "fill-box"]]), t("mask-clip-stroke", [["mask-clip", "stroke-box"]]), t("mask-clip-view", [["mask-clip", "view-box"]]), t("mask-no-clip", [["mask-clip", "no-clip"]]), t("mask-origin-border", [["mask-origin", "border-box"]]), t("mask-origin-padding", [["mask-origin", "padding-box"]]), t("mask-origin-content", [["mask-origin", "content-box"]]), t("mask-origin-fill", [["mask-origin", "fill-box"]]), t("mask-origin-stroke", [["mask-origin", "stroke-box"]]), t("mask-origin-view", [["mask-origin", "view-box"]]);
    let y2 = () => Y2([S2("--tw-mask-linear", "linear-gradient(#fff, #fff)"), S2("--tw-mask-radial", "linear-gradient(#fff, #fff)"), S2("--tw-mask-conic", "linear-gradient(#fff, #fff)")]);
    function N2(a2, g3) {
      i.functional(a2, (w2) => {
        if (w2.value) {
          if (w2.value.kind === "arbitrary") {
            let C2 = w2.value.value;
            switch (w2.value.dataType ?? pe(C2, ["length", "percentage", "color"])) {
              case "color":
                return C2 = te2(C2, w2.modifier, e2), C2 === null ? void 0 : g3.color(C2);
              case "percentage":
                return w2.modifier || !u(C2.slice(0, -1)) ? void 0 : g3.position(C2);
              default:
                return w2.modifier ? void 0 : g3.position(C2);
            }
          }
          {
            let C2 = oe(w2, e2, ["--background-color", "--color"]);
            if (C2) return g3.color(C2);
          }
          {
            if (w2.modifier) return;
            let C2 = pe(w2.value.value, ["number", "percentage"]);
            if (!C2) return;
            switch (C2) {
              case "number":
                return !e2.resolve(null, ["--spacing"]) || !ue(w2.value.value) ? void 0 : g3.position(`--spacing(${w2.value.value})`);
              case "percentage":
                return u(w2.value.value.slice(0, -1)) ? g3.position(w2.value.value) : void 0;
              default:
                return;
            }
          }
        }
      }), r(a2, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (w2, C2) => `${C2 * 5}`) }, { values: Array.from({ length: 21 }, (w2, C2) => `${C2 * 5}%`), valueThemeKeys: ["--gradient-color-stop-positions"] }]), r(a2, () => [{ values: Array.from({ length: 21 }, (w2, C2) => `${C2 * 5}%`) }, { values: e2.get(["--spacing"]) ? wt : [] }, { values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (w2, C2) => `${C2 * 5}`) }]);
    }
    let A2 = () => Y2([S2("--tw-mask-left", "linear-gradient(#fff, #fff)"), S2("--tw-mask-right", "linear-gradient(#fff, #fff)"), S2("--tw-mask-bottom", "linear-gradient(#fff, #fff)"), S2("--tw-mask-top", "linear-gradient(#fff, #fff)")]);
    function b2(a2, g3, w2) {
      N2(a2, { color(C2) {
        let x2 = [y2(), A2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")];
        for (let $2 of ["top", "right", "bottom", "left"]) w2[$2] && (x2.push(o(`--tw-mask-${$2}`, `linear-gradient(to ${$2}, var(--tw-mask-${$2}-from-color) var(--tw-mask-${$2}-from-position), var(--tw-mask-${$2}-to-color) var(--tw-mask-${$2}-to-position))`)), x2.push(Y2([S2(`--tw-mask-${$2}-from-position`, "0%"), S2(`--tw-mask-${$2}-to-position`, "100%"), S2(`--tw-mask-${$2}-from-color`, "black"), S2(`--tw-mask-${$2}-to-color`, "transparent")])), x2.push(o(`--tw-mask-${$2}-${g3}-color`, C2)));
        return x2;
      }, position(C2) {
        let x2 = [y2(), A2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")];
        for (let $2 of ["top", "right", "bottom", "left"]) w2[$2] && (x2.push(o(`--tw-mask-${$2}`, `linear-gradient(to ${$2}, var(--tw-mask-${$2}-from-color) var(--tw-mask-${$2}-from-position), var(--tw-mask-${$2}-to-color) var(--tw-mask-${$2}-to-position))`)), x2.push(Y2([S2(`--tw-mask-${$2}-from-position`, "0%"), S2(`--tw-mask-${$2}-to-position`, "100%"), S2(`--tw-mask-${$2}-from-color`, "black"), S2(`--tw-mask-${$2}-to-color`, "transparent")])), x2.push(o(`--tw-mask-${$2}-${g3}-position`, C2)));
        return x2;
      } });
    }
    b2("mask-x-from", "from", { top: false, right: true, bottom: false, left: true }), b2("mask-x-to", "to", { top: false, right: true, bottom: false, left: true }), b2("mask-y-from", "from", { top: true, right: false, bottom: true, left: false }), b2("mask-y-to", "to", { top: true, right: false, bottom: true, left: false }), b2("mask-t-from", "from", { top: true, right: false, bottom: false, left: false }), b2("mask-t-to", "to", { top: true, right: false, bottom: false, left: false }), b2("mask-r-from", "from", { top: false, right: true, bottom: false, left: false }), b2("mask-r-to", "to", { top: false, right: true, bottom: false, left: false }), b2("mask-b-from", "from", { top: false, right: false, bottom: true, left: false }), b2("mask-b-to", "to", { top: false, right: false, bottom: true, left: false }), b2("mask-l-from", "from", { top: false, right: false, bottom: false, left: true }), b2("mask-l-to", "to", { top: false, right: false, bottom: false, left: true });
    let D2 = () => Y2([S2("--tw-mask-linear-position", "0deg"), S2("--tw-mask-linear-from-position", "0%"), S2("--tw-mask-linear-to-position", "100%"), S2("--tw-mask-linear-from-color", "black"), S2("--tw-mask-linear-to-color", "transparent")]);
    n("mask-linear", { defaultValue: null, supportsNegative: true, supportsFractions: false, handleBareValue({ value: a2 }) {
      if (!u(a2)) return null;
      let g3 = Number(a2);
      return g3 === 0 ? "0deg" : g3 === 1 ? "1deg" : `calc(1deg * ${a2})`;
    }, handleNegativeBareValue({ value: a2 }) {
      if (!u(a2)) return null;
      let g3 = Number(a2);
      return g3 === 0 ? "0deg" : g3 === 1 ? "-1deg" : `calc(1deg * -${a2})`;
    }, handle: (a2) => [y2(), D2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)))"), o("--tw-mask-linear-position", a2)] }), r("mask-linear", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"] }]), N2("mask-linear-from", { color: (a2) => [y2(), D2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), o("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), o("--tw-mask-linear-from-color", a2)], position: (a2) => [y2(), D2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), o("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), o("--tw-mask-linear-from-position", a2)] }), N2("mask-linear-to", { color: (a2) => [y2(), D2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), o("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), o("--tw-mask-linear-to-color", a2)], position: (a2) => [y2(), D2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), o("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), o("--tw-mask-linear-to-position", a2)] });
    let O2 = () => Y2([S2("--tw-mask-radial-from-position", "0%"), S2("--tw-mask-radial-to-position", "100%"), S2("--tw-mask-radial-from-color", "black"), S2("--tw-mask-radial-to-color", "transparent"), S2("--tw-mask-radial-shape", "ellipse"), S2("--tw-mask-radial-size", "farthest-corner"), S2("--tw-mask-radial-position", "center")]);
    t("mask-circle", [["--tw-mask-radial-shape", "circle"]]), t("mask-ellipse", [["--tw-mask-radial-shape", "ellipse"]]), t("mask-radial-closest-side", [["--tw-mask-radial-size", "closest-side"]]), t("mask-radial-farthest-side", [["--tw-mask-radial-size", "farthest-side"]]), t("mask-radial-closest-corner", [["--tw-mask-radial-size", "closest-corner"]]), t("mask-radial-farthest-corner", [["--tw-mask-radial-size", "farthest-corner"]]), t("mask-radial-at-top", [["--tw-mask-radial-position", "top"]]), t("mask-radial-at-top-left", [["--tw-mask-radial-position", "top left"]]), t("mask-radial-at-top-right", [["--tw-mask-radial-position", "top right"]]), t("mask-radial-at-bottom", [["--tw-mask-radial-position", "bottom"]]), t("mask-radial-at-bottom-left", [["--tw-mask-radial-position", "bottom left"]]), t("mask-radial-at-bottom-right", [["--tw-mask-radial-position", "bottom right"]]), t("mask-radial-at-left", [["--tw-mask-radial-position", "left"]]), t("mask-radial-at-right", [["--tw-mask-radial-position", "right"]]), t("mask-radial-at-center", [["--tw-mask-radial-position", "center"]]), n("mask-radial-at", { defaultValue: null, supportsNegative: false, supportsFractions: false, handle: (a2) => [o("--tw-mask-radial-position", a2)] }), n("mask-radial", { defaultValue: null, supportsNegative: false, supportsFractions: false, handle: (a2) => [y2(), O2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops, var(--tw-mask-radial-size)))"), o("--tw-mask-radial-size", a2)] }), N2("mask-radial-from", { color: (a2) => [y2(), O2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), o("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), o("--tw-mask-radial-from-color", a2)], position: (a2) => [y2(), O2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), o("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), o("--tw-mask-radial-from-position", a2)] }), N2("mask-radial-to", { color: (a2) => [y2(), O2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), o("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), o("--tw-mask-radial-to-color", a2)], position: (a2) => [y2(), O2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), o("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), o("--tw-mask-radial-to-position", a2)] });
    let P2 = () => Y2([S2("--tw-mask-conic-position", "0deg"), S2("--tw-mask-conic-from-position", "0%"), S2("--tw-mask-conic-to-position", "100%"), S2("--tw-mask-conic-from-color", "black"), S2("--tw-mask-conic-to-color", "transparent")]);
    n("mask-conic", { defaultValue: null, supportsNegative: true, supportsFractions: false, handleBareValue({ value: a2 }) {
      if (!u(a2)) return null;
      let g3 = Number(a2);
      return g3 === 0 ? "0deg" : g3 === 1 ? "1deg" : `calc(1deg * ${a2})`;
    }, handleNegativeBareValue({ value: a2 }) {
      if (!u(a2)) return null;
      let g3 = Number(a2);
      return g3 === 0 ? "0deg" : g3 === 1 ? "-1deg" : `calc(1deg * -${a2})`;
    }, handle: (a2) => [y2(), P2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)))"), o("--tw-mask-conic-position", a2)] }), r("mask-conic", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"] }]), N2("mask-conic-from", { color: (a2) => [y2(), P2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), o("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), o("--tw-mask-conic-from-color", a2)], position: (a2) => [y2(), P2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), o("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), o("--tw-mask-conic-from-position", a2)] }), N2("mask-conic-to", { color: (a2) => [y2(), P2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), o("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), o("--tw-mask-conic-to-color", a2)], position: (a2) => [y2(), P2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), o("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), o("--tw-mask-conic-to-position", a2)] }), t("box-decoration-slice", [["-webkit-box-decoration-break", "slice"], ["box-decoration-break", "slice"]]), t("box-decoration-clone", [["-webkit-box-decoration-break", "clone"], ["box-decoration-break", "clone"]]), t("bg-clip-text", [["background-clip", "text"]]), t("bg-clip-border", [["background-clip", "border-box"]]), t("bg-clip-padding", [["background-clip", "padding-box"]]), t("bg-clip-content", [["background-clip", "content-box"]]), t("bg-origin-border", [["background-origin", "border-box"]]), t("bg-origin-padding", [["background-origin", "padding-box"]]), t("bg-origin-content", [["background-origin", "content-box"]]);
    for (let a2 of ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]) t(`bg-blend-${a2}`, [["background-blend-mode", a2]]), t(`mix-blend-${a2}`, [["mix-blend-mode", a2]]);
    t("mix-blend-plus-darker", [["mix-blend-mode", "plus-darker"]]), t("mix-blend-plus-lighter", [["mix-blend-mode", "plus-lighter"]]), t("fill-none", [["fill", "none"]]), i.functional("fill", (a2) => {
      if (!a2.value) return;
      if (a2.value.kind === "arbitrary") {
        let w2 = te2(a2.value.value, a2.modifier, e2);
        return w2 === null ? void 0 : [o("fill", w2)];
      }
      let g3 = oe(a2, e2, ["--fill", "--color"]);
      if (g3) return [o("fill", g3)];
    }), r("fill", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--fill", "--color"], modifiers: Array.from({ length: 21 }, (a2, g3) => `${g3 * 5}`) }]), t("stroke-none", [["stroke", "none"]]), i.functional("stroke", (a2) => {
      if (a2.value) {
        if (a2.value.kind === "arbitrary") {
          let g3 = a2.value.value;
          switch (a2.value.dataType ?? pe(g3, ["color", "number", "length", "percentage"])) {
            case "number":
            case "length":
            case "percentage":
              return a2.modifier ? void 0 : [o("stroke-width", g3)];
            default:
              return g3 = te2(a2.value.value, a2.modifier, e2), g3 === null ? void 0 : [o("stroke", g3)];
          }
        }
        {
          let g3 = oe(a2, e2, ["--stroke", "--color"]);
          if (g3) return [o("stroke", g3)];
        }
        {
          let g3 = e2.resolve(a2.value.value, ["--stroke-width"]);
          if (g3) return [o("stroke-width", g3)];
          if (u(a2.value.value)) return [o("stroke-width", a2.value.value)];
        }
      }
    }), r("stroke", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--stroke", "--color"], modifiers: Array.from({ length: 21 }, (a2, g3) => `${g3 * 5}`) }, { values: ["0", "1", "2", "3"], valueThemeKeys: ["--stroke-width"] }]), t("object-contain", [["object-fit", "contain"]]), t("object-cover", [["object-fit", "cover"]]), t("object-fill", [["object-fit", "fill"]]), t("object-none", [["object-fit", "none"]]), t("object-scale-down", [["object-fit", "scale-down"]]), n("object", { themeKeys: ["--object-position"], handle: (a2) => [o("object-position", a2)], staticValues: { top: [o("object-position", "top")], "top-left": [o("object-position", "left top")], "top-right": [o("object-position", "right top")], bottom: [o("object-position", "bottom")], "bottom-left": [o("object-position", "left bottom")], "bottom-right": [o("object-position", "right bottom")], left: [o("object-position", "left")], right: [o("object-position", "right")], center: [o("object-position", "center")] } });
    for (let [a2, g3] of [["p", "padding"], ["px", "padding-inline"], ["py", "padding-block"], ["ps", "padding-inline-start"], ["pe", "padding-inline-end"], ["pbs", "padding-block-start"], ["pbe", "padding-block-end"], ["pt", "padding-top"], ["pr", "padding-right"], ["pb", "padding-bottom"], ["pl", "padding-left"]]) l3(a2, ["--padding", "--spacing"], (w2) => [o(g3, w2)]);
    t("text-left", [["text-align", "left"]]), t("text-center", [["text-align", "center"]]), t("text-right", [["text-align", "right"]]), t("text-justify", [["text-align", "justify"]]), t("text-start", [["text-align", "start"]]), t("text-end", [["text-align", "end"]]), l3("indent", ["--text-indent", "--spacing"], (a2) => [o("text-indent", a2)], { supportsNegative: true }), t("align-baseline", [["vertical-align", "baseline"]]), t("align-top", [["vertical-align", "top"]]), t("align-middle", [["vertical-align", "middle"]]), t("align-bottom", [["vertical-align", "bottom"]]), t("align-text-top", [["vertical-align", "text-top"]]), t("align-text-bottom", [["vertical-align", "text-bottom"]]), t("align-sub", [["vertical-align", "sub"]]), t("align-super", [["vertical-align", "super"]]), n("align", { themeKeys: [], handle: (a2) => [o("vertical-align", a2)] }), i.functional("font", (a2) => {
      if (!(!a2.value || a2.modifier)) {
        if (a2.value.kind === "arbitrary") {
          let g3 = a2.value.value;
          switch (a2.value.dataType ?? pe(g3, ["number", "generic-name", "family-name"])) {
            case "generic-name":
            case "family-name":
              return [o("font-family", g3)];
            default:
              return [Y2([S2("--tw-font-weight")]), o("--tw-font-weight", g3), o("font-weight", g3)];
          }
        }
        {
          let g3 = e2.resolveWith(a2.value.value, ["--font"], ["--font-feature-settings", "--font-variation-settings"]);
          if (g3) {
            let [w2, C2 = {}] = g3;
            return [o("font-family", w2), o("font-feature-settings", C2["--font-feature-settings"]), o("font-variation-settings", C2["--font-variation-settings"])];
          }
        }
        {
          let g3 = e2.resolve(a2.value.value, ["--font-weight"]);
          if (g3) return [Y2([S2("--tw-font-weight")]), o("--tw-font-weight", g3), o("font-weight", g3)];
        }
      }
    }), r("font", () => [{ values: [], valueThemeKeys: ["--font"] }, { values: [], valueThemeKeys: ["--font-weight"] }]), n("font-features", { themeKeys: [], handle: (a2) => [o("font-feature-settings", a2)] }), t("uppercase", [["text-transform", "uppercase"]]), t("lowercase", [["text-transform", "lowercase"]]), t("capitalize", [["text-transform", "capitalize"]]), t("normal-case", [["text-transform", "none"]]), t("italic", [["font-style", "italic"]]), t("not-italic", [["font-style", "normal"]]), t("underline", [["text-decoration-line", "underline"]]), t("overline", [["text-decoration-line", "overline"]]), t("line-through", [["text-decoration-line", "line-through"]]), t("no-underline", [["text-decoration-line", "none"]]), t("font-stretch-normal", [["font-stretch", "normal"]]), t("font-stretch-ultra-condensed", [["font-stretch", "ultra-condensed"]]), t("font-stretch-extra-condensed", [["font-stretch", "extra-condensed"]]), t("font-stretch-condensed", [["font-stretch", "condensed"]]), t("font-stretch-semi-condensed", [["font-stretch", "semi-condensed"]]), t("font-stretch-semi-expanded", [["font-stretch", "semi-expanded"]]), t("font-stretch-expanded", [["font-stretch", "expanded"]]), t("font-stretch-extra-expanded", [["font-stretch", "extra-expanded"]]), t("font-stretch-ultra-expanded", [["font-stretch", "ultra-expanded"]]), n("font-stretch", { handleBareValue: ({ value: a2 }) => {
      if (!a2.endsWith("%")) return null;
      let g3 = Number(a2.slice(0, -1));
      return !u(g3) || Number.isNaN(g3) || g3 < 50 || g3 > 200 ? null : a2;
    }, handle: (a2) => [o("font-stretch", a2)] }), r("font-stretch", () => [{ values: ["50%", "75%", "90%", "95%", "100%", "105%", "110%", "125%", "150%", "200%"] }]), s("placeholder", { themeKeys: ["--placeholder-color", "--color"], handle: (a2) => [H2("&::placeholder", [o("--tw-sort", "placeholder-color"), o("color", a2)])] }), t("decoration-solid", [["text-decoration-style", "solid"]]), t("decoration-double", [["text-decoration-style", "double"]]), t("decoration-dotted", [["text-decoration-style", "dotted"]]), t("decoration-dashed", [["text-decoration-style", "dashed"]]), t("decoration-wavy", [["text-decoration-style", "wavy"]]), t("decoration-auto", [["text-decoration-thickness", "auto"]]), t("decoration-from-font", [["text-decoration-thickness", "from-font"]]), i.functional("decoration", (a2) => {
      if (a2.value) {
        if (a2.value.kind === "arbitrary") {
          let g3 = a2.value.value;
          switch (a2.value.dataType ?? pe(g3, ["color", "length", "percentage"])) {
            case "length":
            case "percentage":
              return a2.modifier ? void 0 : [o("text-decoration-thickness", g3)];
            default:
              return g3 = te2(g3, a2.modifier, e2), g3 === null ? void 0 : [o("text-decoration-color", g3)];
          }
        }
        {
          let g3 = e2.resolve(a2.value.value, ["--text-decoration-thickness"]);
          if (g3) return a2.modifier ? void 0 : [o("text-decoration-thickness", g3)];
          if (u(a2.value.value)) return a2.modifier ? void 0 : [o("text-decoration-thickness", `${a2.value.value}px`)];
        }
        {
          let g3 = oe(a2, e2, ["--text-decoration-color", "--color"]);
          if (g3) return [o("text-decoration-color", g3)];
        }
      }
    }), r("decoration", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-decoration-color", "--color"], modifiers: Array.from({ length: 21 }, (a2, g3) => `${g3 * 5}`) }, { values: ["0", "1", "2"], valueThemeKeys: ["--text-decoration-thickness"] }]), n("animate", { themeKeys: ["--animate"], handle: (a2) => [o("animation", a2)], staticValues: { none: [o("animation", "none")] } });
    {
      let a2 = ["var(--tw-blur,)", "var(--tw-brightness,)", "var(--tw-contrast,)", "var(--tw-grayscale,)", "var(--tw-hue-rotate,)", "var(--tw-invert,)", "var(--tw-saturate,)", "var(--tw-sepia,)", "var(--tw-drop-shadow,)"].join(" "), g3 = ["var(--tw-backdrop-blur,)", "var(--tw-backdrop-brightness,)", "var(--tw-backdrop-contrast,)", "var(--tw-backdrop-grayscale,)", "var(--tw-backdrop-hue-rotate,)", "var(--tw-backdrop-invert,)", "var(--tw-backdrop-opacity,)", "var(--tw-backdrop-saturate,)", "var(--tw-backdrop-sepia,)"].join(" "), w2 = () => Y2([S2("--tw-blur"), S2("--tw-brightness"), S2("--tw-contrast"), S2("--tw-grayscale"), S2("--tw-hue-rotate"), S2("--tw-invert"), S2("--tw-opacity"), S2("--tw-saturate"), S2("--tw-sepia"), S2("--tw-drop-shadow"), S2("--tw-drop-shadow-color"), S2("--tw-drop-shadow-alpha", "100%", "<percentage>"), S2("--tw-drop-shadow-size")]), C2 = () => Y2([S2("--tw-backdrop-blur"), S2("--tw-backdrop-brightness"), S2("--tw-backdrop-contrast"), S2("--tw-backdrop-grayscale"), S2("--tw-backdrop-hue-rotate"), S2("--tw-backdrop-invert"), S2("--tw-backdrop-opacity"), S2("--tw-backdrop-saturate"), S2("--tw-backdrop-sepia")]);
      i.functional("filter", (x2) => {
        if (!x2.modifier) {
          if (x2.value === null) return [w2(), o("filter", a2)];
          if (x2.value.kind === "arbitrary") return [o("filter", x2.value.value)];
          if (x2.value.value === "none") return [o("filter", "none")];
        }
      }), i.functional("backdrop-filter", (x2) => {
        if (!x2.modifier) {
          if (x2.value === null) return [C2(), o("-webkit-backdrop-filter", g3), o("backdrop-filter", g3)];
          if (x2.value.kind === "arbitrary") return [o("-webkit-backdrop-filter", x2.value.value), o("backdrop-filter", x2.value.value)];
          if (x2.value.value === "none") return [o("-webkit-backdrop-filter", "none"), o("backdrop-filter", "none")];
        }
      }), n("blur", { themeKeys: ["--blur"], handle: (x2) => [w2(), o("--tw-blur", `blur(${x2})`), o("filter", a2)], staticValues: { none: [w2(), o("--tw-blur", " "), o("filter", a2)] } }), n("backdrop-blur", { themeKeys: ["--backdrop-blur", "--blur"], handle: (x2) => [C2(), o("--tw-backdrop-blur", `blur(${x2})`), o("-webkit-backdrop-filter", g3), o("backdrop-filter", g3)], staticValues: { none: [C2(), o("--tw-backdrop-blur", " "), o("-webkit-backdrop-filter", g3), o("backdrop-filter", g3)] } }), n("brightness", { themeKeys: ["--brightness"], handleBareValue: ({ value: x2 }) => u(x2) ? `${x2}%` : null, handle: (x2) => [w2(), o("--tw-brightness", `brightness(${x2})`), o("filter", a2)] }), n("backdrop-brightness", { themeKeys: ["--backdrop-brightness", "--brightness"], handleBareValue: ({ value: x2 }) => u(x2) ? `${x2}%` : null, handle: (x2) => [C2(), o("--tw-backdrop-brightness", `brightness(${x2})`), o("-webkit-backdrop-filter", g3), o("backdrop-filter", g3)] }), r("brightness", () => [{ values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--brightness"] }]), r("backdrop-brightness", () => [{ values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--backdrop-brightness", "--brightness"] }]), n("contrast", { themeKeys: ["--contrast"], handleBareValue: ({ value: x2 }) => u(x2) ? `${x2}%` : null, handle: (x2) => [w2(), o("--tw-contrast", `contrast(${x2})`), o("filter", a2)] }), n("backdrop-contrast", { themeKeys: ["--backdrop-contrast", "--contrast"], handleBareValue: ({ value: x2 }) => u(x2) ? `${x2}%` : null, handle: (x2) => [C2(), o("--tw-backdrop-contrast", `contrast(${x2})`), o("-webkit-backdrop-filter", g3), o("backdrop-filter", g3)] }), r("contrast", () => [{ values: ["0", "50", "75", "100", "125", "150", "200"], valueThemeKeys: ["--contrast"] }]), r("backdrop-contrast", () => [{ values: ["0", "50", "75", "100", "125", "150", "200"], valueThemeKeys: ["--backdrop-contrast", "--contrast"] }]), n("grayscale", { themeKeys: ["--grayscale"], handleBareValue: ({ value: x2 }) => u(x2) ? `${x2}%` : null, defaultValue: "100%", handle: (x2) => [w2(), o("--tw-grayscale", `grayscale(${x2})`), o("filter", a2)] }), n("backdrop-grayscale", { themeKeys: ["--backdrop-grayscale", "--grayscale"], handleBareValue: ({ value: x2 }) => u(x2) ? `${x2}%` : null, defaultValue: "100%", handle: (x2) => [C2(), o("--tw-backdrop-grayscale", `grayscale(${x2})`), o("-webkit-backdrop-filter", g3), o("backdrop-filter", g3)] }), r("grayscale", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--grayscale"], hasDefaultValue: true }]), r("backdrop-grayscale", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--backdrop-grayscale", "--grayscale"], hasDefaultValue: true }]), n("hue-rotate", { supportsNegative: true, themeKeys: ["--hue-rotate"], handleBareValue: ({ value: x2 }) => u(x2) ? `${x2}deg` : null, handle: (x2) => [w2(), o("--tw-hue-rotate", `hue-rotate(${x2})`), o("filter", a2)] }), n("backdrop-hue-rotate", { supportsNegative: true, themeKeys: ["--backdrop-hue-rotate", "--hue-rotate"], handleBareValue: ({ value: x2 }) => u(x2) ? `${x2}deg` : null, handle: (x2) => [C2(), o("--tw-backdrop-hue-rotate", `hue-rotate(${x2})`), o("-webkit-backdrop-filter", g3), o("backdrop-filter", g3)] }), r("hue-rotate", () => [{ values: ["0", "15", "30", "60", "90", "180"], valueThemeKeys: ["--hue-rotate"] }]), r("backdrop-hue-rotate", () => [{ values: ["0", "15", "30", "60", "90", "180"], valueThemeKeys: ["--backdrop-hue-rotate", "--hue-rotate"] }]), n("invert", { themeKeys: ["--invert"], handleBareValue: ({ value: x2 }) => u(x2) ? `${x2}%` : null, defaultValue: "100%", handle: (x2) => [w2(), o("--tw-invert", `invert(${x2})`), o("filter", a2)] }), n("backdrop-invert", { themeKeys: ["--backdrop-invert", "--invert"], handleBareValue: ({ value: x2 }) => u(x2) ? `${x2}%` : null, defaultValue: "100%", handle: (x2) => [C2(), o("--tw-backdrop-invert", `invert(${x2})`), o("-webkit-backdrop-filter", g3), o("backdrop-filter", g3)] }), r("invert", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--invert"], hasDefaultValue: true }]), r("backdrop-invert", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--backdrop-invert", "--invert"], hasDefaultValue: true }]), n("saturate", { themeKeys: ["--saturate"], handleBareValue: ({ value: x2 }) => u(x2) ? `${x2}%` : null, handle: (x2) => [w2(), o("--tw-saturate", `saturate(${x2})`), o("filter", a2)] }), n("backdrop-saturate", { themeKeys: ["--backdrop-saturate", "--saturate"], handleBareValue: ({ value: x2 }) => u(x2) ? `${x2}%` : null, handle: (x2) => [C2(), o("--tw-backdrop-saturate", `saturate(${x2})`), o("-webkit-backdrop-filter", g3), o("backdrop-filter", g3)] }), r("saturate", () => [{ values: ["0", "50", "100", "150", "200"], valueThemeKeys: ["--saturate"] }]), r("backdrop-saturate", () => [{ values: ["0", "50", "100", "150", "200"], valueThemeKeys: ["--backdrop-saturate", "--saturate"] }]), n("sepia", { themeKeys: ["--sepia"], handleBareValue: ({ value: x2 }) => u(x2) ? `${x2}%` : null, defaultValue: "100%", handle: (x2) => [w2(), o("--tw-sepia", `sepia(${x2})`), o("filter", a2)] }), n("backdrop-sepia", { themeKeys: ["--backdrop-sepia", "--sepia"], handleBareValue: ({ value: x2 }) => u(x2) ? `${x2}%` : null, defaultValue: "100%", handle: (x2) => [C2(), o("--tw-backdrop-sepia", `sepia(${x2})`), o("-webkit-backdrop-filter", g3), o("backdrop-filter", g3)] }), r("sepia", () => [{ values: ["0", "50", "100"], valueThemeKeys: ["--sepia"], hasDefaultValue: true }]), r("backdrop-sepia", () => [{ values: ["0", "50", "100"], valueThemeKeys: ["--backdrop-sepia", "--sepia"], hasDefaultValue: true }]), t("drop-shadow-none", [w2, ["--tw-drop-shadow", " "], ["filter", a2]]), i.functional("drop-shadow", (x2) => {
        let $2;
        if (x2.modifier && (x2.modifier.kind === "arbitrary" ? $2 = x2.modifier.value : u(x2.modifier.value) && ($2 = `${x2.modifier.value}%`)), !x2.value) {
          let K2 = e2.get(["--drop-shadow"]), T2 = e2.resolve(null, ["--drop-shadow"]);
          return K2 === null || T2 === null ? void 0 : [w2(), o("--tw-drop-shadow-alpha", $2), ...gt("--tw-drop-shadow-size", K2, $2, (R2) => `var(--tw-drop-shadow-color, ${R2})`), o("--tw-drop-shadow", d(T2, ",").map((R2) => `drop-shadow(${R2})`).join(" ")), o("filter", a2)];
        }
        if (x2.value.kind === "arbitrary") {
          let K2 = x2.value.value;
          return (x2.value.dataType ?? pe(K2, ["color"])) === "color" ? (K2 = te2(K2, x2.modifier, e2), K2 === null ? void 0 : [w2(), o("--tw-drop-shadow-color", Q2(K2, "var(--tw-drop-shadow-alpha)")), o("--tw-drop-shadow", "var(--tw-drop-shadow-size)")]) : x2.modifier && !$2 ? void 0 : [w2(), o("--tw-drop-shadow-alpha", $2), ...gt("--tw-drop-shadow-size", K2, $2, (R2) => `var(--tw-drop-shadow-color, ${R2})`), o("--tw-drop-shadow", "var(--tw-drop-shadow-size)"), o("filter", a2)];
        }
        {
          let K2 = e2.get([`--drop-shadow-${x2.value.value}`]), T2 = e2.resolve(x2.value.value, ["--drop-shadow"]);
          if (K2 && T2) return x2.modifier && !$2 ? void 0 : $2 ? [w2(), o("--tw-drop-shadow-alpha", $2), ...gt("--tw-drop-shadow-size", K2, $2, (R2) => `var(--tw-drop-shadow-color, ${R2})`), o("--tw-drop-shadow", "var(--tw-drop-shadow-size)"), o("filter", a2)] : [w2(), o("--tw-drop-shadow-alpha", $2), ...gt("--tw-drop-shadow-size", K2, $2, (R2) => `var(--tw-drop-shadow-color, ${R2})`), o("--tw-drop-shadow", d(T2, ",").map((R2) => `drop-shadow(${R2})`).join(" ")), o("filter", a2)];
        }
        {
          let K2 = oe(x2, e2, ["--drop-shadow-color", "--color"]);
          if (K2) return K2 === "inherit" ? [w2(), o("--tw-drop-shadow-color", "inherit"), o("--tw-drop-shadow", "var(--tw-drop-shadow-size)")] : [w2(), o("--tw-drop-shadow-color", Q2(K2, "var(--tw-drop-shadow-alpha)")), o("--tw-drop-shadow", "var(--tw-drop-shadow-size)")];
        }
      }), r("drop-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--drop-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (x2, $2) => `${$2 * 5}`) }, { valueThemeKeys: ["--drop-shadow"] }]), n("backdrop-opacity", { themeKeys: ["--backdrop-opacity", "--opacity"], handleBareValue: ({ value: x2 }) => de(x2) ? `${x2}%` : null, handle: (x2) => [C2(), o("--tw-backdrop-opacity", `opacity(${x2})`), o("-webkit-backdrop-filter", g3), o("backdrop-filter", g3)] }), r("backdrop-opacity", () => [{ values: Array.from({ length: 21 }, (x2, $2) => `${$2 * 5}`), valueThemeKeys: ["--backdrop-opacity", "--opacity"] }]);
    }
    {
      let a2 = `var(--tw-ease, ${e2.resolve(null, ["--default-transition-timing-function"]) ?? "ease"})`, g3 = `var(--tw-duration, ${e2.resolve(null, ["--default-transition-duration"]) ?? "0s"})`;
      n("transition", { defaultValue: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events", themeKeys: ["--transition-property"], handle: (w2) => [o("transition-property", w2), o("transition-timing-function", a2), o("transition-duration", g3)], staticValues: { none: [o("transition-property", "none")], all: [o("transition-property", "all"), o("transition-timing-function", a2), o("transition-duration", g3)], colors: [o("transition-property", "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to"), o("transition-timing-function", a2), o("transition-duration", g3)], opacity: [o("transition-property", "opacity"), o("transition-timing-function", a2), o("transition-duration", g3)], shadow: [o("transition-property", "box-shadow"), o("transition-timing-function", a2), o("transition-duration", g3)], transform: [o("transition-property", "transform, translate, scale, rotate"), o("transition-timing-function", a2), o("transition-duration", g3)] } }), t("transition-discrete", [["transition-behavior", "allow-discrete"]]), t("transition-normal", [["transition-behavior", "normal"]]), n("delay", { handleBareValue: ({ value: w2 }) => u(w2) ? `${w2}ms` : null, themeKeys: ["--transition-delay"], handle: (w2) => [o("transition-delay", w2)] });
      {
        let w2 = () => Y2([S2("--tw-duration")]);
        t("duration-initial", [w2, ["--tw-duration", "initial"]]), i.functional("duration", (C2) => {
          if (C2.modifier || !C2.value) return;
          let x2 = null;
          if (C2.value.kind === "arbitrary" ? x2 = C2.value.value : (x2 = e2.resolve(C2.value.fraction ?? C2.value.value, ["--transition-duration"]), x2 === null && u(C2.value.value) && (x2 = `${C2.value.value}ms`)), x2 !== null) return [w2(), o("--tw-duration", x2), o("transition-duration", x2)];
        });
      }
      r("delay", () => [{ values: ["75", "100", "150", "200", "300", "500", "700", "1000"], valueThemeKeys: ["--transition-delay"] }]), r("duration", () => [{ values: ["75", "100", "150", "200", "300", "500", "700", "1000"], valueThemeKeys: ["--transition-duration"] }]);
    }
    {
      let a2 = () => Y2([S2("--tw-ease")]);
      n("ease", { themeKeys: ["--ease"], handle: (g3) => [a2(), o("--tw-ease", g3), o("transition-timing-function", g3)], staticValues: { initial: [a2(), o("--tw-ease", "initial")], linear: [a2(), o("--tw-ease", "linear"), o("transition-timing-function", "linear")] } });
    }
    t("will-change-auto", [["will-change", "auto"]]), t("will-change-scroll", [["will-change", "scroll-position"]]), t("will-change-contents", [["will-change", "contents"]]), t("will-change-transform", [["will-change", "transform"]]), n("will-change", { themeKeys: [], handle: (a2) => [o("will-change", a2)] }), t("content-none", [["--tw-content", "none"], ["content", "none"]]), n("content", { themeKeys: ["--content"], handle: (a2) => [Y2([S2("--tw-content", '""')]), o("--tw-content", a2), o("content", "var(--tw-content)")] });
    {
      let a2 = "var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,)", g3 = () => Y2([S2("--tw-contain-size"), S2("--tw-contain-layout"), S2("--tw-contain-paint"), S2("--tw-contain-style")]);
      t("contain-none", [["contain", "none"]]), t("contain-content", [["contain", "content"]]), t("contain-strict", [["contain", "strict"]]), t("contain-size", [g3, ["--tw-contain-size", "size"], ["contain", a2]]), t("contain-inline-size", [g3, ["--tw-contain-size", "inline-size"], ["contain", a2]]), t("contain-layout", [g3, ["--tw-contain-layout", "layout"], ["contain", a2]]), t("contain-paint", [g3, ["--tw-contain-paint", "paint"], ["contain", a2]]), t("contain-style", [g3, ["--tw-contain-style", "style"], ["contain", a2]]), n("contain", { themeKeys: [], handle: (w2) => [o("contain", w2)] });
    }
    t("forced-color-adjust-none", [["forced-color-adjust", "none"]]), t("forced-color-adjust-auto", [["forced-color-adjust", "auto"]]), l3("leading", ["--leading", "--spacing"], (a2) => [Y2([S2("--tw-leading")]), o("--tw-leading", a2), o("line-height", a2)], { staticValues: { none: [Y2([S2("--tw-leading")]), o("--tw-leading", "1"), o("line-height", "1")] } }), n("tracking", { supportsNegative: true, themeKeys: ["--tracking"], handle: (a2) => [Y2([S2("--tw-tracking")]), o("--tw-tracking", a2), o("letter-spacing", a2)] }), t("antialiased", [["-webkit-font-smoothing", "antialiased"], ["-moz-osx-font-smoothing", "grayscale"]]), t("subpixel-antialiased", [["-webkit-font-smoothing", "auto"], ["-moz-osx-font-smoothing", "auto"]]);
    {
      let a2 = "var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)", g3 = () => Y2([S2("--tw-ordinal"), S2("--tw-slashed-zero"), S2("--tw-numeric-figure"), S2("--tw-numeric-spacing"), S2("--tw-numeric-fraction")]);
      t("normal-nums", [["font-variant-numeric", "normal"]]), t("ordinal", [g3, ["--tw-ordinal", "ordinal"], ["font-variant-numeric", a2]]), t("slashed-zero", [g3, ["--tw-slashed-zero", "slashed-zero"], ["font-variant-numeric", a2]]), t("lining-nums", [g3, ["--tw-numeric-figure", "lining-nums"], ["font-variant-numeric", a2]]), t("oldstyle-nums", [g3, ["--tw-numeric-figure", "oldstyle-nums"], ["font-variant-numeric", a2]]), t("proportional-nums", [g3, ["--tw-numeric-spacing", "proportional-nums"], ["font-variant-numeric", a2]]), t("tabular-nums", [g3, ["--tw-numeric-spacing", "tabular-nums"], ["font-variant-numeric", a2]]), t("diagonal-fractions", [g3, ["--tw-numeric-fraction", "diagonal-fractions"], ["font-variant-numeric", a2]]), t("stacked-fractions", [g3, ["--tw-numeric-fraction", "stacked-fractions"], ["font-variant-numeric", a2]]);
    }
    {
      let a2 = () => Y2([S2("--tw-outline-style", "solid")]);
      i.static("outline-hidden", () => [o("--tw-outline-style", "none"), o("outline-style", "none"), B2("@media", "(forced-colors: active)", [o("outline", "2px solid transparent"), o("outline-offset", "2px")])]), t("outline-none", [["--tw-outline-style", "none"], ["outline-style", "none"]]), t("outline-solid", [["--tw-outline-style", "solid"], ["outline-style", "solid"]]), t("outline-dashed", [["--tw-outline-style", "dashed"], ["outline-style", "dashed"]]), t("outline-dotted", [["--tw-outline-style", "dotted"], ["outline-style", "dotted"]]), t("outline-double", [["--tw-outline-style", "double"], ["outline-style", "double"]]), i.functional("outline", (g3) => {
        if (g3.value === null) {
          if (g3.modifier) return;
          let w2 = e2.get(["--default-outline-width"]) ?? "1px";
          return [a2(), o("outline-style", "var(--tw-outline-style)"), o("outline-width", w2)];
        }
        if (g3.value.kind === "arbitrary") {
          let w2 = g3.value.value;
          switch (g3.value.dataType ?? pe(w2, ["color", "length", "number", "percentage"])) {
            case "length":
            case "number":
            case "percentage":
              return g3.modifier ? void 0 : [a2(), o("outline-style", "var(--tw-outline-style)"), o("outline-width", w2)];
            default:
              return w2 = te2(w2, g3.modifier, e2), w2 === null ? void 0 : [o("outline-color", w2)];
          }
        }
        {
          let w2 = oe(g3, e2, ["--outline-color", "--color"]);
          if (w2) return [o("outline-color", w2)];
        }
        {
          if (g3.modifier) return;
          let w2 = e2.resolve(g3.value.value, ["--outline-width"]);
          if (w2) return [a2(), o("outline-style", "var(--tw-outline-style)"), o("outline-width", w2)];
          if (u(g3.value.value)) return [a2(), o("outline-style", "var(--tw-outline-style)"), o("outline-width", `${g3.value.value}px`)];
        }
      }), r("outline", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--outline-color", "--color"], modifiers: Array.from({ length: 21 }, (g3, w2) => `${w2 * 5}`), hasDefaultValue: true }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--outline-width"] }]), n("outline-offset", { supportsNegative: true, themeKeys: ["--outline-offset"], handleBareValue: ({ value: g3 }) => u(g3) ? `${g3}px` : null, handle: (g3) => [o("outline-offset", g3)] }), r("outline-offset", () => [{ supportsNegative: true, values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--outline-offset"] }]);
    }
    n("opacity", { themeKeys: ["--opacity"], handleBareValue: ({ value: a2 }) => de(a2) ? `${a2}%` : null, handle: (a2) => [o("opacity", a2)] }), r("opacity", () => [{ values: Array.from({ length: 21 }, (a2, g3) => `${g3 * 5}`), valueThemeKeys: ["--opacity"] }]), n("underline-offset", { supportsNegative: true, themeKeys: ["--text-underline-offset"], handleBareValue: ({ value: a2 }) => u(a2) ? `${a2}px` : null, handle: (a2) => [o("text-underline-offset", a2)], staticValues: { auto: [o("text-underline-offset", "auto")] } }), r("underline-offset", () => [{ supportsNegative: true, values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--text-underline-offset"] }]), i.functional("text", (a2) => {
      if (a2.value) {
        if (a2.value.kind === "arbitrary") {
          let g3 = a2.value.value;
          switch (a2.value.dataType ?? pe(g3, ["color", "length", "percentage", "absolute-size", "relative-size"])) {
            case "size":
            case "length":
            case "percentage":
            case "absolute-size":
            case "relative-size": {
              if (a2.modifier) {
                let C2 = a2.modifier.kind === "arbitrary" ? a2.modifier.value : e2.resolve(a2.modifier.value, ["--leading"]);
                if (!C2 && ue(a2.modifier.value)) {
                  if (!e2.resolve(null, ["--spacing"])) return null;
                  C2 = `--spacing(${a2.modifier.value})`;
                }
                return !C2 && a2.modifier.value === "none" && (C2 = "1"), C2 ? [o("font-size", g3), o("line-height", C2)] : null;
              }
              return [o("font-size", g3)];
            }
            default:
              return g3 = te2(g3, a2.modifier, e2), g3 === null ? void 0 : [o("color", g3)];
          }
        }
        {
          let g3 = oe(a2, e2, ["--text-color", "--color"]);
          if (g3) return [o("color", g3)];
        }
        {
          let g3 = e2.resolveWith(a2.value.value, ["--text"], ["--line-height", "--letter-spacing", "--font-weight"]);
          if (g3) {
            let [w2, C2 = {}] = Array.isArray(g3) ? g3 : [g3];
            if (a2.modifier) {
              let x2 = a2.modifier.kind === "arbitrary" ? a2.modifier.value : e2.resolve(a2.modifier.value, ["--leading"]);
              if (!x2 && ue(a2.modifier.value)) {
                if (!e2.resolve(null, ["--spacing"])) return null;
                x2 = `--spacing(${a2.modifier.value})`;
              }
              if (!x2 && a2.modifier.value === "none" && (x2 = "1"), !x2) return null;
              let $2 = [o("font-size", w2)];
              return x2 && $2.push(o("line-height", x2)), $2;
            }
            return typeof C2 == "string" ? [o("font-size", w2), o("line-height", C2)] : [o("font-size", w2), o("line-height", C2["--line-height"] ? `var(--tw-leading, ${C2["--line-height"]})` : void 0), o("letter-spacing", C2["--letter-spacing"] ? `var(--tw-tracking, ${C2["--letter-spacing"]})` : void 0), o("font-weight", C2["--font-weight"] ? `var(--tw-font-weight, ${C2["--font-weight"]})` : void 0)];
          }
        }
      }
    }), r("text", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-color", "--color"], modifiers: Array.from({ length: 21 }, (a2, g3) => `${g3 * 5}`) }, { values: [], valueThemeKeys: ["--text"], modifiers: [], modifierThemeKeys: ["--leading"] }]);
    let z2 = () => Y2([S2("--tw-text-shadow-color"), S2("--tw-text-shadow-alpha", "100%", "<percentage>")]);
    t("text-shadow-initial", [z2, ["--tw-text-shadow-color", "initial"]]), i.functional("text-shadow", (a2) => {
      let g3;
      if (a2.modifier && (a2.modifier.kind === "arbitrary" ? g3 = a2.modifier.value : u(a2.modifier.value) && (g3 = `${a2.modifier.value}%`)), !a2.value) {
        let w2 = e2.get(["--text-shadow"]);
        return w2 === null ? void 0 : [z2(), o("--tw-text-shadow-alpha", g3), ...be("text-shadow", w2, g3, (C2) => `var(--tw-text-shadow-color, ${C2})`)];
      }
      if (a2.value.kind === "arbitrary") {
        let w2 = a2.value.value;
        return (a2.value.dataType ?? pe(w2, ["color"])) === "color" ? (w2 = te2(w2, a2.modifier, e2), w2 === null ? void 0 : [z2(), o("--tw-text-shadow-color", Q2(w2, "var(--tw-text-shadow-alpha)"))]) : [z2(), o("--tw-text-shadow-alpha", g3), ...be("text-shadow", w2, g3, (x2) => `var(--tw-text-shadow-color, ${x2})`)];
      }
      switch (a2.value.value) {
        case "none":
          return a2.modifier ? void 0 : [z2(), o("text-shadow", "none")];
        case "inherit":
          return a2.modifier ? void 0 : [z2(), o("--tw-text-shadow-color", "inherit")];
      }
      {
        let w2 = e2.get([`--text-shadow-${a2.value.value}`]);
        if (w2) return [z2(), o("--tw-text-shadow-alpha", g3), ...be("text-shadow", w2, g3, (C2) => `var(--tw-text-shadow-color, ${C2})`)];
      }
      {
        let w2 = oe(a2, e2, ["--text-shadow-color", "--color"]);
        if (w2) return [z2(), o("--tw-text-shadow-color", Q2(w2, "var(--tw-text-shadow-alpha)"))];
      }
    }), r("text-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (a2, g3) => `${g3 * 5}`) }, { values: ["none"] }, { valueThemeKeys: ["--text-shadow"], modifiers: Array.from({ length: 21 }, (a2, g3) => `${g3 * 5}`), hasDefaultValue: e2.get(["--text-shadow"]) !== null }]);
    {
      let x2 = function(T2) {
        return `var(--tw-ring-inset,) 0 0 0 calc(${T2} + var(--tw-ring-offset-width)) var(--tw-ring-color, ${C2})`;
      }, $2 = function(T2) {
        return `inset 0 0 0 ${T2} var(--tw-inset-ring-color, currentcolor)`;
      };
      var X2 = x2, ie2 = $2;
      let a2 = ["var(--tw-inset-shadow)", "var(--tw-inset-ring-shadow)", "var(--tw-ring-offset-shadow)", "var(--tw-ring-shadow)", "var(--tw-shadow)"].join(", "), g3 = "0 0 #0000", w2 = () => Y2([S2("--tw-shadow", g3), S2("--tw-shadow-color"), S2("--tw-shadow-alpha", "100%", "<percentage>"), S2("--tw-inset-shadow", g3), S2("--tw-inset-shadow-color"), S2("--tw-inset-shadow-alpha", "100%", "<percentage>"), S2("--tw-ring-color"), S2("--tw-ring-shadow", g3), S2("--tw-inset-ring-color"), S2("--tw-inset-ring-shadow", g3), S2("--tw-ring-inset"), S2("--tw-ring-offset-width", "0px", "<length>"), S2("--tw-ring-offset-color", "#fff"), S2("--tw-ring-offset-shadow", g3)]);
      t("shadow-initial", [w2, ["--tw-shadow-color", "initial"]]), i.functional("shadow", (T2) => {
        let R2;
        if (T2.modifier && (T2.modifier.kind === "arbitrary" ? R2 = T2.modifier.value : u(T2.modifier.value) && (R2 = `${T2.modifier.value}%`)), !T2.value) {
          let W2 = e2.get(["--shadow"]);
          return W2 === null ? void 0 : [w2(), o("--tw-shadow-alpha", R2), ...be("--tw-shadow", W2, R2, (ge2) => `var(--tw-shadow-color, ${ge2})`), o("box-shadow", a2)];
        }
        if (T2.value.kind === "arbitrary") {
          let W2 = T2.value.value;
          return (T2.value.dataType ?? pe(W2, ["color"])) === "color" ? (W2 = te2(W2, T2.modifier, e2), W2 === null ? void 0 : [w2(), o("--tw-shadow-color", Q2(W2, "var(--tw-shadow-alpha)"))]) : [w2(), o("--tw-shadow-alpha", R2), ...be("--tw-shadow", W2, R2, (Et) => `var(--tw-shadow-color, ${Et})`), o("box-shadow", a2)];
        }
        switch (T2.value.value) {
          case "none":
            return T2.modifier ? void 0 : [w2(), o("--tw-shadow", g3), o("box-shadow", a2)];
          case "inherit":
            return T2.modifier ? void 0 : [w2(), o("--tw-shadow-color", "inherit")];
        }
        {
          let W2 = e2.get([`--shadow-${T2.value.value}`]);
          if (W2) return [w2(), o("--tw-shadow-alpha", R2), ...be("--tw-shadow", W2, R2, (ge2) => `var(--tw-shadow-color, ${ge2})`), o("box-shadow", a2)];
        }
        {
          let W2 = oe(T2, e2, ["--box-shadow-color", "--color"]);
          if (W2) return [w2(), o("--tw-shadow-color", Q2(W2, "var(--tw-shadow-alpha)"))];
        }
      }), r("shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--box-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (T2, R2) => `${R2 * 5}`) }, { values: ["none"] }, { valueThemeKeys: ["--shadow"], modifiers: Array.from({ length: 21 }, (T2, R2) => `${R2 * 5}`), hasDefaultValue: e2.get(["--shadow"]) !== null }]), t("inset-shadow-initial", [w2, ["--tw-inset-shadow-color", "initial"]]), i.functional("inset-shadow", (T2) => {
        let R2;
        if (T2.modifier && (T2.modifier.kind === "arbitrary" ? R2 = T2.modifier.value : u(T2.modifier.value) && (R2 = `${T2.modifier.value}%`)), !T2.value) {
          let W2 = e2.get(["--inset-shadow"]);
          return W2 === null ? void 0 : [w2(), o("--tw-inset-shadow-alpha", R2), ...be("--tw-inset-shadow", W2, R2, (ge2) => `var(--tw-inset-shadow-color, ${ge2})`), o("box-shadow", a2)];
        }
        if (T2.value.kind === "arbitrary") {
          let W2 = T2.value.value;
          return (T2.value.dataType ?? pe(W2, ["color"])) === "color" ? (W2 = te2(W2, T2.modifier, e2), W2 === null ? void 0 : [w2(), o("--tw-inset-shadow-color", Q2(W2, "var(--tw-inset-shadow-alpha)"))]) : [w2(), o("--tw-inset-shadow-alpha", R2), ...be("--tw-inset-shadow", W2, R2, (Et) => `var(--tw-inset-shadow-color, ${Et})`, "inset"), o("box-shadow", a2)];
        }
        switch (T2.value.value) {
          case "none":
            return T2.modifier ? void 0 : [w2(), o("--tw-inset-shadow", `inset ${g3}`), o("box-shadow", a2)];
          case "inherit":
            return T2.modifier ? void 0 : [w2(), o("--tw-inset-shadow-color", "inherit")];
        }
        {
          let W2 = e2.get([`--inset-shadow-${T2.value.value}`]);
          if (W2) return [w2(), o("--tw-inset-shadow-alpha", R2), ...be("--tw-inset-shadow", W2, R2, (ge2) => `var(--tw-inset-shadow-color, ${ge2})`), o("box-shadow", a2)];
        }
        {
          let W2 = oe(T2, e2, ["--box-shadow-color", "--color"]);
          if (W2) return [w2(), o("--tw-inset-shadow-color", Q2(W2, "var(--tw-inset-shadow-alpha)"))];
        }
      }), r("inset-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--box-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (T2, R2) => `${R2 * 5}`) }, { values: ["none"] }, { valueThemeKeys: ["--inset-shadow"], modifiers: Array.from({ length: 21 }, (T2, R2) => `${R2 * 5}`), hasDefaultValue: e2.get(["--inset-shadow"]) !== null }]), t("ring-inset", [w2, ["--tw-ring-inset", "inset"]]);
      let C2 = e2.get(["--default-ring-color"]) ?? "currentcolor";
      i.functional("ring", (T2) => {
        if (!T2.value) {
          if (T2.modifier) return;
          let R2 = e2.get(["--default-ring-width"]) ?? "1px";
          return [w2(), o("--tw-ring-shadow", x2(R2)), o("box-shadow", a2)];
        }
        if (T2.value.kind === "arbitrary") {
          let R2 = T2.value.value;
          return (T2.value.dataType ?? pe(R2, ["color", "length"])) === "length" ? T2.modifier ? void 0 : [w2(), o("--tw-ring-shadow", x2(R2)), o("box-shadow", a2)] : (R2 = te2(R2, T2.modifier, e2), R2 === null ? void 0 : [o("--tw-ring-color", R2)]);
        }
        {
          let R2 = oe(T2, e2, ["--ring-color", "--color"]);
          if (R2) return [o("--tw-ring-color", R2)];
        }
        {
          if (T2.modifier) return;
          let R2 = e2.resolve(T2.value.value, ["--ring-width"]);
          if (R2 === null && u(T2.value.value) && (R2 = `${T2.value.value}px`), R2) return [w2(), o("--tw-ring-shadow", x2(R2)), o("box-shadow", a2)];
        }
      }), r("ring", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-color", "--color"], modifiers: Array.from({ length: 21 }, (T2, R2) => `${R2 * 5}`) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-width"], hasDefaultValue: true }]), i.functional("inset-ring", (T2) => {
        if (!T2.value) return T2.modifier ? void 0 : [w2(), o("--tw-inset-ring-shadow", $2("1px")), o("box-shadow", a2)];
        if (T2.value.kind === "arbitrary") {
          let R2 = T2.value.value;
          return (T2.value.dataType ?? pe(R2, ["color", "length"])) === "length" ? T2.modifier ? void 0 : [w2(), o("--tw-inset-ring-shadow", $2(R2)), o("box-shadow", a2)] : (R2 = te2(R2, T2.modifier, e2), R2 === null ? void 0 : [o("--tw-inset-ring-color", R2)]);
        }
        {
          let R2 = oe(T2, e2, ["--ring-color", "--color"]);
          if (R2) return [o("--tw-inset-ring-color", R2)];
        }
        {
          if (T2.modifier) return;
          let R2 = e2.resolve(T2.value.value, ["--ring-width"]);
          if (R2 === null && u(T2.value.value) && (R2 = `${T2.value.value}px`), R2) return [w2(), o("--tw-inset-ring-shadow", $2(R2)), o("box-shadow", a2)];
        }
      }), r("inset-ring", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-color", "--color"], modifiers: Array.from({ length: 21 }, (T2, R2) => `${R2 * 5}`) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-width"], hasDefaultValue: true }]);
      let K2 = "var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)";
      i.functional("ring-offset", (T2) => {
        if (T2.value) {
          if (T2.value.kind === "arbitrary") {
            let R2 = T2.value.value;
            return (T2.value.dataType ?? pe(R2, ["color", "length"])) === "length" ? T2.modifier ? void 0 : [o("--tw-ring-offset-width", R2), o("--tw-ring-offset-shadow", K2)] : (R2 = te2(R2, T2.modifier, e2), R2 === null ? void 0 : [o("--tw-ring-offset-color", R2)]);
          }
          {
            let R2 = e2.resolve(T2.value.value, ["--ring-offset-width"]);
            if (R2) return T2.modifier ? void 0 : [o("--tw-ring-offset-width", R2), o("--tw-ring-offset-shadow", K2)];
            if (u(T2.value.value)) return T2.modifier ? void 0 : [o("--tw-ring-offset-width", `${T2.value.value}px`), o("--tw-ring-offset-shadow", K2)];
          }
          {
            let R2 = oe(T2, e2, ["--ring-offset-color", "--color"]);
            if (R2) return [o("--tw-ring-offset-color", R2)];
          }
        }
      });
    }
    return r("ring-offset", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-offset-color", "--color"], modifiers: Array.from({ length: 21 }, (a2, g3) => `${g3 * 5}`) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-offset-width"] }]), i.functional("@container", (a2) => {
      let g3 = null;
      if (a2.value === null ? g3 = "inline-size" : a2.value.kind === "arbitrary" ? g3 = a2.value.value : a2.value.kind === "named" && a2.value.value === "normal" ? g3 = "normal" : a2.value.kind === "named" && a2.value.value === "size" && (g3 = "size"), g3 !== null) return a2.modifier ? [o("container-type", g3), o("container-name", a2.modifier.value)] : [o("container-type", g3)];
    }), r("@container", () => [{ values: ["normal"], valueThemeKeys: [], hasDefaultValue: true }]), i;
  }
  var Yt = ["number", "integer", "ratio", "percentage"];
  function Wr(e2) {
    let i = a(e2.params);
    return Ln(i) ? (r) => {
      let t = { "--value": { usedSpacingInteger: false, usedSpacingNumber: false, themeKeys: /* @__PURE__ */ new Set(), literals: /* @__PURE__ */ new Set() }, "--modifier": { usedSpacingInteger: false, usedSpacingNumber: false, themeKeys: /* @__PURE__ */ new Set(), literals: /* @__PURE__ */ new Set() } };
      _2(e2.nodes, (n) => {
        if (n.kind !== "declaration" || !n.value || !n.value.includes("--value(") && !n.value.includes("--modifier(")) return;
        let s = M2(n.value);
        _2(s, (l3) => {
          if (l3.kind !== "function") return;
          if (l3.value === "--spacing" && !(t["--modifier"].usedSpacingNumber && t["--value"].usedSpacingNumber)) return _2(l3.nodes, (f2) => {
            var _a2, _b;
            if (f2.kind !== "function" || f2.value !== "--value" && f2.value !== "--modifier") return;
            let c2 = f2.value;
            for (let m of f2.nodes) if (m.kind === "word") {
              if (m.value === "integer") (_a2 = t[c2]).usedSpacingInteger || (_a2.usedSpacingInteger = true);
              else if (m.value === "number" && ((_b = t[c2]).usedSpacingNumber || (_b.usedSpacingNumber = true), t["--modifier"].usedSpacingNumber && t["--value"].usedSpacingNumber)) return V2.Stop;
            }
          }), V2.Continue;
          if (l3.value !== "--value" && l3.value !== "--modifier") return;
          let p2 = d(F2(l3.nodes), ",");
          for (let [f2, c2] of p2.entries()) c2 = c2.replace(/\\\*/g, "*"), c2 = c2.replace(/--(.*?)\s--(.*?)/g, "--$1-*--$2"), c2 = c2.replace(/\s+/g, ""), c2 = c2.replace(/(-\*){2,}/g, "-*"), c2[0] === "-" && c2[1] === "-" && !c2.includes("(") && !c2.includes("-*") && (c2 += "-*"), p2[f2] = c2;
          l3.nodes = M2(p2.join(","));
          for (let f2 of l3.nodes) if (f2.kind === "word" && (f2.value[0] === '"' || f2.value[0] === "'") && f2.value[0] === f2.value[f2.value.length - 1]) {
            let c2 = f2.value.slice(1, -1);
            t[l3.value].literals.add(c2);
          } else if (f2.kind === "word" && f2.value[0] === "-" && f2.value[1] === "-") {
            let c2 = f2.value.replace(/-\*.*$/g, "");
            t[l3.value].themeKeys.add(c2);
          } else if (f2.kind === "word" && !(f2.value[0] === "[" && f2.value[f2.value.length - 1] === "]") && !Yt.includes(f2.value)) {
            console.warn(`Unsupported bare value data type: "${f2.value}".
Only valid data types are: ${Yt.map((k) => `"${k}"`).join(", ")}.
`);
            let c2 = f2.value, m = structuredClone(l3), d2 = "\xB6";
            _2(m.nodes, (k) => {
              if (k.kind === "word" && k.value === c2) return V2.ReplaceSkip({ kind: "word", value: d2 });
            });
            let u2 = "^".repeat(F2([f2]).length), h3 = F2([m]).indexOf(d2), v2 = ["```css", F2([l3]), " ".repeat(h3) + u2, "```"].join(`
`);
            console.warn(v2);
          }
        }), n.value = F2(s);
      }), r.utilities.functional(i.slice(0, -2), (n) => {
        let s = re2(e2), l3 = n.value, p2 = n.modifier, f2 = false, c2 = false, m = false, d2 = false, u2 = /* @__PURE__ */ new Map(), h3 = false;
        if (_2([s], (v2, k) => {
          let y2 = k.parent;
          if (y2?.kind !== "rule" && y2?.kind !== "at-rule" || v2.kind !== "declaration" || !v2.value) return;
          let N2 = false, A2 = M2(v2.value);
          if (_2(A2, (b2) => {
            if (b2.kind === "function") {
              if (b2.value === "--value") {
                f2 = true;
                let D2 = Lr(l3, b2, r);
                return D2 ? (c2 = true, D2.ratio ? h3 = true : u2.set(v2, y2), V2.ReplaceSkip(D2.nodes)) : (N2 = true, V2.Stop);
              } else if (b2.value === "--modifier") {
                m = true;
                let D2 = Lr(p2, b2, r);
                return D2 ? (d2 = true, V2.ReplaceSkip(D2.nodes)) : (N2 = true, V2.Stop);
              }
            }
          }), N2) return V2.ReplaceSkip([]);
          v2.value = F2(A2);
        }), !f2 || !c2 || m && !d2 && p2 !== null || h3 && d2 || p2 && !h3 && !d2) return null;
        if (h3) for (let [v2, k] of u2) {
          let y2 = k.nodes.indexOf(v2);
          y2 !== -1 && k.nodes.splice(y2, 1);
        }
        return s.nodes;
      }), r.utilities.suggest(i.slice(0, -2), () => {
        let n = [], s = [];
        for (let [l3, { literals: p2, usedSpacingNumber: f2, usedSpacingInteger: c2, themeKeys: m }] of [[n, t["--value"]], [s, t["--modifier"]]]) {
          for (let d2 of p2) l3.push(d2);
          if (f2) l3.push(...wt);
          else if (c2) for (let d2 of wt) u(d2) && l3.push(d2);
          for (let d2 of r.theme.keysInNamespaces(m)) l3.push(d2.replace(Mr, (u2, h3, v2) => `${h3}.${v2}`));
        }
        return [{ values: n, modifiers: s }];
      });
    } : zn(i) ? (r) => {
      r.utilities.static(i, () => e2.nodes.map(re2));
    } : null;
  }
  function Lr(e2, i, r) {
    if (e2 === null) {
      for (let t of i.nodes) if (t.kind === "function" && t.value === "--default") return { nodes: t.nodes };
      return;
    }
    for (let t of i.nodes) {
      if (e2.kind === "named" && t.kind === "word" && (t.value[0] === "'" || t.value[0] === '"') && t.value[t.value.length - 1] === t.value[0] && t.value.slice(1, -1) === e2.value) return { nodes: M2(e2.value) };
      if (e2.kind === "named" && t.kind === "word" && t.value[0] === "-" && t.value[1] === "-") {
        let n = t.value;
        if (n.endsWith("-*")) {
          n = n.slice(0, -2);
          let s = r.theme.resolve(e2.value, [n]);
          if (s) return { nodes: M2(s) };
        } else {
          let s = n.split("-*");
          if (s.length <= 1) continue;
          let l3 = [s.shift()], p2 = r.theme.resolveWith(e2.value, l3, s);
          if (p2) {
            let [, f2 = {}] = p2;
            {
              let c2 = f2[s.pop()];
              if (c2) return { nodes: M2(c2) };
            }
          }
        }
      } else if (e2.kind === "named" && t.kind === "word") {
        if (!Yt.includes(t.value)) continue;
        let n = t.value === "ratio" && "fraction" in e2 ? e2.fraction : e2.value;
        if (!n) continue;
        let s = pe(n, [t.value]);
        if (s === null) continue;
        if (s === "ratio") {
          let [l3, p2] = d(n, "/").map(Number);
          if (!u(l3) || !u(p2)) continue;
        } else {
          if (s === "number" && !ue(n)) continue;
          if (s === "percentage" && !u(n.slice(0, -1))) continue;
        }
        if (s === "ratio") {
          let [l3, p2] = d(n, "/");
          return { nodes: M2(`${l3.trim()} / ${p2.trim()}`), ratio: true };
        }
        return { nodes: M2(n), ratio: false };
      } else if (e2.kind === "arbitrary" && t.kind === "word" && t.value[0] === "[" && t.value[t.value.length - 1] === "]") {
        let n = t.value.slice(1, -1);
        if (n === "*") return { nodes: M2(e2.value) };
        if ("dataType" in e2 && e2.dataType && e2.dataType !== n) continue;
        if ("dataType" in e2 && e2.dataType) return { nodes: M2(e2.value) };
        if (pe(e2.value, [n]) !== null) return { nodes: M2(e2.value) };
      }
    }
  }
  function be(e2, i, r, t, n = "") {
    let s = false, l3 = tt(i, (f2) => r == null ? t(f2) : f2.startsWith("current") ? t(Q2(f2, r)) : ((f2.startsWith("var(") || r.startsWith("var(")) && (s = true), t(jr(f2, r))));
    function p2(f2) {
      return n ? d(f2, ",").map((c2) => n.trim() + " " + c2.trim()).join(", ") : f2;
    }
    return s ? [o(e2, p2(tt(i, t))), J2("@supports (color: lab(from red l a b))", [o(e2, p2(l3))])] : [o(e2, p2(l3))];
  }
  function gt(e2, i, r, t, n = "") {
    let s = false, l3 = d(i, ",").map((p2) => tt(p2, (f2) => r == null ? t(f2) : f2.startsWith("current") ? t(Q2(f2, r)) : ((f2.startsWith("var(") || r.startsWith("var(")) && (s = true), t(jr(f2, r))))).map((p2) => `drop-shadow(${p2})`).join(" ");
    return s ? [o(e2, n + d(i, ",").map((p2) => `drop-shadow(${tt(p2, t)})`).join(" ")), J2("@supports (color: lab(from red l a b))", [o(e2, n + l3)])] : [o(e2, n + l3)];
  }
  var Br = /^-?[a-z][a-zA-Z0-9_-]*/;
  var En = 37;
  var Rn = 47;
  var Pn = 46;
  var On = 97;
  var _n = 122;
  var In = 65;
  var Dn = 90;
  var ht = 48;
  var vt = 57;
  var Kn = 95;
  var Un = 45;
  function zn(e2) {
    let i = Br.exec(e2);
    if (i === null) return false;
    let r = i[0], t = e2.slice(r.length);
    if (t.length === 0 && r.endsWith("-")) return false;
    if (t.length === 0) return true;
    let n = false;
    for (let s = 0; s < t.length; s++) {
      let l3 = t.charCodeAt(s);
      switch (l3) {
        case En: {
          if (s !== t.length - 1) return false;
          let f2 = (t[s - 1] || r[r.length - 1] || "").charCodeAt(0);
          if (f2 < ht || f2 > vt) return false;
          break;
        }
        case Rn: {
          if (s === t.length - 1 || n) return false;
          n = true;
          break;
        }
        case Pn: {
          let f2 = (t[s - 1] || r[r.length - 1] || "").charCodeAt(0);
          if (f2 < ht || f2 > vt) return false;
          let m = (t[s + 1] || "").charCodeAt(0);
          if (m < ht || m > vt) return false;
          break;
        }
        case Kn:
        case Un:
          continue;
        default: {
          if (l3 >= On && l3 <= _n || l3 >= In && l3 <= Dn || l3 >= ht && l3 <= vt) continue;
          return false;
        }
      }
    }
    return true;
  }
  function Ln(e2) {
    if (!e2.endsWith("-*")) return false;
    e2 = e2.slice(0, -2);
    let i = Br.exec(e2);
    if (i === null) return false;
    let r = i[0];
    return e2.slice(r.length).length === 0;
  }
  var Gt = { "--alpha": jn, "--spacing": Mn, "--theme": Fn, theme: Wn };
  function jn(e2, i, r, ...t) {
    let [n, s] = d(r, "/").map((l3) => l3.trim());
    if (!n || !s) throw new Error(`The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${n || "var(--my-color)"} / ${s || "50%"})\``);
    if (t.length > 0) throw new Error(`The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${n || "var(--my-color)"} / ${s || "50%"})\``);
    return Q2(n, s);
  }
  function Mn(e2, i, r, ...t) {
    if (!r) throw new Error("The --spacing(\u2026) function requires an argument, but received none.");
    if (t.length > 0) throw new Error(`The --spacing(\u2026) function only accepts a single argument, but received ${t.length + 1}.`);
    let n = e2.theme.resolve(null, ["--spacing"]);
    if (!n) throw new Error("The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found.");
    let s = le.get(r);
    if (s) {
      if (s[0] === 0) return "0";
      if (s[0] === 1) return n;
    }
    return `calc(${n} * ${r})`;
  }
  function Fn(e2, i, r, ...t) {
    if (!r.startsWith("--")) throw new Error("The --theme(\u2026) function can only be used with CSS variables from your theme.");
    let n = false;
    r.endsWith(" inline") && (n = true, r = r.slice(0, -7)), i.kind === "at-rule" && (n = true);
    let s = e2.resolveThemeValue(r, n);
    if (!s) {
      if (t.length > 0) return t.join(", ");
      throw new Error(`Could not resolve value for theme function: \`theme(${r})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`);
    }
    if (t.length === 0) return s;
    let l3 = t.join(", ");
    if (l3 === "initial") return s;
    if (s === "initial") return l3;
    if (s.startsWith("var(") || s.startsWith("theme(") || s.startsWith("--theme(")) {
      let p2 = M2(s);
      return Yn(p2, l3), F2(p2);
    }
    return s;
  }
  function Wn(e2, i, r, ...t) {
    r = Bn(r);
    let n = e2.resolveThemeValue(r);
    if (!n && t.length > 0) return t.join(", ");
    if (!n) throw new Error(`Could not resolve value for theme function: \`theme(${r})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);
    return n;
  }
  var Yr = new RegExp(Object.keys(Gt).map((e2) => `${e2}\\(`).join("|"));
  function ze(e2, i) {
    let r = 0;
    return _2(e2, (t) => {
      if (t.kind === "declaration" && t.value && Yr.test(t.value)) {
        r |= 8, t.value = Gr(t.value, t, i);
        return;
      }
      t.kind === "at-rule" && (t.name === "@media" || t.name === "@custom-media" || t.name === "@container" || t.name === "@supports") && Yr.test(t.params) && (r |= 8, t.params = Gr(t.params, t, i));
    }), r;
  }
  function Gr(e2, i, r) {
    let t = M2(e2);
    return _2(t, (n) => {
      if (n.kind === "function" && n.value in Gt) {
        let s = d(F2(n.nodes).trim(), ",").map((p2) => p2.trim()), l3 = Gt[n.value](r, i, ...s);
        return V2.Replace(M2(l3));
      }
    }), F2(t);
  }
  function Bn(e2) {
    if (e2[0] !== "'" && e2[0] !== '"') return e2;
    let i = "", r = e2[0];
    for (let t = 1; t < e2.length - 1; t++) {
      let n = e2[t], s = e2[t + 1];
      n === "\\" && (s === r || s === "\\") ? (i += s, t++) : i += n;
    }
    return i;
  }
  function Yn(e2, i) {
    _2(e2, (r) => {
      if (r.kind === "function" && !(r.value !== "var" && r.value !== "theme" && r.value !== "--theme")) if (r.nodes.length === 1) r.nodes.push({ kind: "word", value: `, ${i}` });
      else {
        let t = r.nodes[r.nodes.length - 1];
        t.kind === "word" && t.value === "initial" && (t.value = i);
      }
    });
  }
  function kt(e2, i) {
    let r = e2.length, t = i.length, n = r < t ? r : t;
    for (let s = 0; s < n; s++) {
      let l3 = e2.charCodeAt(s), p2 = i.charCodeAt(s);
      if (l3 >= 48 && l3 <= 57 && p2 >= 48 && p2 <= 57) {
        let f2 = s, c2 = s + 1, m = s, d2 = s + 1;
        for (l3 = e2.charCodeAt(c2); l3 >= 48 && l3 <= 57; ) l3 = e2.charCodeAt(++c2);
        for (p2 = i.charCodeAt(d2); p2 >= 48 && p2 <= 57; ) p2 = i.charCodeAt(++d2);
        let u2 = e2.slice(f2, c2), h3 = i.slice(m, d2), v2 = Number(u2) - Number(h3);
        if (v2) return v2;
        if (u2 < h3) return -1;
        if (u2 > h3) return 1;
        continue;
      }
      if (l3 !== p2) return l3 - p2;
    }
    return e2.length - i.length;
  }
  function qr(e2) {
    if (e2[0] !== "[" || e2[e2.length - 1] !== "]") return null;
    let i = 1, r = i, t = e2.length - 1;
    for (; je(e2.charCodeAt(i)); ) i++;
    {
      for (r = i; i < t; i++) {
        let m = e2.charCodeAt(i);
        if (m === 92) {
          i++;
          continue;
        }
        if (!(m >= 65 && m <= 90) && !(m >= 97 && m <= 122) && !(m >= 48 && m <= 57) && !(m === 45 || m === 95)) break;
      }
      if (r === i) return null;
    }
    let n = e2.slice(r, i);
    for (; je(e2.charCodeAt(i)); ) i++;
    if (i === t) return { attribute: n, operator: null, quote: null, value: null, sensitivity: null };
    let s = null, l3 = e2.charCodeAt(i);
    if (l3 === 61) s = "=", i++;
    else if ((l3 === 126 || l3 === 124 || l3 === 94 || l3 === 36 || l3 === 42) && e2.charCodeAt(i + 1) === 61) s = e2[i] + "=", i += 2;
    else return null;
    for (; je(e2.charCodeAt(i)); ) i++;
    if (i === t) return null;
    let p2 = "", f2 = null;
    if (l3 = e2.charCodeAt(i), l3 === 39 || l3 === 34) {
      f2 = e2[i], i++, r = i;
      for (let m = i; m < t; m++) {
        let d2 = e2.charCodeAt(m);
        d2 === l3 ? i = m + 1 : d2 === 92 && m++;
      }
      p2 = e2.slice(r, i - 1);
    } else {
      for (r = i; i < t && !je(e2.charCodeAt(i)); ) i++;
      p2 = e2.slice(r, i);
    }
    for (; je(e2.charCodeAt(i)); ) i++;
    if (i === t) return { attribute: n, operator: s, quote: f2, value: p2, sensitivity: null };
    let c2 = null;
    switch (e2.charCodeAt(i)) {
      case 105:
      case 73: {
        c2 = "i", i++;
        break;
      }
      case 115:
      case 83: {
        c2 = "s", i++;
        break;
      }
      default:
        return null;
    }
    for (; je(e2.charCodeAt(i)); ) i++;
    return i !== t ? null : { attribute: n, operator: s, quote: f2, value: p2, sensitivity: c2 };
  }
  function je(e2) {
    switch (e2) {
      case 32:
      case 9:
      case 10:
      case 13:
        return true;
      default:
        return false;
    }
  }
  function Hr(e2) {
    let i = false;
    return _2(e2, { exit(r) {
      if (r.kind !== "function" || r.value !== "calc" && r.value !== "" || r.nodes.length !== 5 || r.nodes[2].kind !== "word" || r.nodes[2].value !== "*" && r.nodes[2].value !== "+") return;
      let t = r.nodes[0], n = r.nodes[4];
      if (qn(t, n)) {
        i = true;
        let s = { kind: "function", value: r.value, nodes: [n, r.nodes[1], r.nodes[2], r.nodes[3], t] };
        return V2.ReplaceSkip(s);
      }
    } }), [i, e2];
  }
  function qn(e2, i) {
    let r = e2.kind === "word" ? le.get(e2.value) : null, t = i.kind === "word" ? le.get(i.value) : null;
    if (r !== null && t === null) return true;
    if (r === null && t !== null) return false;
    if (r !== null && t !== null) {
      let [n, s] = r, [l3, p2] = t;
      if (s === null && p2 !== null) return true;
      if (s !== null && p2 === null) return false;
      if (n !== l3) return n - l3 > 0;
      if (s !== p2) return (s ?? "").localeCompare(p2 ?? "") > 0;
    }
    return F2([e2]).localeCompare(F2([i])) > 0;
  }
  function Me(e2, i = null) {
    return Array.isArray(e2) && e2.length === 2 && typeof e2[1] == "object" && typeof e2[1] !== null ? i ? e2[1][i] ?? null : e2[0] : Array.isArray(e2) && i === null ? e2.join(", ") : typeof e2 == "string" && i === null ? e2 : null;
  }
  function Zr(e2, { theme: i }, r) {
    for (let t of r) {
      let n = Fe([t]);
      n && e2.theme.clearNamespace(`--${n}`, 4);
    }
    for (let [t, n] of Hn(i)) {
      if (typeof n != "string" && typeof n != "number") continue;
      if (typeof n == "string" && (n = n.replace(/<alpha-value>/g, "1")), t[0] === "opacity" && (typeof n == "number" || typeof n == "string")) {
        let l3 = typeof n == "string" ? parseFloat(n) : n;
        l3 >= 0 && l3 <= 1 && (n = l3 * 100 + "%");
      }
      let s = Fe(t);
      s && e2.theme.add(`--${s}`, "" + n, 7);
    }
    if (Object.hasOwn(i, "fontFamily")) {
      let t = 5;
      {
        let n = Me(i.fontFamily.sans);
        n && e2.theme.hasDefault("--font-sans") && (e2.theme.add("--default-font-family", n, t), e2.theme.add("--default-font-feature-settings", Me(i.fontFamily.sans, "fontFeatureSettings") ?? "normal", t), e2.theme.add("--default-font-variation-settings", Me(i.fontFamily.sans, "fontVariationSettings") ?? "normal", t));
      }
      {
        let n = Me(i.fontFamily.mono);
        n && e2.theme.hasDefault("--font-mono") && (e2.theme.add("--default-mono-font-family", n, t), e2.theme.add("--default-mono-font-feature-settings", Me(i.fontFamily.mono, "fontFeatureSettings") ?? "normal", t), e2.theme.add("--default-mono-font-variation-settings", Me(i.fontFamily.mono, "fontVariationSettings") ?? "normal", t));
      }
    }
    return i;
  }
  function Hn(e2) {
    let i = [];
    return Jr(e2, [], (r, t) => {
      if (Xn(r)) return i.push([t, r]), 1;
      if (el(r)) {
        i.push([t, r[0]]);
        for (let n of Reflect.ownKeys(r[1])) i.push([[...t, `-${n}`], r[1][n]]);
        return 1;
      }
      if (Array.isArray(r) && r.every((n) => typeof n == "string")) return t[0] === "fontSize" ? (i.push([t, r[0]]), r.length >= 2 && i.push([[...t, "-line-height"], r[1]])) : i.push([t, r.join(", ")]), 1;
    }), i;
  }
  var Zn = { borderWidth: "border-width", outlineWidth: "outline-width", ringColor: "ring-color", ringWidth: "ring-width", transitionDuration: "transition-duration", transitionTimingFunction: "transition-timing-function" };
  var Jn = { animation: "animate", aspectRatio: "aspect", borderRadius: "radius", boxShadow: "shadow", colors: "color", containers: "container", fontFamily: "font", fontSize: "text", letterSpacing: "tracking", lineHeight: "leading", maxWidth: "container", screens: "breakpoint", transitionTimingFunction: "ease" };
  var Qn = /^[a-zA-Z0-9-_%/.]+$/;
  function Fe(e2) {
    let i = Zn[e2[0]];
    if (i && e2[1] === "DEFAULT") return `default-${i}`;
    if (e2[0] === "container") return null;
    for (let t of e2) if (!Qn.test(t)) return null;
    let r = Jn[e2[0]];
    return r && (e2 = e2.slice(), e2[0] = r), e2.map((t, n, s) => t === "1" && n !== s.length - 1 ? "" : t).map((t, n) => (t = t.replaceAll(".", "_"), (n === 0 || t.startsWith("-") || t === "lineHeight") && (t = t.replace(/([a-z])([A-Z])/g, (l3, p2, f2) => `${p2}-${f2.toLowerCase()}`)), t)).filter((t, n) => t !== "DEFAULT" || n !== e2.length - 1).join("-");
  }
  function Xn(e2) {
    return typeof e2 == "number" || typeof e2 == "string";
  }
  function el(e2) {
    if (!Array.isArray(e2) || e2.length !== 2 || typeof e2[0] != "string" && typeof e2[0] != "number" || e2[1] === void 0 || e2[1] === null || typeof e2[1] != "object") return false;
    for (let i of Reflect.ownKeys(e2[1])) if (typeof i != "string" || typeof e2[1][i] != "string" && typeof e2[1][i] != "number") return false;
    return true;
  }
  function Jr(e2, i = [], r) {
    for (let t of Reflect.ownKeys(e2)) {
      let n = e2[t];
      if (n == null) continue;
      let s = [...i, t], l3 = r(n, s) ?? 0;
      if (l3 !== 1) {
        if (l3 === 2) return 2;
        if (!(!Array.isArray(n) && typeof n != "object") && Jr(n, s, r) === 2) return 2;
      }
    }
  }
  function bt(e2, i = null, r = true) {
    let [t, n] = rt(M2(e2), i, r);
    return t ? F2(n) : e2;
  }
  function rt(e2, i = null, r = true) {
    let t = false;
    return _2(e2, { exit(n, s) {
      if (n.kind === "word" && n.value !== "0") {
        let l3 = Qr(n.value, i, r);
        if (l3 === null || l3 === n.value) return;
        if (l3 === "0" && s.parent?.kind === "function") {
          let p2 = Qr(n.value, i, false);
          return p2 === null ? void 0 : (t = true, V2.ReplaceSkip(ne2(p2)));
        }
        return t = true, V2.ReplaceSkip(ne2(l3));
      } else if (n.kind === "function" && (n.value === "calc" || n.value === "")) {
        if (n.nodes.length !== 5 || n.nodes[2].kind !== "word") return;
        let l3 = n.nodes[0], p2 = n.nodes[2].value, f2 = n.nodes[4], c2 = l3.kind === "word" ? le.get(l3.value) : null, m = f2.kind === "word" ? le.get(f2.value) : null;
        if (p2 === "*" && (c2?.[0] === 0 && c2?.[1] === null || m?.[0] === 0 && m?.[1] === null)) return t = true, V2.ReplaceSkip(ne2("0"));
        if (p2 === "*" && c2?.[0] === 0 && c2?.[1] !== null && m?.[1] === null) return t = true, s.parent?.kind === "function" ? V2.ReplaceSkip(ne2(`0${c2[1]}`)) : V2.ReplaceSkip(ne2("0"));
        if (p2 === "*" && m?.[0] === 0 && m?.[1] !== null && c2?.[1] === null) return t = true, s.parent?.kind === "function" ? V2.ReplaceSkip(ne2(`0${m[1]}`)) : V2.ReplaceSkip(ne2("0"));
        if (p2 === "*") {
          if (c2?.[0] === 1 && c2?.[1] === null) return t = true, V2.ReplaceSkip(f2);
          if (m?.[0] === 1 && m?.[1] === null) return t = true, V2.ReplaceSkip(l3);
        }
        if (p2 === "*" || p2 === "+") {
          let d2 = c2 ?? m, u2 = c2 === null ? l3 : m === null ? f2 : null;
          if (d2 !== null && u2 !== null && u2.kind === "function" && (u2.value === "calc" || u2.value === "") && u2.nodes.length === 5 && u2.nodes[2].kind === "word" && u2.nodes[2].value === p2) {
            let h3 = u2.nodes[0], v2 = u2.nodes[4], k = h3.kind === "word" ? le.get(h3.value) : null, y2 = v2.kind === "word" ? le.get(v2.value) : null, N2 = k ?? y2, A2 = k === null ? h3 : y2 === null ? v2 : null;
            if (N2 !== null && A2 !== null) {
              if (p2 === "*" && !(d2[1] === null && N2[1] === null || d2[1] === null && N2[1] !== null || d2[1] !== null && N2[1] === null) || p2 === "+" && d2[1] !== N2[1]) return;
              let b2;
              switch (p2) {
                case "*": {
                  b2 = `${d2[0] * N2[0]}${d2[1] ?? N2[1] ?? ""}`;
                  break;
                }
                case "+": {
                  b2 = `${d2[0] + N2[0]}${d2[1] ?? N2[1] ?? ""}`;
                  break;
                }
                default:
                  return;
              }
              if (t = true, p2 === "*" && b2 === "1") return V2.ReplaceSkip(A2);
              let D2 = { kind: "function", value: n.value, nodes: [ne2(b2), n.nodes[1], n.nodes[2], n.nodes[3], A2] };
              return V2.ReplaceSkip(D2);
            }
          }
        }
        if (c2 === null || m === null) return;
        switch (p2) {
          case "*": {
            if (c2[1] === m[1] || c2[1] === null && m[1] !== null || c2[1] !== null && m[1] === null) return t = true, V2.ReplaceSkip(ne2(`${c2[0] * m[0]}${c2[1] ?? m[1] ?? ""}`));
            break;
          }
          case "+": {
            if (c2[1] === m[1]) return t = true, V2.ReplaceSkip(ne2(`${c2[0] + m[0]}${c2[1] ?? ""}`));
            break;
          }
          case "-": {
            if (c2[1] === m[1]) return t = true, V2.ReplaceSkip(ne2(`${c2[0] - m[0]}${c2[1] ?? ""}`));
            break;
          }
          case "/": {
            if (m[0] !== 0 && (c2[1] === null && m[1] === null || c2[1] !== null && m[1] === null)) {
              let d2 = c2[0] / m[0];
              if (Math.round(d2 * 100) / 100 !== d2) break;
              return t = true, V2.ReplaceSkip(ne2(`${d2}${c2[1] ?? ""}`));
            }
            break;
          }
        }
      }
    } }), [t, e2];
  }
  function Qr(e2, i = null, r = true) {
    let t = le.get(e2);
    if (t === null) return null;
    let [n, s] = t;
    if (s === null) return `${n}`;
    if (n === 0 && y(e2)) return r ? "0" : `0${s}`;
    if (!r) return `${e2}`;
    switch (s.toLowerCase()) {
      case "in":
        return `${n * 96}px`;
      case "cm":
        return `${n * 96 / 2.54}px`;
      case "mm":
        return `${n * 96 / 2.54 / 10}px`;
      case "q":
        return `${n * 96 / 2.54 / 10 / 4}px`;
      case "pc":
        return `${n * 96 / 6}px`;
      case "pt":
        return `${n * 96 / 72}px`;
      case "rem":
        return i !== null ? `${n * i}px` : null;
      case "grad":
        return `${n * 0.9}deg`;
      case "rad":
        return `${n * 180 / Math.PI}deg`;
      case "turn":
        return `${n * 360}deg`;
      case "ms":
        return `${n / 1e3}s`;
      case "khz":
        return `${n * 1e3}hz`;
      default:
        return `${n}${s}`;
    }
  }
  function Ne(e2, i = "top", r = "right", t = "bottom", n = "left") {
    return ri(`${e2}-${i}`, `${e2}-${r}`, `${e2}-${t}`, `${e2}-${n}`);
  }
  function ri(e2 = "top", i = "right", r = "bottom", t = "left") {
    return { 1: [[e2, 0], [i, 0], [r, 0], [t, 0]], 2: [[e2, 0], [i, 1], [r, 0], [t, 1]], 3: [[e2, 0], [i, 1], [r, 2], [t, 1]], 4: [[e2, 0], [i, 1], [r, 2], [t, 3]] };
  }
  function se(e2, i) {
    return { 1: [[e2, 0], [i, 0]], 2: [[e2, 0], [i, 1]] };
  }
  var Xr = { inset: ri(), margin: Ne("margin"), padding: Ne("padding"), "scroll-margin": Ne("scroll-margin"), "scroll-padding": Ne("scroll-padding"), "border-width": Ne("border", "top-width", "right-width", "bottom-width", "left-width"), "border-style": Ne("border", "top-style", "right-style", "bottom-style", "left-style"), "border-color": Ne("border", "top-color", "right-color", "bottom-color", "left-color"), gap: se("row-gap", "column-gap"), overflow: se("overflow-x", "overflow-y"), "overscroll-behavior": se("overscroll-behavior-x", "overscroll-behavior-y") };
  var ei = { "inset-block": se("top", "bottom"), "inset-inline": se("left", "right"), "margin-block": se("margin-top", "margin-bottom"), "margin-inline": se("margin-left", "margin-right"), "padding-block": se("padding-top", "padding-bottom"), "padding-inline": se("padding-left", "padding-right"), "scroll-margin-block": se("scroll-margin-top", "scroll-margin-bottom"), "scroll-margin-inline": se("scroll-margin-left", "scroll-margin-right"), "scroll-padding-block": se("scroll-padding-top", "scroll-padding-bottom"), "scroll-padding-inline": se("scroll-padding-left", "scroll-padding-right") };
  var ti = { "border-block": ["border-bottom", "border-top"], "border-block-color": ["border-bottom-color", "border-top-color"], "border-block-style": ["border-bottom-style", "border-top-style"], "border-block-width": ["border-bottom-width", "border-top-width"], "border-inline": ["border-left", "border-right"], "border-inline-color": ["border-left-color", "border-right-color"], "border-inline-style": ["border-left-style", "border-right-style"], "border-inline-width": ["border-left-width", "border-right-width"] };
  function ii(e2, i) {
    if (i & 2) {
      if (e2.property in ei) {
        let r = d(e2.value, " ");
        return ei[e2.property][r.length]?.map(([t, n]) => o(t, r[n], e2.important));
      }
      if (e2.property in ti) return ti[e2.property]?.map((r) => o(r, e2.value, e2.important));
    }
    if (e2.property in Xr) {
      let r = d(e2.value, " ");
      return Xr[e2.property][r.length]?.map(([t, n]) => o(t, r[n], e2.important));
    }
    return null;
  }
  function tl(e2) {
    return { kind: "combinator", value: e2 };
  }
  function qt(e2) {
    return { kind: "complex", nodes: e2 };
  }
  function ni(e2) {
    return { kind: "compound", nodes: e2 };
  }
  function rl(e2, i) {
    return { kind: "function", value: e2, nodes: i };
  }
  function il(e2) {
    return { kind: "list", nodes: e2 };
  }
  function Ae(e2) {
    return { kind: "selector", value: e2 };
  }
  function nl(e2) {
    return { kind: "value", value: e2 };
  }
  function ue2(e2, i = false) {
    let r = "";
    for (let t of e2) switch (t.kind) {
      case "selector":
      case "value": {
        r += t.value;
        break;
      }
      case "combinator": {
        i || t.value === " " ? r += t.value : r += ` ${t.value} `;
        break;
      }
      case "function": {
        r += `${t.value}(${ue2(t.nodes, i)})`;
        break;
      }
      case "complex":
      case "compound": {
        r += ue2(t.nodes, i);
        break;
      }
      case "list": {
        r += t.nodes.map((n) => ue2([n], i)).join(i ? "," : ", ");
        break;
      }
    }
    return r;
  }
  var li = 92;
  var ll = 93;
  var oi = 41;
  var ai = 58;
  var si = 44;
  var ol = 34;
  var al = 46;
  var ui = 62;
  var Ht = 10;
  var sl = 35;
  var fi = 91;
  var ci = 40;
  var pi = 43;
  var ul = 39;
  var Zt = 32;
  var Jt = 9;
  var di = 126;
  var fl = 38;
  var cl = 42;
  function Ee2(e2) {
    e2 = e2.replaceAll(`\r
`, `
`);
    let i = [], r = i, t = false, n = [], s = null, l3 = "", p2;
    function f2(m = r) {
      return m.length === 1 ? m[0] : t ? qt(m) : ni(m);
    }
    function c2(m) {
      let d2 = r[r.length - 1];
      d2?.kind === "compound" ? d2.nodes.push(m) : d2 && d2.kind !== "list" && d2.kind !== "combinator" ? r[r.length - 1] = ni([d2, m]) : r.push(m);
    }
    for (let m = 0; m < e2.length; m++) {
      let d2 = e2.charCodeAt(m);
      switch (d2) {
        case si: {
          for (l3.length > 0 && (c2(Ae(l3)), l3 = ""); m + 1 < e2.length && (p2 = e2.charCodeAt(m + 1), !(p2 !== Ht && p2 !== Zt && p2 !== Jt)); m++) ;
          if (s) s.nodes.push(f2()), r = [], t = false;
          else {
            let u2 = r.splice(0), h3 = f2(u2), v2 = il([h3]);
            r.push(v2), s = v2, r = [], t = false;
          }
          break;
        }
        case ui:
        case Ht:
        case Zt:
        case pi:
        case Jt:
        case di: {
          l3.length > 0 && (c2(Ae(l3)), l3 = "");
          let u2 = m, h3 = m + 1;
          for (; h3 < e2.length && (p2 = e2.charCodeAt(h3), !(p2 !== ui && p2 !== Ht && p2 !== Zt && p2 !== pi && p2 !== Jt && p2 !== di)); h3++) ;
          m = h3 - 1;
          let v2 = e2.slice(u2, h3).trim();
          if (v2 === "" && (r.length === 0 || h3 >= e2.length || e2.charCodeAt(h3) === si)) break;
          r.push(tl(v2 === "" ? " " : v2)), t = true;
          break;
        }
        case ci: {
          let u2 = rl(l3, []);
          if (l3 = "", u2.value !== ":not" && u2.value !== ":where" && u2.value !== ":has" && u2.value !== ":is") {
            let h3 = m + 1, v2 = 0;
            for (let y2 = m + 1; y2 < e2.length; y2++) {
              if (p2 = e2.charCodeAt(y2), p2 === ci) {
                v2++;
                continue;
              }
              if (p2 === oi) {
                if (v2 === 0) {
                  m = y2;
                  break;
                }
                v2--;
              }
            }
            let k = m;
            u2.nodes.push(nl(e2.slice(h3, k))), l3 = "", m = k, c2(u2);
            break;
          }
          c2(u2), n.push({ target: r, currentList: s, containsCombinator: t }), r = u2.nodes, t = false, s = null;
          break;
        }
        case oi: {
          l3.length > 0 && (c2(Ae(l3)), l3 = ""), s ? s.nodes.push(f2()) : t && r.splice(0, r.length, qt(r.splice(0)));
          let u2 = n.pop();
          r = u2?.target ?? i, s = u2?.currentList ?? null, t = u2?.containsCombinator ?? false;
          break;
        }
        case al:
        case ai:
        case sl: {
          if (d2 === ai && l3 === ":") {
            l3 += e2[m];
            break;
          }
          l3.length > 0 && c2(Ae(l3)), l3 = e2[m];
          break;
        }
        case fi: {
          l3.length > 0 && c2(Ae(l3)), l3 = "";
          let u2 = m, h3 = 0;
          for (let v2 = m + 1; v2 < e2.length; v2++) {
            if (p2 = e2.charCodeAt(v2), p2 === fi) {
              h3++;
              continue;
            }
            if (p2 === ll) {
              if (h3 === 0) {
                m = v2;
                break;
              }
              h3--;
            }
          }
          l3 += e2.slice(u2, m + 1);
          break;
        }
        case ul:
        case ol: {
          let u2 = m;
          for (let h3 = m + 1; h3 < e2.length; h3++) if (p2 = e2.charCodeAt(h3), p2 === li) h3 += 1;
          else if (p2 === d2) {
            m = h3;
            break;
          }
          l3 += e2.slice(u2, m + 1);
          break;
        }
        case fl:
        case cl: {
          l3.length > 0 && (c2(Ae(l3)), l3 = ""), c2(Ae(e2[m]));
          break;
        }
        case li: {
          l3 += e2[m] + e2[m + 1], m += 1;
          break;
        }
        default:
          l3 += e2[m];
      }
    }
    return l3.length > 0 && c2(Ae(l3)), s ? s.nodes.push(f2()) : t && r.splice(0, r.length, qt(r.splice(0))), i;
  }
  function ce(e2, i) {
    for (let r in e2) delete e2[r];
    return Object.assign(e2, i);
  }
  function Re(e2) {
    let i = [];
    for (let r of d(e2, ".")) {
      if (!r.includes("[")) {
        i.push(r);
        continue;
      }
      let t = 0;
      for (; ; ) {
        let n = r.indexOf("[", t), s = r.indexOf("]", n);
        if (n === -1 || s === -1) break;
        n > t && i.push(r.slice(t, n)), i.push(r.slice(n + 1, s)), t = s + 1;
      }
      t <= r.length - 1 && i.push(r.slice(t));
    }
    return i;
  }
  function Qt(e2, i) {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i2, _j, _k, _l2, _m, _n2;
    let r = e2;
    return (_a2 = r.storage)[ki] ?? (_a2[ki] = pl()), (_b = r.storage)[bi] ?? (_b[bi] = gl(r)), (_c = r.storage)[yi] ?? (_c[yi] = wl()), (_d = r.storage)[xi] ?? (_d[xi] = bl()), (_e = r.storage)[Ai] ?? (_e[Ai] = xl()), (_f = r.storage)[er] ?? (_f[er] = Tl(r)), (_g = r.storage)[At] ?? (_g[At] = Rl(r, i)), (_h = r.storage)[ve] ?? (_h[ve] = Yl(r)), (_i2 = r.storage)[tr] ?? (_i2[tr] = ql()), (_j = r.storage)[Ct] ?? (_j[Ct] = Hl(r)), (_k = r.storage)[rr] ?? (_k[rr] = Zl(r)), (_l2 = r.storage)[St] ?? (_l2[St] = Jl(r)), (_m = r.storage)[Ti] ?? (_m[Ti] = Ql(r)), (_n2 = r.storage)[it] ?? (_n2[it] = dl(r)), r;
  }
  var ki = Symbol();
  function pl() {
    return new U2((e2) => new U2((i) => ({ rem: e2, features: i })));
  }
  var it = Symbol();
  function dl(e2) {
    return new U2((i) => {
      let r = e2.storage[ve].get(i);
      return function(n, s) {
        let l3 = typeof n == "string" ? n : e2.printCandidate(n), p2 = r.get(l3);
        if (typeof p2 != "string") return false;
        let f2 = typeof s == "string" ? s : e2.printCandidate(s), c2 = r.get(f2);
        return typeof c2 != "string" ? false : p2 === c2;
      };
    });
  }
  function ml(e2, i) {
    let r = 0;
    return i?.collapse && (r |= 1), i?.logicalToPhysical && (r |= 2), Qt(e2, i).storage[ki].get(i?.rem ?? null).get(r);
  }
  var bi = Symbol();
  function gl(e2) {
    return new U2((i) => new U2((r) => ({ features: r, designSystem: e2, signatureOptions: i })));
  }
  function hl(e2, i, r) {
    let t = 0;
    return r?.collapse && (t |= 1), Qt(e2).storage[bi].get(i).get(t);
  }
  function Xt(e2, i, r) {
    let t = ml(e2, r), n = hl(e2, t, r), s = Qt(e2), l3 = /* @__PURE__ */ new Set(), p2 = s.storage[yi].get(n);
    for (let f2 of i) l3.add(p2.get(f2));
    return l3.size <= 1 || !(n.features & 1) ? Array.from(l3) : vl(n, Array.from(l3));
  }
  function vl(e2, i) {
    let r = e2.designSystem, t = new U2((p2) => new U2((f2) => /* @__PURE__ */ new Set())), n = e2.designSystem.theme.prefix ? `${e2.designSystem.theme.prefix}:` : "";
    for (let p2 of i) {
      let f2 = d(p2, ":"), c2 = f2.pop(), m = c2.endsWith("!");
      m && (c2 = c2.slice(0, -1));
      let d2 = f2.length > 0 ? `${f2.join(":")}:` : "", u2 = m ? "!" : "";
      t.get(d2).get(u2).add(`${n}${c2}`);
    }
    let s = /* @__PURE__ */ new Set();
    for (let [p2, f2] of t.entries()) for (let [c2, m] of f2.entries()) for (let d2 of l3(Array.from(m))) n && d2.startsWith(n) && (d2 = d2.slice(n.length)), s.add(`${p2}${d2}${c2}`);
    return Array.from(s);
    function l3(p2) {
      let f2 = e2.signatureOptions, c2 = r.storage[Ct].get(f2), m = r.storage[tr].get(f2), d2 = p2.map((A2) => c2.get(A2));
      if (d2.some((A2) => A2.has("line-height"))) {
        let A2 = r.theme.keysInNamespaces(["--text"]);
        if (A2.length > 0) {
          let b2 = /* @__PURE__ */ new Set(), D2 = /* @__PURE__ */ new Set();
          for (let P2 of d2) if (P2.has("line-height")) for (let z2 of P2.get("line-height")) {
            if (D2.has(z2)) continue;
            D2.add(z2);
            let E2 = r.storage[At]?.get(z2) ?? null;
            if (E2 !== null) if (ue(E2)) {
              b2.add(E2);
              for (let j2 of A2) c2.get(`text-${j2}/${E2}`);
            } else {
              b2.add(z2);
              for (let j2 of A2) c2.get(`text-${j2}/[${z2}]`);
            }
          }
          let O2 = /* @__PURE__ */ new Set();
          for (let P2 of d2) if (P2.has("font-size")) {
            for (let z2 of P2.get("font-size")) if (!O2.has(z2)) {
              O2.add(z2);
              for (let E2 of b2) ue(E2) ? c2.get(`text-[${z2}]/${E2}`) : c2.get(`text-[${z2}]/[${E2}]`);
            }
          }
        }
      }
      let u2 = new U2((A2) => {
        let b2 = new U2((O2) => new U2((P2) => /* @__PURE__ */ new Set())), D2 = new Set(c2.get(A2).keys());
        if (D2.size === 0) return b2;
        for (let O2 of pe2(r, A2)) if (!(O2.kind !== "functional" || O2.value === null)) {
          for (let P2 of r.utilities.keys("functional")) {
            if (P2 === O2.root) continue;
            let z2 = Ci(r, { ...Ue(O2), root: P2 }), E2 = c2.get(z2);
            for (let [j2, q2] of E2) if (D2.has(j2)) for (let G2 of q2) b2.get(j2).get(G2).add(z2);
          }
          return b2;
        }
        return b2;
      }), h3 = d2.map((A2, b2) => {
        let D2 = null;
        for (let O2 of A2.keys()) {
          let P2 = /* @__PURE__ */ new Set();
          for (let z2 of m.get(O2).values()) for (let E2 of z2) P2.add(E2);
          for (let z2 of A2.get(O2)) for (let E2 of u2.get(p2[b2]).get(O2).get(z2)) P2.add(E2);
          if (D2 === null ? D2 = P2 : D2 = wi(D2, P2), D2.size === 0) return D2;
        }
        return D2 ?? /* @__PURE__ */ new Set();
      }), v2 = new U2((A2) => /* @__PURE__ */ new Set([A2]));
      for (let A2 = 0; A2 < h3.length; A2++) {
        let b2 = h3[A2];
        for (let D2 = A2 + 1; D2 < h3.length; D2++) {
          let O2 = h3[D2];
          for (let P2 of b2) if (O2.has(P2)) {
            v2.get(A2).add(D2), v2.get(D2).add(A2);
            break;
          }
        }
      }
      if (v2.size === 0) return p2;
      let k = new U2((A2) => A2.split(",").map(Number));
      for (let A2 of v2.values()) {
        let b2 = Array.from(A2).sort((D2, O2) => D2 - O2);
        k.get(b2.join(","));
      }
      let y2 = new Set(p2), N2 = /* @__PURE__ */ new Set();
      for (let A2 of k.values()) for (let b2 of eo(A2)) {
        if (b2.some((P2) => N2.has(p2[P2]))) continue;
        let D2 = b2.flatMap((P2) => h3[P2]).reduce(wi), O2 = r.storage[ve].get(f2).get(b2.map((P2) => p2[P2]).sort((P2, z2) => P2.localeCompare(z2)).join(" "));
        for (let P2 of D2) if (r.storage[ve].get(f2).get(P2) === O2) {
          y2.add(P2);
          for (let E2 of b2) p2[E2] !== P2 && N2.add(p2[E2]);
          break;
        }
      }
      for (let A2 of N2) y2.delete(A2);
      return Array.from(y2);
    }
  }
  var yi = Symbol();
  function wl() {
    return new U2((e2) => {
      let i = e2.designSystem, r = i.theme.prefix ? `${i.theme.prefix}:` : "", t = i.storage[xi].get(e2), n = i.storage[Ai].get(e2);
      return new U2((s, l3) => {
        for (let p2 of i.parseCandidate(s)) {
          let f2 = p2.variants.slice().reverse().flatMap((d2) => t.get(d2)), c2 = p2.important;
          if (c2 || f2.length > 0) {
            let u2 = l3.get(i.printCandidate({ ...p2, variants: [], important: false }));
            return i.theme.prefix !== null && f2.length > 0 && (u2 = u2.slice(r.length)), f2.length > 0 && (u2 = `${f2.map((h3) => i.printVariant(h3)).join(":")}:${u2}`), c2 && (u2 += "!"), i.theme.prefix !== null && f2.length > 0 && (u2 = `${r}${u2}`), u2;
          }
          let m = n.get(s);
          if (m !== s) return m;
        }
        return s;
      });
    });
  }
  var kl = [Sl, Ml, Fl, zl];
  var xi = Symbol();
  function bl() {
    return new U2((e2) => new U2((i) => {
      let r = [i];
      for (let t of kl) for (let n of r.splice(0)) {
        let s = t(Ke(n), e2);
        if (Array.isArray(s)) {
          r.push(...s);
          continue;
        } else r.push(s);
      }
      return r;
    }));
  }
  var yl = [Cl, Vl, $l, Wl, Pl, _l, Ul, Ll, jl, Bl];
  var Ai = Symbol();
  function xl() {
    return new U2((e2) => {
      let i = e2.designSystem;
      return new U2((r) => {
        for (let t of i.parseCandidate(r)) {
          let n = Ue(t);
          for (let l3 of yl) n = l3(n, e2);
          let s = i.printCandidate(n);
          if (r !== s) return s;
        }
        return r;
      });
    });
  }
  var Al = ["t", "tr", "r", "br", "b", "bl", "l", "tl"];
  function Cl(e2) {
    if (e2.kind === "static" && e2.root.startsWith("bg-gradient-to-")) {
      let i = e2.root.slice(15);
      return Al.includes(i) && (e2.root = `bg-linear-to-${i}`), e2;
    }
    return e2;
  }
  function Vl(e2, i) {
    let r = i.designSystem.storage[er];
    if (e2.kind === "arbitrary") {
      let [t, n] = r(e2.value, e2.modifier === null ? 1 : 0);
      t !== e2.value && (e2.value = t, n !== null && (e2.modifier = n));
    } else if (e2.kind === "functional" && e2.value?.kind === "arbitrary") {
      let [t, n] = r(e2.value.value, e2.modifier === null ? 1 : 0);
      t !== e2.value.value && (e2.value.value = t, n !== null && (e2.modifier = n));
    }
    return e2;
  }
  function Sl(e2, i) {
    let r = i.designSystem.storage[er], t = Vt(e2);
    for (let [n] of t) if (n.kind === "arbitrary") {
      let [s] = r(n.selector, 2);
      s !== n.selector && (n.selector = s);
    } else if (n.kind === "functional" && n.value?.kind === "arbitrary") {
      let [s] = r(n.value.value, 2);
      s !== n.value.value && (n.value.value = s);
    }
    return e2;
  }
  function $l(e2, i) {
    return e2.kind === "arbitrary" ? e2.value = gi(e2.value, i.designSystem) : e2.kind === "functional" && e2.value?.kind === "arbitrary" && (e2.value.value = gi(e2.value.value, i.designSystem)), e2;
  }
  function gi(e2, i) {
    let r = i.theme.prefix ? `--${i.theme.prefix}-spacing` : "--spacing", t = M2(e2);
    return _2(t, (n) => {
      if (!(n.kind !== "function" || n.value !== "calc") && n.nodes.length === 5 && !(n.nodes[2].kind !== "word" || n.nodes[2].value !== "*") && !(n.nodes[0].kind !== "function" || n.nodes[0].value !== "var" || n.nodes[0].nodes.length !== 1 || n.nodes[0].nodes[0].kind !== "word" || n.nodes[0].nodes[0].value !== r)) return V2.Replace(M2(`--spacing(${F2([n.nodes[4]])})`));
    }), F2(t);
  }
  var er = Symbol();
  function Tl(e2) {
    return i(e2);
    function i(r) {
      function t(p2, f2 = 0) {
        let c2 = M2(p2);
        if (f2 & 2) return [yt(c2, l3), null];
        let m = 0, d2 = 0;
        if (_2(c2, (v2) => {
          v2.kind === "function" && v2.value === "theme" && (m += 1, _2(v2.nodes, (k) => k.kind === "separator" && k.value.includes(",") ? V2.Stop : k.kind === "word" && k.value === "/" ? (d2 += 1, V2.Stop) : V2.Skip));
        }), m === 0) return [p2, null];
        if (d2 === 0) return [yt(c2, s), null];
        if (d2 > 1) return [yt(c2, l3), null];
        let u2 = null;
        return [yt(c2, (v2, k) => {
          let y2 = d(v2, "/").map((N2) => N2.trim());
          if (y2.length > 2) return null;
          if (c2.length === 1 && y2.length === 2 && f2 & 1) {
            let [N2, A2] = y2;
            if (/^\d+%$/.test(A2)) u2 = { kind: "named", value: A2.slice(0, -1) };
            else if (/^0?\.\d+$/.test(A2)) {
              let b2 = Number(A2) * 100;
              u2 = { kind: Number.isInteger(b2) ? "named" : "arbitrary", value: b2.toString() };
            } else u2 = { kind: "arbitrary", value: A2 };
            v2 = N2;
          }
          return s(v2, k) || l3(v2, k);
        }), u2];
      }
      function n(p2, f2 = true) {
        let c2 = `--${Fe(Re(p2))}`;
        return r.theme.get([c2]) ? f2 && r.theme.prefix ? `--${r.theme.prefix}-${c2.slice(2)}` : c2 : null;
      }
      function s(p2, f2) {
        let c2 = n(p2);
        if (c2) return f2 ? `var(${c2}, ${f2})` : `var(${c2})`;
        let m = Re(p2);
        if (m[0] === "spacing" && r.theme.get(["--spacing"])) {
          let d2 = m[1];
          return ue(d2) ? `--spacing(${d2})` : null;
        }
        return null;
      }
      function l3(p2, f2) {
        let c2 = d(p2, "/").map((u2) => u2.trim());
        p2 = c2.shift();
        let m = n(p2, false);
        if (!m) return null;
        let d2 = c2.length > 0 ? `/${c2.join("/")}` : "";
        return f2 ? `--theme(${m}${d2}, ${f2})` : `--theme(${m}${d2})`;
      }
      return t;
    }
  }
  function yt(e2, i) {
    return _2(e2, (r, t) => {
      if (r.kind === "function" && r.value === "theme") {
        if (r.nodes.length < 1) return;
        r.nodes[0].kind === "separator" && r.nodes[0].value.trim() === "" && r.nodes.shift();
        let n = r.nodes[0];
        if (n.kind !== "word") return;
        let s = n.value, l3 = 1;
        for (let c2 = l3; c2 < r.nodes.length && !r.nodes[c2].value.includes(","); c2++) s += F2([r.nodes[c2]]), l3 = c2 + 1;
        s = Nl(s);
        let p2 = r.nodes.slice(l3 + 1), f2 = p2.length > 0 ? i(s, F2(p2)) : i(s);
        if (f2 === null) return;
        {
          let c2 = t.index - 1;
          for (; c2 !== -1; ) {
            let m = t.siblings[c2];
            if (m.kind === "separator" && m.value.trim() === "") {
              c2 -= 1;
              continue;
            }
            /^[-+*/]$/.test(m.value.trim()) && (f2 = `(${f2})`);
            break;
          }
        }
        return V2.Replace(M2(f2));
      }
    }), F2(e2);
  }
  function Nl(e2) {
    if (e2[0] !== "'" && e2[0] !== '"') return e2;
    let i = "", r = e2[0];
    for (let t = 1; t < e2.length - 1; t++) {
      let n = e2[t], s = e2[t + 1];
      n === "\\" && (s === r || s === "\\") ? (i += s, t++) : i += n;
    }
    return i;
  }
  function* Vt(e2) {
    function* i(r, t = null) {
      yield [r, t], r.kind === "compound" && (yield* i(r.variant, r));
    }
    yield* i(e2, null);
  }
  function pe2(e2, i) {
    return e2.parseCandidate(e2.theme.prefix && !i.startsWith(`${e2.theme.prefix}:`) ? `${e2.theme.prefix}:${i}` : i);
  }
  function Ci(e2, i) {
    let r = e2.printCandidate(i);
    return e2.theme.prefix && r.startsWith(`${e2.theme.prefix}:`) ? r.slice(e2.theme.prefix.length + 1) : r;
  }
  var At = Symbol();
  var Vi = 1536;
  var El = Vi / 16;
  function hi(e2, i, r) {
    let t = i.resolveThemeValue("--spacing");
    if (t === void 0) return false;
    let n = le.get(bt(t, r));
    if (n === null) return false;
    let [s, l3] = n, p2 = e2 * s;
    return l3 === "px" ? p2 <= Vi : l3 === "rem" ? p2 <= El : false;
  }
  function Rl(e2, i) {
    let r = e2.resolveThemeValue("--spacing");
    if (r === void 0) return null;
    r = bt(r, i?.rem ?? null);
    let t = le.get(r);
    if (!t) return null;
    let [n, s] = t;
    return new U2((l3) => {
      if (n === 0) return null;
      let p2 = le.get(bt(l3, i?.rem ?? null));
      if (!p2) return null;
      let [f2, c2] = p2;
      return c2 !== s ? null : f2 / n;
    });
  }
  function Pl(e2, i) {
    if (e2.kind !== "arbitrary" && !(e2.kind === "functional" && e2.value?.kind === "arbitrary")) return e2;
    let r = i.designSystem, t = r.storage[rr].get(i.signatureOptions), n = r.storage[ve].get(i.signatureOptions), s = r.storage[it].get(i.signatureOptions), l3 = r.printCandidate(e2), p2 = n.get(l3);
    if (typeof p2 != "string") return e2;
    for (let c2 of f2(p2, e2)) if (s(e2, c2) && Ol(r, e2, c2)) return c2;
    return e2;
    function* f2(c2, m) {
      let d2 = t.get(c2);
      if (d2.length > 1) {
        let u2;
        for (let h3 of d2) if (h3[0] !== "-") {
          if (u2) return;
          u2 = h3;
        }
        if (u2) for (let h3 of pe2(r, u2)) yield h3;
        return;
      }
      if (d2.length === 0 && m.modifier) {
        let u2 = { ...m, modifier: null }, h3 = n.get(r.printCandidate(u2));
        if (typeof h3 == "string") for (let v2 of f2(h3, u2)) yield Object.assign({}, v2, { modifier: m.modifier });
      }
      if (d2.length === 1) for (let u2 of pe2(r, d2[0])) yield u2;
      else if (d2.length === 0) {
        let u2 = m.kind === "arbitrary" ? m.value : m.value?.value ?? null;
        if (u2 === null) return;
        if (i.signatureOptions.rem !== null && m.kind === "functional" && m.value?.kind === "arbitrary") {
          let k = r.storage[At]?.get(u2) ?? null;
          k !== null && ue(k) && hi(k, r, i.signatureOptions.rem) && (yield Object.assign({}, m, { value: { kind: "named", value: k, fraction: null } }));
        }
        let h3 = r.storage[At]?.get(u2) ?? null, v2 = "";
        h3 !== null && h3 < 0 && (v2 = "-", h3 = Math.abs(h3));
        for (let k of Array.from(r.utilities.keys("functional")).sort((y2, N2) => +(y2[0] === "-") - +(N2[0] === "-"))) {
          v2 && (k = `${v2}${k}`);
          for (let y2 of pe2(r, `${k}-${u2}`)) yield y2;
          if (m.modifier) for (let y2 of pe2(r, `${k}-${u2}${m.modifier}`)) yield y2;
          if (h3 !== null && ue(h3) && hi(h3, r, i.signatureOptions.rem)) {
            for (let y2 of pe2(r, `${k}-${h3}`)) yield y2;
            if (m.modifier) for (let y2 of pe2(r, `${k}-${h3}${et(m.modifier)}`)) yield y2;
          }
          for (let y2 of pe2(r, `${k}-[${u2}]`)) yield y2;
          if (m.modifier) for (let y2 of pe2(r, `${k}-[${u2}]${et(m.modifier)}`)) yield y2;
        }
      }
    }
  }
  function Ol(e2, i, r) {
    let t = null;
    if (i.kind === "functional" && i.value?.kind === "arbitrary" && i.value.value.includes("var(--") ? t = i.value.value : i.kind === "arbitrary" && i.value.includes("var(--") && (t = i.value), t === null) return true;
    let n = e2.candidatesToCss([e2.printCandidate(r)]).join(`
`), s = true;
    return _2(M2(t), (l3) => {
      if (l3.kind === "function" && l3.value === "var") {
        let p2 = l3.nodes[0].value;
        if (!new RegExp(`var\\(${p2}[,)]\\s*`, "g").test(n) || n.includes(`${p2}:`)) return s = false, V2.Stop;
      }
    }), s;
  }
  function _l(e2, i) {
    if (e2.kind !== "functional" || e2.value?.kind !== "named") return e2;
    let r = i.designSystem, t = r.storage[rr].get(i.signatureOptions), n = r.storage[ve].get(i.signatureOptions), s = r.storage[it].get(i.signatureOptions), l3 = r.printCandidate(e2), p2 = n.get(l3);
    if (typeof p2 != "string") return e2;
    for (let c2 of f2(p2, e2)) if (s(e2, c2)) return c2;
    return e2;
    function* f2(c2, m) {
      let d2 = t.get(c2);
      if (d2.length > 1) {
        let u2;
        for (let h3 of d2) if (h3[0] !== "-") {
          if (u2) return;
          u2 = h3;
        }
        if (u2) for (let h3 of pe2(r, u2)) yield h3;
        return;
      }
      if (d2.length === 0 && m.modifier) {
        let u2 = { ...m, modifier: null }, h3 = n.get(r.printCandidate(u2));
        if (typeof h3 == "string") for (let v2 of f2(h3, u2)) yield Object.assign({}, v2, { modifier: m.modifier });
      }
      if (d2.length === 1) for (let u2 of pe2(r, d2[0])) yield u2;
    }
  }
  var Il = /* @__PURE__ */ new Map([["order-none", "order-0"], ["break-words", "wrap-break-word"], ["overflow-ellipsis", "text-ellipsis"]]);
  var Dl = /* @__PURE__ */ new Map([[/^(-)?start-(.*?)$/, "$1inset-s-$2"], [/^(-)?end-(.*?)$/, "$1inset-e-$2"]]);
  function* Kl(e2) {
    let i = Il.get(e2);
    i && (yield i);
    for (let [r, t] of Dl) {
      let n = e2.replace(r, t);
      n !== e2 && (yield n);
    }
  }
  function Ul(e2, i) {
    let r = i.designSystem, t = r.storage[it].get(i.signatureOptions), n = Ci(r, e2);
    for (let s of Kl(n)) {
      if (!t(e2, s)) continue;
      let [l3] = pe2(r, s);
      return l3;
    }
    return e2;
  }
  function zl(e2, i) {
    let r = i.designSystem, t = r.storage[St], n = r.storage[Ti], s = Vt(e2);
    for (let [l3] of s) {
      if (l3.kind === "compound") continue;
      let p2 = r.printVariant(l3), f2 = t.get(p2);
      if (typeof f2 != "string") continue;
      let c2 = n.get(f2);
      if (c2.length !== 1) continue;
      let m = c2[0], d2 = r.parseVariant(m);
      d2 !== null && ce(l3, d2);
    }
    return e2;
  }
  function Ll(e2, i) {
    let r = i.designSystem, t = r.storage[ve].get(i.signatureOptions);
    if (e2.kind === "functional" && e2.value?.kind === "arbitrary" && e2.value.dataType !== null) {
      let n = r.printCandidate({ ...e2, value: { ...e2.value, dataType: null } });
      t.get(r.printCandidate(e2)) === t.get(n) && (e2.value.dataType = null);
    }
    return e2;
  }
  function jl(e2, i) {
    if (e2.kind !== "functional" || e2.value?.kind !== "arbitrary") return e2;
    let r = i.designSystem, t = r.storage[ve].get(i.signatureOptions), n = t.get(r.printCandidate(e2));
    if (n === null) return e2;
    for (let s of Si(e2)) if (t.get(r.printCandidate({ ...e2, value: s })) === n) return e2.value = s, e2;
    return e2;
  }
  function Ml(e2) {
    let i = Vt(e2);
    for (let [r] of i) if (r.kind === "functional" && r.root === "data" && r.value?.kind === "arbitrary" && !r.value.value.includes("=")) r.value = { kind: "named", value: r.value.value };
    else if (r.kind === "functional" && r.root === "aria" && r.value?.kind === "arbitrary" && (r.value.value.endsWith("=true") || r.value.value.endsWith('="true"') || r.value.value.endsWith("='true'"))) {
      let [t, n] = d(r.value.value, "=");
      if (t[t.length - 1] === "~" || t[t.length - 1] === "|" || t[t.length - 1] === "^" || t[t.length - 1] === "$" || t[t.length - 1] === "*") continue;
      r.value = { kind: "named", value: r.value.value.slice(0, r.value.value.indexOf("=")) };
    } else r.kind === "functional" && r.root === "supports" && r.value?.kind === "arbitrary" && /^[a-z-][a-z0-9-]*$/i.test(r.value.value) && (r.value = { kind: "named", value: r.value.value });
    return e2;
  }
  function* Si(e2, i = e2.value?.value ?? "", r = /* @__PURE__ */ new Set()) {
    if (r.has(i)) return;
    if (r.add(i), yield { kind: "named", value: i, fraction: null }, i.endsWith("%") && ue(i.slice(0, -1)) && (yield { kind: "named", value: i.slice(0, -1), fraction: null }), i.includes("/")) {
      let [s, l3] = i.split("/");
      u(s) && u(l3) && (yield { kind: "named", value: s, fraction: `${s}/${l3}` });
    }
    let t = /* @__PURE__ */ new Set();
    for (let s of i.matchAll(/(\d+\/\d+)|(\d+\.?\d+)/g)) t.add(s[0].trim());
    let n = Array.from(t).sort((s, l3) => s.length - l3.length);
    for (let s of n) yield* Si(e2, s, r);
  }
  function vi(e2) {
    return !(e2.length === 1 && e2[0].kind === "list");
  }
  function xt(e2) {
    return e2.value[0] === "[" && e2.value[e2.value.length - 1] === "]";
  }
  function Fl(e2, i) {
    let r = [e2], t = i.designSystem, n = t.storage[St], s = Vt(e2);
    for (let [l3, p2] of s) if (l3.kind === "compound" && (l3.root === "has" || l3.root === "not" || l3.root === "in") && l3.modifier !== null && "modifier" in l3.variant && (l3.variant.modifier = l3.modifier, l3.modifier = null), l3.kind === "arbitrary") {
      if (l3.relative) continue;
      let f2 = Ee2(l3.selector);
      if (!vi(f2)) continue;
      if (f2.length === 1 && f2[0].kind === "complex" && (f2 = f2[0].nodes), p2 === null && f2.length === 3 && f2[0].kind === "selector" && f2[0].value === "&" && f2[1].kind === "combinator" && f2[1].value === ">" && f2[2].kind === "selector" && f2[2].value === "*") {
        ce(l3, t.parseVariant("*"));
        continue;
      }
      if (p2 === null && f2.length === 3 && f2[0].kind === "selector" && f2[0].value === "&" && f2[1].kind === "combinator" && f2[1].value === " " && f2[2].kind === "selector" && f2[2].value === "*") {
        ce(l3, t.parseVariant("**"));
        continue;
      }
      if (p2 === null && f2.length === 1 && f2[0].kind === "compound" && f2[0].nodes.length === 2 && f2[0].nodes[0].kind === "selector" && f2[0].nodes[0].value === "&" && f2[0].nodes[1].kind === "function" && f2[0].nodes[1].value === ":has" && f2[0].nodes[1].nodes.length === 1 && f2[0].nodes[1].nodes[0].kind === "selector") {
        ce(l3, t.parseVariant(`has-[${ue2(f2[0].nodes[1].nodes, true)}]`));
        continue;
      }
      if (p2 === null && f2.length === 3 && f2[0].kind === "selector" && f2[1].kind === "combinator" && f2[1].value === " " && f2[2].kind === "selector" && f2[2].value === "&") {
        f2.pop(), f2.pop(), ce(l3, t.parseVariant(`in-[${ue2(f2, true)}]`));
        continue;
      }
      if (p2 === null && f2[0].kind === "selector" && (f2[0].value === "@media" || f2[0].value === "@supports")) {
        let u2 = n.get(t.printVariant(l3)), h3 = M2(ue2(f2, true)), v2 = false;
        if (_2(h3, (k) => {
          if (k.kind === "word" && k.value === "not") return v2 = true, V2.Replace([]);
        }), h3 = M2(F2(h3)), _2(h3, (k) => {
          k.kind === "separator" && k.value !== " " && k.value.trim() === "" && (k.value = " ");
        }), v2) {
          let k = t.parseVariant(`not-[${F2(h3)}]`);
          if (k === null) continue;
          let y2 = n.get(t.printVariant(k));
          if (u2 === y2) {
            ce(l3, k);
            continue;
          }
        }
      }
      let c2 = null;
      p2 === null && f2.length === 3 && f2[0].kind === "selector" && f2[0].value === "&" && f2[1].kind === "combinator" && f2[1].value === ">" && f2[2].kind === "selector" && (f2[2].value[0] === ":" || xt(f2[2])) && (f2 = [f2[2]], c2 = t.parseVariant("*")), p2 === null && f2.length === 3 && f2[0].kind === "selector" && f2[0].value === "&" && f2[1].kind === "combinator" && f2[1].value === " " && f2[2].kind === "selector" && (f2[2].value[0] === ":" || xt(f2[2])) && (f2 = [f2[2]], c2 = t.parseVariant("**"));
      let m = f2;
      if (_2(m, { enter(u2) {
        if (u2.kind === "selector" && u2.value === "&") return V2.Replace([]);
        if (u2.kind === "function") return V2.Skip;
      }, exit(u2) {
        if (u2.kind === "compound" && u2.nodes.length === 1) return V2.ReplaceSkip(u2.nodes);
      } }), m.length !== 1) continue;
      let d2 = m[0];
      if (d2.kind === "function" && d2.value === ":is") {
        if (!vi(d2.nodes) || d2.nodes.length !== 1 || d2.nodes[0].kind === "selector" && !xt(d2.nodes[0])) continue;
        d2 = d2.nodes[0];
      }
      if (d2.kind === "function" && d2.value[0] === ":" || d2.kind === "selector" && d2.value[0] === ":") {
        let u2 = d2, h3 = false;
        if (u2.kind === "function" && u2.value === ":not") {
          if (h3 = true, u2.nodes.length !== 1 || u2.nodes[0].kind !== "selector" && u2.nodes[0].kind !== "function" || u2.nodes[0].value[0] !== ":") continue;
          u2 = u2.nodes[0];
        }
        let v2 = ((y2) => {
          if (y2 === ":nth-child" && u2.kind === "function" && u2.nodes.length === 1 && u2.nodes[0].kind === "value" && u2.nodes[0].value === "odd") return h3 ? (h3 = false, "even") : "odd";
          if (y2 === ":nth-child" && u2.kind === "function" && u2.nodes.length === 1 && u2.nodes[0].kind === "value" && u2.nodes[0].value === "even") return h3 ? (h3 = false, "odd") : "even";
          for (let [N2, A2] of [[":nth-child", "nth"], [":nth-last-child", "nth-last"], [":nth-of-type", "nth-of-type"], [":nth-last-of-type", "nth-of-last-type"]]) if (y2 === N2 && u2.kind === "function" && u2.nodes.length === 1) return u2.nodes.length === 1 && u2.nodes[0].kind === "value" && u(u2.nodes[0].value) ? `${A2}-${u2.nodes[0].value}` : `${A2}-[${ue2(u2.nodes, true)}]`;
          if (h3) {
            let N2 = n.get(t.printVariant(l3)), A2 = n.get(`not-[${y2}]`);
            if (N2 === A2) return `[&${y2}]`;
          }
          return null;
        })(u2.value);
        if (v2 === null) {
          if (c2) return ce(l3, { kind: "arbitrary", selector: d2.value, relative: false }), [c2, l3];
          continue;
        }
        h3 && (v2 = `not-${v2}`);
        let k = t.parseVariant(v2);
        if (k === null) continue;
        ce(l3, k);
      } else if (d2.kind === "selector" && xt(d2)) {
        let u2 = qr(d2.value);
        if (u2 === null) continue;
        if (u2.attribute.startsWith("data-")) {
          let h3 = u2.attribute.slice(5);
          ce(l3, { kind: "functional", root: "data", modifier: null, value: u2.value === null ? { kind: "named", value: h3 } : { kind: "arbitrary", value: `${h3}${u2.operator}${u2.quote ?? ""}${u2.value}${u2.quote ?? ""}${u2.sensitivity ? ` ${u2.sensitivity}` : ""}` } });
        } else if (u2.attribute.startsWith("aria-")) {
          let h3 = u2.attribute.slice(5);
          ce(l3, { kind: "functional", root: "aria", modifier: null, value: u2.value === null ? { kind: "arbitrary", value: h3 } : u2.operator === "=" && u2.value === "true" && u2.sensitivity === null ? { kind: "named", value: h3 } : { kind: "arbitrary", value: `${u2.attribute}${u2.operator}${u2.quote ?? ""}${u2.value}${u2.quote ?? ""}${u2.sensitivity ? ` ${u2.sensitivity}` : ""}` } });
        } else ce(l3, { kind: "arbitrary", selector: d2.value, relative: false });
      }
      if (c2) return [c2, l3];
    }
    return r;
  }
  function Wl(e2, i) {
    if (e2.kind !== "functional" || e2.value?.kind !== "arbitrary") return e2;
    let t = i.designSystem.storage[it].get(i.signatureOptions), n = M2(e2.value.value);
    if (n.length === 1 && n[0].kind === "function" && n[0].value === "calc") {
      let [s, l3] = rt(n, null, false);
      if (s) {
        let p2 = Ue(e2);
        p2.value.value = F2(l3), t(e2, p2) && (e2 = p2, n = l3);
      }
    }
    if (e2.root[0] === "-") {
      if (n.length === 1 && n[0].kind === "function" && n[0].value === "var") return e2;
      let s = M2(`calc(${e2.value.value} * -1)`), [l3, p2] = rt(s, null, false);
      if (l3) {
        let f2 = Ue(e2);
        f2.root = f2.root.slice(1), f2.value.value = F2(p2), t(e2, f2) && (e2 = f2, n = p2);
      }
    }
    if (n.length === 1 && n[0].kind === "function" && n[0].value === "calc") {
      let s = n[0].nodes;
      if (s.length === 5 && s[1].kind === "separator" && s[1].value === " " && s[2].kind === "word" && s[2].value === "*" && s[3].kind === "separator" && s[3].value === " ") {
        let l3 = s[4].kind === "word" && s[4].value === "-1" ? s[0] : s[0].kind === "word" && s[0].value === "-1" ? s[4] : null;
        if (l3) {
          let p2 = Ue(e2);
          p2.root = `-${e2.root}`, p2.value.value = F2([l3]), t(e2, p2) && (e2 = p2);
        }
      }
    }
    return e2;
  }
  function Bl(e2, i) {
    if (e2.kind !== "functional" && e2.kind !== "arbitrary" || e2.modifier === null) return e2;
    let r = i.designSystem, t = r.storage[ve].get(i.signatureOptions), n = t.get(r.printCandidate(e2)), s = e2.modifier;
    if (n === t.get(r.printCandidate({ ...e2, modifier: null }))) return e2.modifier = null, e2;
    {
      let l3 = { kind: "named", value: s.value.endsWith("%") ? s.value.includes(".") ? `${Number(s.value.slice(0, -1))}` : s.value.slice(0, -1) : s.value, fraction: null };
      if (n === t.get(r.printCandidate({ ...e2, modifier: l3 }))) return e2.modifier = l3, e2;
    }
    {
      let l3 = { kind: "named", value: `${parseFloat(s.value) * 100}`, fraction: null };
      if (n === t.get(r.printCandidate({ ...e2, modifier: l3 }))) return e2.modifier = l3, e2;
    }
    return e2;
  }
  var ve = Symbol();
  function Yl(e2) {
    return new U2((i) => new U2((r) => {
      try {
        r = e2.theme.prefix && !r.startsWith(e2.theme.prefix) ? `${e2.theme.prefix}:${r}` : r;
        let t = [H2(".x", [B2("@apply", r)])];
        return Xl(e2, () => {
          for (let s of e2.parseCandidate(r)) e2.compileAstNodes(s, 1);
          Ce(t, e2);
        }), $i(e2, t, i), ae(t);
      } catch {
        return Symbol();
      }
    }));
  }
  function $i(e2, i, r) {
    let { rem: t } = r;
    return _2(i, { enter(n, s) {
      if (n.kind === "declaration") {
        if (n.value === void 0 || n.property === "--tw-sort") return V2.Replace([]);
        if (n.property.startsWith("--tw-") && s.siblings.some((d2) => d2.kind === "declaration" && n.value === d2.value && n.important === d2.important && !d2.property.startsWith("--tw-"))) return V2.Replace([]);
        if (r.features & 1) {
          let d2 = ii(n, r.features);
          if (d2) return V2.Replace(d2);
        }
        n.value.includes("var(") && (n.value = Gl(n.value, e2));
        let l3 = M2(n.value), [p2, f2] = rt(l3, t), [c2, m] = Hr(f2);
        (p2 || c2) && (n.value = F2(m)), n.value = xe(n.value);
      } else {
        if (n.kind === "context" || n.kind === "at-root") return V2.Replace(n.nodes);
        if (n.kind === "comment") return V2.Replace([]);
        if (n.kind === "at-rule" && n.name === "@property") return V2.Replace([]);
      }
    }, exit(n) {
      if (n.kind === "rule" || n.kind === "at-rule") {
        if (n.nodes.length > 1) {
          let s = /* @__PURE__ */ new Set();
          for (let l3 = n.nodes.length - 1; l3 >= 0; l3--) {
            let p2 = n.nodes[l3];
            p2.kind === "declaration" && p2.value !== void 0 && (s.has(p2.property) && n.nodes.splice(l3, 1), s.add(p2.property));
          }
        }
        n.nodes.sort((s, l3) => s.kind !== "declaration" || l3.kind !== "declaration" ? 0 : s.property.localeCompare(l3.property));
      }
    } }), i;
  }
  function Gl(e2, i) {
    let r = false, t = M2(e2), n = /* @__PURE__ */ new Set();
    return _2(t, (s) => {
      if (s.kind !== "function" || s.value !== "var" || s.nodes.length !== 1 && s.nodes.length < 3) return;
      let l3 = s.nodes[0].value;
      i.theme.prefix && l3.startsWith(`--${i.theme.prefix}-`) && (l3 = l3.slice(`--${i.theme.prefix}-`.length));
      let p2 = i.resolveThemeValue(l3);
      if (!n.has(l3) && (n.add(l3), p2 !== void 0 && (s.nodes.length === 1 && (r = true, s.nodes.push(...M2(`,${p2}`))), s.nodes.length >= 3))) {
        let f2 = F2(s.nodes), c2 = `${s.nodes[0].value},${p2}`;
        if (f2 === c2) return r = true, V2.Replace(M2(p2));
      }
    }), r ? F2(t) : e2;
  }
  var tr = Symbol();
  function ql() {
    return new U2((e2) => new U2((i) => new U2((r) => /* @__PURE__ */ new Set())));
  }
  var Ct = Symbol();
  function Hl(e2) {
    return new U2((i) => new U2((r) => {
      let t = new U2((s) => /* @__PURE__ */ new Set());
      e2.theme.prefix && !r.startsWith(e2.theme.prefix) && (r = `${e2.theme.prefix}:${r}`);
      let n = e2.parseCandidate(r);
      if (n.length === 0) return t;
      try {
        let s = e2.compileAstNodes(n[0]).map((l3) => re2(l3.node));
        _2($i(e2, s, i), (l3) => {
          l3.kind === "declaration" && (t.get(l3.property).add(l3.value), e2.storage[tr].get(i).get(l3.property).get(l3.value).add(r));
        });
      } catch {
      }
      return t;
    }));
  }
  var rr = Symbol();
  function Zl(e2) {
    return new U2((i) => {
      let r = e2.storage[ve].get(i), t = new U2(() => []);
      for (let [n, s] of e2.getClassList()) {
        let l3 = r.get(n);
        if (typeof l3 == "string") {
          if (n[0] === "-" && n.endsWith("-0")) {
            let p2 = r.get(n.slice(1));
            if (typeof p2 == "string" && l3 === p2) continue;
          }
          t.get(l3).push(n), e2.storage[Ct].get(i).get(n);
          for (let p2 of s.modifiers) {
            if (ue(p2)) continue;
            let f2 = `${n}/${p2}`, c2 = r.get(f2);
            typeof c2 == "string" && (t.get(c2).push(f2), e2.storage[Ct].get(i).get(f2));
          }
        }
      }
      return t;
    });
  }
  var St = Symbol();
  function Jl(e2) {
    return new U2((i) => {
      try {
        i = e2.theme.prefix && !i.startsWith(e2.theme.prefix) ? `${e2.theme.prefix}:${i}` : i;
        let r = [H2(".x", [B2("@apply", `${i}:flex`)])];
        return Ce(r, e2), _2(r, (n) => {
          if (n.kind === "at-rule" && n.params.includes(" ")) n.params = n.params.replaceAll(" ", "");
          else if (n.kind === "rule") {
            let s = Ee2(n.selector), l3 = false;
            _2(s, (p2) => {
              if (p2.kind === "list" || p2.kind === "combinator") l3 = true;
              else if (p2.kind === "function" && p2.value === ":is") {
                if (p2.nodes.length === 1) return l3 = true, V2.Replace(p2.nodes);
                if (p2.nodes.length === 2 && p2.nodes[0].kind === "selector" && p2.nodes[0].value === "*" && p2.nodes[1].kind === "selector" && p2.nodes[1].value[0] === ":") return l3 = true, V2.Replace(p2.nodes[1]);
              } else p2.kind === "function" && p2.value[0] === ":" && p2.nodes[0]?.kind === "selector" && p2.nodes[0]?.value[0] === ":" && (l3 = true, p2.nodes.unshift({ kind: "selector", value: "*" }));
            }), l3 && (n.selector = ue2(s, true));
          }
        }), ae(r);
      } catch {
        return Symbol();
      }
    });
  }
  var Ti = Symbol();
  function Ql(e2) {
    let i = e2.storage[St], r = new U2(() => []);
    for (let [t, n] of e2.variants.entries()) if (n.kind === "static") {
      let s = i.get(t);
      if (typeof s != "string") continue;
      r.get(s).push(t);
    }
    return r;
  }
  function Xl(e2, i) {
    let r = e2.theme.values.get, t = /* @__PURE__ */ new Set();
    e2.theme.values.get = (n) => {
      let s = r.call(e2.theme.values, n);
      return s === void 0 || s.options & 1 && (t.add(s), s.options &= -2), s;
    };
    try {
      return i();
    } finally {
      e2.theme.values.get = r;
      for (let n of t) n.options |= 1;
    }
  }
  function* eo(e2) {
    let i = e2.length, r = 1n << BigInt(i);
    for (let t = i; t >= 2; t--) {
      let n = (1n << BigInt(t)) - 1n;
      for (; n < r; ) {
        let s = [];
        for (let f2 = 0; f2 < i; f2++) n >> BigInt(f2) & 1n && s.push(e2[f2]);
        yield s;
        let l3 = n & -n, p2 = n + l3;
        n = ((p2 ^ n) >> 2n) / l3 | p2;
      }
    }
  }
  function wi(e2, i) {
    if (typeof e2.intersection == "function") return e2.intersection(i);
    if (e2.size === 0 || i.size === 0) return /* @__PURE__ */ new Set();
    let r = new Set(e2);
    for (let t of i) r.has(t) || r.delete(t);
    return r;
  }
  var ro = /^\d+\/\d+$/;
  function Ni(e2) {
    let i = new U2((n) => ({ name: n, utility: n, fraction: false, modifiers: [] }));
    for (let n of e2.utilities.keys("static")) {
      if (e2.utilities.getCompletions(n).length === 0) continue;
      let l3 = i.get(n);
      l3.fraction = false, l3.modifiers = [];
    }
    for (let n of e2.utilities.keys("functional")) {
      let s = e2.utilities.getCompletions(n);
      for (let l3 of s) for (let p2 of l3.values) {
        let f2 = p2 !== null && ro.test(p2), c2 = p2 === null ? n : `${n}-${p2}`, m = i.get(c2);
        if (m.utility = n, m.fraction || (m.fraction = f2), m.modifiers.push(...l3.modifiers), l3.supportsNegative) {
          let d2 = i.get(`-${c2}`);
          d2.utility = `-${n}`, d2.fraction || (d2.fraction = f2), d2.modifiers.push(...l3.modifiers);
        }
        m.modifiers = Array.from(new Set(m.modifiers));
      }
    }
    if (i.size === 0) return [];
    let r = Array.from(i.values());
    return r.sort((n, s) => kt(n.name, s.name)), io(r);
  }
  function io(e2) {
    let i = [], r = null, t = /* @__PURE__ */ new Map(), n = new U2(() => []);
    for (let l3 of e2) {
      let { utility: p2, fraction: f2 } = l3;
      r || (r = { utility: p2, items: [] }, t.set(p2, r)), p2 !== r.utility && (i.push(r), r = { utility: p2, items: [] }, t.set(p2, r)), f2 ? n.get(p2).push(l3) : r.items.push(l3);
    }
    r && i[i.length - 1] !== r && i.push(r);
    for (let [l3, p2] of n) {
      let f2 = t.get(l3);
      f2 && f2.items.push(...p2);
    }
    let s = [];
    for (let l3 of i) for (let p2 of l3.items) s.push([p2.name, { modifiers: p2.modifiers }]);
    return s;
  }
  function Ei(e2) {
    let i = [];
    for (let [t, n] of e2.variants.entries()) {
      let p2 = function({ value: f2, modifier: c2 } = {}) {
        let m = t;
        f2 && (m += s ? `-${f2}` : f2), c2 && (m += `/${c2}`);
        let d2 = e2.parseVariant(m);
        if (!d2) return [];
        let u2 = H2(".__placeholder__", []);
        if (We(u2, d2, e2.variants) === null) return [];
        let h3 = [];
        return _2(u2.nodes, { exit(v2, k) {
          if (v2.kind !== "rule" && v2.kind !== "at-rule" || v2.nodes.length > 0) return;
          let y2 = k.path();
          y2.push(v2), y2.sort((b2, D2) => {
            let O2 = b2.kind === "at-rule", P2 = D2.kind === "at-rule";
            return O2 && !P2 ? -1 : !O2 && P2 ? 1 : 0;
          });
          let N2 = y2.flatMap((b2) => b2.kind === "rule" ? b2.selector === "&" ? [] : [b2.selector] : b2.kind === "at-rule" ? [`${b2.name} ${b2.params}`] : []), A2 = "";
          for (let b2 = N2.length - 1; b2 >= 0; b2--) A2 = A2 === "" ? N2[b2] : `${N2[b2]} { ${A2} }`;
          h3.push(A2);
        } }), h3;
      };
      var r = p2;
      if (n.kind === "arbitrary") continue;
      let s = t !== "@", l3 = e2.variants.getCompletions(t);
      switch (n.kind) {
        case "static": {
          i.push({ name: t, values: l3, isArbitrary: false, hasDash: s, selectors: p2 });
          break;
        }
        case "functional": {
          i.push({ name: t, values: l3, isArbitrary: true, hasDash: s, selectors: p2 });
          break;
        }
        case "compound": {
          i.push({ name: t, values: l3, isArbitrary: true, hasDash: s, selectors: p2 });
          break;
        }
      }
    }
    return i;
  }
  function Ri(e2, i) {
    let { astNodes: r, nodeSorting: t } = Ve(Array.from(i), e2), n = new Map(i.map((l3) => [l3, null])), s = 0n;
    for (let l3 of r) {
      let p2 = t.get(l3)?.candidate;
      p2 && n.set(p2, n.get(p2) ?? s++);
    }
    return i.map((l3) => [l3, n.get(l3) ?? null]);
  }
  var $t = /^@?[a-z0-9][a-zA-Z0-9_-]*(?<![_-])$/;
  var ir = class {
    constructor() {
      __publicField(this, "compareFns", /* @__PURE__ */ new Map());
      __publicField(this, "variants", /* @__PURE__ */ new Map());
      __publicField(this, "completions", /* @__PURE__ */ new Map());
      __publicField(this, "groupOrder", null);
      __publicField(this, "lastOrder", 0);
    }
    static(i, r, { compounds: t, order: n } = {}) {
      this.set(i, { kind: "static", applyFn: r, compoundsWith: 0, compounds: t ?? 2, order: n });
    }
    fromAst(i, r, t) {
      let n = [], s = false;
      _2(r, (l3) => {
        l3.kind === "rule" ? n.push(l3.selector) : l3.kind === "at-rule" && l3.name === "@variant" ? s = true : l3.kind === "at-rule" && l3.name !== "@slot" && n.push(`${l3.name} ${l3.params}`);
      }), this.static(i, (l3) => {
        let p2 = r.map(re2);
        s && Oe(p2, t), nr(p2, l3.nodes), l3.nodes = p2;
      }, { compounds: Pe(n) });
    }
    functional(i, r, { compounds: t, order: n } = {}) {
      this.set(i, { kind: "functional", applyFn: r, compoundsWith: 0, compounds: t ?? 2, order: n });
    }
    compound(i, r, t, { compounds: n, order: s } = {}) {
      this.set(i, { kind: "compound", applyFn: t, compoundsWith: r, compounds: n ?? 2, order: s });
    }
    group(i, r) {
      this.groupOrder = this.nextOrder(), r && this.compareFns.set(this.groupOrder, r), i(), this.groupOrder = null;
    }
    has(i) {
      return this.variants.has(i);
    }
    get(i) {
      return this.variants.get(i);
    }
    kind(i) {
      return this.variants.get(i)?.kind;
    }
    compoundsWith(i, r) {
      let t = this.variants.get(i), n = typeof r == "string" ? this.variants.get(r) : r.kind === "arbitrary" ? { compounds: Pe([r.selector]) } : this.variants.get(r.root);
      return !(!t || !n || t.kind !== "compound" || n.compounds === 0 || t.compoundsWith === 0 || (t.compoundsWith & n.compounds) === 0);
    }
    suggest(i, r) {
      this.completions.set(i, r);
    }
    getCompletions(i) {
      return this.completions.get(i)?.() ?? [];
    }
    compare(i, r) {
      if (i === r) return 0;
      if (i === null) return -1;
      if (r === null) return 1;
      if (i.kind === "arbitrary" && r.kind === "arbitrary") return i.selector < r.selector ? -1 : 1;
      if (i.kind === "arbitrary") return 1;
      if (r.kind === "arbitrary") return -1;
      let t = this.variants.get(i.root).order, n = this.variants.get(r.root).order, s = t - n;
      if (s !== 0) return s;
      if (i.kind === "compound" && r.kind === "compound") {
        let c2 = this.compare(i.variant, r.variant);
        return c2 !== 0 ? c2 : i.modifier && r.modifier ? i.modifier.value < r.modifier.value ? -1 : 1 : i.modifier ? 1 : r.modifier ? -1 : 0;
      }
      let l3 = this.compareFns.get(t);
      if (l3 !== void 0) return l3(i, r);
      if (i.root !== r.root) return i.root < r.root ? -1 : 1;
      let p2 = i.value, f2 = r.value;
      return p2 === null ? -1 : f2 === null || p2.kind === "arbitrary" && f2.kind !== "arbitrary" ? 1 : p2.kind !== "arbitrary" && f2.kind === "arbitrary" || p2.value < f2.value ? -1 : 1;
    }
    keys() {
      return this.variants.keys();
    }
    entries() {
      return this.variants.entries();
    }
    set(i, { kind: r, applyFn: t, compounds: n, compoundsWith: s, order: l3 }) {
      let p2 = this.variants.get(i);
      p2 ? Object.assign(p2, { kind: r, applyFn: t, compounds: n }) : (l3 === void 0 && (this.lastOrder = this.nextOrder(), l3 = this.lastOrder), this.variants.set(i, { kind: r, applyFn: t, order: l3, compoundsWith: s, compounds: n }));
    }
    nextOrder() {
      return this.groupOrder ?? this.lastOrder + 1;
    }
  };
  function Pe(e2) {
    let i = 0;
    for (let r of e2) {
      if (r[0] === "@") {
        if (!r.startsWith("@media") && !r.startsWith("@supports") && !r.startsWith("@container")) return 0;
        i |= 1;
        continue;
      }
      if (r.includes("::")) return 0;
      i |= 2;
    }
    return i;
  }
  function Oi(e2) {
    let i = new ir();
    function r(c2, m, { compounds: d2 } = {}) {
      d2 = d2 ?? Pe(m), i.static(c2, (u2) => {
        u2.nodes = m.map((h3) => J2(h3, u2.nodes));
      }, { compounds: d2 });
    }
    r("*", [":is(& > *)"], { compounds: 0 }), r("**", [":is(& *)"], { compounds: 0 });
    function t(c2, m) {
      return m.map((d2) => {
        if (c2 === "@container") {
          let u2 = M2(d2.trim());
          return u2.length >= 1 && u2[0].kind === "function" ? `not ${d2}` : u2.length >= 3 && u2[0].kind === "word" && u2[0].value === "not" && u2[2].kind === "function" ? (u2.splice(0, 2), F2(u2)) : u2.length >= 5 && u2[0].kind === "word" && u2[2].kind === "word" && u2[2].value === "not" && u2[4].kind === "function" ? (u2.splice(2, 2), F2(u2)) : u2.length >= 3 && u2[0].kind === "word" && u2[0].value !== "not" && u2[2].kind === "function" ? (u2.splice(1, 0, { kind: "separator", value: " " }, { kind: "word", value: "not" }), F2(u2)) : `not ${d2}`;
        } else {
          d2 = d2.trim();
          let u2 = d(d2, " ");
          return u2[0] === "not" ? u2.slice(1).join(" ") : `not ${d2}`;
        }
      });
    }
    let n = ["@media", "@supports", "@container"];
    function s(c2) {
      for (let m of n) {
        if (m !== c2.name) continue;
        let d2 = d(c2.params, ",");
        return d2.length > 1 ? null : (d2 = t(c2.name, d2), B2(c2.name, d2.join(", ")));
      }
      return null;
    }
    function l3(c2) {
      return c2.includes("::") ? null : `&:not(${d(c2, ",").map((d2) => (d2 = d2.replaceAll("&", "*"), d2)).join(", ")})`;
    }
    i.compound("not", 3, (c2, m) => {
      if (m.variant.kind === "arbitrary" && m.variant.relative || m.modifier) return null;
      let d2 = false;
      if (_2([c2], (u2, h3) => {
        if (u2.kind !== "rule" && u2.kind !== "at-rule") return V2.Continue;
        if (u2.nodes.length > 0) return V2.Continue;
        let v2 = [], k = [], y2 = h3.path();
        y2.push(u2);
        for (let A2 of y2) A2.kind === "at-rule" ? v2.push(A2) : A2.kind === "rule" && k.push(A2);
        if (v2.length > 1) return V2.Stop;
        if (k.length > 1) return V2.Stop;
        let N2 = [];
        for (let A2 of k) {
          let b2 = l3(A2.selector);
          if (!b2) return d2 = false, V2.Stop;
          N2.push(H2(b2, []));
        }
        for (let A2 of v2) {
          let b2 = s(A2);
          if (!b2) return d2 = false, V2.Stop;
          N2.push(b2);
        }
        return Object.assign(c2, H2("&", N2)), d2 = true, V2.Skip;
      }), c2.kind === "rule" && c2.selector === "&" && c2.nodes.length === 1 && Object.assign(c2, c2.nodes[0]), !d2) return null;
    }), i.suggest("not", () => Array.from(i.keys()).filter((c2) => i.compoundsWith("not", c2))), i.compound("group", 2, (c2, m) => {
      if (m.variant.kind === "arbitrary" && m.variant.relative) return null;
      let d2 = m.modifier ? `:where(.${e2.prefix ? `${e2.prefix}\\:` : ""}group\\/${m.modifier.value})` : `:where(.${e2.prefix ? `${e2.prefix}\\:` : ""}group)`, u2 = false;
      if (_2([c2], (h3, v2) => {
        if (h3.kind !== "rule") return V2.Continue;
        for (let y2 of v2.path()) if (y2.kind === "rule") return u2 = false, V2.Stop;
        let k = h3.selector.replaceAll("&", d2);
        d(k, ",").length > 1 && (k = `:is(${k})`), h3.selector = `&:is(${k} *)`, u2 = true;
      }), !u2) return null;
    }), i.suggest("group", () => Array.from(i.keys()).filter((c2) => i.compoundsWith("group", c2))), i.compound("peer", 2, (c2, m) => {
      if (m.variant.kind === "arbitrary" && m.variant.relative) return null;
      let d2 = m.modifier ? `:where(.${e2.prefix ? `${e2.prefix}\\:` : ""}peer\\/${m.modifier.value})` : `:where(.${e2.prefix ? `${e2.prefix}\\:` : ""}peer)`, u2 = false;
      if (_2([c2], (h3, v2) => {
        if (h3.kind !== "rule") return V2.Continue;
        for (let y2 of v2.path()) if (y2.kind === "rule") return u2 = false, V2.Stop;
        let k = h3.selector.replaceAll("&", d2);
        d(k, ",").length > 1 && (k = `:is(${k})`), h3.selector = `&:is(${k} ~ *)`, u2 = true;
      }), !u2) return null;
    }), i.suggest("peer", () => Array.from(i.keys()).filter((c2) => i.compoundsWith("peer", c2))), r("first-letter", ["&::first-letter"]), r("first-line", ["&::first-line"]), r("marker", ["& *::marker", "&::marker", "& *::-webkit-details-marker", "&::-webkit-details-marker"]), r("selection", ["& *::selection", "&::selection"]), r("file", ["&::file-selector-button"]), r("placeholder", ["&::placeholder"]), r("backdrop", ["&::backdrop"]), r("details-content", ["&::details-content"]);
    {
      let c2 = function() {
        return Y2([B2("@property", "--tw-content", [o("syntax", '"*"'), o("initial-value", '""'), o("inherits", "false")])]);
      };
      var p2 = c2;
      i.static("before", (m) => {
        m.nodes = [H2("&::before", [c2(), o("content", "var(--tw-content)"), ...m.nodes])];
      }, { compounds: 0 }), i.static("after", (m) => {
        m.nodes = [H2("&::after", [c2(), o("content", "var(--tw-content)"), ...m.nodes])];
      }, { compounds: 0 });
    }
    r("first", ["&:first-child"]), r("last", ["&:last-child"]), r("only", ["&:only-child"]), r("odd", ["&:nth-child(odd)"]), r("even", ["&:nth-child(even)"]), r("first-of-type", ["&:first-of-type"]), r("last-of-type", ["&:last-of-type"]), r("only-of-type", ["&:only-of-type"]), r("visited", ["&:visited"]), r("target", ["&:target"]), r("open", ["&:is([open], :popover-open, :open)"]), r("default", ["&:default"]), r("checked", ["&:checked"]), r("indeterminate", ["&:indeterminate"]), r("placeholder-shown", ["&:placeholder-shown"]), r("autofill", ["&:autofill"]), r("optional", ["&:optional"]), r("required", ["&:required"]), r("valid", ["&:valid"]), r("invalid", ["&:invalid"]), r("user-valid", ["&:user-valid"]), r("user-invalid", ["&:user-invalid"]), r("in-range", ["&:in-range"]), r("out-of-range", ["&:out-of-range"]), r("read-only", ["&:read-only"]), r("empty", ["&:empty"]), r("focus-within", ["&:focus-within"]), i.static("hover", (c2) => {
      c2.nodes = [H2("&:hover", [B2("@media", "(hover: hover)", c2.nodes)])];
    }), r("focus", ["&:focus"]), r("focus-visible", ["&:focus-visible"]), r("active", ["&:active"]), r("enabled", ["&:enabled"]), r("disabled", ["&:disabled"]), r("inert", ["&:is([inert], [inert] *)"]), i.compound("in", 2, (c2, m) => {
      if (m.modifier) return null;
      let d2 = false;
      if (_2([c2], (u2, h3) => {
        if (u2.kind !== "rule") return V2.Continue;
        for (let v2 of h3.path()) if (v2.kind === "rule") return d2 = false, V2.Stop;
        u2.selector = `:where(${u2.selector.replaceAll("&", "*")}) &`, d2 = true;
      }), !d2) return null;
    }), i.suggest("in", () => Array.from(i.keys()).filter((c2) => i.compoundsWith("in", c2))), i.compound("has", 2, (c2, m) => {
      if (m.modifier) return null;
      let d2 = false;
      if (_2([c2], (u2, h3) => {
        if (u2.kind !== "rule") return V2.Continue;
        for (let v2 of h3.path()) if (v2.kind === "rule") return d2 = false, V2.Stop;
        u2.selector = `&:has(${u2.selector.replaceAll("&", "*")})`, d2 = true;
      }), !d2) return null;
    }), i.suggest("has", () => Array.from(i.keys()).filter((c2) => i.compoundsWith("has", c2))), i.functional("aria", (c2, m) => {
      if (!m.value || m.modifier) return null;
      m.value.kind === "arbitrary" ? c2.nodes = [H2(`&[aria-${Pi(m.value.value)}]`, c2.nodes)] : c2.nodes = [H2(`&[aria-${m.value.value}="true"]`, c2.nodes)];
    }), i.suggest("aria", () => ["busy", "checked", "disabled", "expanded", "hidden", "pressed", "readonly", "required", "selected"]), i.functional("data", (c2, m) => {
      if (!m.value || m.modifier) return null;
      c2.nodes = [H2(`&[data-${Pi(m.value.value)}]`, c2.nodes)];
    }), i.functional("nth", (c2, m) => {
      if (!m.value || m.modifier || m.value.kind === "named" && !u(m.value.value)) return null;
      c2.nodes = [H2(`&:nth-child(${m.value.value})`, c2.nodes)];
    }), i.functional("nth-last", (c2, m) => {
      if (!m.value || m.modifier || m.value.kind === "named" && !u(m.value.value)) return null;
      c2.nodes = [H2(`&:nth-last-child(${m.value.value})`, c2.nodes)];
    }), i.functional("nth-of-type", (c2, m) => {
      if (!m.value || m.modifier || m.value.kind === "named" && !u(m.value.value)) return null;
      c2.nodes = [H2(`&:nth-of-type(${m.value.value})`, c2.nodes)];
    }), i.functional("nth-last-of-type", (c2, m) => {
      if (!m.value || m.modifier || m.value.kind === "named" && !u(m.value.value)) return null;
      c2.nodes = [H2(`&:nth-last-of-type(${m.value.value})`, c2.nodes)];
    }), i.functional("supports", (c2, m) => {
      if (!m.value || m.modifier) return null;
      let d2 = m.value.value;
      if (d2 === null) return null;
      if (/^[\w-]*\s*\(/.test(d2)) {
        let u2 = d2.replace(/\b(and|or|not)\b/g, " $1 ");
        c2.nodes = [B2("@supports", u2, c2.nodes)];
        return;
      }
      d2.includes(":") || (d2 = `${d2}: var(--tw)`), (d2[0] !== "(" || d2[d2.length - 1] !== ")") && (d2 = `(${d2})`), c2.nodes = [B2("@supports", d2, c2.nodes)];
    }, { compounds: 1 }), r("motion-safe", ["@media (prefers-reduced-motion: no-preference)"]), r("motion-reduce", ["@media (prefers-reduced-motion: reduce)"]), r("contrast-more", ["@media (prefers-contrast: more)"]), r("contrast-less", ["@media (prefers-contrast: less)"]);
    {
      let c2 = function(m, d2, u2, h3) {
        if (m === d2) return 0;
        let v2 = h3.get(m);
        if (v2 === null) return u2 === "asc" ? -1 : 1;
        let k = h3.get(d2);
        return k === null ? u2 === "asc" ? 1 : -1 : Te(v2, k, u2);
      };
      var f2 = c2;
      {
        let m = e2.namespace("--breakpoint"), d2 = new U2((u2) => {
          switch (u2.kind) {
            case "static":
              return e2.resolveValue(u2.root, ["--breakpoint"]) ?? null;
            case "functional": {
              if (!u2.value || u2.modifier) return null;
              let h3 = null;
              return u2.value.kind === "arbitrary" ? h3 = u2.value.value : u2.value.kind === "named" && (h3 = e2.resolveValue(u2.value.value, ["--breakpoint"])), !h3 || h3.includes("var(") ? null : h3;
            }
            case "arbitrary":
            case "compound":
              return null;
          }
        });
        i.group(() => {
          i.functional("max", (u2, h3) => {
            if (h3.modifier) return null;
            let v2 = d2.get(h3);
            if (v2 === null) return null;
            u2.nodes = [B2("@media", `(width < ${v2})`, u2.nodes)];
          }, { compounds: 1 });
        }, (u2, h3) => c2(u2, h3, "desc", d2)), i.suggest("max", () => Array.from(m.keys()).filter((u2) => u2 !== null)), i.group(() => {
          for (let [u2, h3] of e2.namespace("--breakpoint")) u2 !== null && i.static(u2, (v2) => {
            v2.nodes = [B2("@media", `(width >= ${h3})`, v2.nodes)];
          }, { compounds: 1 });
          i.functional("min", (u2, h3) => {
            if (h3.modifier) return null;
            let v2 = d2.get(h3);
            if (v2 === null) return null;
            u2.nodes = [B2("@media", `(width >= ${v2})`, u2.nodes)];
          }, { compounds: 1 });
        }, (u2, h3) => c2(u2, h3, "asc", d2)), i.suggest("min", () => Array.from(m.keys()).filter((u2) => u2 !== null));
      }
      {
        let m = e2.namespace("--container"), d2 = new U2((u2) => {
          switch (u2.kind) {
            case "functional": {
              if (u2.value === null) return null;
              let h3 = null;
              return u2.value.kind === "arbitrary" ? h3 = u2.value.value : u2.value.kind === "named" && (h3 = e2.resolveValue(u2.value.value, ["--container"])), !h3 || h3.includes("var(") ? null : h3;
            }
            case "static":
            case "arbitrary":
            case "compound":
              return null;
          }
        });
        i.group(() => {
          i.functional("@max", (u2, h3) => {
            let v2 = d2.get(h3);
            if (v2 === null) return null;
            u2.nodes = [B2("@container", h3.modifier ? `${h3.modifier.value} (width < ${v2})` : `(width < ${v2})`, u2.nodes)];
          }, { compounds: 1 });
        }, (u2, h3) => c2(u2, h3, "desc", d2)), i.suggest("@max", () => Array.from(m.keys()).filter((u2) => u2 !== null)), i.group(() => {
          i.functional("@", (u2, h3) => {
            let v2 = d2.get(h3);
            if (v2 === null) return null;
            u2.nodes = [B2("@container", h3.modifier ? `${h3.modifier.value} (width >= ${v2})` : `(width >= ${v2})`, u2.nodes)];
          }, { compounds: 1 }), i.functional("@min", (u2, h3) => {
            let v2 = d2.get(h3);
            if (v2 === null) return null;
            u2.nodes = [B2("@container", h3.modifier ? `${h3.modifier.value} (width >= ${v2})` : `(width >= ${v2})`, u2.nodes)];
          }, { compounds: 1 });
        }, (u2, h3) => c2(u2, h3, "asc", d2)), i.suggest("@min", () => Array.from(m.keys()).filter((u2) => u2 !== null)), i.suggest("@", () => Array.from(m.keys()).filter((u2) => u2 !== null));
      }
    }
    return r("portrait", ["@media (orientation: portrait)"]), r("landscape", ["@media (orientation: landscape)"]), r("ltr", ['&:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)']), r("rtl", ['&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)']), r("dark", ["@media (prefers-color-scheme: dark)"]), r("starting", ["@starting-style"]), r("print", ["@media print"]), r("forced-colors", ["@media (forced-colors: active)"]), r("inverted-colors", ["@media (inverted-colors: inverted)"]), r("pointer-none", ["@media (pointer: none)"]), r("pointer-coarse", ["@media (pointer: coarse)"]), r("pointer-fine", ["@media (pointer: fine)"]), r("any-pointer-none", ["@media (any-pointer: none)"]), r("any-pointer-coarse", ["@media (any-pointer: coarse)"]), r("any-pointer-fine", ["@media (any-pointer: fine)"]), r("noscript", ["@media (scripting: none)"]), i;
  }
  function Pi(e2) {
    if (e2.includes("=")) {
      let [i, ...r] = d(e2, "="), t = r.join("=").trim();
      if (t[0] === "'" || t[0] === '"') return e2;
      if (t.length > 1) {
        let n = t[t.length - 1];
        if (t[t.length - 2] === " " && (n === "i" || n === "I" || n === "s" || n === "S")) return `${i}="${t.slice(0, -2)}" ${n}`;
      }
      return `${i}="${t}"`;
    }
    return e2;
  }
  function nr(e2, i) {
    _2(e2, (r) => {
      if (r.kind === "at-rule" && r.name === "@slot") return V2.ReplaceSkip(i);
      if (r.kind === "at-rule" && (r.name === "@keyframes" || r.name === "@property")) return Object.assign(r, Y2([B2(r.name, r.params, r.nodes)])), V2.Skip;
    });
  }
  function Oe(e2, i) {
    let r = 0;
    return _2(e2, (t) => {
      if (t.kind !== "at-rule" || t.name !== "@variant") return;
      let n = [], s = d(t.params, ",");
      for (let [l3, p2] of s.entries()) {
        let f2 = H2("&", l3 === s.length - 1 ? t.nodes : t.nodes.map(re2)), c2 = d(p2, ":");
        for (let m = c2.length - 1; m >= 0; --m) {
          let d2 = c2[m].trim();
          if (!d2) throw new Error("Cannot use `@variant` with empty variant");
          let u2 = i.parseVariant(d2);
          if (u2 === null) throw new Error(`Cannot use \`@variant\` with unknown variant: ${d2}`);
          if (We(f2, u2, i.variants) === null) throw new Error(`Cannot use \`@variant\` with variant: ${d2}`);
        }
        n.push(f2);
      }
      return r |= 32, V2.Replace(n);
    }), r;
  }
  function _i(e2, i) {
    let r = Fr(e2), t = Oi(e2), n = new U2((d2) => Kr(d2, m)), s = new U2((d2) => Array.from(Dr(d2, m))), l3 = new U2((d2) => new U2((u2) => {
      let h3 = Ii(u2, m, d2);
      try {
        ze(h3.map(({ node: v2 }) => v2), m), Oe(h3.map(({ node: v2 }) => v2), m);
      } catch {
        return [];
      }
      return h3;
    })), p2 = new U2((d2) => {
      for (let u2 of dt(d2)) e2.markUsedVariable(u2);
    });
    function f2(d2) {
      let u2 = [];
      for (let h3 of d2) {
        let v2 = true, { astNodes: k } = Ve([h3], m, { onInvalidCandidate() {
          v2 = false;
        } });
        i && _2(k, (y2) => (y2.src ?? (y2.src = i), V2.Continue)), k = $e(k, m, 0), u2.push(v2 ? k : []);
      }
      return u2;
    }
    function c2(d2) {
      return f2(d2).map((u2) => u2.length > 0 ? ae(u2) : null);
    }
    let m = { theme: e2, utilities: r, variants: t, invalidCandidates: /* @__PURE__ */ new Set(), important: false, candidatesToCss: c2, candidatesToAst: f2, getClassOrder(d2) {
      return Ri(this, d2);
    }, getClassList() {
      return Ni(this);
    }, getVariants() {
      return Ei(this);
    }, parseCandidate(d2) {
      return s.get(d2);
    }, parseVariant(d2) {
      return n.get(d2);
    }, compileAstNodes(d2, u2 = 1) {
      return l3.get(u2).get(d2);
    }, printCandidate(d2) {
      return zr(m, d2);
    }, printVariant(d2) {
      return mt(d2);
    }, getVariantOrder() {
      let d2 = Array.from(n.values());
      d2.sort((k, y2) => this.variants.compare(k, y2));
      let u2 = /* @__PURE__ */ new Map(), h3, v2 = 0;
      for (let k of d2) k !== null && (h3 !== void 0 && this.variants.compare(h3, k) !== 0 && v2++, u2.set(k, v2), h3 = k);
      return u2;
    }, resolveThemeValue(d2, u2 = true) {
      let h3 = d2.lastIndexOf("/"), v2 = null;
      h3 !== -1 && (v2 = d2.slice(h3 + 1).trim(), d2 = d2.slice(0, h3).trim());
      let k = e2.resolve(null, [d2], u2 ? 1 : 0) ?? void 0;
      return v2 && k ? Q2(k, v2) : k;
    }, trackUsedVariables(d2) {
      p2.get(d2);
    }, canonicalizeCandidates(d2, u2) {
      return Xt(this, d2, u2);
    }, storage: {} };
    return m;
  }
  var lr = ["container-type", "pointer-events", "visibility", "position", "inset", "inset-inline", "inset-block", "inset-inline-start", "inset-inline-end", "inset-block-start", "inset-block-end", "top", "right", "bottom", "left", "isolation", "z-index", "order", "grid-column", "grid-column-start", "grid-column-end", "grid-row", "grid-row-start", "grid-row-end", "float", "clear", "--tw-container-component", "margin", "margin-inline", "margin-block", "margin-inline-start", "margin-inline-end", "margin-block-start", "margin-block-end", "margin-top", "margin-right", "margin-bottom", "margin-left", "box-sizing", "display", "field-sizing", "aspect-ratio", "height", "max-height", "min-height", "width", "max-width", "min-width", "flex", "flex-shrink", "flex-grow", "flex-basis", "table-layout", "caption-side", "border-collapse", "border-spacing", "transform-origin", "translate", "--tw-translate-x", "--tw-translate-y", "--tw-translate-z", "scale", "--tw-scale-x", "--tw-scale-y", "--tw-scale-z", "rotate", "--tw-rotate-x", "--tw-rotate-y", "--tw-rotate-z", "--tw-skew-x", "--tw-skew-y", "transform", "zoom", "animation", "cursor", "touch-action", "--tw-pan-x", "--tw-pan-y", "--tw-pinch-zoom", "resize", "scroll-snap-type", "--tw-scroll-snap-strictness", "scroll-snap-align", "scroll-snap-stop", "scroll-margin", "scroll-margin-inline", "scroll-margin-block", "scroll-margin-inline-start", "scroll-margin-inline-end", "scroll-margin-block-start", "scroll-margin-block-end", "scroll-margin-top", "scroll-margin-right", "scroll-margin-bottom", "scroll-margin-left", "scroll-padding", "scroll-padding-inline", "scroll-padding-block", "scroll-padding-inline-start", "scroll-padding-inline-end", "scroll-padding-block-start", "scroll-padding-block-end", "scroll-padding-top", "scroll-padding-right", "scroll-padding-bottom", "scroll-padding-left", "scrollbar-width", "scrollbar-color", "scrollbar-gutter", "list-style-position", "list-style-type", "list-style-image", "appearance", "columns", "break-before", "break-inside", "break-after", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-template-columns", "grid-template-rows", "flex-direction", "flex-wrap", "place-content", "place-items", "align-content", "align-items", "justify-content", "justify-items", "gap", "column-gap", "row-gap", "--tw-space-x-reverse", "--tw-space-y-reverse", "divide-x-width", "divide-y-width", "--tw-divide-y-reverse", "divide-style", "divide-color", "place-self", "align-self", "justify-self", "overflow", "overflow-x", "overflow-y", "overscroll-behavior", "overscroll-behavior-x", "overscroll-behavior-y", "scroll-behavior", "border-radius", "border-start-radius", "border-end-radius", "border-top-radius", "border-right-radius", "border-bottom-radius", "border-left-radius", "border-start-start-radius", "border-start-end-radius", "border-end-end-radius", "border-end-start-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius", "border-width", "border-inline-width", "border-block-width", "border-inline-start-width", "border-inline-end-width", "border-block-start-width", "border-block-end-width", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-style", "border-inline-style", "border-block-style", "border-inline-start-style", "border-inline-end-style", "border-block-start-style", "border-block-end-style", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "border-color", "border-inline-color", "border-block-color", "border-inline-start-color", "border-inline-end-color", "border-block-start-color", "border-block-end-color", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color", "background-color", "background-image", "--tw-gradient-position", "--tw-gradient-stops", "--tw-gradient-via-stops", "--tw-gradient-from", "--tw-gradient-from-position", "--tw-gradient-via", "--tw-gradient-via-position", "--tw-gradient-to", "--tw-gradient-to-position", "mask-image", "--tw-mask-top", "--tw-mask-top-from-color", "--tw-mask-top-from-position", "--tw-mask-top-to-color", "--tw-mask-top-to-position", "--tw-mask-right", "--tw-mask-right-from-color", "--tw-mask-right-from-position", "--tw-mask-right-to-color", "--tw-mask-right-to-position", "--tw-mask-bottom", "--tw-mask-bottom-from-color", "--tw-mask-bottom-from-position", "--tw-mask-bottom-to-color", "--tw-mask-bottom-to-position", "--tw-mask-left", "--tw-mask-left-from-color", "--tw-mask-left-from-position", "--tw-mask-left-to-color", "--tw-mask-left-to-position", "--tw-mask-linear", "--tw-mask-linear-position", "--tw-mask-linear-from-color", "--tw-mask-linear-from-position", "--tw-mask-linear-to-color", "--tw-mask-linear-to-position", "--tw-mask-radial", "--tw-mask-radial-shape", "--tw-mask-radial-size", "--tw-mask-radial-position", "--tw-mask-radial-from-color", "--tw-mask-radial-from-position", "--tw-mask-radial-to-color", "--tw-mask-radial-to-position", "--tw-mask-conic", "--tw-mask-conic-position", "--tw-mask-conic-from-color", "--tw-mask-conic-from-position", "--tw-mask-conic-to-color", "--tw-mask-conic-to-position", "box-decoration-break", "background-size", "background-attachment", "background-clip", "background-position", "background-repeat", "background-origin", "mask-composite", "mask-mode", "mask-type", "mask-size", "mask-clip", "mask-position", "mask-repeat", "mask-origin", "fill", "stroke", "stroke-width", "object-fit", "object-position", "padding", "padding-inline", "padding-block", "padding-inline-start", "padding-inline-end", "padding-block-start", "padding-block-end", "padding-top", "padding-right", "padding-bottom", "padding-left", "text-align", "text-indent", "vertical-align", "font-family", "font-feature-settings", "font-size", "line-height", "font-weight", "letter-spacing", "text-wrap", "overflow-wrap", "word-break", "text-overflow", "hyphens", "white-space", "tab-size", "color", "text-transform", "font-style", "font-stretch", "font-variant-numeric", "text-decoration-line", "text-decoration-color", "text-decoration-style", "text-decoration-thickness", "text-underline-offset", "-webkit-font-smoothing", "placeholder-color", "caret-color", "accent-color", "color-scheme", "opacity", "background-blend-mode", "mix-blend-mode", "box-shadow", "--tw-shadow", "--tw-shadow-color", "--tw-ring-shadow", "--tw-ring-color", "--tw-inset-shadow", "--tw-inset-shadow-color", "--tw-inset-ring-shadow", "--tw-inset-ring-color", "--tw-ring-offset-width", "--tw-ring-offset-color", "outline", "outline-width", "outline-offset", "outline-color", "--tw-blur", "--tw-brightness", "--tw-contrast", "--tw-drop-shadow", "--tw-grayscale", "--tw-hue-rotate", "--tw-invert", "--tw-saturate", "--tw-sepia", "filter", "--tw-backdrop-blur", "--tw-backdrop-brightness", "--tw-backdrop-contrast", "--tw-backdrop-grayscale", "--tw-backdrop-hue-rotate", "--tw-backdrop-invert", "--tw-backdrop-opacity", "--tw-backdrop-saturate", "--tw-backdrop-sepia", "backdrop-filter", "transition-property", "transition-behavior", "transition-delay", "transition-duration", "transition-timing-function", "will-change", "contain", "content", "forced-color-adjust"];
  function Ve(e2, i, { onInvalidCandidate: r, respectImportant: t } = {}) {
    let n = /* @__PURE__ */ new Map(), s = [], l3 = /* @__PURE__ */ new Map();
    for (let c2 of e2) {
      if (i.invalidCandidates.has(c2)) {
        r?.(c2);
        continue;
      }
      let m = i.parseCandidate(c2);
      if (m.length === 0) {
        r?.(c2);
        continue;
      }
      l3.set(c2, m);
    }
    let p2 = 0;
    (t ?? true) && (p2 |= 1);
    let f2 = i.getVariantOrder();
    for (let [c2, m] of l3) {
      let d2 = false;
      for (let u2 of m) {
        let h3 = i.compileAstNodes(u2, p2);
        if (h3.length !== 0) {
          d2 = true;
          for (let { node: v2, propertySort: k } of h3) {
            let y2 = 0n;
            for (let N2 of u2.variants) y2 |= 1n << BigInt(f2.get(N2));
            n.set(v2, { properties: k, variants: y2, candidate: c2 }), s.push(v2);
          }
        }
      }
      d2 || r?.(c2);
    }
    return s.sort((c2, m) => {
      let d2 = n.get(c2), u2 = n.get(m);
      if (d2.variants - u2.variants !== 0n) return Number(d2.variants - u2.variants);
      let h3 = 0;
      for (; h3 < d2.properties.order.length && h3 < u2.properties.order.length && d2.properties.order[h3] === u2.properties.order[h3]; ) h3 += 1;
      return (d2.properties.order[h3] ?? 1 / 0) - (u2.properties.order[h3] ?? 1 / 0) || u2.properties.count - d2.properties.count || kt(d2.candidate, u2.candidate);
    }), { astNodes: s, nodeSorting: n };
  }
  function Ii(e2, i, r) {
    let t = no(e2, i);
    if (t.length === 0) return [];
    let n = i.important && !!(r & 1), s = [], l3 = `.${h2(e2.raw)}`;
    for (let p2 of t) {
      let f2 = lo(p2);
      (e2.important || n) && Ki(p2);
      let c2 = { kind: "rule", selector: l3, nodes: p2 };
      for (let m of e2.variants) if (We(c2, m, i.variants) === null) return [];
      s.push({ node: c2, propertySort: f2 });
    }
    return s;
  }
  function We(e2, i, r, t = 0) {
    if (i.kind === "arbitrary") {
      if (i.relative && t === 0) return null;
      e2.nodes = [J2(i.selector, e2.nodes)];
      return;
    }
    let { applyFn: n } = r.get(i.root);
    if (i.kind === "compound") {
      let l3 = B2("@slot");
      if (We(l3, i.variant, r, t + 1) === null || i.root === "not" && l3.nodes.length > 1) return null;
      for (let f2 of l3.nodes) if (f2.kind !== "rule" && f2.kind !== "at-rule" || n(f2, i) === null) return null;
      _2(l3.nodes, (f2) => {
        if ((f2.kind === "rule" || f2.kind === "at-rule") && f2.nodes.length <= 0) return f2.nodes = e2.nodes, V2.Skip;
      }), e2.nodes = l3.nodes;
      return;
    }
    if (n(e2, i) === null) return null;
  }
  function Di(e2) {
    let i = e2.options?.types ?? [];
    return i.length > 1 && i.includes("any");
  }
  function no(e2, i) {
    if (e2.kind === "arbitrary") {
      let l3 = e2.value;
      return e2.modifier && (l3 = te2(l3, e2.modifier, i.theme)), l3 === null ? [] : [[o(e2.property, l3)]];
    }
    let r = i.utilities.get(e2.root) ?? [], t = [], n = r.filter((l3) => !Di(l3));
    for (let l3 of n) {
      if (l3.kind !== e2.kind) continue;
      let p2 = l3.compileFn(e2);
      if (p2 !== void 0) {
        if (p2 === null) {
          if (l3.options?.types?.length) return t;
          continue;
        }
        t.push(p2);
      }
    }
    if (t.length > 0) return t;
    let s = r.filter((l3) => Di(l3));
    for (let l3 of s) {
      if (l3.kind !== e2.kind) continue;
      let p2 = l3.compileFn(e2);
      if (p2 !== void 0) {
        if (p2 === null) {
          if (l3.options?.types?.length) return t;
          continue;
        }
        t.push(p2);
      }
    }
    return t;
  }
  function Ki(e2) {
    for (let i of e2) i.kind !== "at-root" && (i.kind === "declaration" ? i.important = true : (i.kind === "rule" || i.kind === "at-rule") && Ki(i.nodes));
  }
  function lo(e2) {
    let i = /* @__PURE__ */ new Set(), r = 0, t = e2.slice(), n = false;
    for (; t.length > 0; ) {
      let s = t.shift();
      if (s.kind === "declaration") {
        if (s.value === void 0 || (r++, n)) continue;
        if (s.property === "--tw-sort") {
          let p2 = lr.indexOf(s.value ?? "");
          if (p2 !== -1) {
            i.add(p2), n = true;
            continue;
          }
        }
        let l3 = lr.indexOf(s.property);
        l3 !== -1 && i.add(l3);
      } else if (s.kind === "rule" || s.kind === "at-rule") for (let l3 of s.nodes) t.push(l3);
    }
    return { order: Array.from(i).sort((s, l3) => s - l3), count: r };
  }
  function Ce(e2, i) {
    let r = 0, t = J2("&", e2), n = /* @__PURE__ */ new Set(), s = new U2(() => /* @__PURE__ */ new Set()), l3 = new U2(() => /* @__PURE__ */ new Set());
    _2([t], (d2, u2) => {
      if (d2.kind === "at-rule") {
        if (d2.name === "@keyframes") return _2(d2.nodes, (h3) => {
          if (h3.kind === "at-rule" && h3.name === "@apply") throw new Error("You cannot use `@apply` inside `@keyframes`.");
        }), V2.Skip;
        if (d2.name === "@utility") {
          let h3 = d2.params.replace(/-\*$/, "");
          l3.get(h3).add(d2), _2(d2.nodes, (v2) => {
            if (!(v2.kind !== "at-rule" || v2.name !== "@apply")) {
              n.add(d2);
              for (let k of Ui(v2, i)) s.get(d2).add(k);
            }
          });
          return;
        }
        if (d2.name === "@apply") {
          if (u2.parent === null) return;
          r |= 1, n.add(u2.parent);
          for (let h3 of Ui(d2, i)) for (let v2 of u2.path()) n.has(v2) && s.get(v2).add(h3);
        }
      }
    });
    let p2 = /* @__PURE__ */ new Set(), f2 = [], c2 = /* @__PURE__ */ new Set();
    function m(d2, u2 = []) {
      if (!p2.has(d2)) {
        if (c2.has(d2)) {
          let h3 = u2[(u2.indexOf(d2) + 1) % u2.length];
          throw d2.kind === "at-rule" && d2.name === "@utility" && h3.kind === "at-rule" && h3.name === "@utility" && _2(d2.nodes, (v2) => {
            if (v2.kind !== "at-rule" || v2.name !== "@apply") return;
            let k = v2.params.split(/\s+/g);
            for (let y2 of k) for (let N2 of i.parseCandidate(y2)) switch (N2.kind) {
              case "arbitrary":
                break;
              case "static":
              case "functional":
                if (h3.params.replace(/-\*$/, "") === N2.root) throw new Error(`You cannot \`@apply\` the \`${y2}\` utility here because it creates a circular dependency.`);
                break;
              default:
            }
          }), new Error(`Circular dependency detected:

${ae([d2])}
Relies on:

${ae([h3])}`);
        }
        c2.add(d2);
        for (let h3 of s.get(d2)) for (let v2 of l3.get(h3)) u2.push(d2), m(v2, u2), u2.pop();
        p2.add(d2), c2.delete(d2), f2.push(d2);
      }
    }
    for (let d2 of n) m(d2);
    for (let d2 of f2) "nodes" in d2 && _2(d2.nodes, (u2) => {
      if (u2.kind !== "at-rule" || u2.name !== "@apply") return;
      let h3 = u2.params.split(/(\s+)/g), v2 = {}, k = [], y2 = [], N2 = 0;
      for (let [b2, D2] of h3.entries()) b2 % 2 === 0 && (D2[0] === "-" && D2[1] === "-" ? y2.push(D2) : k.push(D2), v2[D2] = N2), N2 += D2.length;
      if (y2.length) {
        if (k.length === 0) return V2.Skip;
        let b2 = y2.join(" ");
        throw new Error(`You cannot use \`@apply\` with both mixins and utilities. Please move \`@apply ${b2}\` into a separate rule.`);
      }
      if (u2.nodes.length > 0 && k.length) {
        let b2 = k.join(" ");
        throw new Error(`The rule \`@apply ${b2}\` must not have a body.`);
      }
      {
        let b2 = Object.keys(v2), D2 = Ve(b2, i, { respectImportant: false, onInvalidCandidate: (E2) => {
          if (i.theme.prefix && !E2.startsWith(i.theme.prefix)) throw new Error(`Cannot apply unprefixed utility class \`${E2}\`. Did you mean \`${i.theme.prefix}:${E2}\`?`);
          if (i.invalidCandidates.has(E2)) throw new Error(`Cannot apply utility class \`${E2}\` because it has been explicitly disabled: https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-excluding-classes`);
          let j2 = d(E2, ":");
          if (j2.length > 1) {
            let q2 = j2.pop();
            if (i.candidatesToCss([q2])[0]) {
              let G2 = i.candidatesToCss(j2.map((ie2) => `${ie2}:[--tw-variant-check:1]`)), X2 = j2.filter((ie2, a2) => G2[a2] === null);
              if (X2.length > 0) {
                if (X2.length === 1) throw new Error(`Cannot apply utility class \`${E2}\` because the ${X2.map((ie2) => `\`${ie2}\``)} variant does not exist.`);
                {
                  let ie2 = new Intl.ListFormat("en", { style: "long", type: "conjunction" });
                  throw new Error(`Cannot apply utility class \`${E2}\` because the ${ie2.format(X2.map((a2) => `\`${a2}\``))} variants do not exist.`);
                }
              }
            }
          }
          throw i.theme.size === 0 ? new Error(`Cannot apply unknown utility class \`${E2}\`. Are you using CSS modules or similar and missing \`@reference\`? https://tailwindcss.com/docs/functions-and-directives#reference-directive`) : new Error(`Cannot apply unknown utility class \`${E2}\``);
        } }), O2 = u2.src, P2 = D2.astNodes.map((E2) => {
          let j2 = D2.nodeSorting.get(E2)?.candidate, q2 = j2 ? v2[j2] : void 0;
          if (E2 = re2(E2), !O2 || !j2 || q2 === void 0) return _2([E2], (X2) => {
            X2.src = O2;
          }), E2;
          let G2 = [O2[0], O2[1], O2[2]];
          return G2[1] += 7 + q2, G2[2] = G2[1] + j2.length, _2([E2], (X2) => {
            X2.src = G2;
          }), E2;
        }), z2 = [];
        for (let E2 of P2) if (E2.kind === "rule") for (let j2 of E2.nodes) z2.push(j2);
        else z2.push(E2);
        return V2.Replace(z2);
      }
    });
    return r;
  }
  function* Ui(e2, i) {
    for (let r of e2.params.split(/\s+/g)) for (let t of i.parseCandidate(r)) switch (t.kind) {
      case "arbitrary":
        break;
      case "static":
      case "functional":
        yield t.root;
        break;
      default:
    }
  }
  async function or(e2, i, r, t = 0, n = false) {
    let s = 0, l3 = [];
    return _2(e2, (p2) => {
      if (p2.kind === "at-rule" && (p2.name === "@import" || p2.name === "@reference")) {
        let f2 = oo(M2(p2.params));
        if (f2 === null) return;
        p2.name === "@reference" && (f2.media = "reference"), s |= 2;
        let { uri: c2, layer: m, media: d2, supports: u2 } = f2;
        if (c2.startsWith("data:") || c2.startsWith("http://") || c2.startsWith("https://")) return;
        let h3 = he({}, []);
        return l3.push((async () => {
          if (t > 100) throw new Error(`Exceeded maximum recursion depth while resolving \`${c2}\` in \`${i}\`)`);
          let v2 = await r(c2, i), k = Se(v2.content, { from: n ? v2.path : void 0 });
          await or(k, v2.base, r, t + 1, n), h3.nodes = ao(p2, [he({ base: v2.base }, k)], m, d2, u2);
        })()), V2.ReplaceSkip(h3);
      }
    }), l3.length > 0 && await Promise.all(l3), s;
  }
  function oo(e2) {
    let i, r = null, t = null, n = null;
    for (let s = 0; s < e2.length; s++) {
      let l3 = e2[s];
      if (l3.kind !== "separator") {
        if (l3.kind === "word" && !i) {
          if (!l3.value || l3.value[0] !== '"' && l3.value[0] !== "'") return null;
          i = l3.value.slice(1, -1);
          continue;
        }
        if (l3.kind === "function" && l3.value.toLowerCase() === "url" || !i) return null;
        if ((l3.kind === "word" || l3.kind === "function") && l3.value.toLowerCase() === "layer") {
          if (r) return null;
          if (n) throw new Error("`layer(\u2026)` in an `@import` should come before any other functions or conditions");
          "nodes" in l3 ? r = F2(l3.nodes) : r = "";
          continue;
        }
        if (l3.kind === "function" && l3.value.toLowerCase() === "supports") {
          if (n) return null;
          n = F2(l3.nodes);
          continue;
        }
        t = F2(e2.slice(s));
        break;
      }
    }
    return i ? { uri: i, layer: r, media: t, supports: n } : null;
  }
  function ao(e2, i, r, t, n) {
    let s = i;
    if (r !== null) {
      let l3 = B2("@layer", r, s);
      l3.src = e2.src, s = [l3];
    }
    if (t !== null) {
      let l3 = B2("@media", t, s);
      l3.src = e2.src, s = [l3];
    }
    if (n !== null) {
      let l3 = B2("@supports", n[0] === "(" ? n : `(${n})`, s);
      l3.src = e2.src, s = [l3];
    }
    return s;
  }
  function Be(e2) {
    if (Object.prototype.toString.call(e2) !== "[object Object]") return false;
    let i = Object.getPrototypeOf(e2);
    return i === null || Object.getPrototypeOf(i) === null;
  }
  function nt(e2, i, r, t = []) {
    for (let n of i) if (n != null) for (let s of Reflect.ownKeys(n)) {
      t.push(s);
      let l3 = r(e2[s], n[s], t);
      l3 !== void 0 ? e2[s] = l3 : !Be(e2[s]) || !Be(n[s]) ? e2[s] = n[s] : e2[s] = nt({}, [e2[s], n[s]], r, t), t.pop();
    }
    return e2;
  }
  function Tt(e2, i, r) {
    return function(n, s) {
      let l3 = n.lastIndexOf("/"), p2 = null;
      l3 !== -1 && (p2 = n.slice(l3 + 1).trim(), n = n.slice(0, l3).trim());
      let f2 = (() => {
        let c2 = Re(n), [m, d2] = so(e2.theme, c2), u2 = r(zi(i() ?? {}, c2) ?? null);
        if (typeof u2 == "string" && (u2 = u2.replace("<alpha-value>", "1")), typeof m != "object") return typeof d2 != "object" && d2 & 4 ? u2 ?? m : m;
        if (u2 !== null && typeof u2 == "object" && !Array.isArray(u2)) {
          let h3 = nt({}, [u2], (v2, k) => k);
          if (m === null && Object.hasOwn(u2, "__CSS_VALUES__")) {
            let v2 = {};
            for (let k in u2.__CSS_VALUES__) v2[k] = u2[k], delete h3[k];
            m = v2;
          }
          for (let v2 in m) v2 !== "__CSS_VALUES__" && (u2?.__CSS_VALUES__?.[v2] & 4 && zi(h3, v2.split("-")) !== void 0 || (h3[a(v2)] = m[v2]));
          return h3;
        }
        if (Array.isArray(m) && Array.isArray(d2) && Array.isArray(u2)) {
          let h3 = m[0], v2 = m[1];
          d2[0] & 4 && (h3 = u2[0] ?? h3);
          for (let k of Object.keys(v2)) d2[1][k] & 4 && (v2[k] = u2[1][k] ?? v2[k]);
          return [h3, v2];
        }
        return m ?? u2;
      })();
      return p2 && typeof f2 == "string" && (f2 = Q2(f2, p2)), f2 ?? s;
    };
  }
  function so(e2, i) {
    if (i.length === 1 && i[0].startsWith("--")) return [e2.get([i[0]]), e2.getOptions(i[0])];
    let r = Fe(i), t = /* @__PURE__ */ new Map(), n = new U2(() => /* @__PURE__ */ new Map()), s = e2.namespace(`--${r}`);
    if (s.size === 0) return [null, 0];
    let l3 = /* @__PURE__ */ new Map();
    for (let [m, d2] of s) {
      if (!m || !m.includes("--")) {
        t.set(m, d2), l3.set(m, e2.getOptions(m ? `--${r}-${m}` : `--${r}`));
        continue;
      }
      let u2 = m.indexOf("--"), h3 = m.slice(0, u2), v2 = m.slice(u2 + 2);
      v2 = v2.replace(/-([a-z])/g, (k, y2) => y2.toUpperCase()), n.get(h3 === "" ? null : h3).set(v2, [d2, e2.getOptions(`--${r}${m}`)]);
    }
    let p2 = e2.getOptions(`--${r}`);
    for (let [m, d2] of n) {
      let u2 = t.get(m);
      if (typeof u2 != "string") continue;
      let h3 = {}, v2 = {};
      for (let [k, [y2, N2]] of d2) h3[k] = y2, v2[k] = N2;
      t.set(m, [u2, h3]), l3.set(m, [p2, v2]);
    }
    let f2 = {}, c2 = {};
    for (let [m, d2] of t) Li(f2, [m ?? "DEFAULT"], d2);
    for (let [m, d2] of l3) Li(c2, [m ?? "DEFAULT"], d2);
    return i[i.length - 1] === "DEFAULT" ? [f2?.DEFAULT ?? null, c2.DEFAULT ?? 0] : "DEFAULT" in f2 && Object.keys(f2).length === 1 ? [f2.DEFAULT, c2.DEFAULT ?? 0] : (f2.__CSS_VALUES__ = c2, [f2, c2]);
  }
  function zi(e2, i) {
    for (let r = 0; r < i.length; ++r) {
      let t = i[r];
      if (e2 == null || typeof e2 != "object" || !Object.hasOwn(e2, t)) {
        if (i[r + 1] === void 0) return;
        i[r + 1] = `${t}-${i[r + 1]}`;
        continue;
      }
      e2 = e2[t];
    }
    return e2;
  }
  function Li(e2, i, r) {
    for (let t of i.slice(0, -1)) e2[t] === void 0 && (e2[t] = {}), e2 = e2[t];
    e2[i[i.length - 1]] = r;
  }
  var ji = /^[a-z@][a-zA-Z0-9/%._-]*$/;
  function ar({ designSystem: e2, ast: i, resolvedConfig: r, featuresRef: t, referenceMode: n, src: s }) {
    let l3 = { addBase(p2) {
      if (n) return;
      let f2 = we(p2);
      t.current |= ze(f2, e2), t.current |= Oe(f2, e2);
      let c2 = B2("@layer", "base", f2);
      _2([c2], (m) => {
        m.src = s;
      }), i.push(c2);
    }, addVariant(p2, f2) {
      if (!$t.test(p2)) throw new Error(`\`addVariant('${p2}')\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);
      if (typeof f2 == "string") {
        if (f2.includes(":merge(")) return;
      } else if (Array.isArray(f2)) {
        if (f2.some((m) => m.includes(":merge("))) return;
      } else if (typeof f2 == "object") {
        let m = function(d2, u2) {
          return Object.entries(d2).some(([h3, v2]) => h3.includes(u2) || typeof v2 == "object" && m(v2, u2));
        };
        var c2 = m;
        if (m(f2, ":merge(")) return;
      }
      typeof f2 == "string" || Array.isArray(f2) ? e2.variants.static(p2, (m) => {
        m.nodes = Mi(f2, m.nodes);
      }, { compounds: Pe(typeof f2 == "string" ? [f2] : f2) }) : typeof f2 == "object" && e2.variants.fromAst(p2, we(f2), e2);
    }, matchVariant(p2, f2, c2) {
      function m(u2, h3, v2) {
        let k = f2(u2, { modifier: h3?.value ?? null });
        return Mi(k, v2);
      }
      try {
        let u2 = f2("a", { modifier: null });
        if (typeof u2 == "string" && u2.includes(":merge(")) return;
        if (Array.isArray(u2) && u2.some((h3) => h3.includes(":merge("))) return;
      } catch {
      }
      let d2 = Object.keys(c2?.values ?? {});
      e2.variants.group(() => {
        e2.variants.functional(p2, (u2, h3) => {
          if (!h3.value) {
            if (c2?.values && "DEFAULT" in c2.values) {
              u2.nodes = m(c2.values.DEFAULT, h3.modifier, u2.nodes);
              return;
            }
            return null;
          }
          if (h3.value.kind === "arbitrary") u2.nodes = m(h3.value.value, h3.modifier, u2.nodes);
          else if (h3.value.kind === "named" && c2?.values) {
            if (!Object.hasOwn(c2.values, h3.value.value)) return null;
            let v2 = c2.values[h3.value.value];
            if (typeof v2 != "string") return null;
            u2.nodes = m(v2, h3.modifier, u2.nodes);
          } else return null;
        });
      }, (u2, h3) => {
        if (u2.kind !== "functional" || h3.kind !== "functional") return 0;
        let v2 = u2.value ? u2.value.value : "DEFAULT", k = h3.value ? h3.value.value : "DEFAULT", y2 = (c2?.values && Object.hasOwn(c2.values, v2) ? c2.values[v2] : void 0) ?? v2, N2 = (c2?.values && Object.hasOwn(c2.values, k) ? c2.values[k] : void 0) ?? k;
        if (c2 && typeof c2.sort == "function") return c2.sort({ value: y2, modifier: u2.modifier?.value ?? null }, { value: N2, modifier: h3.modifier?.value ?? null });
        let A2 = d2.indexOf(v2), b2 = d2.indexOf(k);
        return A2 = A2 === -1 ? d2.length : A2, b2 = b2 === -1 ? d2.length : b2, A2 !== b2 ? A2 - b2 : y2 < N2 ? -1 : 1;
      }), e2.variants.suggest(p2, () => Object.keys(c2?.values ?? {}).filter((u2) => u2 !== "DEFAULT"));
    }, addUtilities(p2) {
      p2 = Array.isArray(p2) ? p2 : [p2];
      let f2 = p2.flatMap((m) => Object.entries(m));
      f2 = f2.flatMap(([m, d2]) => d(m, ",").map((u2) => [u2.trim(), d2]));
      let c2 = new U2(() => []);
      for (let [m, d2] of f2) {
        if (m.startsWith("@keyframes ")) {
          if (!n) {
            let v2 = J2(m, we(d2));
            _2([v2], (k) => {
              k.src = s;
            }), i.push(v2);
          }
          continue;
        }
        let u2 = Ee2(m), h3 = false;
        if (_2(u2, (v2) => {
          if (v2.kind === "selector" && v2.value[0] === "." && ji.test(v2.value.slice(1))) {
            let k = v2.value;
            v2.value = "&";
            let y2 = ue2(u2), N2 = k.slice(1), A2 = y2 === "&" ? we(d2) : [J2(y2, we(d2))];
            c2.get(N2).push(...A2), h3 = true, v2.value = k;
            return;
          }
          if (v2.kind === "function" && v2.value === ":not") return V2.Skip;
        }), !h3) throw new Error(`\`addUtilities({ '${m}' : \u2026 })\` defines an invalid utility selector. Utilities must be a single class name and start with a lowercase letter, eg. \`.scrollbar-none\`.`);
      }
      for (let [m, d2] of c2) e2.theme.prefix && _2(d2, (u2) => {
        if (u2.kind === "rule") {
          let h3 = Ee2(u2.selector);
          _2(h3, (v2) => {
            v2.kind === "selector" && v2.value[0] === "." && (v2.value = `.${e2.theme.prefix}\\:${v2.value.slice(1)}`);
          }), u2.selector = ue2(h3);
        }
      }), e2.utilities.static(m, (u2) => {
        let h3 = d2.map(re2);
        return Fi(h3, m, u2.raw), t.current |= Ce(h3, e2), h3;
      });
    }, matchUtilities(p2, f2) {
      let c2 = f2?.type ? Array.isArray(f2?.type) ? f2.type : [f2.type] : ["any"];
      for (let [d2, u2] of Object.entries(p2)) {
        let h3 = function({ negative: v2 }) {
          return (k) => {
            if (k.value?.kind === "arbitrary" && c2.length > 0 && !c2.includes("any") && (k.value.dataType && !c2.includes(k.value.dataType) || !k.value.dataType && !pe(k.value.value, c2))) return;
            let y2 = c2.includes("color"), N2 = null, A2 = false;
            {
              let O2 = f2?.values ?? {};
              y2 && (O2 = Object.assign({ inherit: "inherit", transparent: "transparent", current: "currentcolor" }, O2)), k.value ? k.value.kind === "arbitrary" ? N2 = k.value.value : k.value.fraction && Object.hasOwn(O2, k.value.fraction) ? (N2 = O2[k.value.fraction], A2 = true) : Object.hasOwn(O2, k.value.value) ? N2 = O2[k.value.value] : O2.__BARE_VALUE__ && (N2 = O2.__BARE_VALUE__(k.value) ?? null, A2 = (k.value.fraction !== null && N2?.includes("/")) ?? false) : N2 = O2.DEFAULT ?? null;
            }
            if (N2 === null) return;
            let b2;
            {
              let O2 = f2?.modifiers ?? null;
              k.modifier ? O2 === "any" || k.modifier.kind === "arbitrary" ? b2 = k.modifier.value : O2 && Object.hasOwn(O2, k.modifier.value) ? b2 = O2[k.modifier.value] : y2 && !Number.isNaN(Number(k.modifier.value)) ? b2 = `${k.modifier.value}%` : b2 = null : b2 = null;
            }
            if (k.modifier && b2 === null && !A2) return k.value?.kind === "arbitrary" ? null : void 0;
            y2 && b2 !== null && (N2 = Q2(N2, b2)), v2 && (N2 = `calc(${N2} * -1)`);
            let D2 = we(u2(N2, { modifier: b2 }));
            return Fi(D2, d2, k.raw), t.current |= Ce(D2, e2), D2;
          };
        };
        var m = h3;
        if (!ji.test(d2)) throw new Error(`\`matchUtilities({ '${d2}' : \u2026 })\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter, eg. \`scrollbar\`.`);
        f2?.supportsNegativeValues && e2.utilities.functional(`-${d2}`, h3({ negative: true }), { types: c2 }), e2.utilities.functional(d2, h3({ negative: false }), { types: c2 }), e2.utilities.suggest(d2, () => {
          let v2 = f2?.values ?? {}, k = new Set(Object.keys(v2));
          k.delete("__BARE_VALUE__"), k.delete("__CSS_VALUES__"), k.has("DEFAULT") && (k.delete("DEFAULT"), k.add(null));
          let y2 = f2?.modifiers ?? {}, N2 = y2 === "any" ? [] : Object.keys(y2);
          return [{ supportsNegative: f2?.supportsNegativeValues ?? false, values: Array.from(k), modifiers: N2 }];
        });
      }
    }, addComponents(p2, f2) {
      this.addUtilities(p2, f2);
    }, matchComponents(p2, f2) {
      this.matchUtilities(p2, f2);
    }, theme: Tt(e2, () => r.theme ?? {}, (p2) => p2), prefix(p2) {
      return p2;
    }, config(p2, f2) {
      let c2 = r;
      if (!p2) return c2;
      let m = Re(p2);
      for (let d2 = 0; d2 < m.length; ++d2) {
        let u2 = m[d2];
        if (c2[u2] === void 0) return f2;
        c2 = c2[u2];
      }
      return c2 ?? f2;
    } };
    return l3.addComponents = l3.addComponents.bind(l3), l3.matchComponents = l3.matchComponents.bind(l3), l3;
  }
  function we(e2) {
    let i = [];
    e2 = Array.isArray(e2) ? e2 : [e2];
    let r = e2.flatMap((t) => Object.entries(t));
    for (let [t, n] of r) if (n != null && n !== false) if (typeof n != "object") {
      if (!t.startsWith("--")) {
        if (n === "@slot") {
          i.push(J2(t, [B2("@slot")]));
          continue;
        }
        t = t.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
      i.push(o(t, String(n)));
    } else if (Array.isArray(n)) for (let s of n) typeof s == "string" ? i.push(o(t, s)) : i.push(J2(t, we(s)));
    else i.push(J2(t, we(n)));
    return i;
  }
  function Mi(e2, i) {
    return (typeof e2 == "string" ? [e2] : e2).flatMap((t) => {
      if (t.trim().endsWith("}")) {
        let n = t.replace("}", "{@slot}}"), s = Se(n);
        return nr(s, i), s;
      } else return J2(t, i);
    });
  }
  function Fi(e2, i, r) {
    _2(e2, (t) => {
      if (t.kind === "rule") {
        let n = Ee2(t.selector);
        _2(n, (s) => {
          s.kind === "selector" && s.value === `.${i}` && (s.value = `.${h2(r)}`);
        }), t.selector = ue2(n);
      }
    });
  }
  function Wi(e2, i) {
    for (let r of uo(i)) e2.theme.addKeyframes(r);
  }
  function uo(e2) {
    let i = [];
    if ("keyframes" in e2.theme) for (let [r, t] of Object.entries(e2.theme.keyframes)) i.push(B2("@keyframes", r, we(t)));
    return i;
  }
  function Bi(e2) {
    return { theme: { ...Ee, colors: ({ theme: i }) => i("color", {}), extend: { fontSize: ({ theme: i }) => ({ ...i("text", {}) }), boxShadow: ({ theme: i }) => ({ ...i("shadow", {}) }), animation: ({ theme: i }) => ({ ...i("animate", {}) }), aspectRatio: ({ theme: i }) => ({ ...i("aspect", {}) }), borderRadius: ({ theme: i }) => ({ ...i("radius", {}) }), screens: ({ theme: i }) => ({ ...i("breakpoint", {}) }), letterSpacing: ({ theme: i }) => ({ ...i("tracking", {}) }), lineHeight: ({ theme: i }) => ({ ...i("leading", {}) }), transitionDuration: { DEFAULT: e2.get(["--default-transition-duration"]) ?? null }, transitionTimingFunction: { DEFAULT: e2.get(["--default-transition-timing-function"]) ?? null }, maxWidth: ({ theme: i }) => ({ ...i("container", {}) }) } } };
  }
  var fo = { blocklist: [], future: {}, experimental: {}, prefix: "", important: false, darkMode: null, theme: {}, plugins: [], content: { files: [] } };
  function ur(e2, i) {
    let r = { design: e2, configs: [], plugins: [], content: { files: [] }, theme: {}, extend: {}, result: structuredClone(fo) };
    for (let n of i) sr(r, n);
    for (let n of r.configs) "darkMode" in n && n.darkMode !== void 0 && (r.result.darkMode = n.darkMode ?? null), "prefix" in n && n.prefix !== void 0 && (r.result.prefix = n.prefix ?? ""), "blocklist" in n && n.blocklist !== void 0 && (r.result.blocklist = n.blocklist ?? []), "important" in n && n.important !== void 0 && (r.result.important = n.important ?? false);
    let t = po(r);
    return { resolvedConfig: { ...r.result, content: r.content, theme: r.theme, plugins: r.plugins }, replacedThemeKeys: t };
  }
  function co(e2, i) {
    if (Array.isArray(e2) && Be(e2[0])) return e2.concat(i);
    if (Array.isArray(i) && Be(i[0]) && Be(e2)) return [e2, ...i];
    if (Array.isArray(i)) return i;
  }
  function sr(e2, { config: i, base: r, path: t, reference: n, src: s }) {
    let l3 = [];
    for (let c2 of i.plugins ?? []) "__isOptionsFunction" in c2 ? l3.push({ ...c2(), reference: n, src: s }) : "handler" in c2 ? l3.push({ ...c2, reference: n, src: s }) : l3.push({ handler: c2, reference: n, src: s });
    if (Array.isArray(i.presets) && i.presets.length === 0) throw new Error("Error in the config file/plugin/preset. An empty preset (`preset: []`) is not currently supported.");
    for (let c2 of i.presets ?? []) sr(e2, { path: t, base: r, config: c2, reference: n, src: s });
    for (let c2 of l3) e2.plugins.push(c2), c2.config && sr(e2, { path: t, base: r, config: c2.config, reference: !!c2.reference, src: c2.src ?? s });
    let p2 = i.content ?? [], f2 = Array.isArray(p2) ? p2 : p2.files;
    for (let c2 of f2) e2.content.files.push(typeof c2 == "object" ? c2 : { base: r, pattern: c2 });
    e2.configs.push(i);
  }
  function po(e2) {
    var _a2;
    let i = /* @__PURE__ */ new Set(), r = Tt(e2.design, () => e2.theme, n), t = Object.assign(r, { theme: r, colors: l });
    function n(s) {
      return typeof s == "function" ? s(t) ?? null : s ?? null;
    }
    for (let s of e2.configs) {
      let l3 = s.theme ?? {}, p2 = l3.extend ?? {};
      for (let f2 in l3) f2 !== "extend" && i.add(f2);
      Object.assign(e2.theme, l3);
      for (let f2 in p2) (_a2 = e2.extend)[f2] ?? (_a2[f2] = []), e2.extend[f2].push(p2[f2]);
    }
    delete e2.theme.extend;
    for (let s in e2.extend) {
      let l3 = [e2.theme[s], ...e2.extend[s]];
      e2.theme[s] = () => {
        let p2 = l3.map(n);
        return nt({}, p2, co);
      };
    }
    for (let s in e2.theme) e2.theme[s] = n(e2.theme[s]);
    if (e2.theme.screens && typeof e2.theme.screens == "object") for (let s of Object.keys(e2.theme.screens)) {
      let l3 = e2.theme.screens[s];
      l3 && typeof l3 == "object" && ("raw" in l3 || "max" in l3 || "min" in l3 && (e2.theme.screens[s] = l3.min));
    }
    return i;
  }
  function Yi(e2, i) {
    let r = e2.theme.container || {};
    if (typeof r != "object" || r === null) return;
    let t = mo(r, i);
    t.length !== 0 && i.utilities.static("container", () => t.map(re2));
  }
  function mo({ center: e2, padding: i, screens: r }, t) {
    let n = [], s = null;
    if (e2 && n.push(o("margin-inline", "auto")), (typeof i == "string" || typeof i == "object" && i !== null && "DEFAULT" in i) && n.push(o("padding-inline", typeof i == "string" ? i : i.DEFAULT)), typeof r == "object" && r !== null) {
      s = /* @__PURE__ */ new Map();
      let l3 = Array.from(t.theme.namespace("--breakpoint").entries());
      if (l3.sort((p2, f2) => Te(p2[1], f2[1], "asc")), l3.length > 0) {
        let [p2] = l3[0];
        n.push(B2("@media", `(width >= --theme(--breakpoint-${p2}))`, [o("max-width", "none")]));
      }
      for (let [p2, f2] of Object.entries(r)) {
        if (typeof f2 == "object") if ("min" in f2) f2 = f2.min;
        else continue;
        s.set(p2, B2("@media", `(width >= ${f2})`, [o("max-width", f2)]));
      }
    }
    if (typeof i == "object" && i !== null) {
      let l3 = Object.entries(i).filter(([p2]) => p2 !== "DEFAULT").map(([p2, f2]) => [p2, t.theme.resolveValue(p2, ["--breakpoint"]), f2]).filter(Boolean);
      l3.sort((p2, f2) => Te(p2[1], f2[1], "asc"));
      for (let [p2, , f2] of l3) if (s && s.has(p2)) s.get(p2).nodes.push(o("padding-inline", f2));
      else {
        if (s) continue;
        n.push(B2("@media", `(width >= theme(--breakpoint-${p2}))`, [o("padding-inline", f2)]));
      }
    }
    if (s) for (let [, l3] of s) n.push(l3);
    return n;
  }
  function Gi({ addVariant: e2, config: i }) {
    let r = i("darkMode", null), [t, n = ".dark"] = Array.isArray(r) ? r : [r];
    if (t === "variant") {
      let s;
      if (Array.isArray(n) || typeof n == "function" ? s = n : typeof n == "string" && (s = [n]), Array.isArray(s)) for (let l3 of s) l3 === ".dark" ? (t = false, console.warn('When using `variant` for `darkMode`, you must provide a selector.\nExample: `darkMode: ["variant", ".your-selector &"]`')) : l3.includes("&") || (t = false, console.warn('When using `variant` for `darkMode`, your selector must contain `&`.\nExample `darkMode: ["variant", ".your-selector &"]`'));
      n = s;
    }
    t === null || (t === "selector" ? e2("dark", `&:where(${n}, ${n} *)`) : t === "media" ? e2("dark", "@media (prefers-color-scheme: dark)") : t === "variant" ? e2("dark", n) : t === "class" && e2("dark", `&:is(${n} *)`));
  }
  function qi(e2) {
    for (let [r, t] of [["t", "top"], ["tr", "top right"], ["r", "right"], ["br", "bottom right"], ["b", "bottom"], ["bl", "bottom left"], ["l", "left"], ["tl", "top left"]]) e2.utilities.suggest(`bg-gradient-to-${r}`, () => []), e2.utilities.static(`bg-gradient-to-${r}`, () => [o("--tw-gradient-position", `to ${t} in oklab`), o("background-image", "linear-gradient(var(--tw-gradient-stops))")]);
    e2.utilities.suggest("bg-left-top", () => []), e2.utilities.static("bg-left-top", () => [o("background-position", "left top")]), e2.utilities.suggest("bg-right-top", () => []), e2.utilities.static("bg-right-top", () => [o("background-position", "right top")]), e2.utilities.suggest("bg-left-bottom", () => []), e2.utilities.static("bg-left-bottom", () => [o("background-position", "left bottom")]), e2.utilities.suggest("bg-right-bottom", () => []), e2.utilities.static("bg-right-bottom", () => [o("background-position", "right bottom")]), e2.utilities.suggest("object-left-top", () => []), e2.utilities.static("object-left-top", () => [o("object-position", "left top")]), e2.utilities.suggest("object-right-top", () => []), e2.utilities.static("object-right-top", () => [o("object-position", "right top")]), e2.utilities.suggest("object-left-bottom", () => []), e2.utilities.static("object-left-bottom", () => [o("object-position", "left bottom")]), e2.utilities.suggest("object-right-bottom", () => []), e2.utilities.static("object-right-bottom", () => [o("object-position", "right bottom")]), e2.utilities.suggest("max-w-screen", () => []), e2.utilities.functional("max-w-screen", (r) => {
      if (!r.value || r.value.kind === "arbitrary") return;
      let t = e2.theme.resolve(r.value.value, ["--breakpoint"]);
      if (t) return [o("max-width", t)];
    }), e2.utilities.suggest("overflow-ellipsis", () => []), e2.utilities.static("overflow-ellipsis", () => [o("text-overflow", "ellipsis")]), e2.utilities.suggest("decoration-slice", () => []), e2.utilities.static("decoration-slice", () => [o("-webkit-box-decoration-break", "slice"), o("box-decoration-break", "slice")]), e2.utilities.suggest("decoration-clone", () => []), e2.utilities.static("decoration-clone", () => [o("-webkit-box-decoration-break", "clone"), o("box-decoration-break", "clone")]), e2.utilities.suggest("flex-shrink", () => []), e2.utilities.functional("flex-shrink", (r) => {
      if (!r.modifier) {
        if (!r.value) return [o("flex-shrink", "1")];
        if (r.value.kind === "arbitrary") return [o("flex-shrink", r.value.value)];
        if (u(r.value.value)) return [o("flex-shrink", r.value.value)];
      }
    }), e2.utilities.suggest("flex-grow", () => []), e2.utilities.functional("flex-grow", (r) => {
      if (!r.modifier) {
        if (!r.value) return [o("flex-grow", "1")];
        if (r.value.kind === "arbitrary") return [o("flex-grow", r.value.value)];
        if (u(r.value.value)) return [o("flex-grow", r.value.value)];
      }
    }), e2.utilities.suggest("order-none", () => []), e2.utilities.static("order-none", () => [o("order", "0")]), e2.utilities.suggest("break-words", () => []), e2.utilities.static("break-words", () => [o("overflow-wrap", "break-word")]);
    for (let [r, t] of [["start", "inset-inline-start"], ["end", "inset-inline-end"]]) {
      let n = function({ negative: s }) {
        return (l3) => {
          if (l3.value === null) return;
          if (l3.value.kind === "arbitrary") {
            if (l3.modifier) return;
            let f2 = l3.value.value;
            return [o(t, s ? `calc(${f2} * -1)` : f2)];
          }
          let p2 = e2.theme.resolve(l3.value.fraction ?? l3.value.value, ["--inset", "--spacing"]);
          if (p2 === null && l3.value.fraction) {
            let [f2, c2] = d(l3.value.fraction, "/");
            if (!u(f2) || !u(c2)) return;
            p2 = `calc(${l3.value.fraction} * 100%)`;
          }
          if (p2 === null && s) {
            let f2 = e2.theme.resolve(null, ["--spacing"]);
            if (f2 && ue(l3.value.value) && (p2 = `calc(${f2} * -${l3.value.value})`, p2 !== null)) return [o(t, p2)];
          }
          if (p2 === null) {
            let f2 = e2.theme.resolve(null, ["--spacing"]);
            f2 && ue(l3.value.value) && (p2 = `calc(${f2} * ${l3.value.value})`);
          }
          if (p2 !== null) return [o(t, s ? `calc(${p2} * -1)` : p2)];
        };
      };
      var i = n;
      e2.utilities.static(`${r}-auto`, () => [o(t, "auto")]), e2.utilities.static(`${r}-full`, () => [o(t, "100%")]), e2.utilities.static(`-${r}-full`, () => [o(t, "-100%")]), e2.utilities.static(`${r}-px`, () => [o(t, "1px")]), e2.utilities.static(`-${r}-px`, () => [o(t, "-1px")]), e2.utilities.functional(`-${r}`, n({ negative: true })), e2.utilities.functional(r, n({ negative: false }));
    }
  }
  function Hi(e2, i) {
    let r = e2.theme.screens || {}, t = i.variants.get("min")?.order ?? 0, n = [];
    for (let [l3, p2] of Object.entries(r)) {
      let u2 = function(h3) {
        i.variants.static(l3, (v2) => {
          v2.nodes = [B2("@media", d2, v2.nodes)];
        }, { order: h3 });
      };
      var s = u2;
      let f2 = i.variants.get(l3), c2 = i.theme.resolveValue(l3, ["--breakpoint"]);
      if (f2 && c2 && !i.theme.hasDefault(`--breakpoint-${l3}`)) continue;
      let m = true;
      typeof p2 == "string" && (m = false);
      let d2 = go(p2);
      m ? n.push(u2) : u2(t);
    }
    if (n.length !== 0) {
      for (let [, l3] of i.variants.variants) l3.order > t && (l3.order += n.length);
      i.variants.compareFns = new Map(Array.from(i.variants.compareFns).map(([l3, p2]) => (l3 > t && (l3 += n.length), [l3, p2])));
      for (let [l3, p2] of n.entries()) p2(t + l3 + 1);
    }
  }
  function go(e2) {
    return (Array.isArray(e2) ? e2 : [e2]).map((r) => typeof r == "string" ? { min: r } : r && typeof r == "object" ? r : null).map((r) => {
      if (r === null) return null;
      if ("raw" in r) return r.raw;
      let t = "";
      return r.max !== void 0 && (t += `${r.max} >= `), t += "width", r.min !== void 0 && (t += ` >= ${r.min}`), `(${t})`;
    }).filter(Boolean).join(", ");
  }
  function Zi(e2, i) {
    let r = e2.theme.aria || {}, t = e2.theme.supports || {}, n = e2.theme.data || {};
    if (Object.keys(r).length > 0) {
      let s = i.variants.get("aria"), l3 = s?.applyFn, p2 = s?.compounds;
      i.variants.functional("aria", (f2, c2) => {
        let m = c2.value;
        return m && m.kind === "named" && m.value in r ? l3?.(f2, { ...c2, value: { kind: "arbitrary", value: r[m.value] } }) : l3?.(f2, c2);
      }, { compounds: p2 });
    }
    if (Object.keys(t).length > 0) {
      let s = i.variants.get("supports"), l3 = s?.applyFn, p2 = s?.compounds;
      i.variants.functional("supports", (f2, c2) => {
        let m = c2.value;
        return m && m.kind === "named" && m.value in t ? l3?.(f2, { ...c2, value: { kind: "arbitrary", value: t[m.value] } }) : l3?.(f2, c2);
      }, { compounds: p2 });
    }
    if (Object.keys(n).length > 0) {
      let s = i.variants.get("data"), l3 = s?.applyFn, p2 = s?.compounds;
      i.variants.functional("data", (f2, c2) => {
        let m = c2.value;
        return m && m.kind === "named" && m.value in n ? l3?.(f2, { ...c2, value: { kind: "arbitrary", value: n[m.value] } }) : l3?.(f2, c2);
      }, { compounds: p2 });
    }
  }
  var ho = /^[a-z]+$/;
  async function Qi({ designSystem: e2, base: i, ast: r, loadModule: t, sources: n }) {
    let s = 0, l3 = [], p2 = [];
    _2(r, (d2, u2) => {
      if (d2.kind !== "at-rule") return;
      let h3 = Qe(u2);
      if (d2.name === "@plugin") {
        if (h3.parent !== null) throw new Error("`@plugin` cannot be nested.");
        let v2 = d2.params.slice(1, -1);
        if (v2.length === 0) throw new Error("`@plugin` must have a path.");
        let k = {};
        for (let y2 of d2.nodes ?? []) {
          if (y2.kind !== "declaration") throw new Error(`Unexpected \`@plugin\` option:

${ae([y2])}

\`@plugin\` options must be a flat list of declarations.`);
          if (y2.value === void 0) continue;
          let N2 = y2.value, A2 = d(N2, ",").map((b2) => {
            if (b2 = b2.trim(), b2 === "null") return null;
            if (b2 === "true") return true;
            if (b2 === "false") return false;
            if (Number.isNaN(Number(b2))) {
              if (b2[0] === '"' && b2[b2.length - 1] === '"' || b2[0] === "'" && b2[b2.length - 1] === "'") return b2.slice(1, -1);
              if (b2[0] === "{" && b2[b2.length - 1] === "}") throw new Error(`Unexpected \`@plugin\` option: Value of declaration \`${ae([y2]).trim()}\` is not supported.

Using an object as a plugin option is currently only supported in JavaScript configuration files.`);
            } else return Number(b2);
            return b2;
          });
          k[y2.property] = A2.length === 1 ? A2[0] : A2;
        }
        return l3.push([{ id: v2, base: h3.context.base, reference: !!h3.context.reference, src: d2.src }, Object.keys(k).length > 0 ? k : null]), s |= 4, V2.Replace([]);
      }
      if (d2.name === "@config") {
        if (d2.nodes.length > 0) throw new Error("`@config` cannot have a body.");
        if (h3.parent !== null) throw new Error("`@config` cannot be nested.");
        return p2.push({ id: d2.params.slice(1, -1), base: h3.context.base, reference: !!h3.context.reference, src: d2.src }), s |= 4, V2.Replace([]);
      }
    }), qi(e2);
    let f2 = e2.resolveThemeValue;
    if (e2.resolveThemeValue = function(u2, h3) {
      return u2.startsWith("--") ? f2(u2, h3) : (s |= Ji({ designSystem: e2, base: i, ast: r, sources: n, configs: [], pluginDetails: [] }), e2.resolveThemeValue(u2, h3));
    }, !l3.length && !p2.length) return 0;
    let [c2, m] = await Promise.all([Promise.all(p2.map(async ({ id: d2, base: u2, reference: h3, src: v2 }) => {
      let k = await t(d2, u2, "config");
      return { path: d2, base: k.base, config: k.module, reference: h3, src: v2 };
    })), Promise.all(l3.map(async ([{ id: d2, base: u2, reference: h3, src: v2 }, k]) => {
      let y2 = await t(d2, u2, "plugin");
      return { path: d2, base: y2.base, plugin: y2.module, options: k, reference: h3, src: v2 };
    }))]);
    return s |= Ji({ designSystem: e2, base: i, ast: r, sources: n, configs: c2, pluginDetails: m }), s;
  }
  function Ji({ designSystem: e2, base: i, ast: r, sources: t, configs: n, pluginDetails: s }) {
    let l3 = 0, f2 = [...s.map((k) => {
      if (!k.options) return { config: { plugins: [k.plugin] }, base: k.base, reference: k.reference, src: k.src };
      if ("__isOptionsFunction" in k.plugin) return { config: { plugins: [k.plugin(k.options)] }, base: k.base, reference: k.reference, src: k.src };
      throw new Error(`The plugin "${k.path}" does not accept options`);
    }), ...n], { resolvedConfig: c2 } = ur(e2, [{ config: Bi(e2.theme), base: i, reference: true, src: void 0 }, ...f2, { config: { plugins: [Gi] }, base: i, reference: true, src: void 0 }]), { resolvedConfig: m, replacedThemeKeys: d2 } = ur(e2, f2), u2 = { designSystem: e2, ast: r, resolvedConfig: c2, featuresRef: { set current(k) {
      l3 |= k;
    } } }, h3 = ar({ ...u2, referenceMode: false, src: void 0 }), v2 = e2.resolveThemeValue;
    e2.resolveThemeValue = function(y2, N2) {
      if (y2[0] === "-" && y2[1] === "-") return v2(y2, N2);
      let A2 = h3.theme(y2, void 0);
      if (Array.isArray(A2) && A2.length === 2) return A2[0];
      if (Array.isArray(A2)) return A2.join(", ");
      if (typeof A2 == "object" && A2 !== null && "DEFAULT" in A2) return A2.DEFAULT;
      if (typeof A2 == "string") return A2;
    };
    for (let { handler: k, reference: y2, src: N2 } of c2.plugins) {
      let A2 = ar({ ...u2, referenceMode: y2 ?? false, src: N2 });
      k(A2);
    }
    if (Zr(e2, m, d2), Wi(e2, m), Zi(m, e2), Hi(m, e2), Yi(m, e2), !e2.theme.prefix && c2.prefix) {
      if (c2.prefix.endsWith("-") && (c2.prefix = c2.prefix.slice(0, -1), console.warn(`The prefix "${c2.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only and is written as a variant before all utilities. We have fixed up the prefix for you. Remove the trailing \`-\` to silence this warning.`)), !ho.test(c2.prefix)) throw new Error(`The prefix "${c2.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
      e2.theme.prefix = c2.prefix;
    }
    if (!e2.important && c2.important === true && (e2.important = true), typeof c2.important == "string") {
      let k = c2.important;
      _2(r, (y2, N2) => {
        if (y2.kind !== "at-rule" || y2.name !== "@tailwind" || y2.params !== "utilities") return;
        let A2 = Qe(N2);
        return A2.parent?.kind === "rule" && A2.parent.selector === k ? V2.Stop : V2.ReplaceStop(H2(k, [y2]));
      });
    }
    for (let k of c2.blocklist) e2.invalidCandidates.add(k);
    for (let k of c2.content.files) {
      if ("raw" in k) throw new Error(`Error in the config file/plugin/preset. The \`content\` key contains a \`raw\` entry:

${JSON.stringify(k, null, 2)}

This feature is not currently supported.`);
      let y2 = false;
      k.pattern[0] == "!" && (y2 = true, k.pattern = k.pattern.slice(1)), t.push({ ...k, negated: y2 });
    }
    return l3;
  }
  var en = /^(-?\d+)\.\.(-?\d+)(?:\.\.(-?\d+))?$/;
  function Nt(e2) {
    let i = e2.indexOf("{");
    if (i === -1) return [e2];
    let r = [], t = e2.slice(0, i), n = e2.slice(i), s = 0, l3 = n.lastIndexOf("}");
    for (let d2 = 0; d2 < n.length; d2++) {
      let u2 = n[d2];
      if (u2 === "{") s++;
      else if (u2 === "}" && (s--, s === 0)) {
        l3 = d2;
        break;
      }
    }
    if (l3 === -1) throw new Error(`The pattern \`${e2}\` is not balanced.`);
    let p2 = n.slice(1, l3), f2 = n.slice(l3 + 1), c2;
    vo(p2) ? c2 = wo(p2) : c2 = d(p2, ","), c2 = c2.flatMap((d2) => Nt(d2));
    let m = Nt(f2);
    for (let d2 of m) for (let u2 of c2) r.push(t + u2 + d2);
    return r;
  }
  function vo(e2) {
    return en.test(e2);
  }
  function wo(e2) {
    let i = e2.match(en);
    if (!i) return [e2];
    let [, r, t, n] = i, s = n ? parseInt(n, 10) : void 0, l3 = [];
    if (/^-?\d+$/.test(r) && /^-?\d+$/.test(t)) {
      let p2 = parseInt(r, 10), f2 = parseInt(t, 10);
      if (s === void 0 && (s = p2 <= f2 ? 1 : -1), s === 0) throw new Error("Step cannot be zero in sequence expansion.");
      let c2 = p2 < f2;
      c2 && s < 0 && (s = -s), !c2 && s > 0 && (s = -s);
      for (let m = p2; c2 ? m <= f2 : m >= f2; m += s) l3.push(m.toString());
    }
    return l3;
  }
  function tn(e2, i) {
    let r = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), n = [];
    function s(l3, p2 = []) {
      if (e2.has(l3) && !r.has(l3)) {
        t.has(l3) && i.onCircularDependency?.(p2, l3), t.add(l3);
        for (let f2 of e2.get(l3) ?? []) p2.push(l3), s(f2, p2), p2.pop();
        r.add(l3), t.delete(l3), n.push(l3);
      }
    }
    for (let l3 of e2.keys()) s(l3);
    return n;
  }
  var ko = /^[a-z]+$/;
  var Ut = ((n) => (n[n.None = 0] = "None", n[n.AtProperty = 1] = "AtProperty", n[n.ColorMix = 2] = "ColorMix", n[n.All = 3] = "All", n))(Ut || {});
  function bo() {
    throw new Error("No `loadModule` function provided to `compile`");
  }
  function yo() {
    throw new Error("No `loadStylesheet` function provided to `compile`");
  }
  function xo(e2) {
    let i = 0, r = null;
    for (let t of d(e2, " ")) t === "reference" ? i |= 2 : t === "inline" ? i |= 1 : t === "default" ? i |= 4 : t === "static" ? i |= 8 : t.startsWith("prefix(") && t.endsWith(")") && (r = t.slice(7, -1));
    return [i, r];
  }
  var Le = ((f2) => (f2[f2.None = 0] = "None", f2[f2.AtApply = 1] = "AtApply", f2[f2.AtImport = 2] = "AtImport", f2[f2.JsPluginCompat = 4] = "JsPluginCompat", f2[f2.ThemeFunction = 8] = "ThemeFunction", f2[f2.Utilities = 16] = "Utilities", f2[f2.Variants = 32] = "Variants", f2[f2.AtTheme = 64] = "AtTheme", f2))(Le || {});
  async function rn(e2, { base: i = "", from: r, loadModule: t = bo, loadStylesheet: n = yo } = {}) {
    let s = 0;
    e2 = [he({ base: i }, e2)], s |= await or(e2, i, n, 0, r !== void 0);
    let l3 = null, p2 = new p(), f2 = /* @__PURE__ */ new Map(), c2 = /* @__PURE__ */ new Map(), m = [], d2 = null, u2 = null, h3 = [], v2 = [], k = [], y2 = [], N2 = null;
    _2(e2, (b2, D2) => {
      if (b2.kind !== "at-rule") return;
      let O2 = Qe(D2);
      if (b2.name === "@tailwind" && (b2.params === "utilities" || b2.params.startsWith("utilities"))) {
        if (u2 !== null) return V2.Replace([]);
        if (O2.context.reference) return V2.Replace([]);
        let P2 = d(b2.params, " ");
        for (let z2 of P2) if (z2.startsWith("source(")) {
          let E2 = z2.slice(7, -1);
          if (E2 === "none") {
            N2 = E2;
            continue;
          }
          if (E2[0] === '"' && E2[E2.length - 1] !== '"' || E2[0] === "'" && E2[E2.length - 1] !== "'" || E2[0] !== "'" && E2[0] !== '"') throw new Error("`source(\u2026)` paths must be quoted.");
          N2 = { base: O2.context.sourceBase ?? O2.context.base, pattern: E2.slice(1, -1) };
        }
        u2 = b2, s |= 16;
      }
      if (b2.name === "@utility") {
        if (O2.parent !== null) throw new Error("`@utility` cannot be nested.");
        if (b2.nodes.length === 0) throw new Error(`\`@utility ${b2.params}\` is empty. Utilities should include at least one property.`);
        let P2 = Wr(b2);
        if (P2 === null) {
          if (!b2.params.endsWith("-*")) {
            if (b2.params.endsWith("*")) throw new Error(`\`@utility ${b2.params}\` defines an invalid utility name. A functional utility must end in \`-*\`.`);
            if (b2.params.includes("*")) throw new Error(`\`@utility ${b2.params}\` defines an invalid utility name. The dynamic portion marked by \`-*\` must appear once at the end.`);
          }
          throw new Error(`\`@utility ${b2.params}\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter.`);
        }
        m.push(P2);
      }
      if (b2.name === "@source") {
        if (b2.nodes.length > 0) throw new Error("`@source` cannot have a body.");
        if (O2.parent !== null) throw new Error("`@source` cannot be nested.");
        let P2 = false, z2 = false, E2 = b2.params;
        if (E2[0] === "n" && E2.startsWith("not ") && (P2 = true, E2 = E2.slice(4)), E2[0] === "i" && E2.startsWith("inline(") && (z2 = true, E2 = E2.slice(7, -1).trim()), E2[0] === '"' && E2[E2.length - 1] !== '"' || E2[0] === "'" && E2[E2.length - 1] !== "'" || E2[0] !== "'" && E2[0] !== '"') throw new Error("`@source` paths must be quoted.");
        let j2 = E2.slice(1, -1);
        if (z2) {
          let q2 = P2 ? y2 : k, G2 = d(j2, " ");
          for (let X2 of G2) for (let ie2 of Nt(X2)) q2.push(ie2);
        } else v2.push({ base: O2.context.base, pattern: j2, negated: P2 });
        return V2.ReplaceSkip([]);
      }
      if (b2.name === "@variant" && (O2.parent === null ? b2.nodes.length === 0 ? b2.name = "@custom-variant" : (_2(b2.nodes, (P2) => {
        if (P2.kind === "at-rule" && P2.name === "@slot") return b2.name = "@custom-variant", V2.Stop;
      }), b2.name === "@variant" && h3.push(b2)) : h3.push(b2)), b2.name === "@custom-variant") {
        if (O2.parent !== null) throw new Error("`@custom-variant` cannot be nested.");
        let [P2, z2] = d(b2.params, " ");
        if (!$t.test(P2)) throw new Error(`\`@custom-variant ${P2}\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);
        if (b2.nodes.length > 0 && z2) throw new Error(`\`@custom-variant ${P2}\` cannot have both a selector and a body.`);
        if (b2.nodes.length === 0) {
          if (!z2) throw new Error(`\`@custom-variant ${P2}\` has no selector or body.`);
          let E2 = d(z2.slice(1, -1), ",");
          if (E2.length === 0 || E2.some((G2) => G2.trim() === "")) throw new Error(`\`@custom-variant ${P2} (${E2.join(",")})\` selector is invalid.`);
          let j2 = [], q2 = [];
          for (let G2 of E2) G2 = G2.trim(), G2[0] === "@" ? j2.push(G2) : q2.push(G2);
          f2.set(P2, (G2) => {
            G2.variants.static(P2, (X2) => {
              let ie2 = [];
              q2.length > 0 && ie2.push(H2(q2.join(", "), X2.nodes));
              for (let a2 of j2) ie2.push(J2(a2, X2.nodes));
              X2.nodes = ie2;
            }, { compounds: Pe([...q2, ...j2]) });
          }), c2.set(P2, /* @__PURE__ */ new Set());
        } else {
          let E2 = /* @__PURE__ */ new Set();
          _2(b2.nodes, (j2) => {
            j2.kind === "at-rule" && j2.name === "@variant" && E2.add(j2.params);
          }), f2.set(P2, (j2) => {
            j2.variants.fromAst(P2, b2.nodes, j2);
          }), c2.set(P2, E2);
        }
        return V2.ReplaceSkip([]);
      }
      if (b2.name === "@media") {
        let P2 = d(b2.params, " "), z2 = [];
        for (let E2 of P2) if (E2.startsWith("source(")) {
          let j2 = E2.slice(7, -1);
          _2(b2.nodes, (q2) => {
            if (q2.kind === "at-rule" && q2.name === "@tailwind" && q2.params === "utilities") return q2.params += ` source(${j2})`, V2.ReplaceStop([he({ sourceBase: O2.context.base }, [q2])]);
          });
        } else if (E2.startsWith("theme(")) {
          let j2 = E2.slice(6, -1), q2 = j2.includes("reference");
          _2(b2.nodes, (G2) => {
            if (G2.kind !== "context") {
              if (G2.kind !== "at-rule") {
                if (q2) throw new Error('Files imported with `@import "\u2026" theme(reference)` must only contain `@theme` blocks.\nUse `@reference "\u2026";` instead.');
                return V2.Continue;
              }
              if (G2.name === "@theme") return G2.params += " " + j2, V2.Skip;
            }
          });
        } else if (E2.startsWith("prefix(")) {
          let j2 = E2.slice(7, -1);
          _2(b2.nodes, (q2) => {
            if (q2.kind === "at-rule" && q2.name === "@theme") return q2.params += ` prefix(${j2})`, V2.Skip;
          });
        } else E2 === "important" ? l3 = true : E2 === "reference" ? b2.nodes = [he({ reference: true }, b2.nodes)] : z2.push(E2);
        if (z2.length > 0) b2.params = z2.join(" ");
        else if (P2.length > 0) return V2.Replace(b2.nodes);
        return V2.Continue;
      }
      if (b2.name === "@theme") {
        let [P2, z2] = xo(b2.params);
        if (s |= 64, O2.context.reference && (P2 |= 2), z2) {
          if (!ko.test(z2)) throw new Error(`The prefix "${z2}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
          p2.prefix = z2;
        }
        return _2(b2.nodes, (E2) => {
          if (E2.kind === "at-rule" && E2.name === "@keyframes") return p2.addKeyframes(E2), V2.Skip;
          if (E2.kind === "comment") return;
          if (E2.kind === "declaration" && E2.property.startsWith("--")) {
            p2.add(a(E2.property), E2.value ?? "", P2, E2.src);
            return;
          }
          let j2 = ae([B2(b2.name, b2.params, [E2])]).split(`
`).map((q2, G2, X2) => `${G2 === 0 || G2 >= X2.length - 2 ? " " : ">"} ${q2}`).join(`
`);
          throw new Error(`\`@theme\` blocks must only contain custom properties or \`@keyframes\`.

${j2}`);
        }), d2 ? V2.ReplaceSkip([]) : (d2 = H2(":root, :host", []), d2.src = b2.src, V2.ReplaceSkip(d2));
      }
    });
    let A2 = _i(p2, u2?.src);
    if (l3 && (A2.important = l3), y2.length > 0) for (let b2 of y2) A2.invalidCandidates.add(b2);
    s |= await Qi({ designSystem: A2, base: i, ast: e2, loadModule: t, sources: v2 });
    for (let b2 of f2.keys()) A2.variants.static(b2, () => {
    });
    for (let b2 of tn(c2, { onCircularDependency(D2, O2) {
      let P2 = ae(D2.map((z2, E2) => B2("@custom-variant", z2, [B2("@variant", D2[E2 + 1] ?? O2, [])]))).replaceAll(";", " { \u2026 }").replace(`@custom-variant ${O2} {`, `@custom-variant ${O2} { /* \u2190 */`);
      throw new Error(`Circular dependency detected in custom variants:

${P2}`);
    } })) f2.get(b2)?.(A2);
    for (let b2 of m) b2(A2);
    if (d2) {
      let b2 = [];
      for (let [O2, P2] of A2.theme.entries()) {
        if (P2.options & 2) continue;
        let z2 = o(h2(O2), P2.value);
        z2.src = P2.src, b2.push(z2);
      }
      let D2 = A2.theme.getKeyframes();
      for (let O2 of D2) e2.push(he({ theme: true }, [Y2([O2])]));
      d2.nodes = [he({ theme: true }, b2)];
    }
    if (s |= Oe(e2, A2), s |= ze(e2, A2), s |= Ce(e2, A2), u2) {
      let b2 = u2;
      b2.kind = "context", b2.context = {};
    }
    return _2(e2, (b2) => {
      if (b2.kind === "at-rule") return b2.name === "@utility" ? V2.Replace([]) : V2.Skip;
    }), { designSystem: A2, ast: e2, sources: v2, root: N2, utilitiesNode: u2, features: s, inlineCandidates: k };
  }
  async function Rf(e2, i = {}) {
    return (await rn(Se(e2, { from: i.from }), i)).designSystem;
  }

  // node_modules/tailwindcss/index.css
  var tailwindcss_default = '@layer theme, base, components, utilities;\n\n@layer theme {\n  @theme default {\n    --font-sans:\n      ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",\n      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;\n    --font-mono:\n      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",\n      "Courier New", monospace;\n\n    --color-red-50: oklch(97.1% 0.013 17.38);\n    --color-red-100: oklch(93.6% 0.032 17.717);\n    --color-red-200: oklch(88.5% 0.062 18.334);\n    --color-red-300: oklch(80.8% 0.114 19.571);\n    --color-red-400: oklch(70.4% 0.191 22.216);\n    --color-red-500: oklch(63.7% 0.237 25.331);\n    --color-red-600: oklch(57.7% 0.245 27.325);\n    --color-red-700: oklch(50.5% 0.213 27.518);\n    --color-red-800: oklch(44.4% 0.177 26.899);\n    --color-red-900: oklch(39.6% 0.141 25.723);\n    --color-red-950: oklch(25.8% 0.092 26.042);\n\n    --color-orange-50: oklch(98% 0.016 73.684);\n    --color-orange-100: oklch(95.4% 0.038 75.164);\n    --color-orange-200: oklch(90.1% 0.076 70.697);\n    --color-orange-300: oklch(83.7% 0.128 66.29);\n    --color-orange-400: oklch(75% 0.183 55.934);\n    --color-orange-500: oklch(70.5% 0.213 47.604);\n    --color-orange-600: oklch(64.6% 0.222 41.116);\n    --color-orange-700: oklch(55.3% 0.195 38.402);\n    --color-orange-800: oklch(47% 0.157 37.304);\n    --color-orange-900: oklch(40.8% 0.123 38.172);\n    --color-orange-950: oklch(26.6% 0.079 36.259);\n\n    --color-amber-50: oklch(98.7% 0.022 95.277);\n    --color-amber-100: oklch(96.2% 0.059 95.617);\n    --color-amber-200: oklch(92.4% 0.12 95.746);\n    --color-amber-300: oklch(87.9% 0.169 91.605);\n    --color-amber-400: oklch(82.8% 0.189 84.429);\n    --color-amber-500: oklch(76.9% 0.188 70.08);\n    --color-amber-600: oklch(66.6% 0.179 58.318);\n    --color-amber-700: oklch(55.5% 0.163 48.998);\n    --color-amber-800: oklch(47.3% 0.137 46.201);\n    --color-amber-900: oklch(41.4% 0.112 45.904);\n    --color-amber-950: oklch(27.9% 0.077 45.635);\n\n    --color-yellow-50: oklch(98.7% 0.026 102.212);\n    --color-yellow-100: oklch(97.3% 0.071 103.193);\n    --color-yellow-200: oklch(94.5% 0.129 101.54);\n    --color-yellow-300: oklch(90.5% 0.182 98.111);\n    --color-yellow-400: oklch(85.2% 0.199 91.936);\n    --color-yellow-500: oklch(79.5% 0.184 86.047);\n    --color-yellow-600: oklch(68.1% 0.162 75.834);\n    --color-yellow-700: oklch(55.4% 0.135 66.442);\n    --color-yellow-800: oklch(47.6% 0.114 61.907);\n    --color-yellow-900: oklch(42.1% 0.095 57.708);\n    --color-yellow-950: oklch(28.6% 0.066 53.813);\n\n    --color-lime-50: oklch(98.6% 0.031 120.757);\n    --color-lime-100: oklch(96.7% 0.067 122.328);\n    --color-lime-200: oklch(93.8% 0.127 124.321);\n    --color-lime-300: oklch(89.7% 0.196 126.665);\n    --color-lime-400: oklch(84.1% 0.238 128.85);\n    --color-lime-500: oklch(76.8% 0.233 130.85);\n    --color-lime-600: oklch(64.8% 0.2 131.684);\n    --color-lime-700: oklch(53.2% 0.157 131.589);\n    --color-lime-800: oklch(45.3% 0.124 130.933);\n    --color-lime-900: oklch(40.5% 0.101 131.063);\n    --color-lime-950: oklch(27.4% 0.072 132.109);\n\n    --color-green-50: oklch(98.2% 0.018 155.826);\n    --color-green-100: oklch(96.2% 0.044 156.743);\n    --color-green-200: oklch(92.5% 0.084 155.995);\n    --color-green-300: oklch(87.1% 0.15 154.449);\n    --color-green-400: oklch(79.2% 0.209 151.711);\n    --color-green-500: oklch(72.3% 0.219 149.579);\n    --color-green-600: oklch(62.7% 0.194 149.214);\n    --color-green-700: oklch(52.7% 0.154 150.069);\n    --color-green-800: oklch(44.8% 0.119 151.328);\n    --color-green-900: oklch(39.3% 0.095 152.535);\n    --color-green-950: oklch(26.6% 0.065 152.934);\n\n    --color-emerald-50: oklch(97.9% 0.021 166.113);\n    --color-emerald-100: oklch(95% 0.052 163.051);\n    --color-emerald-200: oklch(90.5% 0.093 164.15);\n    --color-emerald-300: oklch(84.5% 0.143 164.978);\n    --color-emerald-400: oklch(76.5% 0.177 163.223);\n    --color-emerald-500: oklch(69.6% 0.17 162.48);\n    --color-emerald-600: oklch(59.6% 0.145 163.225);\n    --color-emerald-700: oklch(50.8% 0.118 165.612);\n    --color-emerald-800: oklch(43.2% 0.095 166.913);\n    --color-emerald-900: oklch(37.8% 0.077 168.94);\n    --color-emerald-950: oklch(26.2% 0.051 172.552);\n\n    --color-teal-50: oklch(98.4% 0.014 180.72);\n    --color-teal-100: oklch(95.3% 0.051 180.801);\n    --color-teal-200: oklch(91% 0.096 180.426);\n    --color-teal-300: oklch(85.5% 0.138 181.071);\n    --color-teal-400: oklch(77.7% 0.152 181.912);\n    --color-teal-500: oklch(70.4% 0.14 182.503);\n    --color-teal-600: oklch(60% 0.118 184.704);\n    --color-teal-700: oklch(51.1% 0.096 186.391);\n    --color-teal-800: oklch(43.7% 0.078 188.216);\n    --color-teal-900: oklch(38.6% 0.063 188.416);\n    --color-teal-950: oklch(27.7% 0.046 192.524);\n\n    --color-cyan-50: oklch(98.4% 0.019 200.873);\n    --color-cyan-100: oklch(95.6% 0.045 203.388);\n    --color-cyan-200: oklch(91.7% 0.08 205.041);\n    --color-cyan-300: oklch(86.5% 0.127 207.078);\n    --color-cyan-400: oklch(78.9% 0.154 211.53);\n    --color-cyan-500: oklch(71.5% 0.143 215.221);\n    --color-cyan-600: oklch(60.9% 0.126 221.723);\n    --color-cyan-700: oklch(52% 0.105 223.128);\n    --color-cyan-800: oklch(45% 0.085 224.283);\n    --color-cyan-900: oklch(39.8% 0.07 227.392);\n    --color-cyan-950: oklch(30.2% 0.056 229.695);\n\n    --color-sky-50: oklch(97.7% 0.013 236.62);\n    --color-sky-100: oklch(95.1% 0.026 236.824);\n    --color-sky-200: oklch(90.1% 0.058 230.902);\n    --color-sky-300: oklch(82.8% 0.111 230.318);\n    --color-sky-400: oklch(74.6% 0.16 232.661);\n    --color-sky-500: oklch(68.5% 0.169 237.323);\n    --color-sky-600: oklch(58.8% 0.158 241.966);\n    --color-sky-700: oklch(50% 0.134 242.749);\n    --color-sky-800: oklch(44.3% 0.11 240.79);\n    --color-sky-900: oklch(39.1% 0.09 240.876);\n    --color-sky-950: oklch(29.3% 0.066 243.157);\n\n    --color-blue-50: oklch(97% 0.014 254.604);\n    --color-blue-100: oklch(93.2% 0.032 255.585);\n    --color-blue-200: oklch(88.2% 0.059 254.128);\n    --color-blue-300: oklch(80.9% 0.105 251.813);\n    --color-blue-400: oklch(70.7% 0.165 254.624);\n    --color-blue-500: oklch(62.3% 0.214 259.815);\n    --color-blue-600: oklch(54.6% 0.245 262.881);\n    --color-blue-700: oklch(48.8% 0.243 264.376);\n    --color-blue-800: oklch(42.4% 0.199 265.638);\n    --color-blue-900: oklch(37.9% 0.146 265.522);\n    --color-blue-950: oklch(28.2% 0.091 267.935);\n\n    --color-indigo-50: oklch(96.2% 0.018 272.314);\n    --color-indigo-100: oklch(93% 0.034 272.788);\n    --color-indigo-200: oklch(87% 0.065 274.039);\n    --color-indigo-300: oklch(78.5% 0.115 274.713);\n    --color-indigo-400: oklch(67.3% 0.182 276.935);\n    --color-indigo-500: oklch(58.5% 0.233 277.117);\n    --color-indigo-600: oklch(51.1% 0.262 276.966);\n    --color-indigo-700: oklch(45.7% 0.24 277.023);\n    --color-indigo-800: oklch(39.8% 0.195 277.366);\n    --color-indigo-900: oklch(35.9% 0.144 278.697);\n    --color-indigo-950: oklch(25.7% 0.09 281.288);\n\n    --color-violet-50: oklch(96.9% 0.016 293.756);\n    --color-violet-100: oklch(94.3% 0.029 294.588);\n    --color-violet-200: oklch(89.4% 0.057 293.283);\n    --color-violet-300: oklch(81.1% 0.111 293.571);\n    --color-violet-400: oklch(70.2% 0.183 293.541);\n    --color-violet-500: oklch(60.6% 0.25 292.717);\n    --color-violet-600: oklch(54.1% 0.281 293.009);\n    --color-violet-700: oklch(49.1% 0.27 292.581);\n    --color-violet-800: oklch(43.2% 0.232 292.759);\n    --color-violet-900: oklch(38% 0.189 293.745);\n    --color-violet-950: oklch(28.3% 0.141 291.089);\n\n    --color-purple-50: oklch(97.7% 0.014 308.299);\n    --color-purple-100: oklch(94.6% 0.033 307.174);\n    --color-purple-200: oklch(90.2% 0.063 306.703);\n    --color-purple-300: oklch(82.7% 0.119 306.383);\n    --color-purple-400: oklch(71.4% 0.203 305.504);\n    --color-purple-500: oklch(62.7% 0.265 303.9);\n    --color-purple-600: oklch(55.8% 0.288 302.321);\n    --color-purple-700: oklch(49.6% 0.265 301.924);\n    --color-purple-800: oklch(43.8% 0.218 303.724);\n    --color-purple-900: oklch(38.1% 0.176 304.987);\n    --color-purple-950: oklch(29.1% 0.149 302.717);\n\n    --color-fuchsia-50: oklch(97.7% 0.017 320.058);\n    --color-fuchsia-100: oklch(95.2% 0.037 318.852);\n    --color-fuchsia-200: oklch(90.3% 0.076 319.62);\n    --color-fuchsia-300: oklch(83.3% 0.145 321.434);\n    --color-fuchsia-400: oklch(74% 0.238 322.16);\n    --color-fuchsia-500: oklch(66.7% 0.295 322.15);\n    --color-fuchsia-600: oklch(59.1% 0.293 322.896);\n    --color-fuchsia-700: oklch(51.8% 0.253 323.949);\n    --color-fuchsia-800: oklch(45.2% 0.211 324.591);\n    --color-fuchsia-900: oklch(40.1% 0.17 325.612);\n    --color-fuchsia-950: oklch(29.3% 0.136 325.661);\n\n    --color-pink-50: oklch(97.1% 0.014 343.198);\n    --color-pink-100: oklch(94.8% 0.028 342.258);\n    --color-pink-200: oklch(89.9% 0.061 343.231);\n    --color-pink-300: oklch(82.3% 0.12 346.018);\n    --color-pink-400: oklch(71.8% 0.202 349.761);\n    --color-pink-500: oklch(65.6% 0.241 354.308);\n    --color-pink-600: oklch(59.2% 0.249 0.584);\n    --color-pink-700: oklch(52.5% 0.223 3.958);\n    --color-pink-800: oklch(45.9% 0.187 3.815);\n    --color-pink-900: oklch(40.8% 0.153 2.432);\n    --color-pink-950: oklch(28.4% 0.109 3.907);\n\n    --color-rose-50: oklch(96.9% 0.015 12.422);\n    --color-rose-100: oklch(94.1% 0.03 12.58);\n    --color-rose-200: oklch(89.2% 0.058 10.001);\n    --color-rose-300: oklch(81% 0.117 11.638);\n    --color-rose-400: oklch(71.2% 0.194 13.428);\n    --color-rose-500: oklch(64.5% 0.246 16.439);\n    --color-rose-600: oklch(58.6% 0.253 17.585);\n    --color-rose-700: oklch(51.4% 0.222 16.935);\n    --color-rose-800: oklch(45.5% 0.188 13.697);\n    --color-rose-900: oklch(41% 0.159 10.272);\n    --color-rose-950: oklch(27.1% 0.105 12.094);\n\n    --color-slate-50: oklch(98.4% 0.003 247.858);\n    --color-slate-100: oklch(96.8% 0.007 247.896);\n    --color-slate-200: oklch(92.9% 0.013 255.508);\n    --color-slate-300: oklch(86.9% 0.022 252.894);\n    --color-slate-400: oklch(70.4% 0.04 256.788);\n    --color-slate-500: oklch(55.4% 0.046 257.417);\n    --color-slate-600: oklch(44.6% 0.043 257.281);\n    --color-slate-700: oklch(37.2% 0.044 257.287);\n    --color-slate-800: oklch(27.9% 0.041 260.031);\n    --color-slate-900: oklch(20.8% 0.042 265.755);\n    --color-slate-950: oklch(12.9% 0.042 264.695);\n\n    --color-gray-50: oklch(98.5% 0.002 247.839);\n    --color-gray-100: oklch(96.7% 0.003 264.542);\n    --color-gray-200: oklch(92.8% 0.006 264.531);\n    --color-gray-300: oklch(87.2% 0.01 258.338);\n    --color-gray-400: oklch(70.7% 0.022 261.325);\n    --color-gray-500: oklch(55.1% 0.027 264.364);\n    --color-gray-600: oklch(44.6% 0.03 256.802);\n    --color-gray-700: oklch(37.3% 0.034 259.733);\n    --color-gray-800: oklch(27.8% 0.033 256.848);\n    --color-gray-900: oklch(21% 0.034 264.665);\n    --color-gray-950: oklch(13% 0.028 261.692);\n\n    --color-zinc-50: oklch(98.5% 0 0);\n    --color-zinc-100: oklch(96.7% 0.001 286.375);\n    --color-zinc-200: oklch(92% 0.004 286.32);\n    --color-zinc-300: oklch(87.1% 0.006 286.286);\n    --color-zinc-400: oklch(70.5% 0.015 286.067);\n    --color-zinc-500: oklch(55.2% 0.016 285.938);\n    --color-zinc-600: oklch(44.2% 0.017 285.786);\n    --color-zinc-700: oklch(37% 0.013 285.805);\n    --color-zinc-800: oklch(27.4% 0.006 286.033);\n    --color-zinc-900: oklch(21% 0.006 285.885);\n    --color-zinc-950: oklch(14.1% 0.005 285.823);\n\n    --color-neutral-50: oklch(98.5% 0 0);\n    --color-neutral-100: oklch(97% 0 0);\n    --color-neutral-200: oklch(92.2% 0 0);\n    --color-neutral-300: oklch(87% 0 0);\n    --color-neutral-400: oklch(70.8% 0 0);\n    --color-neutral-500: oklch(55.6% 0 0);\n    --color-neutral-600: oklch(43.9% 0 0);\n    --color-neutral-700: oklch(37.1% 0 0);\n    --color-neutral-800: oklch(26.9% 0 0);\n    --color-neutral-900: oklch(20.5% 0 0);\n    --color-neutral-950: oklch(14.5% 0 0);\n\n    --color-stone-50: oklch(98.5% 0.001 106.423);\n    --color-stone-100: oklch(97% 0.001 106.424);\n    --color-stone-200: oklch(92.3% 0.003 48.717);\n    --color-stone-300: oklch(86.9% 0.005 56.366);\n    --color-stone-400: oklch(70.9% 0.01 56.259);\n    --color-stone-500: oklch(55.3% 0.013 58.071);\n    --color-stone-600: oklch(44.4% 0.011 73.639);\n    --color-stone-700: oklch(37.4% 0.01 67.558);\n    --color-stone-800: oklch(26.8% 0.007 34.298);\n    --color-stone-900: oklch(21.6% 0.006 56.043);\n    --color-stone-950: oklch(14.7% 0.004 49.25);\n\n    --color-mauve-50: oklch(98.5% 0 0);\n    --color-mauve-100: oklch(96% 0.003 325.6);\n    --color-mauve-200: oklch(92.2% 0.005 325.62);\n    --color-mauve-300: oklch(86.5% 0.012 325.68);\n    --color-mauve-400: oklch(71.1% 0.019 323.02);\n    --color-mauve-500: oklch(54.2% 0.034 322.5);\n    --color-mauve-600: oklch(43.5% 0.029 321.78);\n    --color-mauve-700: oklch(36.4% 0.029 323.89);\n    --color-mauve-800: oklch(26.3% 0.024 320.12);\n    --color-mauve-900: oklch(21.2% 0.019 322.12);\n    --color-mauve-950: oklch(14.5% 0.008 326);\n\n    --color-olive-50: oklch(98.8% 0.003 106.5);\n    --color-olive-100: oklch(96.6% 0.005 106.5);\n    --color-olive-200: oklch(93% 0.007 106.5);\n    --color-olive-300: oklch(88% 0.011 106.6);\n    --color-olive-400: oklch(73.7% 0.021 106.9);\n    --color-olive-500: oklch(58% 0.031 107.3);\n    --color-olive-600: oklch(46.6% 0.025 107.3);\n    --color-olive-700: oklch(39.4% 0.023 107.4);\n    --color-olive-800: oklch(28.6% 0.016 107.4);\n    --color-olive-900: oklch(22.8% 0.013 107.4);\n    --color-olive-950: oklch(15.3% 0.006 107.1);\n\n    --color-mist-50: oklch(98.7% 0.002 197.1);\n    --color-mist-100: oklch(96.3% 0.002 197.1);\n    --color-mist-200: oklch(92.5% 0.005 214.3);\n    --color-mist-300: oklch(87.2% 0.007 219.6);\n    --color-mist-400: oklch(72.3% 0.014 214.4);\n    --color-mist-500: oklch(56% 0.021 213.5);\n    --color-mist-600: oklch(45% 0.017 213.2);\n    --color-mist-700: oklch(37.8% 0.015 216);\n    --color-mist-800: oklch(27.5% 0.011 216.9);\n    --color-mist-900: oklch(21.8% 0.008 223.9);\n    --color-mist-950: oklch(14.8% 0.004 228.8);\n\n    --color-taupe-50: oklch(98.6% 0.002 67.8);\n    --color-taupe-100: oklch(96% 0.002 17.2);\n    --color-taupe-200: oklch(92.2% 0.005 34.3);\n    --color-taupe-300: oklch(86.8% 0.007 39.5);\n    --color-taupe-400: oklch(71.4% 0.014 41.2);\n    --color-taupe-500: oklch(54.7% 0.021 43.1);\n    --color-taupe-600: oklch(43.8% 0.017 39.3);\n    --color-taupe-700: oklch(36.7% 0.016 35.7);\n    --color-taupe-800: oklch(26.8% 0.011 36.5);\n    --color-taupe-900: oklch(21.4% 0.009 43.1);\n    --color-taupe-950: oklch(14.7% 0.004 49.3);\n\n    --color-black: #000;\n    --color-white: #fff;\n\n    --spacing: 0.25rem;\n\n    --breakpoint-sm: 40rem;\n    --breakpoint-md: 48rem;\n    --breakpoint-lg: 64rem;\n    --breakpoint-xl: 80rem;\n    --breakpoint-2xl: 96rem;\n\n    --container-3xs: 16rem;\n    --container-2xs: 18rem;\n    --container-xs: 20rem;\n    --container-sm: 24rem;\n    --container-md: 28rem;\n    --container-lg: 32rem;\n    --container-xl: 36rem;\n    --container-2xl: 42rem;\n    --container-3xl: 48rem;\n    --container-4xl: 56rem;\n    --container-5xl: 64rem;\n    --container-6xl: 72rem;\n    --container-7xl: 80rem;\n\n    --text-xs: 0.75rem;\n    --text-xs--line-height: calc(1 / 0.75);\n    --text-sm: 0.875rem;\n    --text-sm--line-height: calc(1.25 / 0.875);\n    --text-base: 1rem;\n    --text-base--line-height: calc(1.5 / 1);\n    --text-lg: 1.125rem;\n    --text-lg--line-height: calc(1.75 / 1.125);\n    --text-xl: 1.25rem;\n    --text-xl--line-height: calc(1.75 / 1.25);\n    --text-2xl: 1.5rem;\n    --text-2xl--line-height: calc(2 / 1.5);\n    --text-3xl: 1.875rem;\n    --text-3xl--line-height: calc(2.25 / 1.875);\n    --text-4xl: 2.25rem;\n    --text-4xl--line-height: calc(2.5 / 2.25);\n    --text-5xl: 3rem;\n    --text-5xl--line-height: 1;\n    --text-6xl: 3.75rem;\n    --text-6xl--line-height: 1;\n    --text-7xl: 4.5rem;\n    --text-7xl--line-height: 1;\n    --text-8xl: 6rem;\n    --text-8xl--line-height: 1;\n    --text-9xl: 8rem;\n    --text-9xl--line-height: 1;\n\n    --font-weight-thin: 100;\n    --font-weight-extralight: 200;\n    --font-weight-light: 300;\n    --font-weight-normal: 400;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --font-weight-extrabold: 800;\n    --font-weight-black: 900;\n\n    --tracking-tighter: -0.05em;\n    --tracking-tight: -0.025em;\n    --tracking-normal: 0em;\n    --tracking-wide: 0.025em;\n    --tracking-wider: 0.05em;\n    --tracking-widest: 0.1em;\n\n    --leading-tight: 1.25;\n    --leading-snug: 1.375;\n    --leading-normal: 1.5;\n    --leading-relaxed: 1.625;\n    --leading-loose: 2;\n\n    --radius-xs: 0.125rem;\n    --radius-sm: 0.25rem;\n    --radius-md: 0.375rem;\n    --radius-lg: 0.5rem;\n    --radius-xl: 0.75rem;\n    --radius-2xl: 1rem;\n    --radius-3xl: 1.5rem;\n    --radius-4xl: 2rem;\n\n    --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);\n    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n    --shadow-md:\n      0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n    --shadow-lg:\n      0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n    --shadow-xl:\n      0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n\n    --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);\n    --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);\n    --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);\n\n    --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);\n    --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);\n    --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);\n    --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);\n    --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);\n    --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);\n\n    --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);\n    --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);\n    --text-shadow-sm:\n      0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075),\n      0px 2px 2px rgb(0 0 0 / 0.075);\n    --text-shadow-md:\n      0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1),\n      0px 2px 4px rgb(0 0 0 / 0.1);\n    --text-shadow-lg:\n      0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1),\n      0px 4px 8px rgb(0 0 0 / 0.1);\n\n    --ease-in: cubic-bezier(0.4, 0, 1, 1);\n    --ease-out: cubic-bezier(0, 0, 0.2, 1);\n    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n\n    --animate-spin: spin 1s linear infinite;\n    --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n    --animate-bounce: bounce 1s infinite;\n\n    @keyframes spin {\n      to {\n        transform: rotate(360deg);\n      }\n    }\n\n    @keyframes ping {\n      75%,\n      100% {\n        transform: scale(2);\n        opacity: 0;\n      }\n    }\n\n    @keyframes pulse {\n      50% {\n        opacity: 0.5;\n      }\n    }\n\n    @keyframes bounce {\n      0%,\n      100% {\n        transform: translateY(-25%);\n        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n      }\n\n      50% {\n        transform: none;\n        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n      }\n    }\n\n    --blur-xs: 4px;\n    --blur-sm: 8px;\n    --blur-md: 12px;\n    --blur-lg: 16px;\n    --blur-xl: 24px;\n    --blur-2xl: 40px;\n    --blur-3xl: 64px;\n\n    --perspective-dramatic: 100px;\n    --perspective-near: 300px;\n    --perspective-normal: 500px;\n    --perspective-midrange: 800px;\n    --perspective-distant: 1200px;\n\n    --aspect-video: 16 / 9;\n\n    --default-transition-duration: 150ms;\n    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    --default-font-family: --theme(--font-sans, initial);\n    --default-font-feature-settings: --theme(\n      --font-sans--font-feature-settings,\n      initial\n    );\n    --default-font-variation-settings: --theme(\n      --font-sans--font-variation-settings,\n      initial\n    );\n    --default-mono-font-family: --theme(--font-mono, initial);\n    --default-mono-font-feature-settings: --theme(\n      --font-mono--font-feature-settings,\n      initial\n    );\n    --default-mono-font-variation-settings: --theme(\n      --font-mono--font-variation-settings,\n      initial\n    );\n  }\n\n  /* Deprecated */\n  @theme default inline reference {\n    --blur: 8px;\n    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n    --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n    --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);\n    --radius: 0.25rem;\n    --max-width-prose: 65ch;\n  }\n}\n\n@layer base {\n  /*\n  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n  2. Remove default margins and padding\n  3. Reset all borders.\n*/\n\n  *,\n  ::after,\n  ::before,\n  ::backdrop,\n  ::file-selector-button {\n    box-sizing: border-box; /* 1 */\n    margin: 0; /* 2 */\n    padding: 0; /* 2 */\n    border: 0 solid; /* 3 */\n  }\n\n  /*\n  1. Use a consistent sensible line-height in all browsers.\n  2. Prevent adjustments of font size after orientation changes in iOS.\n  3. Use a more readable tab size.\n  4. Use the user\'s configured `sans` font-family by default.\n  5. Use the user\'s configured `sans` font-feature-settings by default.\n  6. Use the user\'s configured `sans` font-variation-settings by default.\n  7. Disable tap highlights on iOS.\n*/\n\n  html,\n  :host {\n    line-height: 1.5; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    tab-size: 4; /* 3 */\n    font-family: --theme(\n      --default-font-family,\n      ui-sans-serif,\n      system-ui,\n      sans-serif,\n      "Apple Color Emoji",\n      "Segoe UI Emoji",\n      "Segoe UI Symbol",\n      "Noto Color Emoji"\n    ); /* 4 */\n    font-feature-settings: --theme(\n      --default-font-feature-settings,\n      normal\n    ); /* 5 */\n    font-variation-settings: --theme(\n      --default-font-variation-settings,\n      normal\n    ); /* 6 */\n    -webkit-tap-highlight-color: transparent; /* 7 */\n  }\n\n  /*\n  1. Add the correct height in Firefox.\n  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n  3. Reset the default border style to a 1px solid border.\n*/\n\n  hr {\n    height: 0; /* 1 */\n    color: inherit; /* 2 */\n    border-top-width: 1px; /* 3 */\n  }\n\n  /*\n  Add the correct text decoration in Chrome, Edge, and Safari.\n*/\n\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n\n  /*\n  Remove the default font size and weight for headings.\n*/\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n\n  /*\n  Reset links to optimize for opt-in styling instead of opt-out.\n*/\n\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n\n  /*\n  Add the correct font weight in Edge and Safari.\n*/\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  /*\n  1. Use the user\'s configured `mono` font-family by default.\n  2. Use the user\'s configured `mono` font-feature-settings by default.\n  3. Use the user\'s configured `mono` font-variation-settings by default.\n  4. Correct the odd `em` font sizing in all browsers.\n*/\n\n  code,\n  kbd,\n  samp,\n  pre {\n    font-family: --theme(\n      --default-mono-font-family,\n      ui-monospace,\n      SFMono-Regular,\n      Menlo,\n      Monaco,\n      Consolas,\n      "Liberation Mono",\n      "Courier New",\n      monospace\n    ); /* 1 */\n    font-feature-settings: --theme(\n      --default-mono-font-feature-settings,\n      normal\n    ); /* 2 */\n    font-variation-settings: --theme(\n      --default-mono-font-variation-settings,\n      normal\n    ); /* 3 */\n    font-size: 1em; /* 4 */\n  }\n\n  /*\n  Add the correct font size in all browsers.\n*/\n\n  small {\n    font-size: 80%;\n  }\n\n  /*\n  Prevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  /*\n  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n  3. Remove gaps between table borders by default.\n*/\n\n  table {\n    text-indent: 0; /* 1 */\n    border-color: inherit; /* 2 */\n    border-collapse: collapse; /* 3 */\n  }\n\n  /*\n  Use the modern Firefox focus style for all focusable elements.\n*/\n\n  :-moz-focusring {\n    outline: auto;\n  }\n\n  /*\n  Add the correct vertical alignment in Chrome and Firefox.\n*/\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  /*\n  Add the correct display in Chrome and Safari.\n*/\n\n  summary {\n    display: list-item;\n  }\n\n  /*\n  Make lists unstyled by default.\n*/\n\n  ol,\n  ul,\n  menu {\n    list-style: none;\n  }\n\n  /*\n  1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n  2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n      This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\n  img,\n  svg,\n  video,\n  canvas,\n  audio,\n  iframe,\n  embed,\n  object {\n    display: block; /* 1 */\n    vertical-align: middle; /* 2 */\n  }\n\n  /*\n  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\n  img,\n  video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  /*\n  1. Inherit font styles in all browsers.\n  2. Remove border radius in all browsers.\n  3. Remove background color in all browsers.\n  4. Ensure consistent opacity for disabled states in all browsers.\n*/\n\n  button,\n  input,\n  select,\n  optgroup,\n  textarea,\n  ::file-selector-button {\n    font: inherit; /* 1 */\n    font-feature-settings: inherit; /* 1 */\n    font-variation-settings: inherit; /* 1 */\n    letter-spacing: inherit; /* 1 */\n    color: inherit; /* 1 */\n    border-radius: 0; /* 2 */\n    background-color: transparent; /* 3 */\n    opacity: 1; /* 4 */\n  }\n\n  /*\n  Restore default font weight.\n*/\n\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n\n  /*\n  Restore indentation.\n*/\n\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n\n  /*\n  Restore space after button.\n*/\n\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n\n  /*\n  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n*/\n\n  ::placeholder {\n    opacity: 1;\n  }\n\n  /*\n  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not\n  crash when using `color-mix(\u2026)` with `currentcolor`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)\n*/\n\n  @supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or\n    (contain-intrinsic-size: 1px) /* Safari 17+ */ {\n    ::placeholder {\n      color: color-mix(in oklab, currentcolor 50%, transparent);\n    }\n  }\n\n  /*\n  Prevent resizing textareas horizontally by default.\n*/\n\n  textarea {\n    resize: vertical;\n  }\n\n  /*\n  Remove the inner padding in Chrome and Safari on macOS.\n*/\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  /*\n  1. Ensure date/time inputs have the same height when empty in iOS Safari.\n  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.\n*/\n\n  ::-webkit-date-and-time-value {\n    min-height: 1lh; /* 1 */\n    text-align: inherit; /* 2 */\n  }\n\n  /*\n  Prevent height from changing on date/time inputs in macOS Safari when the input is set to `display: block`.\n*/\n\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n\n  /*\n  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.\n*/\n\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n\n  ::-webkit-datetime-edit,\n  ::-webkit-datetime-edit-year-field,\n  ::-webkit-datetime-edit-month-field,\n  ::-webkit-datetime-edit-day-field,\n  ::-webkit-datetime-edit-hour-field,\n  ::-webkit-datetime-edit-minute-field,\n  ::-webkit-datetime-edit-second-field,\n  ::-webkit-datetime-edit-millisecond-field,\n  ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n\n  /*\n  Center dropdown marker shown on inputs with paired `<datalist>`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)\n*/\n\n  ::-webkit-calendar-picker-indicator {\n    line-height: 1;\n  }\n\n  /*\n  Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n\n  /*\n  Correct the inability to style the border radius in iOS Safari.\n*/\n\n  button,\n  input:where([type="button"], [type="reset"], [type="submit"]),\n  ::file-selector-button {\n    appearance: button;\n  }\n\n  /*\n  Correct the cursor style of increment and decrement buttons in Safari.\n*/\n\n  ::-webkit-inner-spin-button,\n  ::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  /*\n  Make elements with the HTML hidden attribute stay hidden by default.\n*/\n\n  [hidden]:where(:not([hidden="until-found"])) {\n    display: none !important;\n  }\n}\n\n@layer utilities {\n  @tailwind utilities;\n}\n';

  // node_modules/tailwindcss/theme.css
  var theme_default = "@theme default {\n  --font-sans:\n    ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n    'Noto Color Emoji';\n  --font-serif: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;\n  --font-mono:\n    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',\n    monospace;\n\n  --color-red-50: oklch(97.1% 0.013 17.38);\n  --color-red-100: oklch(93.6% 0.032 17.717);\n  --color-red-200: oklch(88.5% 0.062 18.334);\n  --color-red-300: oklch(80.8% 0.114 19.571);\n  --color-red-400: oklch(70.4% 0.191 22.216);\n  --color-red-500: oklch(63.7% 0.237 25.331);\n  --color-red-600: oklch(57.7% 0.245 27.325);\n  --color-red-700: oklch(50.5% 0.213 27.518);\n  --color-red-800: oklch(44.4% 0.177 26.899);\n  --color-red-900: oklch(39.6% 0.141 25.723);\n  --color-red-950: oklch(25.8% 0.092 26.042);\n\n  --color-orange-50: oklch(98% 0.016 73.684);\n  --color-orange-100: oklch(95.4% 0.038 75.164);\n  --color-orange-200: oklch(90.1% 0.076 70.697);\n  --color-orange-300: oklch(83.7% 0.128 66.29);\n  --color-orange-400: oklch(75% 0.183 55.934);\n  --color-orange-500: oklch(70.5% 0.213 47.604);\n  --color-orange-600: oklch(64.6% 0.222 41.116);\n  --color-orange-700: oklch(55.3% 0.195 38.402);\n  --color-orange-800: oklch(47% 0.157 37.304);\n  --color-orange-900: oklch(40.8% 0.123 38.172);\n  --color-orange-950: oklch(26.6% 0.079 36.259);\n\n  --color-amber-50: oklch(98.7% 0.022 95.277);\n  --color-amber-100: oklch(96.2% 0.059 95.617);\n  --color-amber-200: oklch(92.4% 0.12 95.746);\n  --color-amber-300: oklch(87.9% 0.169 91.605);\n  --color-amber-400: oklch(82.8% 0.189 84.429);\n  --color-amber-500: oklch(76.9% 0.188 70.08);\n  --color-amber-600: oklch(66.6% 0.179 58.318);\n  --color-amber-700: oklch(55.5% 0.163 48.998);\n  --color-amber-800: oklch(47.3% 0.137 46.201);\n  --color-amber-900: oklch(41.4% 0.112 45.904);\n  --color-amber-950: oklch(27.9% 0.077 45.635);\n\n  --color-yellow-50: oklch(98.7% 0.026 102.212);\n  --color-yellow-100: oklch(97.3% 0.071 103.193);\n  --color-yellow-200: oklch(94.5% 0.129 101.54);\n  --color-yellow-300: oklch(90.5% 0.182 98.111);\n  --color-yellow-400: oklch(85.2% 0.199 91.936);\n  --color-yellow-500: oklch(79.5% 0.184 86.047);\n  --color-yellow-600: oklch(68.1% 0.162 75.834);\n  --color-yellow-700: oklch(55.4% 0.135 66.442);\n  --color-yellow-800: oklch(47.6% 0.114 61.907);\n  --color-yellow-900: oklch(42.1% 0.095 57.708);\n  --color-yellow-950: oklch(28.6% 0.066 53.813);\n\n  --color-lime-50: oklch(98.6% 0.031 120.757);\n  --color-lime-100: oklch(96.7% 0.067 122.328);\n  --color-lime-200: oklch(93.8% 0.127 124.321);\n  --color-lime-300: oklch(89.7% 0.196 126.665);\n  --color-lime-400: oklch(84.1% 0.238 128.85);\n  --color-lime-500: oklch(76.8% 0.233 130.85);\n  --color-lime-600: oklch(64.8% 0.2 131.684);\n  --color-lime-700: oklch(53.2% 0.157 131.589);\n  --color-lime-800: oklch(45.3% 0.124 130.933);\n  --color-lime-900: oklch(40.5% 0.101 131.063);\n  --color-lime-950: oklch(27.4% 0.072 132.109);\n\n  --color-green-50: oklch(98.2% 0.018 155.826);\n  --color-green-100: oklch(96.2% 0.044 156.743);\n  --color-green-200: oklch(92.5% 0.084 155.995);\n  --color-green-300: oklch(87.1% 0.15 154.449);\n  --color-green-400: oklch(79.2% 0.209 151.711);\n  --color-green-500: oklch(72.3% 0.219 149.579);\n  --color-green-600: oklch(62.7% 0.194 149.214);\n  --color-green-700: oklch(52.7% 0.154 150.069);\n  --color-green-800: oklch(44.8% 0.119 151.328);\n  --color-green-900: oklch(39.3% 0.095 152.535);\n  --color-green-950: oklch(26.6% 0.065 152.934);\n\n  --color-emerald-50: oklch(97.9% 0.021 166.113);\n  --color-emerald-100: oklch(95% 0.052 163.051);\n  --color-emerald-200: oklch(90.5% 0.093 164.15);\n  --color-emerald-300: oklch(84.5% 0.143 164.978);\n  --color-emerald-400: oklch(76.5% 0.177 163.223);\n  --color-emerald-500: oklch(69.6% 0.17 162.48);\n  --color-emerald-600: oklch(59.6% 0.145 163.225);\n  --color-emerald-700: oklch(50.8% 0.118 165.612);\n  --color-emerald-800: oklch(43.2% 0.095 166.913);\n  --color-emerald-900: oklch(37.8% 0.077 168.94);\n  --color-emerald-950: oklch(26.2% 0.051 172.552);\n\n  --color-teal-50: oklch(98.4% 0.014 180.72);\n  --color-teal-100: oklch(95.3% 0.051 180.801);\n  --color-teal-200: oklch(91% 0.096 180.426);\n  --color-teal-300: oklch(85.5% 0.138 181.071);\n  --color-teal-400: oklch(77.7% 0.152 181.912);\n  --color-teal-500: oklch(70.4% 0.14 182.503);\n  --color-teal-600: oklch(60% 0.118 184.704);\n  --color-teal-700: oklch(51.1% 0.096 186.391);\n  --color-teal-800: oklch(43.7% 0.078 188.216);\n  --color-teal-900: oklch(38.6% 0.063 188.416);\n  --color-teal-950: oklch(27.7% 0.046 192.524);\n\n  --color-cyan-50: oklch(98.4% 0.019 200.873);\n  --color-cyan-100: oklch(95.6% 0.045 203.388);\n  --color-cyan-200: oklch(91.7% 0.08 205.041);\n  --color-cyan-300: oklch(86.5% 0.127 207.078);\n  --color-cyan-400: oklch(78.9% 0.154 211.53);\n  --color-cyan-500: oklch(71.5% 0.143 215.221);\n  --color-cyan-600: oklch(60.9% 0.126 221.723);\n  --color-cyan-700: oklch(52% 0.105 223.128);\n  --color-cyan-800: oklch(45% 0.085 224.283);\n  --color-cyan-900: oklch(39.8% 0.07 227.392);\n  --color-cyan-950: oklch(30.2% 0.056 229.695);\n\n  --color-sky-50: oklch(97.7% 0.013 236.62);\n  --color-sky-100: oklch(95.1% 0.026 236.824);\n  --color-sky-200: oklch(90.1% 0.058 230.902);\n  --color-sky-300: oklch(82.8% 0.111 230.318);\n  --color-sky-400: oklch(74.6% 0.16 232.661);\n  --color-sky-500: oklch(68.5% 0.169 237.323);\n  --color-sky-600: oklch(58.8% 0.158 241.966);\n  --color-sky-700: oklch(50% 0.134 242.749);\n  --color-sky-800: oklch(44.3% 0.11 240.79);\n  --color-sky-900: oklch(39.1% 0.09 240.876);\n  --color-sky-950: oklch(29.3% 0.066 243.157);\n\n  --color-blue-50: oklch(97% 0.014 254.604);\n  --color-blue-100: oklch(93.2% 0.032 255.585);\n  --color-blue-200: oklch(88.2% 0.059 254.128);\n  --color-blue-300: oklch(80.9% 0.105 251.813);\n  --color-blue-400: oklch(70.7% 0.165 254.624);\n  --color-blue-500: oklch(62.3% 0.214 259.815);\n  --color-blue-600: oklch(54.6% 0.245 262.881);\n  --color-blue-700: oklch(48.8% 0.243 264.376);\n  --color-blue-800: oklch(42.4% 0.199 265.638);\n  --color-blue-900: oklch(37.9% 0.146 265.522);\n  --color-blue-950: oklch(28.2% 0.091 267.935);\n\n  --color-indigo-50: oklch(96.2% 0.018 272.314);\n  --color-indigo-100: oklch(93% 0.034 272.788);\n  --color-indigo-200: oklch(87% 0.065 274.039);\n  --color-indigo-300: oklch(78.5% 0.115 274.713);\n  --color-indigo-400: oklch(67.3% 0.182 276.935);\n  --color-indigo-500: oklch(58.5% 0.233 277.117);\n  --color-indigo-600: oklch(51.1% 0.262 276.966);\n  --color-indigo-700: oklch(45.7% 0.24 277.023);\n  --color-indigo-800: oklch(39.8% 0.195 277.366);\n  --color-indigo-900: oklch(35.9% 0.144 278.697);\n  --color-indigo-950: oklch(25.7% 0.09 281.288);\n\n  --color-violet-50: oklch(96.9% 0.016 293.756);\n  --color-violet-100: oklch(94.3% 0.029 294.588);\n  --color-violet-200: oklch(89.4% 0.057 293.283);\n  --color-violet-300: oklch(81.1% 0.111 293.571);\n  --color-violet-400: oklch(70.2% 0.183 293.541);\n  --color-violet-500: oklch(60.6% 0.25 292.717);\n  --color-violet-600: oklch(54.1% 0.281 293.009);\n  --color-violet-700: oklch(49.1% 0.27 292.581);\n  --color-violet-800: oklch(43.2% 0.232 292.759);\n  --color-violet-900: oklch(38% 0.189 293.745);\n  --color-violet-950: oklch(28.3% 0.141 291.089);\n\n  --color-purple-50: oklch(97.7% 0.014 308.299);\n  --color-purple-100: oklch(94.6% 0.033 307.174);\n  --color-purple-200: oklch(90.2% 0.063 306.703);\n  --color-purple-300: oklch(82.7% 0.119 306.383);\n  --color-purple-400: oklch(71.4% 0.203 305.504);\n  --color-purple-500: oklch(62.7% 0.265 303.9);\n  --color-purple-600: oklch(55.8% 0.288 302.321);\n  --color-purple-700: oklch(49.6% 0.265 301.924);\n  --color-purple-800: oklch(43.8% 0.218 303.724);\n  --color-purple-900: oklch(38.1% 0.176 304.987);\n  --color-purple-950: oklch(29.1% 0.149 302.717);\n\n  --color-fuchsia-50: oklch(97.7% 0.017 320.058);\n  --color-fuchsia-100: oklch(95.2% 0.037 318.852);\n  --color-fuchsia-200: oklch(90.3% 0.076 319.62);\n  --color-fuchsia-300: oklch(83.3% 0.145 321.434);\n  --color-fuchsia-400: oklch(74% 0.238 322.16);\n  --color-fuchsia-500: oklch(66.7% 0.295 322.15);\n  --color-fuchsia-600: oklch(59.1% 0.293 322.896);\n  --color-fuchsia-700: oklch(51.8% 0.253 323.949);\n  --color-fuchsia-800: oklch(45.2% 0.211 324.591);\n  --color-fuchsia-900: oklch(40.1% 0.17 325.612);\n  --color-fuchsia-950: oklch(29.3% 0.136 325.661);\n\n  --color-pink-50: oklch(97.1% 0.014 343.198);\n  --color-pink-100: oklch(94.8% 0.028 342.258);\n  --color-pink-200: oklch(89.9% 0.061 343.231);\n  --color-pink-300: oklch(82.3% 0.12 346.018);\n  --color-pink-400: oklch(71.8% 0.202 349.761);\n  --color-pink-500: oklch(65.6% 0.241 354.308);\n  --color-pink-600: oklch(59.2% 0.249 0.584);\n  --color-pink-700: oklch(52.5% 0.223 3.958);\n  --color-pink-800: oklch(45.9% 0.187 3.815);\n  --color-pink-900: oklch(40.8% 0.153 2.432);\n  --color-pink-950: oklch(28.4% 0.109 3.907);\n\n  --color-rose-50: oklch(96.9% 0.015 12.422);\n  --color-rose-100: oklch(94.1% 0.03 12.58);\n  --color-rose-200: oklch(89.2% 0.058 10.001);\n  --color-rose-300: oklch(81% 0.117 11.638);\n  --color-rose-400: oklch(71.2% 0.194 13.428);\n  --color-rose-500: oklch(64.5% 0.246 16.439);\n  --color-rose-600: oklch(58.6% 0.253 17.585);\n  --color-rose-700: oklch(51.4% 0.222 16.935);\n  --color-rose-800: oklch(45.5% 0.188 13.697);\n  --color-rose-900: oklch(41% 0.159 10.272);\n  --color-rose-950: oklch(27.1% 0.105 12.094);\n\n  --color-slate-50: oklch(98.4% 0.003 247.858);\n  --color-slate-100: oklch(96.8% 0.007 247.896);\n  --color-slate-200: oklch(92.9% 0.013 255.508);\n  --color-slate-300: oklch(86.9% 0.022 252.894);\n  --color-slate-400: oklch(70.4% 0.04 256.788);\n  --color-slate-500: oklch(55.4% 0.046 257.417);\n  --color-slate-600: oklch(44.6% 0.043 257.281);\n  --color-slate-700: oklch(37.2% 0.044 257.287);\n  --color-slate-800: oklch(27.9% 0.041 260.031);\n  --color-slate-900: oklch(20.8% 0.042 265.755);\n  --color-slate-950: oklch(12.9% 0.042 264.695);\n\n  --color-gray-50: oklch(98.5% 0.002 247.839);\n  --color-gray-100: oklch(96.7% 0.003 264.542);\n  --color-gray-200: oklch(92.8% 0.006 264.531);\n  --color-gray-300: oklch(87.2% 0.01 258.338);\n  --color-gray-400: oklch(70.7% 0.022 261.325);\n  --color-gray-500: oklch(55.1% 0.027 264.364);\n  --color-gray-600: oklch(44.6% 0.03 256.802);\n  --color-gray-700: oklch(37.3% 0.034 259.733);\n  --color-gray-800: oklch(27.8% 0.033 256.848);\n  --color-gray-900: oklch(21% 0.034 264.665);\n  --color-gray-950: oklch(13% 0.028 261.692);\n\n  --color-zinc-50: oklch(98.5% 0 0);\n  --color-zinc-100: oklch(96.7% 0.001 286.375);\n  --color-zinc-200: oklch(92% 0.004 286.32);\n  --color-zinc-300: oklch(87.1% 0.006 286.286);\n  --color-zinc-400: oklch(70.5% 0.015 286.067);\n  --color-zinc-500: oklch(55.2% 0.016 285.938);\n  --color-zinc-600: oklch(44.2% 0.017 285.786);\n  --color-zinc-700: oklch(37% 0.013 285.805);\n  --color-zinc-800: oklch(27.4% 0.006 286.033);\n  --color-zinc-900: oklch(21% 0.006 285.885);\n  --color-zinc-950: oklch(14.1% 0.005 285.823);\n\n  --color-neutral-50: oklch(98.5% 0 0);\n  --color-neutral-100: oklch(97% 0 0);\n  --color-neutral-200: oklch(92.2% 0 0);\n  --color-neutral-300: oklch(87% 0 0);\n  --color-neutral-400: oklch(70.8% 0 0);\n  --color-neutral-500: oklch(55.6% 0 0);\n  --color-neutral-600: oklch(43.9% 0 0);\n  --color-neutral-700: oklch(37.1% 0 0);\n  --color-neutral-800: oklch(26.9% 0 0);\n  --color-neutral-900: oklch(20.5% 0 0);\n  --color-neutral-950: oklch(14.5% 0 0);\n\n  --color-stone-50: oklch(98.5% 0.001 106.423);\n  --color-stone-100: oklch(97% 0.001 106.424);\n  --color-stone-200: oklch(92.3% 0.003 48.717);\n  --color-stone-300: oklch(86.9% 0.005 56.366);\n  --color-stone-400: oklch(70.9% 0.01 56.259);\n  --color-stone-500: oklch(55.3% 0.013 58.071);\n  --color-stone-600: oklch(44.4% 0.011 73.639);\n  --color-stone-700: oklch(37.4% 0.01 67.558);\n  --color-stone-800: oklch(26.8% 0.007 34.298);\n  --color-stone-900: oklch(21.6% 0.006 56.043);\n  --color-stone-950: oklch(14.7% 0.004 49.25);\n\n  --color-mauve-50: oklch(98.5% 0 0);\n  --color-mauve-100: oklch(96% 0.003 325.6);\n  --color-mauve-200: oklch(92.2% 0.005 325.62);\n  --color-mauve-300: oklch(86.5% 0.012 325.68);\n  --color-mauve-400: oklch(71.1% 0.019 323.02);\n  --color-mauve-500: oklch(54.2% 0.034 322.5);\n  --color-mauve-600: oklch(43.5% 0.029 321.78);\n  --color-mauve-700: oklch(36.4% 0.029 323.89);\n  --color-mauve-800: oklch(26.3% 0.024 320.12);\n  --color-mauve-900: oklch(21.2% 0.019 322.12);\n  --color-mauve-950: oklch(14.5% 0.008 326);\n\n  --color-olive-50: oklch(98.8% 0.003 106.5);\n  --color-olive-100: oklch(96.6% 0.005 106.5);\n  --color-olive-200: oklch(93% 0.007 106.5);\n  --color-olive-300: oklch(88% 0.011 106.6);\n  --color-olive-400: oklch(73.7% 0.021 106.9);\n  --color-olive-500: oklch(58% 0.031 107.3);\n  --color-olive-600: oklch(46.6% 0.025 107.3);\n  --color-olive-700: oklch(39.4% 0.023 107.4);\n  --color-olive-800: oklch(28.6% 0.016 107.4);\n  --color-olive-900: oklch(22.8% 0.013 107.4);\n  --color-olive-950: oklch(15.3% 0.006 107.1);\n\n  --color-mist-50: oklch(98.7% 0.002 197.1);\n  --color-mist-100: oklch(96.3% 0.002 197.1);\n  --color-mist-200: oklch(92.5% 0.005 214.3);\n  --color-mist-300: oklch(87.2% 0.007 219.6);\n  --color-mist-400: oklch(72.3% 0.014 214.4);\n  --color-mist-500: oklch(56% 0.021 213.5);\n  --color-mist-600: oklch(45% 0.017 213.2);\n  --color-mist-700: oklch(37.8% 0.015 216);\n  --color-mist-800: oklch(27.5% 0.011 216.9);\n  --color-mist-900: oklch(21.8% 0.008 223.9);\n  --color-mist-950: oklch(14.8% 0.004 228.8);\n\n  --color-taupe-50: oklch(98.6% 0.002 67.8);\n  --color-taupe-100: oklch(96% 0.002 17.2);\n  --color-taupe-200: oklch(92.2% 0.005 34.3);\n  --color-taupe-300: oklch(86.8% 0.007 39.5);\n  --color-taupe-400: oklch(71.4% 0.014 41.2);\n  --color-taupe-500: oklch(54.7% 0.021 43.1);\n  --color-taupe-600: oklch(43.8% 0.017 39.3);\n  --color-taupe-700: oklch(36.7% 0.016 35.7);\n  --color-taupe-800: oklch(26.8% 0.011 36.5);\n  --color-taupe-900: oklch(21.4% 0.009 43.1);\n  --color-taupe-950: oklch(14.7% 0.004 49.3);\n\n  --color-black: #000;\n  --color-white: #fff;\n\n  --spacing: 0.25rem;\n\n  --breakpoint-sm: 40rem;\n  --breakpoint-md: 48rem;\n  --breakpoint-lg: 64rem;\n  --breakpoint-xl: 80rem;\n  --breakpoint-2xl: 96rem;\n\n  --container-3xs: 16rem;\n  --container-2xs: 18rem;\n  --container-xs: 20rem;\n  --container-sm: 24rem;\n  --container-md: 28rem;\n  --container-lg: 32rem;\n  --container-xl: 36rem;\n  --container-2xl: 42rem;\n  --container-3xl: 48rem;\n  --container-4xl: 56rem;\n  --container-5xl: 64rem;\n  --container-6xl: 72rem;\n  --container-7xl: 80rem;\n\n  --text-xs: 0.75rem;\n  --text-xs--line-height: calc(1 / 0.75);\n  --text-sm: 0.875rem;\n  --text-sm--line-height: calc(1.25 / 0.875);\n  --text-base: 1rem;\n  --text-base--line-height: calc(1.5 / 1);\n  --text-lg: 1.125rem;\n  --text-lg--line-height: calc(1.75 / 1.125);\n  --text-xl: 1.25rem;\n  --text-xl--line-height: calc(1.75 / 1.25);\n  --text-2xl: 1.5rem;\n  --text-2xl--line-height: calc(2 / 1.5);\n  --text-3xl: 1.875rem;\n  --text-3xl--line-height: calc(2.25 / 1.875);\n  --text-4xl: 2.25rem;\n  --text-4xl--line-height: calc(2.5 / 2.25);\n  --text-5xl: 3rem;\n  --text-5xl--line-height: 1;\n  --text-6xl: 3.75rem;\n  --text-6xl--line-height: 1;\n  --text-7xl: 4.5rem;\n  --text-7xl--line-height: 1;\n  --text-8xl: 6rem;\n  --text-8xl--line-height: 1;\n  --text-9xl: 8rem;\n  --text-9xl--line-height: 1;\n\n  --font-weight-thin: 100;\n  --font-weight-extralight: 200;\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semibold: 600;\n  --font-weight-bold: 700;\n  --font-weight-extrabold: 800;\n  --font-weight-black: 900;\n\n  --tracking-tighter: -0.05em;\n  --tracking-tight: -0.025em;\n  --tracking-normal: 0em;\n  --tracking-wide: 0.025em;\n  --tracking-wider: 0.05em;\n  --tracking-widest: 0.1em;\n\n  --leading-tight: 1.25;\n  --leading-snug: 1.375;\n  --leading-normal: 1.5;\n  --leading-relaxed: 1.625;\n  --leading-loose: 2;\n\n  --radius-xs: 0.125rem;\n  --radius-sm: 0.25rem;\n  --radius-md: 0.375rem;\n  --radius-lg: 0.5rem;\n  --radius-xl: 0.75rem;\n  --radius-2xl: 1rem;\n  --radius-3xl: 1.5rem;\n  --radius-4xl: 2rem;\n\n  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);\n  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n\n  --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);\n  --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);\n  --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);\n\n  --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);\n  --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);\n  --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);\n  --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);\n  --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);\n  --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);\n\n  --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);\n  --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);\n  --text-shadow-sm:\n    0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075);\n  --text-shadow-md:\n    0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1);\n  --text-shadow-lg:\n    0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1);\n\n  --ease-in: cubic-bezier(0.4, 0, 1, 1);\n  --ease-out: cubic-bezier(0, 0, 0.2, 1);\n  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n\n  --animate-spin: spin 1s linear infinite;\n  --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --animate-bounce: bounce 1s infinite;\n\n  @keyframes spin {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes ping {\n    75%,\n    100% {\n      transform: scale(2);\n      opacity: 0;\n    }\n  }\n\n  @keyframes pulse {\n    50% {\n      opacity: 0.5;\n    }\n  }\n\n  @keyframes bounce {\n    0%,\n    100% {\n      transform: translateY(-25%);\n      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n    }\n\n    50% {\n      transform: none;\n      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    }\n  }\n\n  --blur-xs: 4px;\n  --blur-sm: 8px;\n  --blur-md: 12px;\n  --blur-lg: 16px;\n  --blur-xl: 24px;\n  --blur-2xl: 40px;\n  --blur-3xl: 64px;\n\n  --perspective-dramatic: 100px;\n  --perspective-near: 300px;\n  --perspective-normal: 500px;\n  --perspective-midrange: 800px;\n  --perspective-distant: 1200px;\n\n  --aspect-video: 16 / 9;\n\n  --default-transition-duration: 150ms;\n  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  --default-font-family: --theme(--font-sans, initial);\n  --default-font-feature-settings: --theme(--font-sans--font-feature-settings, initial);\n  --default-font-variation-settings: --theme(--font-sans--font-variation-settings, initial);\n  --default-mono-font-family: --theme(--font-mono, initial);\n  --default-mono-font-feature-settings: --theme(--font-mono--font-feature-settings, initial);\n  --default-mono-font-variation-settings: --theme(--font-mono--font-variation-settings, initial);\n}\n\n/* Deprecated */\n@theme default inline reference {\n  --blur: 8px;\n  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n  --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);\n  --radius: 0.25rem;\n  --max-width-prose: 65ch;\n}\n";

  // node_modules/tailwindcss/preflight.css
  var preflight_default = "/*\n  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n  2. Remove default margins and padding\n  3. Reset all borders.\n*/\n\n*,\n::after,\n::before,\n::backdrop,\n::file-selector-button {\n  box-sizing: border-box; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 2 */\n  border: 0 solid; /* 3 */\n}\n\n/*\n  1. Use a consistent sensible line-height in all browsers.\n  2. Prevent adjustments of font size after orientation changes in iOS.\n  3. Use a more readable tab size.\n  4. Use the user's configured `sans` font-family by default.\n  5. Use the user's configured `sans` font-feature-settings by default.\n  6. Use the user's configured `sans` font-variation-settings by default.\n  7. Disable tap highlights on iOS.\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  tab-size: 4; /* 3 */\n  font-family: --theme(\n    --default-font-family,\n    ui-sans-serif,\n    system-ui,\n    sans-serif,\n    'Apple Color Emoji',\n    'Segoe UI Emoji',\n    'Segoe UI Symbol',\n    'Noto Color Emoji'\n  ); /* 4 */\n  font-feature-settings: --theme(--default-font-feature-settings, normal); /* 5 */\n  font-variation-settings: --theme(--default-font-variation-settings, normal); /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n  1. Add the correct height in Firefox.\n  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n  3. Reset the default border style to a 1px solid border.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\n  Add the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\n\n/*\n  Remove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\n  Reset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  -webkit-text-decoration: inherit;\n  text-decoration: inherit;\n}\n\n/*\n  Add the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n  1. Use the user's configured `mono` font-family by default.\n  2. Use the user's configured `mono` font-feature-settings by default.\n  3. Use the user's configured `mono` font-variation-settings by default.\n  4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: --theme(\n    --default-mono-font-family,\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    'Liberation Mono',\n    'Courier New',\n    monospace\n  ); /* 1 */\n  font-feature-settings: --theme(--default-mono-font-feature-settings, normal); /* 2 */\n  font-variation-settings: --theme(--default-mono-font-variation-settings, normal); /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\n  Add the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\n  Prevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n  3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n  Use the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\n  Add the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\n  Add the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\n  Make lists unstyled by default.\n*/\n\nol,\nul,\nmenu {\n  list-style: none;\n}\n\n/*\n  1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n  2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n      This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\n  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\n  1. Inherit font styles in all browsers.\n  2. Remove border radius in all browsers.\n  3. Remove background color in all browsers.\n  4. Ensure consistent opacity for disabled states in all browsers.\n*/\n\nbutton,\ninput,\nselect,\noptgroup,\ntextarea,\n::file-selector-button {\n  font: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  border-radius: 0; /* 2 */\n  background-color: transparent; /* 3 */\n  opacity: 1; /* 4 */\n}\n\n/*\n  Restore default font weight.\n*/\n\n:where(select:is([multiple], [size])) optgroup {\n  font-weight: bolder;\n}\n\n/*\n  Restore indentation.\n*/\n\n:where(select:is([multiple], [size])) optgroup option {\n  padding-inline-start: 20px;\n}\n\n/*\n  Restore space after button.\n*/\n\n::file-selector-button {\n  margin-inline-end: 4px;\n}\n\n/*\n  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n*/\n\n::placeholder {\n  opacity: 1;\n}\n\n/*\n  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not\n  crash when using `color-mix(\u2026)` with `currentcolor`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)\n*/\n\n@supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or\n  (contain-intrinsic-size: 1px) /* Safari 17+ */ {\n  ::placeholder {\n    color: color-mix(in oklab, currentcolor 50%, transparent);\n  }\n}\n\n/*\n  Prevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n  Remove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n  1. Ensure date/time inputs have the same height when empty in iOS Safari.\n  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.\n*/\n\n::-webkit-date-and-time-value {\n  min-height: 1lh; /* 1 */\n  text-align: inherit; /* 2 */\n}\n\n/*\n  Prevent height from changing on date/time inputs in macOS Safari when the input is set to `display: block`.\n*/\n\n::-webkit-datetime-edit {\n  display: inline-flex;\n}\n\n/*\n  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.\n*/\n\n::-webkit-datetime-edit-fields-wrapper {\n  padding: 0;\n}\n\n::-webkit-datetime-edit,\n::-webkit-datetime-edit-year-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-minute-field,\n::-webkit-datetime-edit-second-field,\n::-webkit-datetime-edit-millisecond-field,\n::-webkit-datetime-edit-meridiem-field {\n  padding-block: 0;\n}\n\n/*\n  Center dropdown marker shown on inputs with paired `<datalist>`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)\n*/\n\n::-webkit-calendar-picker-indicator {\n  line-height: 1;\n}\n\n/*\n  Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\n  Correct the inability to style the border radius in iOS Safari.\n*/\n\nbutton,\ninput:where([type='button'], [type='reset'], [type='submit']),\n::file-selector-button {\n  appearance: button;\n}\n\n/*\n  Correct the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n  Make elements with the HTML hidden attribute stay hidden by default.\n*/\n\n[hidden]:where(:not([hidden='until-found'])) {\n  display: none !important;\n}\n";

  // node_modules/tailwindcss/utilities.css
  var utilities_default = "@tailwind utilities;\n";

  // entry.ts
  var EMBEDDED_BASE = "//tailwindcss";
  var EMBEDDED = {
    "index.css": tailwindcss_default,
    "theme.css": theme_default,
    "preflight.css": preflight_default,
    "utilities.css": utilities_default
  };
  function resolveEmbedded(id, base) {
    if (id === "tailwindcss") return "index.css";
    if (id.startsWith("tailwindcss/")) return id.slice("tailwindcss/".length);
    if (base === EMBEDDED_BASE) return id.replace(/^\.\//, "");
    return null;
  }
  globalThis.__twMeta = { tailwind: "4.3.1", entrySha: "b8069c81b1b5fd49880cd73f742104d10a0aafbe74d78a8eefab6437ee337bc5" };
  globalThis.__tw = { design: null, error: null, ready: false, warnings: [] };
  globalThis.__twInit = function(userCss) {
    Rf(userCss, {
      base: "//app",
      // Plugins aren't needed for sorting - mirror v1's empty-module tolerance
      loadModule: async (id, base) => ({ path: id, base, module: {} }),
      loadStylesheet: async (id, base) => {
        const key = resolveEmbedded(id, base);
        if (key !== null && EMBEDDED[key] !== void 0) {
          return { path: key, base: EMBEDDED_BASE, content: EMBEDDED[key] };
        }
        globalThis.__tw.warnings.push(`unresolved stylesheet: ${id} (base ${base})`);
        return { path: id, base, content: "" };
      }
    }).then((design) => {
      globalThis.__tw.design = design;
      globalThis.__tw.ready = true;
    }).catch((error) => {
      globalThis.__tw.error = String(error instanceof Error ? error.stack ?? error : error);
    });
  };
  function bigSign(value) {
    return Number(value > 0n) - Number(value < 0n);
  }
  globalThis.__twSort = function(classString) {
    const design = globalThis.__tw.design;
    if (design === null) throw new Error("design system not initialized - call __twInit first");
    const classes = classString.split(/\s+/).filter(Boolean);
    const ordered = design.getClassOrder(classes);
    ordered.sort(([, a2], [, z2]) => {
      if (a2 === z2) return 0;
      if (a2 === null) return -1;
      if (z2 === null) return 1;
      return bigSign(a2 - z2);
    });
    const seen = /* @__PURE__ */ new Set();
    const result = [];
    for (const [cls, order] of ordered) {
      if (seen.has(cls)) continue;
      if (order !== null) seen.add(cls);
      result.push(cls);
    }
    return result.join(" ");
  };
  globalThis.__twSortBatch = function(jsonArray) {
    const strings = JSON.parse(jsonArray);
    return JSON.stringify(strings.map((s) => globalThis.__twSort(s)));
  };
})();
