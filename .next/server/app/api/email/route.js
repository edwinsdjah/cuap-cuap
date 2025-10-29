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
exports.id = "app/api/email/route";
exports.ids = ["app/api/email/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=%2FUsers%2Fedwinsyah%2FWorkplace%2FGITClone%2Fcuap-cuap%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fedwinsyah%2FWorkplace%2FGITClone%2Fcuap-cuap&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=%2FUsers%2Fedwinsyah%2FWorkplace%2FGITClone%2Fcuap-cuap%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fedwinsyah%2FWorkplace%2FGITClone%2Fcuap-cuap&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_edwinsyah_Workplace_GITClone_cuap_cuap_app_api_email_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/email/route.js */ \"(rsc)/./app/api/email/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/email/route\",\n        pathname: \"/api/email\",\n        filename: \"route\",\n        bundlePath: \"app/api/email/route\"\n    },\n    resolvedPagePath: \"/Users/edwinsyah/Workplace/GITClone/cuap-cuap/app/api/email/route.js\",\n    nextConfigOutput,\n    userland: _Users_edwinsyah_Workplace_GITClone_cuap_cuap_app_api_email_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/email/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZlbWFpbCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZW1haWwlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZlbWFpbCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmVkd2luc3lhaCUyRldvcmtwbGFjZSUyRkdJVENsb25lJTJGY3VhcC1jdWFwJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmVkd2luc3lhaCUyRldvcmtwbGFjZSUyRkdJVENsb25lJTJGY3VhcC1jdWFwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNvQjtBQUNqRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2N1YXAtY3VhcC8/MmY2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZWR3aW5zeWFoL1dvcmtwbGFjZS9HSVRDbG9uZS9jdWFwLWN1YXAvYXBwL2FwaS9lbWFpbC9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZW1haWwvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9lbWFpbFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZW1haWwvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZWR3aW5zeWFoL1dvcmtwbGFjZS9HSVRDbG9uZS9jdWFwLWN1YXAvYXBwL2FwaS9lbWFpbC9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvZW1haWwvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=%2FUsers%2Fedwinsyah%2FWorkplace%2FGITClone%2Fcuap-cuap%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fedwinsyah%2FWorkplace%2FGITClone%2Fcuap-cuap&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/email/route.js":
/*!********************************!*\
  !*** ./app/api/email/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var lib_config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/config/db */ \"(rsc)/./lib/config/db.js\");\n/* harmony import */ var lib_model_EmailModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/model/EmailModel */ \"(rsc)/./lib/model/EmailModel.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nconst LoadDB = async ()=>{\n    await (0,lib_config_db__WEBPACK_IMPORTED_MODULE_0__.ConnectDB)();\n};\nLoadDB();\nasync function POST(req) {\n    const formData = await req.formData();\n    const emailData = {\n        email: `${formData.get(\"email\")}`\n    };\n    await lib_model_EmailModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(emailData);\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        success: true,\n        msg: \"Email Subscribed\"\n    });\n}\nasync function GET(req) {\n    const emails = await lib_model_EmailModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        emails\n    });\n}\nasync function DELETE(req) {\n    const id = await req.nextUrl.searchParams.get(\"id\");\n    await lib_model_EmailModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(id);\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        success: true,\n        msg: \"Email Deleted\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2VtYWlsL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQztBQUNJO0FBQ0g7QUFFM0MsTUFBTUcsU0FBUztJQUNiLE1BQU1ILHdEQUFTQTtBQUNqQjtBQUVBRztBQUVPLGVBQWVDLEtBQUtDLEdBQUc7SUFDNUIsTUFBTUMsV0FBVyxNQUFNRCxJQUFJQyxRQUFRO0lBQ25DLE1BQU1DLFlBQVk7UUFDaEJDLE9BQU8sQ0FBQyxFQUFFRixTQUFTRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ25DO0lBQ0EsTUFBTVIsNERBQVVBLENBQUNTLE1BQU0sQ0FBQ0g7SUFDeEIsT0FBT0wscURBQVlBLENBQUNTLElBQUksQ0FBQztRQUFFQyxTQUFTO1FBQU1DLEtBQUs7SUFBbUI7QUFDcEU7QUFFTyxlQUFlQyxJQUFJVCxHQUFHO0lBQzNCLE1BQU1VLFNBQVMsTUFBTWQsNERBQVVBLENBQUNlLElBQUksQ0FBQyxDQUFDO0lBQ3RDLE9BQU9kLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7UUFBRUk7SUFBTztBQUNwQztBQUVPLGVBQWVFLE9BQU9aLEdBQUc7SUFDOUIsTUFBTWEsS0FBSyxNQUFNYixJQUFJYyxPQUFPLENBQUNDLFlBQVksQ0FBQ1gsR0FBRyxDQUFDO0lBQzlDLE1BQU1SLDREQUFVQSxDQUFDb0IsaUJBQWlCLENBQUNIO0lBQ25DLE9BQU9oQixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1FBQUVDLFNBQVM7UUFBTUMsS0FBSztJQUFnQjtBQUNqRSIsInNvdXJjZXMiOlsid2VicGFjazovL2N1YXAtY3VhcC8uL2FwcC9hcGkvZW1haWwvcm91dGUuanM/NDAwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0REIgfSBmcm9tIFwibGliL2NvbmZpZy9kYlwiO1xyXG5pbXBvcnQgRW1haWxNb2RlbCBmcm9tIFwibGliL21vZGVsL0VtYWlsTW9kZWxcIjtcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5jb25zdCBMb2FkREIgPSBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgQ29ubmVjdERCKCk7XHJcbn07XHJcblxyXG5Mb2FkREIoKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxLmZvcm1EYXRhKCk7XHJcbiAgY29uc3QgZW1haWxEYXRhID0ge1xyXG4gICAgZW1haWw6IGAke2Zvcm1EYXRhLmdldChcImVtYWlsXCIpfWAsXHJcbiAgfTtcclxuICBhd2FpdCBFbWFpbE1vZGVsLmNyZWF0ZShlbWFpbERhdGEpO1xyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1zZzogXCJFbWFpbCBTdWJzY3JpYmVkXCIgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxKSB7XHJcbiAgY29uc3QgZW1haWxzID0gYXdhaXQgRW1haWxNb2RlbC5maW5kKHt9KTtcclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlbWFpbHMgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxKSB7XHJcbiAgY29uc3QgaWQgPSBhd2FpdCByZXEubmV4dFVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiaWRcIik7XHJcbiAgYXdhaXQgRW1haWxNb2RlbC5maW5kQnlJZEFuZERlbGV0ZShpZCk7XHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbXNnOiBcIkVtYWlsIERlbGV0ZWRcIiB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiQ29ubmVjdERCIiwiRW1haWxNb2RlbCIsIk5leHRSZXNwb25zZSIsIkxvYWREQiIsIlBPU1QiLCJyZXEiLCJmb3JtRGF0YSIsImVtYWlsRGF0YSIsImVtYWlsIiwiZ2V0IiwiY3JlYXRlIiwianNvbiIsInN1Y2Nlc3MiLCJtc2ciLCJHRVQiLCJlbWFpbHMiLCJmaW5kIiwiREVMRVRFIiwiaWQiLCJuZXh0VXJsIiwic2VhcmNoUGFyYW1zIiwiZmluZEJ5SWRBbmREZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/email/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/config/db.js":
/*!**************************!*\
  !*** ./lib/config/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConnectDB: () => (/* binding */ ConnectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_1__.configDotenv)();\nconst MONGODB_URL = process.env.MONGODB_DATA;\nconst ConnectDB = async ()=>{\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URL);\n    console.log(\"db conect\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY29uZmlnL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ007QUFFdENDLG9EQUFZQTtBQUNaLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtBQUVyQyxNQUFNQyxZQUFZO0lBQ3ZCLE1BQU1OLHVEQUFnQixDQUFDRTtJQUN2Qk0sUUFBUUMsR0FBRyxDQUFDO0FBQ2QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2N1YXAtY3VhcC8uL2xpYi9jb25maWcvZGIuanM/Y2E4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IGNvbmZpZ0RvdGVudiB9IGZyb20gXCJkb3RlbnZcIjtcclxuXHJcbmNvbmZpZ0RvdGVudigpO1xyXG5jb25zdCBNT05HT0RCX1VSTCA9IHByb2Nlc3MuZW52Lk1PTkdPREJfREFUQTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSTCk7XHJcbiAgY29uc29sZS5sb2coXCJkYiBjb25lY3RcIik7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbmZpZ0RvdGVudiIsIk1PTkdPREJfVVJMIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfREFUQSIsIkNvbm5lY3REQiIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/config/db.js\n");

/***/ }),

/***/ "(rsc)/./lib/model/EmailModel.js":
/*!*********************************!*\
  !*** ./lib/model/EmailModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Schema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true\n    },\n    date: {\n        type: Date,\n        default: Date.now()\n    }\n});\nconst EmailModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).email || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"email\", Schema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWwvRW1haWxNb2RlbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsU0FBUyxJQUFJRCx3REFBZSxDQUFDO0lBQ2pDRSxPQUFPO1FBQ0xDLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBQyxNQUFNO1FBQ0pILE1BQU1JO1FBQ05DLFNBQVNELEtBQUtFLEdBQUc7SUFDbkI7QUFDRjtBQUVBLE1BQU1DLGFBQWFWLHdEQUFlLENBQUNFLEtBQUssSUFBSUYscURBQWMsQ0FBQyxTQUFTQztBQUVwRSxpRUFBZVMsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2N1YXAtY3VhcC8uL2xpYi9tb2RlbC9FbWFpbE1vZGVsLmpzPzYwZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgZGF0ZToge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIGRlZmF1bHQ6IERhdGUubm93KCksXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBFbWFpbE1vZGVsID0gbW9uZ29vc2UubW9kZWxzLmVtYWlsIHx8IG1vbmdvb3NlLm1vZGVsKFwiZW1haWxcIiwgU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsTW9kZWw7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGF0ZSIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwiRW1haWxNb2RlbCIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/model/EmailModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=%2FUsers%2Fedwinsyah%2FWorkplace%2FGITClone%2Fcuap-cuap%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fedwinsyah%2FWorkplace%2FGITClone%2Fcuap-cuap&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();