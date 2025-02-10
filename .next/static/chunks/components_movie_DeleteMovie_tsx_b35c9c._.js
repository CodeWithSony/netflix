(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_movie_DeleteMovie_tsx_b35c9c._.js", {

"[project]/components/movie/DeleteMovie.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$cjs$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-data-table-component/dist/index.cjs.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/moment/moment.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$PencilIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilIcon$3e$__ = __turbopack_import__("[project]/node_modules/@heroicons/react/24/solid/esm/PencilIcon.js [client] (ecmascript) <export default as PencilIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$TrashIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__ = __turbopack_import__("[project]/node_modules/@heroicons/react/24/solid/esm/TrashIcon.js [client] (ecmascript) <export default as TrashIcon>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
const AdminPage = ()=>{
    _s();
    const [movies, setMovies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [videos, setVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            const fetchMovies = {
                "AdminPage.useEffect.fetchMovies": async ()=>{
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].get("/api/movies");
                        setMovies(res.data);
                    } catch (err) {
                        setError("Error fetching movies.");
                    } finally{
                        setLoading(false);
                    }
                }
            }["AdminPage.useEffect.fetchMovies"];
            fetchMovies();
            fetchVideos();
        }
    }["AdminPage.useEffect"], []);
    const fetchVideos = async ()=>{
        try {
            const response = await fetch("/api/get-videos");
            const data = await response.json();
            if (response.ok) {
                setVideos(data.videos);
            } else {
                setError(data.error || "Failed to fetch videos");
            }
        } catch (err) {
            setError("Error fetching videos");
        } finally{
            setLoading(false);
        }
    };
    const formatCurrancy = (value)=>{
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(value);
    };
    const handleDelete = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].delete(`/api/movies?id=${id}`);
            setMovies((prevMovies)=>prevMovies.filter((movie)=>movie._id !== id));
        } catch (err) {
            console.error("Error deleting movie:", err);
            alert("Error deleting movie. Please try again.");
        }
    };
    const handleEdit = (id)=>{
        router.push(`/edit/${id}`);
    };
    const columns = [
        {
            name: "Movie Name",
            selector: (row)=>row.name,
            sortable: true,
            wrap: true,
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-left",
                    children: row.name
                }, void 0, false, {
                    fileName: "[project]/components/movie/DeleteMovie.tsx",
                    lineNumber: 92,
                    columnNumber: 31
                }, this)
        },
        {
            name: "Singer",
            selector: (row)=>row.singer.join(", "),
            sortable: true,
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-left",
                    children: row.singer.join(", ")
                }, void 0, false, {
                    fileName: "[project]/components/movie/DeleteMovie.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
        },
        {
            name: "Cast",
            selector: (row)=>row.cast.join(", "),
            sortable: true,
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-left",
                    children: row.cast.join(", ")
                }, void 0, false, {
                    fileName: "[project]/components/movie/DeleteMovie.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
        },
        {
            name: "Release Date",
            selector: (row)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(row.releaseDate).format("DD-MM-YYYY"),
            sortable: true,
            wrap: true,
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-left",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(row.releaseDate).format("DD-MM-YYYY")
                }, void 0, false, {
                    fileName: "[project]/components/movie/DeleteMovie.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
        },
        {
            name: "Budget",
            sortable: true,
            right: true,
            wrap: true,
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-left",
                    children: formatCurrancy(row.budget)
                }, void 0, false, {
                    fileName: "[project]/components/movie/DeleteMovie.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
        },
        {
            name: "Actions",
            selector: (row)=>row._id,
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row gap-2 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex-1 sm:flex-auto min-w-[40px] px-2 py-1 bg-white text-gray-800 rounded-md border border-gray-300   hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900   transition-colors duration-200 flex items-center justify-center",
                            onClick: ()=>handleEdit(row._id),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$PencilIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilIcon$3e$__["PencilIcon"], {
                                className: "mr-1 text-green-500 h-7 w-8"
                            }, void 0, false, {
                                fileName: "[project]/components/movie/DeleteMovie.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/movie/DeleteMovie.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex-1 sm:flex-auto min-w-[40px] px-2 py-1 bg-white text-gray-800 rounded-md border border-gray-300   hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900   transition-colors duration-200 flex items-center justify-center",
                            onClick: ()=>handleDelete(row._id),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$TrashIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__["TrashIcon"], {
                                className: "mr-1 text-red-500 h-8 w-8"
                            }, void 0, false, {
                                fileName: "[project]/components/movie/DeleteMovie.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/movie/DeleteMovie.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/movie/DeleteMovie.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
        }
    ];
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/components/movie/DeleteMovie.tsx",
            lineNumber: 158,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: error
        }, void 0, false, {
            fileName: "[project]/components/movie/DeleteMovie.tsx",
            lineNumber: 162,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-3 p-4 bg-white rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-semibold text-blue-900",
                children: "Manage Movies"
            }, void 0, false, {
                fileName: "[project]/components/movie/DeleteMovie.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$cjs$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                columns: columns,
                data: movies,
                pagination: true,
                responsive: true,
                progressPending: loading,
                paginationRowsPerPageOptions: [
                    10,
                    20,
                    30,
                    40,
                    50
                ]
            }, void 0, false, {
                fileName: "[project]/components/movie/DeleteMovie.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/movie/DeleteMovie.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
};
_s(AdminPage, "9qFPebvlqBUmZ034iZsLrygEkYA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminPage;
const __TURBOPACK__default__export__ = AdminPage;
var _c;
__turbopack_refresh__.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_movie_DeleteMovie_tsx_b35c9c._.js.map