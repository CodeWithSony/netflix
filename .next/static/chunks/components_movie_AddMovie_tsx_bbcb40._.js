(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_movie_AddMovie_tsx_bbcb40._.js", {

"[project]/components/movie/AddMovie.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>AdminPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function AdminPage() {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        singer: "",
        cast: "",
        releaseDate: "",
        budget: ""
    });
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [videoFile, setVideoFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [videoUrl, setVideoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
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
            // Create the movie
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
                const data = await res.json();
                const movieId = data._id; // Ensure _id is extracted correctly
                console.log(`Movie ID: ${movieId}`);
                // Ensure movieId is not empty
                if (!movieId || typeof movieId !== "string") {
                    setError("Invalid movie ID format.");
                    return;
                }
                // Now call handleUpload to upload the video with movieId
                handleUpload(movieId); // Pass movieId to the video upload function
                setMessage("Movie added successfully!");
            // router.push("/"); // Optionally navigate to another page
            } else {
                setMessage("Failed to add movie.");
            }
        } catch (error) {
            setMessage("Error submitting form.");
        } finally{
            setLoading(false);
        }
    };
    const handleUpload = async (movieId)=>{
        if (!videoFile) {
            setError("Please select a video file.");
            return;
        }
        setLoading(true);
        setError("");
        // Check if the movieId is valid
        if (!movieId || typeof movieId !== "string") {
            setError("Invalid movie ID.");
            return;
        }
        const formData = new FormData();
        formData.append("video", videoFile);
        formData.append("movieId", movieId); // Ensure movieId is a valid string
        try {
            const response = await fetch("/api/upload-video", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (response.ok) {
                setVideoUrl(data.videoUrl);
            } else {
                setError(data.error || "Failed to upload video");
            }
        } catch (error) {
            setError("Error uploading video");
        } finally{
            setLoading(false);
        }
    };
    const handleFileChange = (event)=>{
        const file = event.target.files?.[0];
        if (file) {
            setVideoFile(file);
            setError(""); // Clear any previous error
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-full bg-black justify-center items-center flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/components/movie/AddMovie.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 max-w-lg bg-white ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold mb-4",
                        children: "Add Movie"
                    }, void 0, false, {
                        fileName: "[project]/components/movie/AddMovie.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "name",
                                value: form.name,
                                onChange: handleChange,
                                placeholder: "Movie Name",
                                className: "border p-2 w-full",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/components/movie/AddMovie.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "cast",
                                value: form.cast,
                                onChange: handleChange,
                                placeholder: "Cast",
                                className: "border p-2 w-full",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/components/movie/AddMovie.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "singer",
                                value: form.singer,
                                onChange: handleChange,
                                placeholder: "singer",
                                className: "border p-2 w-full",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/components/movie/AddMovie.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "releaseDate",
                                type: "date",
                                value: form.releaseDate,
                                onChange: handleChange,
                                className: "border p-2 w-full",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/components/movie/AddMovie.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "budget",
                                type: "number",
                                value: form.budget,
                                onChange: handleChange,
                                placeholder: "Budget",
                                className: "border p-2 w-full",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/components/movie/AddMovie.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "video/*",
                                onChange: handleFileChange,
                                disabled: loading
                            }, void 0, false, {
                                fileName: "[project]/components/movie/AddMovie.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "error-message",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/components/movie/AddMovie.tsx",
                                lineNumber: 170,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>videoFile && handleUpload(form.name),
                                disabled: loading,
                                children: loading ? "Uploading..." : "Upload Video"
                            }, void 0, false, {
                                fileName: "[project]/components/movie/AddMovie.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            videoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "video-preview",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Uploaded Video:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/movie/AddMovie.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        controls: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                src: videoUrl,
                                                type: "video/mp4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/movie/AddMovie.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this),
                                            "Your browser does not support the video tag."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/movie/AddMovie.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/movie/AddMovie.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "bg-red-600 py-3 hover:bg-green-700 text-white focus:bg-grenn-700 p-2 w-full",
                                disabled: loading,
                                children: loading ? "Saving..." : "Save Movie"
                            }, void 0, false, {
                                fileName: "[project]/components/movie/AddMovie.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/movie/AddMovie.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-center text-green-500",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/components/movie/AddMovie.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/movie/AddMovie.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/movie/AddMovie.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(AdminPage, "tMXLsJledz2q4GxTmYbnRoIDJuc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminPage;
var _c;
__turbopack_refresh__.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_movie_AddMovie_tsx_bbcb40._.js.map