(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_61986f._.js", {

"[project]/styles/dataTableStyles.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const dataTableStyles = {
    table: {
        className: "min-w-full divide-y divide-gray-200 bg-white",
        textAlign: "left"
    },
    header: {
        className: "bg-gray-100",
        style: {
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderTopColor: "rgba(0, 0, 0, 0.1)",
            borderBottomColor: "rgba(0, 0, 0, 0.1)"
        }
    },
    headRow: {
        style: {
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderTopColor: "rgba(0, 0, 0, 0.1)",
            borderBottomColor: "rgba(0, 0, 0, 0.1)"
        }
    },
    headCells: {
        style: {
            paddingLeft: "0.35rem",
            paddingRight: "0.35rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            fontWeight: "bold",
            lineHeight: "1.25rem",
            letterSpacing: "0.05em",
            textTransform: "capitalize",
            color: "#273342",
            textAlign: "left",
            position: "sticky",
            top: 0,
            width: "113px",
            backgroundColor: "#f4f4f4",
            zIndex: 1
        }
    },
    rows: {
        style: {
            cursor: "pointer",
            transition: "background-color 0.3s ease"
        }
    },
    cells: {
        style: {
            paddingLeft: "0.35rem",
            paddingRight: "0.35rem",
            width: "113px",
            paddingTop: "0.35rem",
            paddingBottom: "0.35rem",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            color: "#273342",
            textAlign: "left"
        }
    },
    pagination: {
        style: {
            borderTopWidth: "1px",
            borderTopColor: "rgba(0, 0, 0, 0.1)"
        },
        pageButtonsStyle: {
            padding: "0.375rem 0.5rem",
            borderRadius: "0.375rem",
            background: "#E5E7EB",
            color: "#4B5563",
            marginLeft: "0.25rem",
            marginRight: "0.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background-color 0.3s ease"
        },
        activePageButtonStyle: {
            background: "#6B7280",
            color: "#FFFFFF"
        },
        disabledPageButtonStyle: {
            background: "transparent",
            color: "#4B5563",
            cursor: "not-allowed"
        },
        pageInfoStyle: {
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            color: "#6B7280",
            marginLeft: "0.5rem"
        }
    },
    paginationButtonIcon: {
        style: {
            marginLeft: "0.25rem",
            width: "1rem",
            height: "1rem",
            fill: "#4B5563"
        }
    }
};
const __TURBOPACK__default__export__ = dataTableStyles;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/movie/DeleteMovie.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$cjs$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-data-table-component/dist/index.cjs.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$dataTableStyles$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/styles/dataTableStyles.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/moment/moment.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$PencilIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilIcon$3e$__ = __turbopack_import__("[project]/node_modules/@heroicons/react/24/solid/esm/PencilIcon.js [client] (ecmascript) <export default as PencilIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$TrashIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__ = __turbopack_import__("[project]/node_modules/@heroicons/react/24/solid/esm/TrashIcon.js [client] (ecmascript) <export default as TrashIcon>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
const { id } = router.query; // Get the movie ID from the URL
const DeleteMovie = ()=>{
    _s();
    const [movies, setMovies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isExpenceLoading, setisExpenceLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeleteMovie.useEffect": ()=>{
            fetchMovies();
        }
    }["DeleteMovie.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeleteMovie.useEffect": ()=>{
            const fetchMovie = {
                "DeleteMovie.useEffect.fetchMovie": async ()=>{
                    if (!id) return;
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].get(`/api/movies?id=${id}`);
                        setMovies(response.data);
                        setLoading(false);
                    } catch (error) {
                        console.error("Error fetching movie:", error);
                        setLoading(false);
                    }
                }
            }["DeleteMovie.useEffect.fetchMovie"];
            fetchMovie();
        }
    }["DeleteMovie.useEffect"], [
        id
    ]);
    const DATE_FORMATS = {
        DAY_MONTH_YEAR: "DD-MM-YYYY"
    };
    const formatCurrancy = (value)=>{
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(value);
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
                    lineNumber: 70,
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
                    lineNumber: 77,
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
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
        },
        {
            name: "Release Date",
            selector: (row)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(row.releaseDate).format(DATE_FORMATS.DAY_MONTH_YEAR),
            sortable: true,
            wrap: true,
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-left",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(row.releaseDate).format(DATE_FORMATS.DAY_MONTH_YEAR)
                }, void 0, false, {
                    fileName: "[project]/components/movie/DeleteMovie.tsx",
                    lineNumber: 95,
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
                    lineNumber: 106,
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
                            className: "flex-1 sm:flex-auto min-w-[40px] px-2 py-1 bg-white text-gray-800 rounded-md border border-gray-300    hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900    transition-colors duration-200 flex items-center justify-center",
                            onClick: ()=>handleEdit(row._id),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$PencilIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilIcon$3e$__["PencilIcon"], {
                                className: "mr-1 text-green-500 h-7 w-8"
                            }, void 0, false, {
                                fileName: "[project]/components/movie/DeleteMovie.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/movie/DeleteMovie.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex-1 sm:flex-auto min-w-[40px] px-2 py-1 bg-white text-gray-800 rounded-md border border-gray-300    hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900    transition-colors duration-200 flex items-center justify-center",
                            onClick: ()=>handleDelete(row._id),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$TrashIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__["TrashIcon"], {
                                className: "mr-1 text-red-500 h-8 w-8"
                            }, void 0, false, {
                                fileName: "[project]/components/movie/DeleteMovie.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/movie/DeleteMovie.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/movie/DeleteMovie.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
        }
    ];
    const handleDelete = async (id)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].delete(`/api/movies?id=${id}`);
            if (response.status === 200) {
                setMovies(movies.filter((movie)=>movie._id !== id));
            } else {
                alert("Failed to delete movie.");
            }
        } catch (error) {
            console.error("Error deleting movie:", error);
            alert("Error deleting movie. Please try again.");
        }
    };
    const handleEdit = (id)=>{
        console.log("edting..", id);
        // console.log("Router:", router);
        router.push(`/edit/${id}`);
    // console.log("Router:", router);
    };
    const fetchMovies = async ()=>{
        try {
            const res = await fetch("/api/movies");
            if (res.ok) {
                const data = await res.json();
                setMovies(data);
            } else {
                setError("Failed to load movies.");
            }
        } catch (error) {
            setError("Error fetching movies.");
        } finally{
            setLoading(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/components/movie/DeleteMovie.tsx",
            lineNumber: 176,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: error
        }, void 0, false, {
            fileName: "[project]/components/movie/DeleteMovie.tsx",
            lineNumber: 180,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-3 p-4 bg-white rounded-lg    ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-semibold text-blue-900",
                children: "Expenses"
            }, void 0, false, {
                fileName: "[project]/components/movie/DeleteMovie.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$cjs$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                columns: columns,
                data: movies,
                pagination: true,
                paginationServer: true,
                responsive: true,
                customStyles: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$dataTableStyles$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
                progressPending: isExpenceLoading,
                // paginationTotalRows={totalRows}
                // onChangePage={handlePageChange}
                // onChangeRowsPerPage={handlePerRowsChange}
                paginationRowsPerPageOptions: [
                    10,
                    20,
                    30,
                    40,
                    50
                ]
            }, void 0, false, {
                fileName: "[project]/components/movie/DeleteMovie.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/movie/DeleteMovie.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
};
_s(DeleteMovie, "GpvYkTim2bEGlJaAIad5C5gCcYk=");
_c = DeleteMovie;
const __TURBOPACK__default__export__ = DeleteMovie;
var _c;
__turbopack_refresh__.register(_c, "DeleteMovie");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_61986f._.js.map