"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/feed/route";
exports.ids = ["app/api/feed/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("bcryptjs");;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffeed%2Froute&page=%2Fapi%2Ffeed%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffeed%2Froute.js&appDir=D%3A%5CWebsite%5Cmaktabahelmukhtar%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CWebsite%5Cmaktabahelmukhtar%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffeed%2Froute&page=%2Fapi%2Ffeed%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffeed%2Froute.js&appDir=D%3A%5CWebsite%5Cmaktabahelmukhtar%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CWebsite%5Cmaktabahelmukhtar%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Website_maktabahelmukhtar_frontend_src_app_api_feed_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/feed/route.js */ \"(rsc)/./src/app/api/feed/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/feed/route\",\n        pathname: \"/api/feed\",\n        filename: \"route\",\n        bundlePath: \"app/api/feed/route\"\n    },\n    resolvedPagePath: \"D:\\\\Website\\\\maktabahelmukhtar\\\\frontend\\\\src\\\\app\\\\api\\\\feed\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Website_maktabahelmukhtar_frontend_src_app_api_feed_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/feed/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZmZWVkJTJGcm91dGUmcGFnZT0lMkZhcGklMkZmZWVkJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZmVlZCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDV2Vic2l0ZSU1Q21ha3RhYmFoZWxtdWtodGFyJTVDZnJvbnRlbmQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNXZWJzaXRlJTVDbWFrdGFiYWhlbG11a2h0YXIlNUNmcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDdUI7QUFDcEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWt0YWJhLWVsLW11a2h0YXIvPzRmOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcV2Vic2l0ZVxcXFxtYWt0YWJhaGVsbXVraHRhclxcXFxmcm9udGVuZFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxmZWVkXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9mZWVkL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZmVlZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZmVlZC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXFdlYnNpdGVcXFxcbWFrdGFiYWhlbG11a2h0YXJcXFxcZnJvbnRlbmRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZmVlZFxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvZmVlZC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffeed%2Froute&page=%2Fapi%2Ffeed%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffeed%2Froute.js&appDir=D%3A%5CWebsite%5Cmaktabahelmukhtar%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CWebsite%5Cmaktabahelmukhtar%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/feed/route.js":
/*!***********************************!*\
  !*** ./src/app/api/feed/route.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nconst BACKEND_URL = process.env.BACKEND_URL || \"https://maktabahelmukhtar-66zs.vercel.app\";\nasync function GET(req) {\n    try {\n        const { searchParams } = new URL(req.url);\n        const id = searchParams.get(\"id\");\n        const url = id ? `${BACKEND_URL}/api/feed?id=${id}` : `${BACKEND_URL}/api/feed`;\n        const res = await fetch(url);\n        const data = await res.json();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data, {\n            status: res.status\n        });\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: err.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const session = await getAdminSession();\n        if (!session) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: \"Not authorized\"\n        }, {\n            status: 401\n        });\n        const body = await req.json();\n        const res = await fetch(`${BACKEND_URL}/api/feed`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(body)\n        });\n        const data = await res.json();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data, {\n            status: res.status\n        });\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: err.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PUT(req) {\n    try {\n        const session = await getAdminSession();\n        if (!session) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: \"Not authorized\"\n        }, {\n            status: 401\n        });\n        const body = await req.json();\n        const res = await fetch(`${BACKEND_URL}/api/feed`, {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(body)\n        });\n        const data = await res.json();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data, {\n            status: res.status\n        });\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: err.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(req) {\n    try {\n        const session = await getAdminSession();\n        if (!session) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: \"Not authorized\"\n        }, {\n            status: 401\n        });\n        const { searchParams } = new URL(req.url);\n        const id = searchParams.get(\"id\");\n        const res = await fetch(`${BACKEND_URL}/api/feed?id=${id}`, {\n            method: \"DELETE\"\n        });\n        const data = await res.json();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data, {\n            status: res.status\n        });\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: err.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function getAdminSession() {\n    const { getServerSession } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/next\"), __webpack_require__.e(\"vendor-chunks/next-auth\"), __webpack_require__.e(\"vendor-chunks/@babel\"), __webpack_require__.e(\"vendor-chunks/jose\"), __webpack_require__.e(\"vendor-chunks/openid-client\"), __webpack_require__.e(\"vendor-chunks/oauth\"), __webpack_require__.e(\"vendor-chunks/object-hash\"), __webpack_require__.e(\"vendor-chunks/preact\"), __webpack_require__.e(\"vendor-chunks/uuid\"), __webpack_require__.e(\"vendor-chunks/yallist\"), __webpack_require__.e(\"vendor-chunks/preact-render-to-string\"), __webpack_require__.e(\"vendor-chunks/lru-cache\"), __webpack_require__.e(\"vendor-chunks/cookie\"), __webpack_require__.e(\"vendor-chunks/oidc-token-hash\"), __webpack_require__.e(\"vendor-chunks/@panva\")]).then(__webpack_require__.bind(__webpack_require__, /*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\"));\n    const { authOptions } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/next-auth\"), __webpack_require__.e(\"_rsc_src_lib_auth_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! @/lib/auth */ \"(rsc)/./src/lib/auth.js\"));\n    const session = await getServerSession(authOptions);\n    return session && session.user.role === \"admin\" ? session : null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBT3JCLHFEQUFZQSxDQUFDYyxJQUFJLENBQUM7WUFBRUcsU0FBUztZQUFPQyxPQUFPO1FBQWlCLEdBQUc7WUFBRUgsUUFBUTtRQUFJO1FBRWxHLE1BQU0sRUFBRVQsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSUYsSUFBSUcsR0FBRztRQUN4QyxNQUFNQyxLQUFLSCxhQUFhSSxHQUFHLENBQUM7UUFDNUIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLENBQUMsRUFBRVgsWUFBWSxhQUFhLEVBQUVRLEdBQUcsQ0FBQyxFQUFFO1lBQUVlLFFBQVE7UUFBUztRQUMvRSxNQUFNWCxPQUFPLE1BQU1GLElBQUlHLElBQUk7UUFDM0IsT0FBT2QscURBQVlBLENBQUNjLElBQUksQ0FBQ0QsTUFBTTtZQUFFRSxRQUFRSixJQUFJSSxNQUFNO1FBQUM7SUFDeEQsRUFBRSxPQUFPQyxLQUFLO1FBQ1YsT0FBT2hCLHFEQUFZQSxDQUFDYyxJQUFJLENBQUM7WUFBRUcsU0FBUztZQUFPQyxPQUFPRixJQUFJRyxPQUFPO1FBQUMsR0FBRztZQUFFSixRQUFRO1FBQUk7SUFDbkY7QUFDSjtBQUVBLGVBQWVPO0lBQ1gsTUFBTSxFQUFFUSxnQkFBZ0IsRUFBRSxHQUFHLE1BQU0sNjNCQUF3QjtJQUMzRCxNQUFNLEVBQUVDLFdBQVcsRUFBRSxHQUFHLE1BQU0sOE5BQW9CO0lBQ2xELE1BQU1WLFVBQVUsTUFBTVMsaUJBQWlCQztJQUN2QyxPQUFPVixXQUFXQSxRQUFRVyxJQUFJLENBQUNDLElBQUksS0FBSyxVQUFVWixVQUFVO0FBQ2hFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFrdGFiYS1lbC1tdWtodGFyLy4vc3JjL2FwcC9hcGkvZmVlZC9yb3V0ZS5qcz8wOTEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuY29uc3QgQkFDS0VORF9VUkwgPSBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCB8fCAnaHR0cHM6Ly9tYWt0YWJhaGVsbXVraHRhci02NnpzLnZlcmNlbC5hcHAnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxLnVybCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiaWRcIik7XHJcbiAgICAgICAgY29uc3QgdXJsID0gaWQgPyBgJHtCQUNLRU5EX1VSTH0vYXBpL2ZlZWQ/aWQ9JHtpZH1gIDogYCR7QkFDS0VORF9VUkx9L2FwaS9mZWVkYDtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihkYXRhLCB7IHN0YXR1czogcmVzLnN0YXR1cyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRBZG1pblNlc3Npb24oKTtcclxuICAgICAgICBpZiAoIXNlc3Npb24pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOb3QgYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0JBQ0tFTkRfVVJMfS9hcGkvZmVlZGAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oZGF0YSwgeyBzdGF0dXM6IHJlcy5zdGF0dXMgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVyci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRBZG1pblNlc3Npb24oKTtcclxuICAgICAgICBpZiAoIXNlc3Npb24pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOb3QgYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0JBQ0tFTkRfVVJMfS9hcGkvZmVlZGAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihkYXRhLCB7IHN0YXR1czogcmVzLnN0YXR1cyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldEFkbWluU2Vzc2lvbigpO1xyXG4gICAgICAgIGlmICghc2Vzc2lvbikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk5vdCBhdXRob3JpemVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxLnVybCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiaWRcIik7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QkFDS0VORF9VUkx9L2FwaS9mZWVkP2lkPSR7aWR9YCwgeyBtZXRob2Q6IFwiREVMRVRFXCIgfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGRhdGEsIHsgc3RhdHVzOiByZXMuc3RhdHVzIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnIubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRBZG1pblNlc3Npb24oKSB7XHJcbiAgICBjb25zdCB7IGdldFNlcnZlclNlc3Npb24gfSA9IGF3YWl0IGltcG9ydChcIm5leHQtYXV0aC9uZXh0XCIpO1xyXG4gICAgY29uc3QgeyBhdXRoT3B0aW9ucyB9ID0gYXdhaXQgaW1wb3J0KFwiQC9saWIvYXV0aFwiKTtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuICAgIHJldHVybiBzZXNzaW9uICYmIHNlc3Npb24udXNlci5yb2xlID09PSBcImFkbWluXCIgPyBzZXNzaW9uIDogbnVsbDtcclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiQkFDS0VORF9VUkwiLCJwcm9jZXNzIiwiZW52IiwiR0VUIiwicmVxIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwiaWQiLCJnZXQiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwiZXJyIiwic3VjY2VzcyIsImVycm9yIiwibWVzc2FnZSIsIlBPU1QiLCJzZXNzaW9uIiwiZ2V0QWRtaW5TZXNzaW9uIiwiYm9keSIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiUFVUIiwiREVMRVRFIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwidXNlciIsInJvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/feed/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffeed%2Froute&page=%2Fapi%2Ffeed%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffeed%2Froute.js&appDir=D%3A%5CWebsite%5Cmaktabahelmukhtar%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CWebsite%5Cmaktabahelmukhtar%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();