const CHUNK_PUBLIC_PATH = "server/pages/test.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_f78c58._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__46702f._.js");
runtime.loadChunk("server/chunks/ssr/styles_globals_ff5908.css");
runtime.loadChunk("server/chunks/ssr/components_movie_a1c719._.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/pages/admin/[tab].js [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/node_modules/next/document.js [ssr] (ecmascript)\", INNER_APP => \"[project]/pages/_app.tsx [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
