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

/***/ "./Calculator.html":
/*!*************************!*\
  !*** ./Calculator.html ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n\\r\\n<link href=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css\\\" rel=\\\"stylesheet\\\" integrity=\\\"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65\\\" crossorigin=\\\"anonymous\\\">\\r\\n<\" + \"script src=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js\\\" integrity=\\\"sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4\\\" crossorigin=\\\"anonymous\\\"><\" + \"/script>\\r\\n\\r\\n<html>\\r\\n    <head>\\r\\n        <title>Калькулятор вкладов</title>\\r\\n    </head>\\r\\n\\r\\n    <body>\\r\\n      <div class=\\\"container\\\">\\r\\n        <div class=\\\"row\\\">\\r\\n          <div class = \\\"col-sm-4\\\">\\r\\n            <select id = \\\"type\\\" class=\\\"form-select mb-3\\\" aria-label=\\\".form-select-sm example\\\" onchange=\\\"changeComboBox()\\\">\\r\\n                <option selected id=\\\"-1\\\">Выберите тип вклада</option>\\r\\n                <option value=\\\"1\\\">Пополняемый</option>\\r\\n                <option value=\\\"2\\\">Срочный</option>\\r\\n            </select>\\r\\n            <select id = \\\"first\\\"class=\\\"form-select mb-3\\\" disabled=\\\"true\\\" >\\r\\n            </select>\\r\\n              <input id=\\\"amount\\\" type=\\\"number\\\" class=\\\"form-control mb-3\\\" placeholder=\\\"Вносимая сумма\\\" aria-label=\\\"Вносимая сумма\\\">\\r\\n              <button type = \\\"button\\\" class = \\\"btn btn-primary\\\" onclick=\\\"calculate()\\\">\\r\\n                Рассчитать\\r\\n              </button>\\r\\n          </div>\\r\\n          <div class=\\\"col-4\\\">\\r\\n            <output id=\\\"resultBox\\\" type=\\\"text\\\" readonly class=\\\"form-control-plaintext border\\\">\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </body>\\r\\n\\r\\n</html>\\r\\n\\r\\n<\" + \"script>\\r\\nvar first = document.getElementById(\\\"first\\\");\\r\\nvar comboBox = document.getElementById(\\\"type\\\");\\r\\nfunction addOption(a, value)\\r\\n{\\r\\n    var first = document.getElementById(\\\"first\\\");\\r\\n    var option1 = document.createElement(\\\"option\\\");\\r\\n    option1.text = a;\\r\\n    option1.value = value;\\r\\n    first.add(option1);\\r\\n}\\r\\n\\r\\nfunction calculate()\\r\\n{\\r\\n  var resultBox = document.getElementById(\\\"resultBox\\\");\\r\\n  switch (comboBox.options[comboBox.selectedIndex].value)\\r\\n  {\\r\\n    case \\\"1\\\":\\r\\n      resultBox.innerHTML = \\\"Вклад 'Пополняемый'\\\";\\r\\n      switch(first.options[first.selectedIndex].value)\\r\\n      {\\r\\n        case \\\"20\\\":\\r\\n          resultBox.innerHTML += \\\" на срок '6 месяцев' на сумму \\\" + amount.value + \\\" руб. \\\\n В конце срока вы получите \\\" + amount.value * 1.1;\\r\\n          break;\\r\\n        case \\\"22\\\":\\r\\n          resultBox.innerHTML += \\\" на срок '1 год' на сумму \\\" + amount.value + \\\" руб. \\\\n В конце срока вы получите \\\" + amount.value * 1.22;\\r\\n          break;\\r\\n        case \\\"15\\\":\\r\\n          resultBox.innerHTML += \\\" на срок '1,5 года' на сумму \\\" + amount.value + \\\" руб. \\\\n В конце срока вы получите \\\" + amount.value * 1.225 ;\\r\\n          break;\\r\\n        case \\\"10\\\":\\r\\n          resultBox.innerHTML += \\\" на срок '2 года' на сумму \\\" + amount.value + \\\" руб. \\\\n В конце срока вы получите \\\" + amount.value * 1.2;\\r\\n          break;\\r\\n        default:\\r\\n          alert(\\\"Something went wrong\\\");\\r\\n      }\\r\\n      break;\\r\\n    case \\\"2\\\":\\r\\n      resultBox.innerHTML = \\\"Вклад 'Срочный' \\\";\\r\\n      switch(first.options[first.selectedIndex].value)\\r\\n      {\\r\\n        case \\\"20\\\":\\r\\n          resultBox.innerHTML += \\\" на срок '3 месяца' на сумму \\\" + amount.value + \\\" руб. \\\\n В конце срока вы получите \\\" + amount.value * 1.05;\\r\\n          break;\\r\\n        case \\\"22\\\":\\r\\n          resultBox.innerHTML += \\\" на срок '6 месяцев' на сумму \\\" + amount.value + \\\" руб. \\\\n В конце срока вы получите \\\" + amount.value * 1.11;\\r\\n          break;\\r\\n        case \\\"23\\\":\\r\\n          resultBox.innerHTML += \\\" на срок '9 месяцев' на сумму \\\" + amount.value + \\\" руб. \\\\n В конце срока вы получите \\\" + amount.value * 1.1725;\\r\\n          break;\\r\\n        case \\\"24\\\":\\r\\n          resultBox.innerHTML += \\\" на срок '1 год' на сумму \\\" + amount.value + \\\" руб. \\\\n В конце срока вы получите \\\" + amount.value * 1.24;\\r\\n          break;\\r\\n        case \\\"18\\\":\\r\\n          resultBox.innerHTML += \\\" на срок '1,5 года' на сумму \\\" + amount.value + \\\" руб. \\\\n В конце срока вы получите \\\" + amount.value * 1.27 ;\\r\\n          break;\\r\\n        case \\\"15\\\":\\r\\n          resultBox.innerHTML += \\\" на срок '2 года' на сумму \\\" + amount.value + \\\" руб. \\\\n В конце срока вы получите \\\" + amount.value * 1.3;\\r\\n          break;\\r\\n        default:\\r\\n          alert(\\\"Something went wrong\\\");\\r\\n      }\\r\\n      break;\\r\\n    default:\\r\\n      alert(\\\"Вы не выбрали тип вклада\\\");\\r\\n  }\\r\\n  \\r\\n}\\r\\n\\r\\nfunction changeComboBox() {\\r\\n  \\r\\n  // Очищаем текущие варианты\\r\\n  first.innerHTML = \\\"\\\";\\r\\n  first.disabled = false;\\r\\n  // Добавляем новые варианты\\r\\n  if(comboBox.options[comboBox.selectedIndex].value == \\\"1\\\")\\r\\n  {\\r\\n    addOption(\\\"6 месяцев - 20%\\\", 20);\\r\\n    addOption(\\\"1 год - 22%\\\", 22);\\r\\n    addOption(\\\"1,5 года - 15%\\\", 15);\\r\\n    addOption(\\\"2 года - 10%\\\", 10);\\r\\n  }\\r\\n  else if(comboBox.options[comboBox.selectedIndex].value == \\\"2\\\")\\r\\n  {\\r\\n    addOption(\\\"3 месяца - 20%\\\", 20);\\r\\n    addOption(\\\"6 месяцев - 22%\\\", 22);\\r\\n    addOption(\\\"9 месяцев - 23%\\\", 23);\\r\\n    addOption(\\\"1 год - 24%\\\", 24);\\r\\n    addOption(\\\"1,5 года - 18%\\\", 18);\\r\\n    addOption(\\\"2 года - 15%\\\", 15);\\r\\n  }\\r\\n  else\\r\\n  {\\r\\n    first.disabled = true;\\r\\n  }\\r\\n  comboBox.add(option2);\\r\\n}\\r\\n<\" + \"/script>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://lab3/./Calculator.html?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Calculator.html"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;