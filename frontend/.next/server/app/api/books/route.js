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
exports.id = "app/api/books/route";
exports.ids = ["app/api/books/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbooks%2Froute&page=%2Fapi%2Fbooks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbooks%2Froute.js&appDir=D%3A%5CWebsite%5Cmaktabahelmukhtar%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CWebsite%5Cmaktabahelmukhtar%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbooks%2Froute&page=%2Fapi%2Fbooks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbooks%2Froute.js&appDir=D%3A%5CWebsite%5Cmaktabahelmukhtar%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CWebsite%5Cmaktabahelmukhtar%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Website_maktabahelmukhtar_frontend_src_app_api_books_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/books/route.js */ \"(rsc)/./src/app/api/books/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/books/route\",\n        pathname: \"/api/books\",\n        filename: \"route\",\n        bundlePath: \"app/api/books/route\"\n    },\n    resolvedPagePath: \"D:\\\\Website\\\\maktabahelmukhtar\\\\frontend\\\\src\\\\app\\\\api\\\\books\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Website_maktabahelmukhtar_frontend_src_app_api_books_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/books/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZib29rcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYm9va3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZib29rcyUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDV2Vic2l0ZSU1Q21ha3RhYmFoZWxtdWtodGFyJTVDZnJvbnRlbmQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNXZWJzaXRlJTVDbWFrdGFiYWhlbG11a2h0YXIlNUNmcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDd0I7QUFDckc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWt0YWJhLWVsLW11a2h0YXIvPzM5ZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcV2Vic2l0ZVxcXFxtYWt0YWJhaGVsbXVraHRhclxcXFxmcm9udGVuZFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxib29rc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYm9va3Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9ib29rc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYm9va3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxXZWJzaXRlXFxcXG1ha3RhYmFoZWxtdWtodGFyXFxcXGZyb250ZW5kXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGJvb2tzXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9ib29rcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbooks%2Froute&page=%2Fapi%2Fbooks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbooks%2Froute.js&appDir=D%3A%5CWebsite%5Cmaktabahelmukhtar%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CWebsite%5Cmaktabahelmukhtar%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/books/route.js":
/*!************************************!*\
  !*** ./src/app/api/books/route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./src/lib/mongodb.js\");\n/* harmony import */ var _models_Book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Book */ \"(rsc)/./src/models/Book.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.js\");\n\n\n\n\n\nasync function GET() {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const books = await _models_Book__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({}).sort({\n            createdAt: -1\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            data: books\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: error.message\n        }, {\n            status: 400\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_4__.authOptions);\n        if (!session || session.user.role !== \"admin\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: \"Not authorized\"\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const body = await req.json();\n        const book = await _models_Book__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(body);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            data: book\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: error.message\n        }, {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9ib29rcy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ0w7QUFDTDtBQUNpQjtBQUNUO0FBRWxDLGVBQWVLO0lBQ2xCLElBQUk7UUFDQSxNQUFNSix3REFBU0E7UUFDZixNQUFNSyxRQUFRLE1BQU1KLG9EQUFJQSxDQUFDSyxJQUFJLENBQUMsQ0FBQyxHQUFHQyxJQUFJLENBQUM7WUFBRUMsV0FBVyxDQUFDO1FBQUU7UUFDdkQsT0FBT1QscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQU1DLE1BQU1OO1FBQU07SUFDMUQsRUFBRSxPQUFPTyxPQUFPO1FBQ1osT0FBT2IscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQU9FLE9BQU9BLE1BQU1DLE9BQU87UUFBQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNyRjtBQUNKO0FBRU8sZUFBZUMsS0FBS0MsR0FBRztJQUMxQixJQUFJO1FBQ0EsTUFBTUMsVUFBVSxNQUFNZixnRUFBZ0JBLENBQUNDLGtEQUFXQTtRQUNsRCxJQUFJLENBQUNjLFdBQVdBLFFBQVFDLElBQUksQ0FBQ0MsSUFBSSxLQUFLLFNBQVM7WUFDM0MsT0FBT3BCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQU9FLE9BQU87WUFBaUIsR0FBRztnQkFBRUUsUUFBUTtZQUFJO1FBQ3hGO1FBRUEsTUFBTWQsd0RBQVNBO1FBQ2YsTUFBTW9CLE9BQU8sTUFBTUosSUFBSVAsSUFBSTtRQUMzQixNQUFNWSxPQUFPLE1BQU1wQixvREFBSUEsQ0FBQ3FCLE1BQU0sQ0FBQ0Y7UUFDL0IsT0FBT3JCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUFNQyxNQUFNVTtRQUFLLEdBQUc7WUFBRVAsUUFBUTtRQUFJO0lBQzFFLEVBQUUsT0FBT0YsT0FBTztRQUNaLE9BQU9iLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUFPRSxPQUFPQSxNQUFNQyxPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDckY7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL21ha3RhYmEtZWwtbXVraHRhci8uL3NyYy9hcHAvYXBpL2Jvb2tzL3JvdXRlLmpzP2NlMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IEJvb2sgZnJvbSBcIkAvbW9kZWxzL0Jvb2tcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xyXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAgICAgICBjb25zdCBib29rcyA9IGF3YWl0IEJvb2suZmluZCh7fSkuc29ydCh7IGNyZWF0ZWRBdDogLTEgfSk7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9va3MgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gICAgICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXIucm9sZSAhPT0gXCJhZG1pblwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJOb3QgYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgICAgICBjb25zdCBib29rID0gYXdhaXQgQm9vay5jcmVhdGUoYm9keSk7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9vayB9LCB7IHN0YXR1czogMjAxIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZGJDb25uZWN0IiwiQm9vayIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsIkdFVCIsImJvb2tzIiwiZmluZCIsInNvcnQiLCJjcmVhdGVkQXQiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJQT1NUIiwicmVxIiwic2Vzc2lvbiIsInVzZXIiLCJyb2xlIiwiYm9keSIsImJvb2siLCJjcmVhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/books/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.js":
/*!*************************!*\
  !*** ./src/lib/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./src/lib/mongodb.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.js\");\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                    username: credentials.username\n                }).select(\"+password\");\n                if (!user) {\n                    throw new Error(\"No user found with that username.\");\n                }\n                const isMatch = await user.matchPassword(credentials.password);\n                if (!isMatch) {\n                    throw new Error(\"Invalid password.\");\n                }\n                return {\n                    id: user._id,\n                    name: user.username,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/admin/login\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRTtBQUM1QjtBQUNMO0FBRTFCLE1BQU1HLGNBQWM7SUFDdkJDLFdBQVc7UUFDUEosMkVBQW1CQSxDQUFDO1lBQ2hCSyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1RDLFVBQVU7b0JBQUVDLE9BQU87b0JBQVlDLE1BQU07Z0JBQU87Z0JBQzVDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ3BEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDdkIsTUFBTUwsd0RBQVNBO2dCQUNmLE1BQU1XLE9BQU8sTUFBTVYsb0RBQUlBLENBQUNXLE9BQU8sQ0FBQztvQkFBRU4sVUFBVUQsWUFBWUMsUUFBUTtnQkFBQyxHQUFHTyxNQUFNLENBQUM7Z0JBRTNFLElBQUksQ0FBQ0YsTUFBTTtvQkFDUCxNQUFNLElBQUlHLE1BQU07Z0JBQ3BCO2dCQUVBLE1BQU1DLFVBQVUsTUFBTUosS0FBS0ssYUFBYSxDQUFDWCxZQUFZSSxRQUFRO2dCQUU3RCxJQUFJLENBQUNNLFNBQVM7b0JBQ1YsTUFBTSxJQUFJRCxNQUFNO2dCQUNwQjtnQkFFQSxPQUFPO29CQUFFRyxJQUFJTixLQUFLTyxHQUFHO29CQUFFZCxNQUFNTyxLQUFLTCxRQUFRO29CQUFFYSxNQUFNUixLQUFLUSxJQUFJO2dCQUFDO1lBQ2hFO1FBQ0o7S0FDSDtJQUNEQyxXQUFXO1FBQ1AsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVYLElBQUksRUFBRTtZQUNyQixJQUFJQSxNQUFNO2dCQUNOVyxNQUFNSCxJQUFJLEdBQUdSLEtBQUtRLElBQUk7WUFDMUI7WUFDQSxPQUFPRztRQUNYO1FBQ0EsTUFBTUMsU0FBUSxFQUFFQSxPQUFPLEVBQUVELEtBQUssRUFBRTtZQUM1QixJQUFJQSxPQUFPO2dCQUNQQyxRQUFRWixJQUFJLENBQUNRLElBQUksR0FBR0csTUFBTUgsSUFBSTtZQUNsQztZQUNBLE9BQU9JO1FBQ1g7SUFDSjtJQUNBQyxPQUFPO1FBQ0hDLFFBQVE7SUFDWjtJQUNBRixTQUFTO1FBQ0xHLFVBQVU7SUFDZDtJQUNBQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7QUFDdkMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL21ha3RhYmEtZWwtbXVraHRhci8uL3NyYy9saWIvYXV0aC5qcz84N2JkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL1VzZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogeyBsYWJlbDogXCJVc2VybmFtZVwiLCB0eXBlOiBcInRleHRcIiB9LFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGJDb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgdXNlcm5hbWU6IGNyZWRlbnRpYWxzLnVzZXJuYW1lIH0pLnNlbGVjdChcIitwYXNzd29yZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB1c2VyIGZvdW5kIHdpdGggdGhhdCB1c2VybmFtZS5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IHVzZXIubWF0Y2hQYXNzd29yZChjcmVkZW50aWFscy5wYXNzd29yZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc01hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IHVzZXIuX2lkLCBuYW1lOiB1c2VyLnVzZXJuYW1lLCByb2xlOiB1c2VyLnJvbGUgfTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgIF0sXHJcbiAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0b2tlbi5yb2xlID0gdXNlci5yb2xlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLnJvbGUgPSB0b2tlbi5yb2xlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcGFnZXM6IHtcclxuICAgICAgICBzaWduSW46IFwiL2FkbWluL2xvZ2luXCIsXHJcbiAgICB9LFxyXG4gICAgc2Vzc2lvbjoge1xyXG4gICAgICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxyXG4gICAgfSxcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG59O1xyXG4iXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsImRiQ29ubmVjdCIsIlVzZXIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZE9uZSIsInNlbGVjdCIsIkVycm9yIiwiaXNNYXRjaCIsIm1hdGNoUGFzc3dvcmQiLCJpZCIsIl9pZCIsInJvbGUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iLCJwYWdlcyIsInNpZ25JbiIsInN0cmF0ZWd5Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb.js":
/*!****************************!*\
  !*** ./src/lib/mongodb.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVztBQUUzQyxJQUFJLENBQUNBLGFBQWE7SUFDZCxNQUFNLElBQUlHLE1BQU07QUFDcEI7QUFFQSxJQUFJQyxTQUFTQyxPQUFPTixRQUFRO0FBRTVCLElBQUksQ0FBQ0ssUUFBUTtJQUNUQSxTQUFTQyxPQUFPTixRQUFRLEdBQUc7UUFBRU8sTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDM0Q7QUFFQSxlQUFlQztJQUNYLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNiLE9BQU9GLE9BQU9FLElBQUk7SUFDdEI7SUFFQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNqQixNQUFNRSxPQUFPO1lBQ1RDLGdCQUFnQjtRQUNwQjtRQUVBTixPQUFPRyxPQUFPLEdBQUdSLHVEQUFnQixDQUFDQyxhQUFhUyxNQUFNRyxJQUFJLENBQUMsQ0FBQ2I7WUFDdkQsT0FBT0E7UUFDWDtJQUNKO0lBQ0FLLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ2xDLE9BQU9ILE9BQU9FLElBQUk7QUFDdEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21ha3RhYmEtZWwtbXVraHRhci8uL3NyYy9saWIvbW9uZ29kYi5qcz84YjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiKTtcclxufVxyXG5cclxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcclxuXHJcbmlmICghY2FjaGVkKSB7XHJcbiAgICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xyXG4gICAgaWYgKGNhY2hlZC5jb25uKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY2FjaGVkLnByb21pc2UpIHtcclxuICAgICAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICAgICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9uZ29vc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xyXG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Book.js":
/*!****************************!*\
  !*** ./src/models/Book.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst BookSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a title for the book.\"\n        ],\n        maxlength: [\n            100,\n            \"Title cannot be more than 100 characters\"\n        ]\n    },\n    author: {\n        type: String,\n        required: [\n            true,\n            \"Please provide an author name.\"\n        ]\n    },\n    editor: {\n        type: String\n    },\n    description: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a book description.\"\n        ]\n    },\n    coverImage: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a cover image URL.\"\n        ]\n    },\n    authorImage: {\n        type: String\n    },\n    authorBio: {\n        type: String\n    },\n    price: {\n        type: Number,\n        default: 0\n    },\n    isBestSeller: {\n        type: Boolean,\n        default: false\n    },\n    whatsappLink: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a WhatsApp order link.\"\n        ]\n    },\n    category: {\n        type: String,\n        enum: [\n            \"Fiqh\",\n            \"Hadith\",\n            \"History\",\n            \"Theology\",\n            \"General\"\n        ],\n        default: \"General\"\n    }\n}, {\n    timestamps: true\n});\n// Ensure model is updated even if cached with old schema\nif ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Book) {\n    delete (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Book;\n}\nconst Book = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Book\", BookSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Book);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0Jvb2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FDbEM7SUFDSUcsT0FBTztRQUNIQyxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUF1QztRQUN4REMsV0FBVztZQUFDO1lBQUs7U0FBMkM7SUFDaEU7SUFDQUMsUUFBUTtRQUNKSixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUFpQztJQUN0RDtJQUNBRyxRQUFRO1FBQ0pMLE1BQU1DO0lBQ1Y7SUFDQUssYUFBYTtRQUNUTixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUFxQztJQUMxRDtJQUNBSyxZQUFZO1FBQ1JQLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQW9DO0lBQ3pEO0lBQ0FNLGFBQWE7UUFDVFIsTUFBTUM7SUFDVjtJQUNBUSxXQUFXO1FBQ1BULE1BQU1DO0lBQ1Y7SUFDQVMsT0FBTztRQUNIVixNQUFNVztRQUNOQyxTQUFTO0lBQ2I7SUFDQUMsY0FBYztRQUNWYixNQUFNYztRQUNORixTQUFTO0lBQ2I7SUFDQUcsY0FBYztRQUNWZixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUF3QztJQUM3RDtJQUNBYyxVQUFVO1FBQ05oQixNQUFNQztRQUNOZ0IsTUFBTTtZQUFDO1lBQVE7WUFBVTtZQUFXO1lBQVk7U0FBVTtRQUMxREwsU0FBUztJQUNiO0FBQ0osR0FDQTtJQUFFTSxZQUFZO0FBQUs7QUFHdkIseURBQXlEO0FBQ3pELElBQUl0Qix3REFBZSxDQUFDd0IsSUFBSSxFQUFFO0lBQ3RCLE9BQU94Qix3REFBZSxDQUFDd0IsSUFBSTtBQUMvQjtBQUVBLE1BQU1BLE9BQU94QixxREFBYyxDQUFDLFFBQVFDO0FBQ3BDLGlFQUFldUIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21ha3RhYmEtZWwtbXVraHRhci8uL3NyYy9tb2RlbHMvQm9vay5qcz8yNWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IEJvb2tTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgdGl0bGUgZm9yIHRoZSBib29rLlwiXSxcclxuICAgICAgICAgICAgbWF4bGVuZ3RoOiBbMTAwLCBcIlRpdGxlIGNhbm5vdCBiZSBtb3JlIHRoYW4gMTAwIGNoYXJhY3RlcnNcIl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHByb3ZpZGUgYW4gYXV0aG9yIG5hbWUuXCJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWRpdG9yOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgYm9vayBkZXNjcmlwdGlvbi5cIl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb3ZlckltYWdlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgY292ZXIgaW1hZ2UgVVJMLlwiXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dGhvckltYWdlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dGhvckJpbzoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmljZToge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc0Jlc3RTZWxsZXI6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aGF0c2FwcExpbms6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHByb3ZpZGUgYSBXaGF0c0FwcCBvcmRlciBsaW5rLlwiXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgZW51bTogW1wiRmlxaFwiLCBcIkhhZGl0aFwiLCBcIkhpc3RvcnlcIiwgXCJUaGVvbG9neVwiLCBcIkdlbmVyYWxcIl0sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiR2VuZXJhbFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbi8vIEVuc3VyZSBtb2RlbCBpcyB1cGRhdGVkIGV2ZW4gaWYgY2FjaGVkIHdpdGggb2xkIHNjaGVtYVxyXG5pZiAobW9uZ29vc2UubW9kZWxzLkJvb2spIHtcclxuICAgIGRlbGV0ZSBtb25nb29zZS5tb2RlbHMuQm9vaztcclxufVxyXG5cclxuY29uc3QgQm9vayA9IG1vbmdvb3NlLm1vZGVsKFwiQm9va1wiLCBCb29rU2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgQm9vaztcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiQm9va1NjaGVtYSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibWF4bGVuZ3RoIiwiYXV0aG9yIiwiZWRpdG9yIiwiZGVzY3JpcHRpb24iLCJjb3ZlckltYWdlIiwiYXV0aG9ySW1hZ2UiLCJhdXRob3JCaW8iLCJwcmljZSIsIk51bWJlciIsImRlZmF1bHQiLCJpc0Jlc3RTZWxsZXIiLCJCb29sZWFuIiwid2hhdHNhcHBMaW5rIiwiY2F0ZWdvcnkiLCJlbnVtIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIkJvb2siLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Book.js\n");

/***/ }),

/***/ "(rsc)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a username.\"\n        ],\n        unique: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a password.\"\n        ],\n        select: false\n    },\n    role: {\n        type: String,\n        enum: [\n            \"admin\"\n        ],\n        default: \"admin\"\n    }\n}, {\n    timestamps: true\n});\nUserSchema.pre(\"save\", async function(next) {\n    if (!this.isModified(\"password\")) {\n        next();\n    }\n    const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].genSalt(10);\n    this.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hash(this.password, salt);\n});\nUserSchema.methods.matchPassword = async function(enteredPassword) {\n    return await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compare(enteredPassword, this.password);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUNGO0FBRTlCLE1BQU1FLGFBQWEsSUFBSUYsd0RBQWUsQ0FDbEM7SUFDSUksVUFBVTtRQUNOQyxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUE2QjtRQUM5Q0MsUUFBUTtJQUNaO0lBQ0FDLFVBQVU7UUFDTkosTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBNkI7UUFDOUNHLFFBQVE7SUFDWjtJQUNBQyxNQUFNO1FBQ0ZOLE1BQU1DO1FBQ05NLE1BQU07WUFBQztTQUFRO1FBQ2ZDLFNBQVM7SUFDYjtBQUNKLEdBQ0E7SUFBRUMsWUFBWTtBQUFLO0FBR3ZCWixXQUFXYSxHQUFHLENBQUMsUUFBUSxlQUFnQkMsSUFBSTtJQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUMsYUFBYTtRQUM5QkQ7SUFDSjtJQUNBLE1BQU1FLE9BQU8sTUFBTWpCLHdEQUFjLENBQUM7SUFDbEMsSUFBSSxDQUFDUSxRQUFRLEdBQUcsTUFBTVIscURBQVcsQ0FBQyxJQUFJLENBQUNRLFFBQVEsRUFBRVM7QUFDckQ7QUFFQWhCLFdBQVdtQixPQUFPLENBQUNDLGFBQWEsR0FBRyxlQUFnQkMsZUFBZTtJQUM5RCxPQUFPLE1BQU10Qix3REFBYyxDQUFDc0IsaUJBQWlCLElBQUksQ0FBQ2QsUUFBUTtBQUM5RDtBQUVBLGlFQUFlVCx3REFBZSxDQUFDMEIsSUFBSSxJQUFJMUIscURBQWMsQ0FBQyxRQUFRRSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFrdGFiYS1lbC1tdWtodGFyLy4vc3JjL21vZGVscy9Vc2VyLmpzPzdkMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHByb3ZpZGUgYSB1c2VybmFtZS5cIl0sXHJcbiAgICAgICAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgcGFzc3dvcmQuXCJdLFxyXG4gICAgICAgICAgICBzZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGVudW06IFtcImFkbWluXCJdLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcImFkbWluXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5cclxuVXNlclNjaGVtYS5wcmUoXCJzYXZlXCIsIGFzeW5jIGZ1bmN0aW9uIChuZXh0KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNNb2RpZmllZChcInBhc3N3b3JkXCIpKSB7XHJcbiAgICAgICAgbmV4dCgpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKTtcclxuICAgIHRoaXMucGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCh0aGlzLnBhc3N3b3JkLCBzYWx0KTtcclxufSk7XHJcblxyXG5Vc2VyU2NoZW1hLm1ldGhvZHMubWF0Y2hQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uIChlbnRlcmVkUGFzc3dvcmQpIHtcclxuICAgIHJldHVybiBhd2FpdCBiY3J5cHQuY29tcGFyZShlbnRlcmVkUGFzc3dvcmQsIHRoaXMucGFzc3dvcmQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIFVzZXJTY2hlbWEpO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJiY3J5cHQiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJwYXNzd29yZCIsInNlbGVjdCIsInJvbGUiLCJlbnVtIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJwcmUiLCJuZXh0IiwiaXNNb2RpZmllZCIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaCIsIm1ldGhvZHMiLCJtYXRjaFBhc3N3b3JkIiwiZW50ZXJlZFBhc3N3b3JkIiwiY29tcGFyZSIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbooks%2Froute&page=%2Fapi%2Fbooks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbooks%2Froute.js&appDir=D%3A%5CWebsite%5Cmaktabahelmukhtar%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CWebsite%5Cmaktabahelmukhtar%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();