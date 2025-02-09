module.exports = {

"[project]/components/movie/DeleteMovie.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// import React from "react";
// import DataTable from "react-data-table-component";
// import dataTableStyles from "../../styles/dataTableStyles";
// import { useEffect, useState } from "react";
// import { PencilIcon, XCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
// import moment from "moment";
// import { useRouter } from "next/router";
// import axios from "axios";
// const router = useRouter();
// const { id } = router.query; // Get the movie ID from the URL
// const DeleteMovie = () => {
//   interface RowData {
//     _id: string;
//     name: string;
//     singer: string[];
//     cast: string[];
//     releaseDate: string;
//     budget: number;
//   }
//   const [movies, setMovies] = useState<RowData[]>([]);
//   const [isExpenceLoading, setisExpenceLoading] = useState(false);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState<string>("");
//   useEffect(() => {
//     fetchMovies();
//   }, []);
//   useEffect(() => {
//     const fetchMovie = async () => {
//       if (!id) return;
//       try {
//         const response = await axios.get(`/api/movies?id=${id}`);
//         setMovies(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching movie:", error);
//         setLoading(false);
//       }
//     };
//     fetchMovie();
//   }, [id]);
//   const DATE_FORMATS = {
//     DAY_MONTH_YEAR: "DD-MM-YYYY",
//   };
//   const formatCurrancy = (value: number): string => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(value);
//   };
//   const columns = [
//     {
//       name: "Movie Name",
//       selector: (row: RowData) => row.name,
//       sortable: true,
//       wrap: true,
//       cell: (row: RowData) => <span className="text-left">{row.name}</span>,
//     },
//     {
//       name: "Singer",
//       selector: (row: RowData) => row.singer.join(", "), //
//       sortable: true,
//       cell: (row: RowData) => (
//         <span className="text-left">{row.singer.join(", ")}</span>
//       ),
//     },
//     {
//       name: "Cast",
//       selector: (row: RowData) => row.cast.join(", "), //
//       sortable: true,
//       cell: (row: RowData) => (
//         <span className="text-left">{row.cast.join(", ")}</span>
//       ),
//     },
//     {
//       name: "Release Date",
//       selector: (row: RowData) =>
//         moment(row.releaseDate).format(DATE_FORMATS.DAY_MONTH_YEAR),
//       sortable: true,
//       wrap: true,
//       cell: (row: RowData) => (
//         <span className="text-left">
//           {moment(row.releaseDate).format(DATE_FORMATS.DAY_MONTH_YEAR)}
//         </span>
//       ),
//     },
//     {
//       name: "Budget",
//       sortable: true,
//       right: true,
//       wrap: true,
//       cell: (row: RowData) => (
//         <span className="text-left">{formatCurrancy(row.budget)}</span>
//       ),
//     },
//     {
//       name: "Actions",
//       selector: (row: RowData) => row._id,
//       cell: (row: RowData) => (
//         <div className="flex flex-col sm:flex-row gap-2 text-xs">
//           <button
//             className="flex-1 sm:flex-auto min-w-[40px] px-2 py-1 bg-white text-gray-800 rounded-md border border-gray-300
//                              hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900
//                              transition-colors duration-200 flex items-center justify-center"
//             onClick={() => handleEdit(row._id)}
//           >
//             <PencilIcon className="mr-1 text-green-500 h-7 w-8" />
//           </button>
//           <button
//             className="flex-1 sm:flex-auto min-w-[40px] px-2 py-1 bg-white text-gray-800 rounded-md border border-gray-300
//                              hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900
//                              transition-colors duration-200 flex items-center justify-center"
//             onClick={() => handleDelete(row._id)}
//           >
//             <TrashIcon className="mr-1 text-red-500 h-8 w-8" />
//           </button>
//         </div>
//       ),
//     },
//   ];
//   const handleDelete = async (id: string) => {
//     try {
//       const response = await axios.delete(`/api/movies?id=${id}`);
//       if (response.status === 200) {
//         setMovies(movies.filter((movie) => movie._id !== id));
//       } else {
//         alert("Failed to delete movie.");
//       }
//     } catch (error) {
//       console.error("Error deleting movie:", error);
//       alert("Error deleting movie. Please try again.");
//     }
//   };
//   const handleEdit = (id: string) => {
//     console.log("edting..", id);
//     // console.log("Router:", router);
//     router.push(`/edit/${id}`);
//     // console.log("Router:", router);
//   };
//   const fetchMovies = async () => {
//     try {
//       const res = await fetch("/api/movies");
//       if (res.ok) {
//         const data = await res.json();
//         setMovies(data);
//       } else {
//         setError("Failed to load movies.");
//       }
//     } catch (error) {
//       setError("Error fetching movies.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>{error}</div>;
//   }
// };
// export default DeleteMovie;
__turbopack_esm__({
    "default": (()=>AdminPage)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_import__("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_import__("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [ssr] (ecmascript)");
"use client";
;
;
;
function AdminPage() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        name: "",
        singer: "",
        cast: "",
        releaseDate: "",
        budget: ""
    });
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setMessage("");
        try {
            const res = await fetch("/api/movies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: form.name,
                    singer: form.singer,
                    cast: form.cast.split(","),
                    releaseDate: form.releaseDate,
                    budget: Number(form.budget)
                })
            });
            if (res.ok) {
                setMessage("Movie added successfully!");
                router.push("/");
            } else {
                setMessage("Failed to add movie.");
            }
        } catch (error) {
            setMessage("Error submitting form.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "mx-3 p-4 bg-white rounded-lg    ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: "text-xl font-semibold text-blue-900",
                children: "Expenses"
            }, void 0, false, {
                fileName: "[project]/components/movie/DeleteMovie.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DataTable, {
                columns: columns,
                data: movies,
                pagination: true,
                paginationServer: true,
                responsive: true,
                customStyles: dataTableStyles,
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
                lineNumber: 243,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/movie/DeleteMovie.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=components_movie_DeleteMovie_tsx_f7373d._.js.map