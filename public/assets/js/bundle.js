/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/pages/user/components/render/index.ts":
/*!**********************************************************!*\
  !*** ./src/client/pages/user/components/render/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/common */ \"./src/client/utils/common/index.ts\");\n\n\nfunction render() {\n    _utils_common__WEBPACK_IMPORTED_MODULE_0__.APP_SELECTOR.innerHTML = `\n        <div class=\"user\">\n            <form>\n                <ul>\n                    <li>\n                        <label>Gender</label>\n                        <input type=\"radio\">\n                    </li>\n                    <li>\n                        <label>Age</label>\n                        <input type=\"number\">\n                    </li>\n                    <li>\n                        <label>Height</label>\n                        <input type=\"number\">\n                    </li>\n                    <li>\n                        <label>Weight</label>\n                        <input type=\"number\">\n                    </li>\n                    <li>\n                        <label>Activity</label>\n                        <select>\n                            <options></options>\n                        </select>\n                    </li>\n                    <li>\n                        <label>numMeals</label>\n                        <select>\n                            <options></options>\n                        </select>\n                    </li>\n                </ul>\n                <button>Generate user</button>\n            </form>\n        </div>\n    `;\n}\n\n\n//# sourceURL=webpack://insulinecalc/./src/client/pages/user/components/render/index.ts?");

/***/ }),

/***/ "./src/client/pages/user/index.ts":
/*!****************************************!*\
  !*** ./src/client/pages/user/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/render */ \"./src/client/pages/user/components/render/index.ts\");\n\n\n(0,_components_render__WEBPACK_IMPORTED_MODULE_0__.render)();\n\n\n//# sourceURL=webpack://insulinecalc/./src/client/pages/user/index.ts?");

/***/ }),

/***/ "./src/client/utils/common/index.ts":
/*!******************************************!*\
  !*** ./src/client/utils/common/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APP_SELECTOR\": () => (/* binding */ APP_SELECTOR)\n/* harmony export */ });\nconst APP_SELECTOR = document.querySelector('.app');\n\n//# sourceURL=webpack://insulinecalc/./src/client/utils/common/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/pages/user/index.ts");
/******/ 	
/******/ })()
;