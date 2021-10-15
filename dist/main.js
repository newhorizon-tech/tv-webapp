/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Righteous&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-dark: #111;\n  --color-white: #fff;\n  --theme-color: #00b1a2;\n  --gray: #d8d8d8;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Raleway', sans-serif;\n  background: var(--gray);\n}\n\n.navbar {\n  display: flex;\n  padding: 10px 8vw;\n  color: var(--color-white);\n  background: var(--bg-dark);\n}\n\n.logo {\n  flex: 1px;\n  display: flex;\n  align-items: center;\n  font-family: 'Righteous', 'cursive', sans-serif;\n  font-size: 3rem;\n  color: var(--theme-color);\n  cursor: pointer;\n}\n\n.categories {\n  flex: 4;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  list-style: none;\n  padding: 10px 20px;\n}\n\n.category-item {\n  padding: 5px 10px;\n  font-weight: 500;\n  text-align: center;\n  transition: all 0.4s ease-in-out;\n  cursor: pointer;\n}\n\n.category-item:hover {\n  color: var(--theme-color);\n  transform: scale(1.1);\n}\n\n.items-counter {\n  color: var(--theme-color);\n}\n\n.content-body {\n  margin: 0;\n  height: auto;\n  min-height: 74vh;\n}\n\n.banner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100px;\n  padding: 0 3vw;\n  border-bottom: 1px solid #afafaf;\n}\n\n.searcher {\n  display: flex;\n  align-items: center;\n  width: 40%;\n  background: rgba(216, 216, 216, 0.25);\n  box-shadow: 0 8px 32px 0 rgba(32, 33, 46, 0.3);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  border-radius: 10px;\n  border: 2px solid var(--bg-dark);\n}\n\n.search.icon {\n  color: #575656;\n  width: 30px;\n  height: 100%;\n  font-size: 1.2rem;\n  padding: 5px;\n  margin: 0;\n  border-radius: 10px;\n}\n\n.search-input {\n  width: 100%;\n  height: 30px;\n  margin: 0;\n  padding: 0 5px;\n  outline: none;\n  background: none;\n  border: none;\n  border-radius: 10px;\n}\n\n.cards-container {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  height: auto;\n  margin: 20px 3vw;\n}\n\n.tv-show-card {\n  width: 210px;\n  min-height: 400px;\n  margin: 20px 10px;\n  color: var(--color-white);\n  list-style: none;\n  background: rgba(13, 14, 22, 0.9);\n  box-shadow: 0 8px 32px 0 rgba(24, 42, 46, 0.3);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  border-radius: 5px;\n}\n\n.tv-show-image {\n  display: block;\n  width: 100%;\n  height: 280px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.title {\n  margin: 0;\n  padding: 5px;\n}\n\n.network-rating {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 5px;\n  margin: 0;\n}\n\n.network-rating p {\n  margin: 0;\n}\n\n.country-likes {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px;\n}\n\n.country,\n.likes {\n  margin: 0;\n}\n\n.heart.icon {\n  width: auto;\n  height: 100%;\n  padding: 0 2px;\n}\n\n.heart.icon:hover {\n  color: #f00;\n}\n\n.card-actions {\n  display: flex;\n  justify-content: center;\n  padding: 5px 0;\n}\n\n.comments,\nbutton {\n  width: 100px;\n  padding: 4px;\n  color: var(--bg-dark);\n  background: var(--theme-color);\n  border: 2px solid var(--theme-color);\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.comments:hover {\n  color: var(--color-white);\n  background: none;\n}\n\n#dialog {\n  width: 60%;\n  min-width: 200px;\n  min-height: 300px;\n  left: 50%;\n  top: 50%;\n  padding: 20px;\n  transform: translate(-50%, -50%);\n  border: 2px solid var(--bg-dark);\n  border-radius: 5px;\n}\n\n#dialog-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#dialog-content input,\ntextarea {\n  margin-bottom: 6px;\n  padding: 4px 5px;\n}\n\n.new-comment {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: 0 auto;\n}\n\n#name {\n  height: 30px;\n  width: 180px;\n}\n\n.comments-list {\n  margin-bottom: 5%;\n  list-style-type: none;\n}\n\n.comments-list li {\n  padding: 4px 0;\n}\n\nfooter {\n  border-top: 2px solid var(--theme-color);\n}\n\n.credits {\n  padding: 20px;\n}\n\n.footer-box {\n  height: 20px;\n  background-color: var(--bg-dark);\n  border: 1px solid var(--bg-dark);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');\n\n:root {\n  --bg-dark: #111;\n  --color-white: #fff;\n  --theme-color: #00b1a2;\n  --gray: #d8d8d8;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Raleway', sans-serif;\n  background: var(--gray);\n}\n\n.navbar {\n  display: flex;\n  padding: 10px 8vw;\n  color: var(--color-white);\n  background: var(--bg-dark);\n}\n\n.logo {\n  flex: 1px;\n  display: flex;\n  align-items: center;\n  font-family: 'Righteous', 'cursive', sans-serif;\n  font-size: 3rem;\n  color: var(--theme-color);\n  cursor: pointer;\n}\n\n.categories {\n  flex: 4;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  list-style: none;\n  padding: 10px 20px;\n}\n\n.category-item {\n  padding: 5px 10px;\n  font-weight: 500;\n  text-align: center;\n  transition: all 0.4s ease-in-out;\n  cursor: pointer;\n}\n\n.category-item:hover {\n  color: var(--theme-color);\n  transform: scale(1.1);\n}\n\n.items-counter {\n  color: var(--theme-color);\n}\n\n.content-body {\n  margin: 0;\n  height: auto;\n  min-height: 74vh;\n}\n\n.banner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100px;\n  padding: 0 3vw;\n  border-bottom: 1px solid #afafaf;\n}\n\n.searcher {\n  display: flex;\n  align-items: center;\n  width: 40%;\n  background: rgba(216, 216, 216, 0.25);\n  box-shadow: 0 8px 32px 0 rgba(32, 33, 46, 0.3);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  border-radius: 10px;\n  border: 2px solid var(--bg-dark);\n}\n\n.search.icon {\n  color: #575656;\n  width: 30px;\n  height: 100%;\n  font-size: 1.2rem;\n  padding: 5px;\n  margin: 0;\n  border-radius: 10px;\n}\n\n.search-input {\n  width: 100%;\n  height: 30px;\n  margin: 0;\n  padding: 0 5px;\n  outline: none;\n  background: none;\n  border: none;\n  border-radius: 10px;\n}\n\n.cards-container {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  height: auto;\n  margin: 20px 3vw;\n}\n\n.tv-show-card {\n  width: 210px;\n  min-height: 400px;\n  margin: 20px 10px;\n  color: var(--color-white);\n  list-style: none;\n  background: rgba(13, 14, 22, 0.9);\n  box-shadow: 0 8px 32px 0 rgba(24, 42, 46, 0.3);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  border-radius: 5px;\n}\n\n.tv-show-image {\n  display: block;\n  width: 100%;\n  height: 280px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.title {\n  margin: 0;\n  padding: 5px;\n}\n\n.network-rating {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 5px;\n  margin: 0;\n}\n\n.network-rating p {\n  margin: 0;\n}\n\n.country-likes {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px;\n}\n\n.country,\n.likes {\n  margin: 0;\n}\n\n.heart.icon {\n  width: auto;\n  height: 100%;\n  padding: 0 2px;\n}\n\n.heart.icon:hover {\n  color: #f00;\n}\n\n.card-actions {\n  display: flex;\n  justify-content: center;\n  padding: 5px 0;\n}\n\n.comments,\nbutton {\n  width: 100px;\n  padding: 4px;\n  color: var(--bg-dark);\n  background: var(--theme-color);\n  border: 2px solid var(--theme-color);\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.comments:hover {\n  color: var(--color-white);\n  background: none;\n}\n\n#dialog {\n  width: 60%;\n  min-width: 200px;\n  min-height: 300px;\n  left: 50%;\n  top: 50%;\n  padding: 20px;\n  transform: translate(-50%, -50%);\n  border: 2px solid var(--bg-dark);\n  border-radius: 5px;\n}\n\n#dialog-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#dialog-content input,\ntextarea {\n  margin-bottom: 6px;\n  padding: 4px 5px;\n}\n\n.new-comment {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: 0 auto;\n}\n\n#name {\n  height: 30px;\n  width: 180px;\n}\n\n.comments-list {\n  margin-bottom: 5%;\n  list-style-type: none;\n}\n\n.comments-list li {\n  padding: 4px 0;\n}\n\nfooter {\n  border-top: 2px solid var(--theme-color);\n}\n\n.credits {\n  padding: 20px;\n}\n\n.footer-box {\n  height: 20px;\n  background-color: var(--bg-dark);\n  border: 1px solid var(--bg-dark);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/dialog-polyfill/dist/dialog-polyfill.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/dialog-polyfill/dist/dialog-polyfill.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// nb. This is for IE10 and lower _only_.
var supportCustomEvent = window.CustomEvent;
if (!supportCustomEvent || typeof supportCustomEvent === 'object') {
  supportCustomEvent = function CustomEvent(event, x) {
    x = x || {};
    var ev = document.createEvent('CustomEvent');
    ev.initCustomEvent(event, !!x.bubbles, !!x.cancelable, x.detail || null);
    return ev;
  };
  supportCustomEvent.prototype = window.Event.prototype;
}

/**
 * Dispatches the passed event to both an "on<type>" handler as well as via the
 * normal dispatch operation. Does not bubble.
 *
 * @param {!EventTarget} target
 * @param {!Event} event
 * @return {boolean}
 */
function safeDispatchEvent(target, event) {
  var check = 'on' + event.type.toLowerCase();
  if (typeof target[check] === 'function') {
    target[check](event);
  }
  return target.dispatchEvent(event);
}

/**
 * @param {Element} el to check for stacking context
 * @return {boolean} whether this el or its parents creates a stacking context
 */
function createsStackingContext(el) {
  while (el && el !== document.body) {
    var s = window.getComputedStyle(el);
    var invalid = function(k, ok) {
      return !(s[k] === undefined || s[k] === ok);
    };

    if (s.opacity < 1 ||
        invalid('zIndex', 'auto') ||
        invalid('transform', 'none') ||
        invalid('mixBlendMode', 'normal') ||
        invalid('filter', 'none') ||
        invalid('perspective', 'none') ||
        s['isolation'] === 'isolate' ||
        s.position === 'fixed' ||
        s.webkitOverflowScrolling === 'touch') {
      return true;
    }
    el = el.parentElement;
  }
  return false;
}

/**
 * Finds the nearest <dialog> from the passed element.
 *
 * @param {Element} el to search from
 * @return {HTMLDialogElement} dialog found
 */
function findNearestDialog(el) {
  while (el) {
    if (el.localName === 'dialog') {
      return /** @type {HTMLDialogElement} */ (el);
    }
    if (el.parentElement) {
      el = el.parentElement;
    } else if (el.parentNode) {
      el = el.parentNode.host;
    } else {
      el = null;
    }
  }
  return null;
}

/**
 * Blur the specified element, as long as it's not the HTML body element.
 * This works around an IE9/10 bug - blurring the body causes Windows to
 * blur the whole application.
 *
 * @param {Element} el to blur
 */
function safeBlur(el) {
  // Find the actual focused element when the active element is inside a shadow root
  while (el && el.shadowRoot && el.shadowRoot.activeElement) {
    el = el.shadowRoot.activeElement;
  }

  if (el && el.blur && el !== document.body) {
    el.blur();
  }
}

/**
 * @param {!NodeList} nodeList to search
 * @param {Node} node to find
 * @return {boolean} whether node is inside nodeList
 */
function inNodeList(nodeList, node) {
  for (var i = 0; i < nodeList.length; ++i) {
    if (nodeList[i] === node) {
      return true;
    }
  }
  return false;
}

/**
 * @param {HTMLFormElement} el to check
 * @return {boolean} whether this form has method="dialog"
 */
function isFormMethodDialog(el) {
  if (!el || !el.hasAttribute('method')) {
    return false;
  }
  return el.getAttribute('method').toLowerCase() === 'dialog';
}

/**
 * @param {!DocumentFragment|!Element} hostElement
 * @return {?Element}
 */
function findFocusableElementWithin(hostElement) {
  // Note that this is 'any focusable area'. This list is probably not exhaustive, but the
  // alternative involves stepping through and trying to focus everything.
  var opts = ['button', 'input', 'keygen', 'select', 'textarea'];
  var query = opts.map(function(el) {
    return el + ':not([disabled])';
  });
  // TODO(samthor): tabindex values that are not numeric are not focusable.
  query.push('[tabindex]:not([disabled]):not([tabindex=""])');  // tabindex != "", not disabled
  var target = hostElement.querySelector(query.join(', '));

  if (!target && 'attachShadow' in Element.prototype) {
    // If we haven't found a focusable target, see if the host element contains an element
    // which has a shadowRoot.
    // Recursively search for the first focusable item in shadow roots.
    var elems = hostElement.querySelectorAll('*');
    for (var i = 0; i < elems.length; i++) {
      if (elems[i].tagName && elems[i].shadowRoot) {
        target = findFocusableElementWithin(elems[i].shadowRoot);
        if (target) {
          break;
        }
      }
    }
  }
  return target;
}

/**
 * Determines if an element is attached to the DOM.
 * @param {Element} element to check
 * @return {boolean} whether the element is in DOM
 */
function isConnected(element) {
  return element.isConnected || document.body.contains(element);
}

/**
 * @param {!Event} event
 * @return {?Element}
 */
function findFormSubmitter(event) {
  if (event.submitter) {
    return event.submitter;
  }

  var form = event.target;
  if (!(form instanceof HTMLFormElement)) {
    return null;
  }

  var submitter = dialogPolyfill.formSubmitter;
  if (!submitter) {
    var target = event.target;
    var root = ('getRootNode' in target && target.getRootNode() || document);
    submitter = root.activeElement;
  }

  if (!submitter || submitter.form !== form) {
    return null;
  }
  return submitter;
}

/**
 * @param {!Event} event
 */
function maybeHandleSubmit(event) {
  if (event.defaultPrevented) {
    return;
  }
  var form = /** @type {!HTMLFormElement} */ (event.target);

  // We'd have a value if we clicked on an imagemap.
  var value = dialogPolyfill.imagemapUseValue;
  var submitter = findFormSubmitter(event);
  if (value === null && submitter) {
    value = submitter.value;
  }

  // There should always be a dialog as this handler is added specifically on them, but check just
  // in case.
  var dialog = findNearestDialog(form);
  if (!dialog) {
    return;
  }

  // Prefer formmethod on the button.
  var formmethod = submitter && submitter.getAttribute('formmethod') || form.getAttribute('method');
  if (formmethod !== 'dialog') {
    return;
  }
  event.preventDefault();

  if (value != null) {
    // nb. we explicitly check against null/undefined
    dialog.close(value);
  } else {
    dialog.close();
  }
}

/**
 * @param {!HTMLDialogElement} dialog to upgrade
 * @constructor
 */
function dialogPolyfillInfo(dialog) {
  this.dialog_ = dialog;
  this.replacedStyleTop_ = false;
  this.openAsModal_ = false;

  // Set a11y role. Browsers that support dialog implicitly know this already.
  if (!dialog.hasAttribute('role')) {
    dialog.setAttribute('role', 'dialog');
  }

  dialog.show = this.show.bind(this);
  dialog.showModal = this.showModal.bind(this);
  dialog.close = this.close.bind(this);

  dialog.addEventListener('submit', maybeHandleSubmit, false);

  if (!('returnValue' in dialog)) {
    dialog.returnValue = '';
  }

  if ('MutationObserver' in window) {
    var mo = new MutationObserver(this.maybeHideModal.bind(this));
    mo.observe(dialog, {attributes: true, attributeFilter: ['open']});
  } else {
    // IE10 and below support. Note that DOMNodeRemoved etc fire _before_ removal. They also
    // seem to fire even if the element was removed as part of a parent removal. Use the removed
    // events to force downgrade (useful if removed/immediately added).
    var removed = false;
    var cb = function() {
      removed ? this.downgradeModal() : this.maybeHideModal();
      removed = false;
    }.bind(this);
    var timeout;
    var delayModel = function(ev) {
      if (ev.target !== dialog) { return; }  // not for a child element
      var cand = 'DOMNodeRemoved';
      removed |= (ev.type.substr(0, cand.length) === cand);
      window.clearTimeout(timeout);
      timeout = window.setTimeout(cb, 0);
    };
    ['DOMAttrModified', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument'].forEach(function(name) {
      dialog.addEventListener(name, delayModel);
    });
  }
  // Note that the DOM is observed inside DialogManager while any dialog
  // is being displayed as a modal, to catch modal removal from the DOM.

  Object.defineProperty(dialog, 'open', {
    set: this.setOpen.bind(this),
    get: dialog.hasAttribute.bind(dialog, 'open')
  });

  this.backdrop_ = document.createElement('div');
  this.backdrop_.className = 'backdrop';
  this.backdrop_.addEventListener('mouseup'  , this.backdropMouseEvent_.bind(this));
  this.backdrop_.addEventListener('mousedown', this.backdropMouseEvent_.bind(this));
  this.backdrop_.addEventListener('click'    , this.backdropMouseEvent_.bind(this));
}

dialogPolyfillInfo.prototype = /** @type {HTMLDialogElement.prototype} */ ({

  get dialog() {
    return this.dialog_;
  },

  /**
   * Maybe remove this dialog from the modal top layer. This is called when
   * a modal dialog may no longer be tenable, e.g., when the dialog is no
   * longer open or is no longer part of the DOM.
   */
  maybeHideModal: function() {
    if (this.dialog_.hasAttribute('open') && isConnected(this.dialog_)) { return; }
    this.downgradeModal();
  },

  /**
   * Remove this dialog from the modal top layer, leaving it as a non-modal.
   */
  downgradeModal: function() {
    if (!this.openAsModal_) { return; }
    this.openAsModal_ = false;
    this.dialog_.style.zIndex = '';

    // This won't match the native <dialog> exactly because if the user set top on a centered
    // polyfill dialog, that top gets thrown away when the dialog is closed. Not sure it's
    // possible to polyfill this perfectly.
    if (this.replacedStyleTop_) {
      this.dialog_.style.top = '';
      this.replacedStyleTop_ = false;
    }

    // Clear the backdrop and remove from the manager.
    this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_);
    dialogPolyfill.dm.removeDialog(this);
  },

  /**
   * @param {boolean} value whether to open or close this dialog
   */
  setOpen: function(value) {
    if (value) {
      this.dialog_.hasAttribute('open') || this.dialog_.setAttribute('open', '');
    } else {
      this.dialog_.removeAttribute('open');
      this.maybeHideModal();  // nb. redundant with MutationObserver
    }
  },

  /**
   * Handles mouse events ('mouseup', 'mousedown', 'click') on the fake .backdrop element, redirecting them as if
   * they were on the dialog itself.
   *
   * @param {!Event} e to redirect
   */
  backdropMouseEvent_: function(e) {
    if (!this.dialog_.hasAttribute('tabindex')) {
      // Clicking on the backdrop should move the implicit cursor, even if dialog cannot be
      // focused. Create a fake thing to focus on. If the backdrop was _before_ the dialog, this
      // would not be needed - clicks would move the implicit cursor there.
      var fake = document.createElement('div');
      this.dialog_.insertBefore(fake, this.dialog_.firstChild);
      fake.tabIndex = -1;
      fake.focus();
      this.dialog_.removeChild(fake);
    } else {
      this.dialog_.focus();
    }

    var redirectedEvent = document.createEvent('MouseEvents');
    redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window,
        e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey,
        e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
    this.dialog_.dispatchEvent(redirectedEvent);
    e.stopPropagation();
  },

  /**
   * Focuses on the first focusable element within the dialog. This will always blur the current
   * focus, even if nothing within the dialog is found.
   */
  focus_: function() {
    // Find element with `autofocus` attribute, or fall back to the first form/tabindex control.
    var target = this.dialog_.querySelector('[autofocus]:not([disabled])');
    if (!target && this.dialog_.tabIndex >= 0) {
      target = this.dialog_;
    }
    if (!target) {
      target = findFocusableElementWithin(this.dialog_);
    }
    safeBlur(document.activeElement);
    target && target.focus();
  },

  /**
   * Sets the zIndex for the backdrop and dialog.
   *
   * @param {number} dialogZ
   * @param {number} backdropZ
   */
  updateZIndex: function(dialogZ, backdropZ) {
    if (dialogZ < backdropZ) {
      throw new Error('dialogZ should never be < backdropZ');
    }
    this.dialog_.style.zIndex = dialogZ;
    this.backdrop_.style.zIndex = backdropZ;
  },

  /**
   * Shows the dialog. If the dialog is already open, this does nothing.
   */
  show: function() {
    if (!this.dialog_.open) {
      this.setOpen(true);
      this.focus_();
    }
  },

  /**
   * Show this dialog modally.
   */
  showModal: function() {
    if (this.dialog_.hasAttribute('open')) {
      throw new Error('Failed to execute \'showModal\' on dialog: The element is already open, and therefore cannot be opened modally.');
    }
    if (!isConnected(this.dialog_)) {
      throw new Error('Failed to execute \'showModal\' on dialog: The element is not in a Document.');
    }
    if (!dialogPolyfill.dm.pushDialog(this)) {
      throw new Error('Failed to execute \'showModal\' on dialog: There are too many open modal dialogs.');
    }

    if (createsStackingContext(this.dialog_.parentElement)) {
      console.warn('A dialog is being shown inside a stacking context. ' +
          'This may cause it to be unusable. For more information, see this link: ' +
          'https://github.com/GoogleChrome/dialog-polyfill/#stacking-context');
    }

    this.setOpen(true);
    this.openAsModal_ = true;

    // Optionally center vertically, relative to the current viewport.
    if (dialogPolyfill.needsCentering(this.dialog_)) {
      dialogPolyfill.reposition(this.dialog_);
      this.replacedStyleTop_ = true;
    } else {
      this.replacedStyleTop_ = false;
    }

    // Insert backdrop.
    this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling);

    // Focus on whatever inside the dialog.
    this.focus_();
  },

  /**
   * Closes this HTMLDialogElement. This is optional vs clearing the open
   * attribute, however this fires a 'close' event.
   *
   * @param {string=} opt_returnValue to use as the returnValue
   */
  close: function(opt_returnValue) {
    if (!this.dialog_.hasAttribute('open')) {
      throw new Error('Failed to execute \'close\' on dialog: The element does not have an \'open\' attribute, and therefore cannot be closed.');
    }
    this.setOpen(false);

    // Leave returnValue untouched in case it was set directly on the element
    if (opt_returnValue !== undefined) {
      this.dialog_.returnValue = opt_returnValue;
    }

    // Triggering "close" event for any attached listeners on the <dialog>.
    var closeEvent = new supportCustomEvent('close', {
      bubbles: false,
      cancelable: false
    });
    safeDispatchEvent(this.dialog_, closeEvent);
  }

});

var dialogPolyfill = {};

dialogPolyfill.reposition = function(element) {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  var topValue = scrollTop + (window.innerHeight - element.offsetHeight) / 2;
  element.style.top = Math.max(scrollTop, topValue) + 'px';
};

dialogPolyfill.isInlinePositionSetByStylesheet = function(element) {
  for (var i = 0; i < document.styleSheets.length; ++i) {
    var styleSheet = document.styleSheets[i];
    var cssRules = null;
    // Some browsers throw on cssRules.
    try {
      cssRules = styleSheet.cssRules;
    } catch (e) {}
    if (!cssRules) { continue; }
    for (var j = 0; j < cssRules.length; ++j) {
      var rule = cssRules[j];
      var selectedNodes = null;
      // Ignore errors on invalid selector texts.
      try {
        selectedNodes = document.querySelectorAll(rule.selectorText);
      } catch(e) {}
      if (!selectedNodes || !inNodeList(selectedNodes, element)) {
        continue;
      }
      var cssTop = rule.style.getPropertyValue('top');
      var cssBottom = rule.style.getPropertyValue('bottom');
      if ((cssTop && cssTop !== 'auto') || (cssBottom && cssBottom !== 'auto')) {
        return true;
      }
    }
  }
  return false;
};

dialogPolyfill.needsCentering = function(dialog) {
  var computedStyle = window.getComputedStyle(dialog);
  if (computedStyle.position !== 'absolute') {
    return false;
  }

  // We must determine whether the top/bottom specified value is non-auto.  In
  // WebKit/Blink, checking computedStyle.top == 'auto' is sufficient, but
  // Firefox returns the used value. So we do this crazy thing instead: check
  // the inline style and then go through CSS rules.
  if ((dialog.style.top !== 'auto' && dialog.style.top !== '') ||
      (dialog.style.bottom !== 'auto' && dialog.style.bottom !== '')) {
    return false;
  }
  return !dialogPolyfill.isInlinePositionSetByStylesheet(dialog);
};

/**
 * @param {!Element} element to force upgrade
 */
dialogPolyfill.forceRegisterDialog = function(element) {
  if (window.HTMLDialogElement || element.showModal) {
    console.warn('This browser already supports <dialog>, the polyfill ' +
        'may not work correctly', element);
  }
  if (element.localName !== 'dialog') {
    throw new Error('Failed to register dialog: The element is not a dialog.');
  }
  new dialogPolyfillInfo(/** @type {!HTMLDialogElement} */ (element));
};

/**
 * @param {!Element} element to upgrade, if necessary
 */
dialogPolyfill.registerDialog = function(element) {
  if (!element.showModal) {
    dialogPolyfill.forceRegisterDialog(element);
  }
};

/**
 * @constructor
 */
dialogPolyfill.DialogManager = function() {
  /** @type {!Array<!dialogPolyfillInfo>} */
  this.pendingDialogStack = [];

  var checkDOM = this.checkDOM_.bind(this);

  // The overlay is used to simulate how a modal dialog blocks the document.
  // The blocking dialog is positioned on top of the overlay, and the rest of
  // the dialogs on the pending dialog stack are positioned below it. In the
  // actual implementation, the modal dialog stacking is controlled by the
  // top layer, where z-index has no effect.
  this.overlay = document.createElement('div');
  this.overlay.className = '_dialog_overlay';
  this.overlay.addEventListener('click', function(e) {
    this.forwardTab_ = undefined;
    e.stopPropagation();
    checkDOM([]);  // sanity-check DOM
  }.bind(this));

  this.handleKey_ = this.handleKey_.bind(this);
  this.handleFocus_ = this.handleFocus_.bind(this);

  this.zIndexLow_ = 100000;
  this.zIndexHigh_ = 100000 + 150;

  this.forwardTab_ = undefined;

  if ('MutationObserver' in window) {
    this.mo_ = new MutationObserver(function(records) {
      var removed = [];
      records.forEach(function(rec) {
        for (var i = 0, c; c = rec.removedNodes[i]; ++i) {
          if (!(c instanceof Element)) {
            continue;
          } else if (c.localName === 'dialog') {
            removed.push(c);
          }
          removed = removed.concat(c.querySelectorAll('dialog'));
        }
      });
      removed.length && checkDOM(removed);
    });
  }
};

/**
 * Called on the first modal dialog being shown. Adds the overlay and related
 * handlers.
 */
dialogPolyfill.DialogManager.prototype.blockDocument = function() {
  document.documentElement.addEventListener('focus', this.handleFocus_, true);
  document.addEventListener('keydown', this.handleKey_);
  this.mo_ && this.mo_.observe(document, {childList: true, subtree: true});
};

/**
 * Called on the first modal dialog being removed, i.e., when no more modal
 * dialogs are visible.
 */
dialogPolyfill.DialogManager.prototype.unblockDocument = function() {
  document.documentElement.removeEventListener('focus', this.handleFocus_, true);
  document.removeEventListener('keydown', this.handleKey_);
  this.mo_ && this.mo_.disconnect();
};

/**
 * Updates the stacking of all known dialogs.
 */
dialogPolyfill.DialogManager.prototype.updateStacking = function() {
  var zIndex = this.zIndexHigh_;

  for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
    dpi.updateZIndex(--zIndex, --zIndex);
    if (i === 0) {
      this.overlay.style.zIndex = --zIndex;
    }
  }

  // Make the overlay a sibling of the dialog itself.
  var last = this.pendingDialogStack[0];
  if (last) {
    var p = last.dialog.parentNode || document.body;
    p.appendChild(this.overlay);
  } else if (this.overlay.parentNode) {
    this.overlay.parentNode.removeChild(this.overlay);
  }
};

/**
 * @param {Element} candidate to check if contained or is the top-most modal dialog
 * @return {boolean} whether candidate is contained in top dialog
 */
dialogPolyfill.DialogManager.prototype.containedByTopDialog_ = function(candidate) {
  while (candidate = findNearestDialog(candidate)) {
    for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
      if (dpi.dialog === candidate) {
        return i === 0;  // only valid if top-most
      }
    }
    candidate = candidate.parentElement;
  }
  return false;
};

dialogPolyfill.DialogManager.prototype.handleFocus_ = function(event) {
  var target = event.composedPath ? event.composedPath()[0] : event.target;

  if (this.containedByTopDialog_(target)) { return; }

  if (document.activeElement === document.documentElement) { return; }

  event.preventDefault();
  event.stopPropagation();
  safeBlur(/** @type {Element} */ (target));

  if (this.forwardTab_ === undefined) { return; }  // move focus only from a tab key

  var dpi = this.pendingDialogStack[0];
  var dialog = dpi.dialog;
  var position = dialog.compareDocumentPosition(target);
  if (position & Node.DOCUMENT_POSITION_PRECEDING) {
    if (this.forwardTab_) {
      // forward
      dpi.focus_();
    } else if (target !== document.documentElement) {
      // backwards if we're not already focused on <html>
      document.documentElement.focus();
    }
  }

  return false;
};

dialogPolyfill.DialogManager.prototype.handleKey_ = function(event) {
  this.forwardTab_ = undefined;
  if (event.keyCode === 27) {
    event.preventDefault();
    event.stopPropagation();
    var cancelEvent = new supportCustomEvent('cancel', {
      bubbles: false,
      cancelable: true
    });
    var dpi = this.pendingDialogStack[0];
    if (dpi && safeDispatchEvent(dpi.dialog, cancelEvent)) {
      dpi.dialog.close();
    }
  } else if (event.keyCode === 9) {
    this.forwardTab_ = !event.shiftKey;
  }
};

/**
 * Finds and downgrades any known modal dialogs that are no longer displayed. Dialogs that are
 * removed and immediately readded don't stay modal, they become normal.
 *
 * @param {!Array<!HTMLDialogElement>} removed that have definitely been removed
 */
dialogPolyfill.DialogManager.prototype.checkDOM_ = function(removed) {
  // This operates on a clone because it may cause it to change. Each change also calls
  // updateStacking, which only actually needs to happen once. But who removes many modal dialogs
  // at a time?!
  var clone = this.pendingDialogStack.slice();
  clone.forEach(function(dpi) {
    if (removed.indexOf(dpi.dialog) !== -1) {
      dpi.downgradeModal();
    } else {
      dpi.maybeHideModal();
    }
  });
};

/**
 * @param {!dialogPolyfillInfo} dpi
 * @return {boolean} whether the dialog was allowed
 */
dialogPolyfill.DialogManager.prototype.pushDialog = function(dpi) {
  var allowed = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;
  if (this.pendingDialogStack.length >= allowed) {
    return false;
  }
  if (this.pendingDialogStack.unshift(dpi) === 1) {
    this.blockDocument();
  }
  this.updateStacking();
  return true;
};

/**
 * @param {!dialogPolyfillInfo} dpi
 */
dialogPolyfill.DialogManager.prototype.removeDialog = function(dpi) {
  var index = this.pendingDialogStack.indexOf(dpi);
  if (index === -1) { return; }

  this.pendingDialogStack.splice(index, 1);
  if (this.pendingDialogStack.length === 0) {
    this.unblockDocument();
  }
  this.updateStacking();
};

dialogPolyfill.dm = new dialogPolyfill.DialogManager();
dialogPolyfill.formSubmitter = null;
dialogPolyfill.imagemapUseValue = null;

/**
 * Installs global handlers, such as click listers and native method overrides. These are needed
 * even if a no dialog is registered, as they deal with <form method="dialog">.
 */
if (window.HTMLDialogElement === undefined) {

  /**
   * If HTMLFormElement translates method="DIALOG" into 'get', then replace the descriptor with
   * one that returns the correct value.
   */
  var testForm = document.createElement('form');
  testForm.setAttribute('method', 'dialog');
  if (testForm.method !== 'dialog') {
    var methodDescriptor = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, 'method');
    if (methodDescriptor) {
      // nb. Some older iOS and older PhantomJS fail to return the descriptor. Don't do anything
      // and don't bother to update the element.
      var realGet = methodDescriptor.get;
      methodDescriptor.get = function() {
        if (isFormMethodDialog(this)) {
          return 'dialog';
        }
        return realGet.call(this);
      };
      var realSet = methodDescriptor.set;
      /** @this {HTMLElement} */
      methodDescriptor.set = function(v) {
        if (typeof v === 'string' && v.toLowerCase() === 'dialog') {
          return this.setAttribute('method', v);
        }
        return realSet.call(this, v);
      };
      Object.defineProperty(HTMLFormElement.prototype, 'method', methodDescriptor);
    }
  }

  /**
   * Global 'click' handler, to capture the <input type="submit"> or <button> element which has
   * submitted a <form method="dialog">. Needed as Safari and others don't report this inside
   * document.activeElement.
   */
  document.addEventListener('click', function(ev) {
    dialogPolyfill.formSubmitter = null;
    dialogPolyfill.imagemapUseValue = null;
    if (ev.defaultPrevented) { return; }  // e.g. a submit which prevents default submission

    var target = /** @type {Element} */ (ev.target);
    if ('composedPath' in ev) {
      var path = ev.composedPath();
      target = path.shift() || target;
    }
    if (!target || !isFormMethodDialog(target.form)) { return; }

    var valid = (target.type === 'submit' && ['button', 'input'].indexOf(target.localName) > -1);
    if (!valid) {
      if (!(target.localName === 'input' && target.type === 'image')) { return; }
      // this is a <input type="image">, which can submit forms
      dialogPolyfill.imagemapUseValue = ev.offsetX + ',' + ev.offsetY;
    }

    var dialog = findNearestDialog(target);
    if (!dialog) { return; }

    dialogPolyfill.formSubmitter = target;

  }, false);

  /**
   * Global 'submit' handler. This handles submits of `method="dialog"` which are invalid, i.e.,
   * outside a dialog. They get prevented.
   */
  document.addEventListener('submit', function(ev) {
    var form = ev.target;
    var dialog = findNearestDialog(form);
    if (dialog) {
      return;  // ignore, handle there
    }

    var submitter = findFormSubmitter(ev);
    var formmethod = submitter && submitter.getAttribute('formmethod') || form.getAttribute('method');
    if (formmethod === 'dialog') {
      ev.preventDefault();
    }
  });

  /**
   * Replace the native HTMLFormElement.submit() method, as it won't fire the
   * submit event and give us a chance to respond.
   */
  var nativeFormSubmit = HTMLFormElement.prototype.submit;
  var replacementFormSubmit = function () {
    if (!isFormMethodDialog(this)) {
      return nativeFormSubmit.call(this);
    }
    var dialog = findNearestDialog(this);
    dialog && dialog.close();
  };
  HTMLFormElement.prototype.submit = replacementFormSubmit;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dialogPolyfill);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getShows": () => (/* binding */ getShows),
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "searchShows": () => (/* binding */ searchShows),
/* harmony export */   "postComments": () => (/* binding */ postComments),
/* harmony export */   "postLikes": () => (/* binding */ postLikes)
/* harmony export */ });
const apiId = 'KIwE3ehvMSLohr1Qv6dH';

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const targetUrl = `${baseUrl + apiId}/`;

const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const postData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.text();
  } catch (error) {
    throw new Error(error.message);
  }
};

const getShows = async () => getData('https://api.tvmaze.com/shows');

const getLikes = async () => getData(`${targetUrl}likes`);

const getComments = async (itemId) => getData(`${targetUrl}comments?item_id=${itemId}`);

const postLikes = async (like) => postData(`${targetUrl}likes`, like);

const postComments = async (comment) => postData(`${targetUrl}comments`, comment);

const searchShows = async (query) => getData(`https://api.tvmaze.com/search/shows?q=${query}`);




/***/ }),

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dialog_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dialog-polyfill */ "./node_modules/dialog-polyfill/dist/dialog-polyfill.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _counters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counters */ "./src/counters.js");





const dialog = document.querySelector('#dialog');
dialog_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"].registerDialog(dialog);

const commentsList = document.querySelector('.comments-list');

const displayError = () => {
  const commentMessage = document.createElement('li');
  commentMessage.className = 'no-comments';
  commentMessage.textContent = 'No Comments';
  commentsList.append(commentMessage);
};

const displayComment = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.className = 'comment';
  commentElement.textContent = `${comment.creation_date} ${comment.username} : ${comment.comment}`;
  commentsList.append(commentElement);
};

const displayComments = async (showId) => {
  commentsList.innerHTML = '';

  try {
    const comments = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.getComments)(showId);
    comments.forEach((comment) => displayComment(comment));
    (0,_counters__WEBPACK_IMPORTED_MODULE_2__.displayCommentsCounter)(dialog, commentsList);
  } catch (error) {
    displayError();
  }
};

const validateComment = (name, comment) => name.value !== '' && comment.value !== '';

const inputComment = async () => {
  const nameInput = document.querySelector('#name');
  const commentInput = document.querySelector('#comment-input');
  if (validateComment(nameInput, commentInput)) {
    const commentObj = {
      item_id: `${commentsList.id}`,
      username: `${nameInput.value.trim()}`,
      comment: `${commentInput.value.trim()}`,
    };
    nameInput.value = '';
    commentInput.value = '';
    await (0,_api__WEBPACK_IMPORTED_MODULE_1__.postComments)(commentObj);
    displayComments(commentsList.id);
  }
};

const popup = (e) => {
  commentsList.innerHTML = '';
  const showElement = e.target.parentNode.parentNode;
  const showId = showElement.id;
  commentsList.id = showId;

  const summaryElement = document.querySelector('#dialog-summary');
  summaryElement.innerHTML = showElement.querySelector('#summary').innerHTML;

  dialog.showModal();

  displayComments(showId);

  const commentBtn = document.querySelector('#btn-comment');
  commentBtn.addEventListener('click', async (e) => inputComment(e));
};

const startComment = () => {
  const comments = document.querySelectorAll('.comments');
  const closeButton = document.querySelector('#close');

  Array.from(comments, (a) => a.addEventListener('click', (e) => popup(e)));

  closeButton.addEventListener('click', () => {
    dialog.close();
    commentsList.innerHTML = '';
    document.querySelector('#comments-header').textContent = 'Comments';
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startComment);


/***/ }),

/***/ "./src/counters.js":
/*!*************************!*\
  !*** ./src/counters.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemsCounter": () => (/* binding */ itemsCounter),
/* harmony export */   "commentsCounter": () => (/* binding */ commentsCounter),
/* harmony export */   "displayItemsCount": () => (/* binding */ displayItemsCount),
/* harmony export */   "displayCommentsCounter": () => (/* binding */ displayCommentsCounter)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");


const itemsCounter = () => {
  const cards = document.querySelectorAll('.tv-show-card');

  return cards.length;
};

const displayItemsCount = () => {
  let category = document.querySelector('.category-item.all');
  const active = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].getItem('active');

  if (active) {
    category = document.querySelector(`.category-item.${active}`);
    _storage__WEBPACK_IMPORTED_MODULE_0__["default"].setItem('active', '');
  }

  const span = document.createElement('span');
  span.className = 'items-counter';
  span.innerHTML = ` (${itemsCounter()})`;
  category.style.color = '#808080';
  category.appendChild(span);
};

const commentsCounter = (commentsList) => {
  if (commentsList.tagName === 'UL') {
    const comments = commentsList.querySelectorAll('.comment');
    return comments.length;
  } return 'Invalid Input';
};

const displayCommentsCounter = (element, commentsList) => {
  const commentHeader = element.querySelector('#comments-header');
  commentHeader.textContent = `Comments (${commentsCounter(commentsList)})`;
};




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "card": () => (/* binding */ card),
/* harmony export */   "search": () => (/* binding */ search),
/* harmony export */   "loadSearch": () => (/* binding */ loadSearch),
/* harmony export */   "refresh": () => (/* binding */ refresh)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



const card = (shows) => {
  const cardList = document.querySelector('.cards-container');

  shows.forEach((show) => {
    const li = document.createElement('li');
    li.className = 'tv-show-card';
    li.id = show.externals.imdb;

    const summary = document.createElement('div');
    summary.innerHTML = show.summary;
    summary.id = 'summary';
    summary.hidden = true;
    li.appendChild(summary);

    const img = document.createElement('img');
    img.className = 'tv-show-image';
    img.src = show.image.medium;
    img.alt = `${show.name} TV show image`;
    li.appendChild(img);

    const h4 = document.createElement('h4');
    h4.className = 'title';
    h4.innerHTML = show.name;
    li.appendChild(h4);

    let div = document.createElement('div');
    div.className = 'network-rating';
    let p = document.createElement('p');
    p.innerHTML = show.network.name;
    div.appendChild(p);
    p = document.createElement('p');
    p.innerHTML = `rating: ${show.rating.average}`;
    div.appendChild(p);
    li.appendChild(div);

    div = document.createElement('div');
    div.className = 'country-likes';
    p = document.createElement('p');
    p.className = 'country';
    p.innerHTML = `country: ${show.network.country.code}`;
    div.appendChild(p);
    p = document.createElement('p');
    p.className = 'likes';
    p.innerHTML = '<i class=\'heart icon\'></i> <span class=\'likes-count\'>0</span> Likes';
    div.appendChild(p);
    li.appendChild(div);

    div = document.createElement('div');
    div.className = 'card-actions';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'comments';
    button.innerHTML = 'Comments';
    div.appendChild(button);
    li.appendChild(div);

    cardList.appendChild(li);
  });
};

const refresh = () => window.location.reload();

const loadSearch = (shows) => {
  _storage__WEBPACK_IMPORTED_MODULE_1__["default"].setItem('isSearch', 'search requested');
  _storage__WEBPACK_IMPORTED_MODULE_1__["default"].setJson('search-results', shows);
  refresh();
};

const search = () => {
  const input = document.querySelector('.search-input');

  input.addEventListener('keydown', (e) => {
    const shows = [];

    if (e.key === 'Enter') {
      if (input.value) {
        (0,_api__WEBPACK_IMPORTED_MODULE_0__.searchShows)(input.value)
          .then((results) => {
            results.forEach((result) => shows.push(result.show));
            loadSearch(shows);
          });
      }
    }
  });
};



/***/ }),

/***/ "./src/likes.js":
/*!**********************!*\
  !*** ./src/likes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLikes": () => (/* binding */ addLikes),
/* harmony export */   "displayLikes": () => (/* binding */ displayLikes)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");


const itemsID = (element) => element.parentNode.parentNode.parentNode.id;

const displayLikes = async () => {
  const likesData = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getLikes)();
  const likesCount = document.querySelectorAll('.likes-count');

  likesCount.forEach((likes) => {
    const id = itemsID(likes);

    likesData.forEach((item) => {
      if (item.item_id === id) likes.innerHTML = item.likes;
    });
  });
};

const UpdateLike = async (target) => {
  const likesTag = target.parentNode.lastElementChild;
  let likes = Number(likesTag.textContent);
  likes += 1;

  likesTag.innerHTML = likes;
};

const addLikes = () => {
  const likeButtons = document.querySelectorAll('.heart.icon');

  likeButtons.forEach((heart) => {
    heart.addEventListener('click', (e) => {
      const id = itemsID(e.target);
      (0,_api__WEBPACK_IMPORTED_MODULE_0__.postLikes)({ item_id: id })
        .then((response) => {
          if (response === 'Created') {
            UpdateLike(e.target);
          }
        });
    });
  });
};




/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "returnHome": () => (/* binding */ returnHome),
/* harmony export */   "handleGenres": () => (/* binding */ handleGenres)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");



const addActive = (genre) => {
  _storage__WEBPACK_IMPORTED_MODULE_0__["default"].setItem('active', genre);
};

const returnHome = () => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => (0,_home__WEBPACK_IMPORTED_MODULE_1__.refresh)());
};

const handleGenres = (data) => {
  const categoryList = document.querySelectorAll('.category-item');

  categoryList.forEach((category) => {
    category.addEventListener('click', () => {
      const genre = category.classList[1];
      addActive(genre);
      let filter = [];

      switch (genre) {
        case 'all':
          (0,_home__WEBPACK_IMPORTED_MODULE_1__.refresh)();
          break;

        case 'drama':
          filter = data.filter((show) => show.genres.includes('Drama')
            || show.genres.includes('Thriller')
            || show.genres.includes('Action')
            || show.genres.includes('Mystery'));

          (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadSearch)(filter);
          break;

        case 'fiction':
          filter = data.filter((show) => show.genres.includes('Science-Fiction')
            || show.genres.includes('Fantasy')
            || show.genres.includes('Mystery')
            || show.genres.includes('Supernatural'));

          (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadSearch)(filter);
          break;

        case 'comedy':
          filter = data.filter((show) => show.genres.includes('Comedy')
            || show.genres.includes('Adventure')
            || show.genres.includes('Family')
            || show.genres.includes('Romance'));

          (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadSearch)(filter);
          break;

        case 'horror':
          filter = data.filter((show) => show.genres.includes('Horror'));
          (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadSearch)(filter);
          break;

        default:
          break;
      }
    });
  });
};



/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Storage {
  static setItem(key, value) {
    localStorage.setItem(key, value);
  }

  static getItem(key) {
    return localStorage.getItem(key);
  }

  static setJson(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static getJson(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments */ "./src/comments.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _likes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./likes */ "./src/likes.js");
/* harmony import */ var _counters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./counters */ "./src/counters.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/style.css");









const validateData = (data) => {
  const list = data;
  let filtered = [];
  filtered = data.filter((show) => !show.image || !show.network || !show.rating.average);

  filtered.forEach((show) => {
    data.forEach((item) => {
      if (show === item) {
        const index = list.indexOf(item);
        list.splice(index, 1);
      }
    });
  });

  return list;
};

const loadPage = async () => {
  const isSearch = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getItem('isSearch');
  let shows = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getShows)();
  shows = validateData(shows);

  if (isSearch) {
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].setItem('isSearch', '');
    let search = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getJson('search-results');
    search = validateData(search);

    if (search.length === 0) {
      document.querySelector('.cards-container').innerHTML = 'No results found.';
    }

    (0,_home__WEBPACK_IMPORTED_MODULE_2__.card)(search);
  } else {
    (0,_home__WEBPACK_IMPORTED_MODULE_2__.card)(shows);
  }

  (0,_navbar__WEBPACK_IMPORTED_MODULE_6__.handleGenres)(shows);
  (0,_likes__WEBPACK_IMPORTED_MODULE_4__.addLikes)();
  (0,_likes__WEBPACK_IMPORTED_MODULE_4__.displayLikes)();
  (0,_comments__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_counters__WEBPACK_IMPORTED_MODULE_5__.displayItemsCount)();
};

(0,_home__WEBPACK_IMPORTED_MODULE_2__.search)();
(0,_navbar__WEBPACK_IMPORTED_MODULE_6__.returnHome)();
loadPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSx3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LG9EQUFZO0FBQ2QsRUFBRSxxREFBWTtBQUNkLEVBQUUsNERBQWlCO0FBQ25COztBQUVBLDZDQUFNO0FBQ04sbURBQVU7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL3R2LXdlYmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdHYtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90di13ZWJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90di13ZWJhcHAvLi9ub2RlX21vZHVsZXMvZGlhbG9nLXBvbHlmaWxsL2Rpc3QvZGlhbG9nLXBvbHlmaWxsLmVzbS5qcyIsIndlYnBhY2s6Ly90di13ZWJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdHYtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3R2LXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdHYtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3R2LXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90di13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90di13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90di13ZWJhcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3R2LXdlYmFwcC8uL3NyYy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly90di13ZWJhcHAvLi9zcmMvY291bnRlcnMuanMiLCJ3ZWJwYWNrOi8vdHYtd2ViYXBwLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdHYtd2ViYXBwLy4vc3JjL2xpa2VzLmpzIiwid2VicGFjazovL3R2LXdlYmFwcC8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vdHYtd2ViYXBwLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdHYtd2ViYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R2LXdlYmFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90di13ZWJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R2LXdlYmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R2LXdlYmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R2LXdlYmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJnLWRhcms6ICMxMTE7XFxuICAtLWNvbG9yLXdoaXRlOiAjZmZmO1xcbiAgLS10aGVtZS1jb2xvcjogIzAwYjFhMjtcXG4gIC0tZ3JheTogI2Q4ZDhkODtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5KTtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTBweCA4dnc7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctZGFyayk7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZsZXg6IDFweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCAnY3Vyc2l2ZScsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2F0ZWdvcmllcyB7XFxuICBmbGV4OiA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4uY2F0ZWdvcnktaXRlbSB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhdGVnb3J5LWl0ZW06aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLml0ZW1zLWNvdW50ZXIge1xcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcXG59XFxuXFxuLmNvbnRlbnQtYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtaW4taGVpZ2h0OiA3NHZoO1xcbn1cXG5cXG4uYmFubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMCAzdnc7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FmYWZhZjtcXG59XFxuXFxuLnNlYXJjaGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjE2LCAyMTYsIDIxNiwgMC4yNSk7XFxuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMiwgMzMsIDQ2LCAwLjMpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJnLWRhcmspO1xcbn1cXG5cXG4uc2VhcmNoLmljb24ge1xcbiAgY29sb3I6ICM1NzU2NTY7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbjogMjBweCAzdnc7XFxufVxcblxcbi50di1zaG93LWNhcmQge1xcbiAgd2lkdGg6IDIxMHB4O1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxuICBtYXJnaW46IDIwcHggMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMywgMTQsIDIyLCAwLjkpO1xcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMjQsIDQyLCA0NiwgMC4zKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnR2LXNob3ctaW1hZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjgwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5uZXR3b3JrLXJhdGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5uZXR3b3JrLXJhdGluZyBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvdW50cnktbGlrZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmNvdW50cnksXFxuLmxpa2VzIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYXJ0Lmljb24ge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDJweDtcXG59XFxuXFxuLmhlYXJ0Lmljb246aG92ZXIge1xcbiAgY29sb3I6ICNmMDA7XFxufVxcblxcbi5jYXJkLWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDA7XFxufVxcblxcbi5jb21tZW50cyxcXG5idXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgY29sb3I6IHZhcigtLWJnLWRhcmspO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tbWVudHM6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbiNkaWFsb2cge1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmctZGFyayk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNkaWFsb2ctY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2RpYWxvZy1jb250ZW50IGlucHV0LFxcbnRleHRhcmVhIHtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIHBhZGRpbmc6IDRweCA1cHg7XFxufVxcblxcbi5uZXctY29tbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI25hbWUge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDE4MHB4O1xcbn1cXG5cXG4uY29tbWVudHMtbGlzdCB7XFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmNvbW1lbnRzLWxpc3QgbGkge1xcbiAgcGFkZGluZzogNHB4IDA7XFxufVxcblxcbmZvb3RlciB7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xcbn1cXG5cXG4uY3JlZGl0cyB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyLWJveCB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJnLWRhcmspO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsK0NBQStDO0VBQy9DLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsY0FBYztFQUNkLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHFDQUFxQztFQUNyQyw4Q0FBOEM7RUFDOUMsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyw4Q0FBOEM7RUFDOUMsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLWJnLWRhcms6ICMxMTE7XFxuICAtLWNvbG9yLXdoaXRlOiAjZmZmO1xcbiAgLS10aGVtZS1jb2xvcjogIzAwYjFhMjtcXG4gIC0tZ3JheTogI2Q4ZDhkODtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5KTtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTBweCA4dnc7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctZGFyayk7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZsZXg6IDFweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCAnY3Vyc2l2ZScsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2F0ZWdvcmllcyB7XFxuICBmbGV4OiA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4uY2F0ZWdvcnktaXRlbSB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhdGVnb3J5LWl0ZW06aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLml0ZW1zLWNvdW50ZXIge1xcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcXG59XFxuXFxuLmNvbnRlbnQtYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtaW4taGVpZ2h0OiA3NHZoO1xcbn1cXG5cXG4uYmFubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMCAzdnc7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FmYWZhZjtcXG59XFxuXFxuLnNlYXJjaGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjE2LCAyMTYsIDIxNiwgMC4yNSk7XFxuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMiwgMzMsIDQ2LCAwLjMpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJnLWRhcmspO1xcbn1cXG5cXG4uc2VhcmNoLmljb24ge1xcbiAgY29sb3I6ICM1NzU2NTY7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbjogMjBweCAzdnc7XFxufVxcblxcbi50di1zaG93LWNhcmQge1xcbiAgd2lkdGg6IDIxMHB4O1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxuICBtYXJnaW46IDIwcHggMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMywgMTQsIDIyLCAwLjkpO1xcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMjQsIDQyLCA0NiwgMC4zKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnR2LXNob3ctaW1hZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjgwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5uZXR3b3JrLXJhdGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5uZXR3b3JrLXJhdGluZyBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvdW50cnktbGlrZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmNvdW50cnksXFxuLmxpa2VzIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYXJ0Lmljb24ge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDJweDtcXG59XFxuXFxuLmhlYXJ0Lmljb246aG92ZXIge1xcbiAgY29sb3I6ICNmMDA7XFxufVxcblxcbi5jYXJkLWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDA7XFxufVxcblxcbi5jb21tZW50cyxcXG5idXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgY29sb3I6IHZhcigtLWJnLWRhcmspO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tbWVudHM6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbiNkaWFsb2cge1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmctZGFyayk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNkaWFsb2ctY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2RpYWxvZy1jb250ZW50IGlucHV0LFxcbnRleHRhcmVhIHtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIHBhZGRpbmc6IDRweCA1cHg7XFxufVxcblxcbi5uZXctY29tbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI25hbWUge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDE4MHB4O1xcbn1cXG5cXG4uY29tbWVudHMtbGlzdCB7XFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmNvbW1lbnRzLWxpc3QgbGkge1xcbiAgcGFkZGluZzogNHB4IDA7XFxufVxcblxcbmZvb3RlciB7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xcbn1cXG5cXG4uY3JlZGl0cyB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyLWJveCB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJnLWRhcmspO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBuYi4gVGhpcyBpcyBmb3IgSUUxMCBhbmQgbG93ZXIgX29ubHlfLlxudmFyIHN1cHBvcnRDdXN0b21FdmVudCA9IHdpbmRvdy5DdXN0b21FdmVudDtcbmlmICghc3VwcG9ydEN1c3RvbUV2ZW50IHx8IHR5cGVvZiBzdXBwb3J0Q3VzdG9tRXZlbnQgPT09ICdvYmplY3QnKSB7XG4gIHN1cHBvcnRDdXN0b21FdmVudCA9IGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCB4KSB7XG4gICAgeCA9IHggfHwge307XG4gICAgdmFyIGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZXYuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCAhIXguYnViYmxlcywgISF4LmNhbmNlbGFibGUsIHguZGV0YWlsIHx8IG51bGwpO1xuICAgIHJldHVybiBldjtcbiAgfTtcbiAgc3VwcG9ydEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XG59XG5cbi8qKlxuICogRGlzcGF0Y2hlcyB0aGUgcGFzc2VkIGV2ZW50IHRvIGJvdGggYW4gXCJvbjx0eXBlPlwiIGhhbmRsZXIgYXMgd2VsbCBhcyB2aWEgdGhlXG4gKiBub3JtYWwgZGlzcGF0Y2ggb3BlcmF0aW9uLiBEb2VzIG5vdCBidWJibGUuXG4gKlxuICogQHBhcmFtIHshRXZlbnRUYXJnZXR9IHRhcmdldFxuICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBzYWZlRGlzcGF0Y2hFdmVudCh0YXJnZXQsIGV2ZW50KSB7XG4gIHZhciBjaGVjayA9ICdvbicgKyBldmVudC50eXBlLnRvTG93ZXJDYXNlKCk7XG4gIGlmICh0eXBlb2YgdGFyZ2V0W2NoZWNrXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRhcmdldFtjaGVja10oZXZlbnQpO1xuICB9XG4gIHJldHVybiB0YXJnZXQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCB0byBjaGVjayBmb3Igc3RhY2tpbmcgY29udGV4dFxuICogQHJldHVybiB7Ym9vbGVhbn0gd2hldGhlciB0aGlzIGVsIG9yIGl0cyBwYXJlbnRzIGNyZWF0ZXMgYSBzdGFja2luZyBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZXNTdGFja2luZ0NvbnRleHQoZWwpIHtcbiAgd2hpbGUgKGVsICYmIGVsICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgdmFyIHMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgdmFyIGludmFsaWQgPSBmdW5jdGlvbihrLCBvaykge1xuICAgICAgcmV0dXJuICEoc1trXSA9PT0gdW5kZWZpbmVkIHx8IHNba10gPT09IG9rKTtcbiAgICB9O1xuXG4gICAgaWYgKHMub3BhY2l0eSA8IDEgfHxcbiAgICAgICAgaW52YWxpZCgnekluZGV4JywgJ2F1dG8nKSB8fFxuICAgICAgICBpbnZhbGlkKCd0cmFuc2Zvcm0nLCAnbm9uZScpIHx8XG4gICAgICAgIGludmFsaWQoJ21peEJsZW5kTW9kZScsICdub3JtYWwnKSB8fFxuICAgICAgICBpbnZhbGlkKCdmaWx0ZXInLCAnbm9uZScpIHx8XG4gICAgICAgIGludmFsaWQoJ3BlcnNwZWN0aXZlJywgJ25vbmUnKSB8fFxuICAgICAgICBzWydpc29sYXRpb24nXSA9PT0gJ2lzb2xhdGUnIHx8XG4gICAgICAgIHMucG9zaXRpb24gPT09ICdmaXhlZCcgfHxcbiAgICAgICAgcy53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9PT0gJ3RvdWNoJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIG5lYXJlc3QgPGRpYWxvZz4gZnJvbSB0aGUgcGFzc2VkIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCB0byBzZWFyY2ggZnJvbVxuICogQHJldHVybiB7SFRNTERpYWxvZ0VsZW1lbnR9IGRpYWxvZyBmb3VuZFxuICovXG5mdW5jdGlvbiBmaW5kTmVhcmVzdERpYWxvZyhlbCkge1xuICB3aGlsZSAoZWwpIHtcbiAgICBpZiAoZWwubG9jYWxOYW1lID09PSAnZGlhbG9nJykge1xuICAgICAgcmV0dXJuIC8qKiBAdHlwZSB7SFRNTERpYWxvZ0VsZW1lbnR9ICovIChlbCk7XG4gICAgfVxuICAgIGlmIChlbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfSBlbHNlIGlmIChlbC5wYXJlbnROb2RlKSB7XG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGUuaG9zdDtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwgPSBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBCbHVyIHRoZSBzcGVjaWZpZWQgZWxlbWVudCwgYXMgbG9uZyBhcyBpdCdzIG5vdCB0aGUgSFRNTCBib2R5IGVsZW1lbnQuXG4gKiBUaGlzIHdvcmtzIGFyb3VuZCBhbiBJRTkvMTAgYnVnIC0gYmx1cnJpbmcgdGhlIGJvZHkgY2F1c2VzIFdpbmRvd3MgdG9cbiAqIGJsdXIgdGhlIHdob2xlIGFwcGxpY2F0aW9uLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWwgdG8gYmx1clxuICovXG5mdW5jdGlvbiBzYWZlQmx1cihlbCkge1xuICAvLyBGaW5kIHRoZSBhY3R1YWwgZm9jdXNlZCBlbGVtZW50IHdoZW4gdGhlIGFjdGl2ZSBlbGVtZW50IGlzIGluc2lkZSBhIHNoYWRvdyByb290XG4gIHdoaWxlIChlbCAmJiBlbC5zaGFkb3dSb290ICYmIGVsLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudCkge1xuICAgIGVsID0gZWwuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuICB9XG5cbiAgaWYgKGVsICYmIGVsLmJsdXIgJiYgZWwgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICBlbC5ibHVyKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyFOb2RlTGlzdH0gbm9kZUxpc3QgdG8gc2VhcmNoXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgdG8gZmluZFxuICogQHJldHVybiB7Ym9vbGVhbn0gd2hldGhlciBub2RlIGlzIGluc2lkZSBub2RlTGlzdFxuICovXG5mdW5jdGlvbiBpbk5vZGVMaXN0KG5vZGVMaXN0LCBub2RlKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZUxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZUxpc3RbaV0gPT09IG5vZGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGVsIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtib29sZWFufSB3aGV0aGVyIHRoaXMgZm9ybSBoYXMgbWV0aG9kPVwiZGlhbG9nXCJcbiAqL1xuZnVuY3Rpb24gaXNGb3JtTWV0aG9kRGlhbG9nKGVsKSB7XG4gIGlmICghZWwgfHwgIWVsLmhhc0F0dHJpYnV0ZSgnbWV0aG9kJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgnbWV0aG9kJykudG9Mb3dlckNhc2UoKSA9PT0gJ2RpYWxvZyc7XG59XG5cbi8qKlxuICogQHBhcmFtIHshRG9jdW1lbnRGcmFnbWVudHwhRWxlbWVudH0gaG9zdEVsZW1lbnRcbiAqIEByZXR1cm4gez9FbGVtZW50fVxuICovXG5mdW5jdGlvbiBmaW5kRm9jdXNhYmxlRWxlbWVudFdpdGhpbihob3N0RWxlbWVudCkge1xuICAvLyBOb3RlIHRoYXQgdGhpcyBpcyAnYW55IGZvY3VzYWJsZSBhcmVhJy4gVGhpcyBsaXN0IGlzIHByb2JhYmx5IG5vdCBleGhhdXN0aXZlLCBidXQgdGhlXG4gIC8vIGFsdGVybmF0aXZlIGludm9sdmVzIHN0ZXBwaW5nIHRocm91Z2ggYW5kIHRyeWluZyB0byBmb2N1cyBldmVyeXRoaW5nLlxuICB2YXIgb3B0cyA9IFsnYnV0dG9uJywgJ2lucHV0JywgJ2tleWdlbicsICdzZWxlY3QnLCAndGV4dGFyZWEnXTtcbiAgdmFyIHF1ZXJ5ID0gb3B0cy5tYXAoZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gZWwgKyAnOm5vdChbZGlzYWJsZWRdKSc7XG4gIH0pO1xuICAvLyBUT0RPKHNhbXRob3IpOiB0YWJpbmRleCB2YWx1ZXMgdGhhdCBhcmUgbm90IG51bWVyaWMgYXJlIG5vdCBmb2N1c2FibGUuXG4gIHF1ZXJ5LnB1c2goJ1t0YWJpbmRleF06bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XCJcIl0pJyk7ICAvLyB0YWJpbmRleCAhPSBcIlwiLCBub3QgZGlzYWJsZWRcbiAgdmFyIHRhcmdldCA9IGhvc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkuam9pbignLCAnKSk7XG5cbiAgaWYgKCF0YXJnZXQgJiYgJ2F0dGFjaFNoYWRvdycgaW4gRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICAvLyBJZiB3ZSBoYXZlbid0IGZvdW5kIGEgZm9jdXNhYmxlIHRhcmdldCwgc2VlIGlmIHRoZSBob3N0IGVsZW1lbnQgY29udGFpbnMgYW4gZWxlbWVudFxuICAgIC8vIHdoaWNoIGhhcyBhIHNoYWRvd1Jvb3QuXG4gICAgLy8gUmVjdXJzaXZlbHkgc2VhcmNoIGZvciB0aGUgZmlyc3QgZm9jdXNhYmxlIGl0ZW0gaW4gc2hhZG93IHJvb3RzLlxuICAgIHZhciBlbGVtcyA9IGhvc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZWxlbXNbaV0udGFnTmFtZSAmJiBlbGVtc1tpXS5zaGFkb3dSb290KSB7XG4gICAgICAgIHRhcmdldCA9IGZpbmRGb2N1c2FibGVFbGVtZW50V2l0aGluKGVsZW1zW2ldLnNoYWRvd1Jvb3QpO1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGFuIGVsZW1lbnQgaXMgYXR0YWNoZWQgdG8gdGhlIERPTS5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCB0byBjaGVja1xuICogQHJldHVybiB7Ym9vbGVhbn0gd2hldGhlciB0aGUgZWxlbWVudCBpcyBpbiBET01cbiAqL1xuZnVuY3Rpb24gaXNDb25uZWN0ZWQoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5pc0Nvbm5lY3RlZCB8fCBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGVsZW1lbnQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldmVudFxuICogQHJldHVybiB7P0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGZpbmRGb3JtU3VibWl0dGVyKGV2ZW50KSB7XG4gIGlmIChldmVudC5zdWJtaXR0ZXIpIHtcbiAgICByZXR1cm4gZXZlbnQuc3VibWl0dGVyO1xuICB9XG5cbiAgdmFyIGZvcm0gPSBldmVudC50YXJnZXQ7XG4gIGlmICghKGZvcm0gaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgc3VibWl0dGVyID0gZGlhbG9nUG9seWZpbGwuZm9ybVN1Ym1pdHRlcjtcbiAgaWYgKCFzdWJtaXR0ZXIpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciByb290ID0gKCdnZXRSb290Tm9kZScgaW4gdGFyZ2V0ICYmIHRhcmdldC5nZXRSb290Tm9kZSgpIHx8IGRvY3VtZW50KTtcbiAgICBzdWJtaXR0ZXIgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBpZiAoIXN1Ym1pdHRlciB8fCBzdWJtaXR0ZXIuZm9ybSAhPT0gZm9ybSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBzdWJtaXR0ZXI7XG59XG5cbi8qKlxuICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIG1heWJlSGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBmb3JtID0gLyoqIEB0eXBlIHshSFRNTEZvcm1FbGVtZW50fSAqLyAoZXZlbnQudGFyZ2V0KTtcblxuICAvLyBXZSdkIGhhdmUgYSB2YWx1ZSBpZiB3ZSBjbGlja2VkIG9uIGFuIGltYWdlbWFwLlxuICB2YXIgdmFsdWUgPSBkaWFsb2dQb2x5ZmlsbC5pbWFnZW1hcFVzZVZhbHVlO1xuICB2YXIgc3VibWl0dGVyID0gZmluZEZvcm1TdWJtaXR0ZXIoZXZlbnQpO1xuICBpZiAodmFsdWUgPT09IG51bGwgJiYgc3VibWl0dGVyKSB7XG4gICAgdmFsdWUgPSBzdWJtaXR0ZXIudmFsdWU7XG4gIH1cblxuICAvLyBUaGVyZSBzaG91bGQgYWx3YXlzIGJlIGEgZGlhbG9nIGFzIHRoaXMgaGFuZGxlciBpcyBhZGRlZCBzcGVjaWZpY2FsbHkgb24gdGhlbSwgYnV0IGNoZWNrIGp1c3RcbiAgLy8gaW4gY2FzZS5cbiAgdmFyIGRpYWxvZyA9IGZpbmROZWFyZXN0RGlhbG9nKGZvcm0pO1xuICBpZiAoIWRpYWxvZykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFByZWZlciBmb3JtbWV0aG9kIG9uIHRoZSBidXR0b24uXG4gIHZhciBmb3JtbWV0aG9kID0gc3VibWl0dGVyICYmIHN1Ym1pdHRlci5nZXRBdHRyaWJ1dGUoJ2Zvcm1tZXRob2QnKSB8fCBmb3JtLmdldEF0dHJpYnV0ZSgnbWV0aG9kJyk7XG4gIGlmIChmb3JtbWV0aG9kICE9PSAnZGlhbG9nJykge1xuICAgIHJldHVybjtcbiAgfVxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgLy8gbmIuIHdlIGV4cGxpY2l0bHkgY2hlY2sgYWdhaW5zdCBudWxsL3VuZGVmaW5lZFxuICAgIGRpYWxvZy5jbG9zZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyFIVE1MRGlhbG9nRWxlbWVudH0gZGlhbG9nIHRvIHVwZ3JhZGVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBkaWFsb2dQb2x5ZmlsbEluZm8oZGlhbG9nKSB7XG4gIHRoaXMuZGlhbG9nXyA9IGRpYWxvZztcbiAgdGhpcy5yZXBsYWNlZFN0eWxlVG9wXyA9IGZhbHNlO1xuICB0aGlzLm9wZW5Bc01vZGFsXyA9IGZhbHNlO1xuXG4gIC8vIFNldCBhMTF5IHJvbGUuIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCBkaWFsb2cgaW1wbGljaXRseSBrbm93IHRoaXMgYWxyZWFkeS5cbiAgaWYgKCFkaWFsb2cuaGFzQXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICBkaWFsb2cuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xuICB9XG5cbiAgZGlhbG9nLnNob3cgPSB0aGlzLnNob3cuYmluZCh0aGlzKTtcbiAgZGlhbG9nLnNob3dNb2RhbCA9IHRoaXMuc2hvd01vZGFsLmJpbmQodGhpcyk7XG4gIGRpYWxvZy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcblxuICBkaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgbWF5YmVIYW5kbGVTdWJtaXQsIGZhbHNlKTtcblxuICBpZiAoISgncmV0dXJuVmFsdWUnIGluIGRpYWxvZykpIHtcbiAgICBkaWFsb2cucmV0dXJuVmFsdWUgPSAnJztcbiAgfVxuXG4gIGlmICgnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4gICAgdmFyIG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5tYXliZUhpZGVNb2RhbC5iaW5kKHRoaXMpKTtcbiAgICBtby5vYnNlcnZlKGRpYWxvZywge2F0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogWydvcGVuJ119KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJRTEwIGFuZCBiZWxvdyBzdXBwb3J0LiBOb3RlIHRoYXQgRE9NTm9kZVJlbW92ZWQgZXRjIGZpcmUgX2JlZm9yZV8gcmVtb3ZhbC4gVGhleSBhbHNvXG4gICAgLy8gc2VlbSB0byBmaXJlIGV2ZW4gaWYgdGhlIGVsZW1lbnQgd2FzIHJlbW92ZWQgYXMgcGFydCBvZiBhIHBhcmVudCByZW1vdmFsLiBVc2UgdGhlIHJlbW92ZWRcbiAgICAvLyBldmVudHMgdG8gZm9yY2UgZG93bmdyYWRlICh1c2VmdWwgaWYgcmVtb3ZlZC9pbW1lZGlhdGVseSBhZGRlZCkuXG4gICAgdmFyIHJlbW92ZWQgPSBmYWxzZTtcbiAgICB2YXIgY2IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlbW92ZWQgPyB0aGlzLmRvd25ncmFkZU1vZGFsKCkgOiB0aGlzLm1heWJlSGlkZU1vZGFsKCk7XG4gICAgICByZW1vdmVkID0gZmFsc2U7XG4gICAgfS5iaW5kKHRoaXMpO1xuICAgIHZhciB0aW1lb3V0O1xuICAgIHZhciBkZWxheU1vZGVsID0gZnVuY3Rpb24oZXYpIHtcbiAgICAgIGlmIChldi50YXJnZXQgIT09IGRpYWxvZykgeyByZXR1cm47IH0gIC8vIG5vdCBmb3IgYSBjaGlsZCBlbGVtZW50XG4gICAgICB2YXIgY2FuZCA9ICdET01Ob2RlUmVtb3ZlZCc7XG4gICAgICByZW1vdmVkIHw9IChldi50eXBlLnN1YnN0cigwLCBjYW5kLmxlbmd0aCkgPT09IGNhbmQpO1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChjYiwgMCk7XG4gICAgfTtcbiAgICBbJ0RPTUF0dHJNb2RpZmllZCcsICdET01Ob2RlUmVtb3ZlZCcsICdET01Ob2RlUmVtb3ZlZEZyb21Eb2N1bWVudCddLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZGVsYXlNb2RlbCk7XG4gICAgfSk7XG4gIH1cbiAgLy8gTm90ZSB0aGF0IHRoZSBET00gaXMgb2JzZXJ2ZWQgaW5zaWRlIERpYWxvZ01hbmFnZXIgd2hpbGUgYW55IGRpYWxvZ1xuICAvLyBpcyBiZWluZyBkaXNwbGF5ZWQgYXMgYSBtb2RhbCwgdG8gY2F0Y2ggbW9kYWwgcmVtb3ZhbCBmcm9tIHRoZSBET00uXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRpYWxvZywgJ29wZW4nLCB7XG4gICAgc2V0OiB0aGlzLnNldE9wZW4uYmluZCh0aGlzKSxcbiAgICBnZXQ6IGRpYWxvZy5oYXNBdHRyaWJ1dGUuYmluZChkaWFsb2csICdvcGVuJylcbiAgfSk7XG5cbiAgdGhpcy5iYWNrZHJvcF8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGhpcy5iYWNrZHJvcF8uY2xhc3NOYW1lID0gJ2JhY2tkcm9wJztcbiAgdGhpcy5iYWNrZHJvcF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcgICwgdGhpcy5iYWNrZHJvcE1vdXNlRXZlbnRfLmJpbmQodGhpcykpO1xuICB0aGlzLmJhY2tkcm9wXy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmJhY2tkcm9wTW91c2VFdmVudF8uYmluZCh0aGlzKSk7XG4gIHRoaXMuYmFja2Ryb3BfLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAgICAsIHRoaXMuYmFja2Ryb3BNb3VzZUV2ZW50Xy5iaW5kKHRoaXMpKTtcbn1cblxuZGlhbG9nUG9seWZpbGxJbmZvLnByb3RvdHlwZSA9IC8qKiBAdHlwZSB7SFRNTERpYWxvZ0VsZW1lbnQucHJvdG90eXBlfSAqLyAoe1xuXG4gIGdldCBkaWFsb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nXztcbiAgfSxcblxuICAvKipcbiAgICogTWF5YmUgcmVtb3ZlIHRoaXMgZGlhbG9nIGZyb20gdGhlIG1vZGFsIHRvcCBsYXllci4gVGhpcyBpcyBjYWxsZWQgd2hlblxuICAgKiBhIG1vZGFsIGRpYWxvZyBtYXkgbm8gbG9uZ2VyIGJlIHRlbmFibGUsIGUuZy4sIHdoZW4gdGhlIGRpYWxvZyBpcyBub1xuICAgKiBsb25nZXIgb3BlbiBvciBpcyBubyBsb25nZXIgcGFydCBvZiB0aGUgRE9NLlxuICAgKi9cbiAgbWF5YmVIaWRlTW9kYWw6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmRpYWxvZ18uaGFzQXR0cmlidXRlKCdvcGVuJykgJiYgaXNDb25uZWN0ZWQodGhpcy5kaWFsb2dfKSkgeyByZXR1cm47IH1cbiAgICB0aGlzLmRvd25ncmFkZU1vZGFsKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIGRpYWxvZyBmcm9tIHRoZSBtb2RhbCB0b3AgbGF5ZXIsIGxlYXZpbmcgaXQgYXMgYSBub24tbW9kYWwuXG4gICAqL1xuICBkb3duZ3JhZGVNb2RhbDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5Bc01vZGFsXykgeyByZXR1cm47IH1cbiAgICB0aGlzLm9wZW5Bc01vZGFsXyA9IGZhbHNlO1xuICAgIHRoaXMuZGlhbG9nXy5zdHlsZS56SW5kZXggPSAnJztcblxuICAgIC8vIFRoaXMgd29uJ3QgbWF0Y2ggdGhlIG5hdGl2ZSA8ZGlhbG9nPiBleGFjdGx5IGJlY2F1c2UgaWYgdGhlIHVzZXIgc2V0IHRvcCBvbiBhIGNlbnRlcmVkXG4gICAgLy8gcG9seWZpbGwgZGlhbG9nLCB0aGF0IHRvcCBnZXRzIHRocm93biBhd2F5IHdoZW4gdGhlIGRpYWxvZyBpcyBjbG9zZWQuIE5vdCBzdXJlIGl0J3NcbiAgICAvLyBwb3NzaWJsZSB0byBwb2x5ZmlsbCB0aGlzIHBlcmZlY3RseS5cbiAgICBpZiAodGhpcy5yZXBsYWNlZFN0eWxlVG9wXykge1xuICAgICAgdGhpcy5kaWFsb2dfLnN0eWxlLnRvcCA9ICcnO1xuICAgICAgdGhpcy5yZXBsYWNlZFN0eWxlVG9wXyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENsZWFyIHRoZSBiYWNrZHJvcCBhbmQgcmVtb3ZlIGZyb20gdGhlIG1hbmFnZXIuXG4gICAgdGhpcy5iYWNrZHJvcF8ucGFyZW50Tm9kZSAmJiB0aGlzLmJhY2tkcm9wXy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuYmFja2Ryb3BfKTtcbiAgICBkaWFsb2dQb2x5ZmlsbC5kbS5yZW1vdmVEaWFsb2codGhpcyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgd2hldGhlciB0byBvcGVuIG9yIGNsb3NlIHRoaXMgZGlhbG9nXG4gICAqL1xuICBzZXRPcGVuOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5kaWFsb2dfLmhhc0F0dHJpYnV0ZSgnb3BlbicpIHx8IHRoaXMuZGlhbG9nXy5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlhbG9nXy5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgICAgIHRoaXMubWF5YmVIaWRlTW9kYWwoKTsgIC8vIG5iLiByZWR1bmRhbnQgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIG1vdXNlIGV2ZW50cyAoJ21vdXNldXAnLCAnbW91c2Vkb3duJywgJ2NsaWNrJykgb24gdGhlIGZha2UgLmJhY2tkcm9wIGVsZW1lbnQsIHJlZGlyZWN0aW5nIHRoZW0gYXMgaWZcbiAgICogdGhleSB3ZXJlIG9uIHRoZSBkaWFsb2cgaXRzZWxmLlxuICAgKlxuICAgKiBAcGFyYW0geyFFdmVudH0gZSB0byByZWRpcmVjdFxuICAgKi9cbiAgYmFja2Ryb3BNb3VzZUV2ZW50XzogZnVuY3Rpb24oZSkge1xuICAgIGlmICghdGhpcy5kaWFsb2dfLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgLy8gQ2xpY2tpbmcgb24gdGhlIGJhY2tkcm9wIHNob3VsZCBtb3ZlIHRoZSBpbXBsaWNpdCBjdXJzb3IsIGV2ZW4gaWYgZGlhbG9nIGNhbm5vdCBiZVxuICAgICAgLy8gZm9jdXNlZC4gQ3JlYXRlIGEgZmFrZSB0aGluZyB0byBmb2N1cyBvbi4gSWYgdGhlIGJhY2tkcm9wIHdhcyBfYmVmb3JlXyB0aGUgZGlhbG9nLCB0aGlzXG4gICAgICAvLyB3b3VsZCBub3QgYmUgbmVlZGVkIC0gY2xpY2tzIHdvdWxkIG1vdmUgdGhlIGltcGxpY2l0IGN1cnNvciB0aGVyZS5cbiAgICAgIHZhciBmYWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmRpYWxvZ18uaW5zZXJ0QmVmb3JlKGZha2UsIHRoaXMuZGlhbG9nXy5maXJzdENoaWxkKTtcbiAgICAgIGZha2UudGFiSW5kZXggPSAtMTtcbiAgICAgIGZha2UuZm9jdXMoKTtcbiAgICAgIHRoaXMuZGlhbG9nXy5yZW1vdmVDaGlsZChmYWtlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaWFsb2dfLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgdmFyIHJlZGlyZWN0ZWRFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuICAgIHJlZGlyZWN0ZWRFdmVudC5pbml0TW91c2VFdmVudChlLnR5cGUsIGUuYnViYmxlcywgZS5jYW5jZWxhYmxlLCB3aW5kb3csXG4gICAgICAgIGUuZGV0YWlsLCBlLnNjcmVlblgsIGUuc2NyZWVuWSwgZS5jbGllbnRYLCBlLmNsaWVudFksIGUuY3RybEtleSxcbiAgICAgICAgZS5hbHRLZXksIGUuc2hpZnRLZXksIGUubWV0YUtleSwgZS5idXR0b24sIGUucmVsYXRlZFRhcmdldCk7XG4gICAgdGhpcy5kaWFsb2dfLmRpc3BhdGNoRXZlbnQocmVkaXJlY3RlZEV2ZW50KTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIG9uIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCB3aXRoaW4gdGhlIGRpYWxvZy4gVGhpcyB3aWxsIGFsd2F5cyBibHVyIHRoZSBjdXJyZW50XG4gICAqIGZvY3VzLCBldmVuIGlmIG5vdGhpbmcgd2l0aGluIHRoZSBkaWFsb2cgaXMgZm91bmQuXG4gICAqL1xuICBmb2N1c186IGZ1bmN0aW9uKCkge1xuICAgIC8vIEZpbmQgZWxlbWVudCB3aXRoIGBhdXRvZm9jdXNgIGF0dHJpYnV0ZSwgb3IgZmFsbCBiYWNrIHRvIHRoZSBmaXJzdCBmb3JtL3RhYmluZGV4IGNvbnRyb2wuXG4gICAgdmFyIHRhcmdldCA9IHRoaXMuZGlhbG9nXy5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXTpub3QoW2Rpc2FibGVkXSknKTtcbiAgICBpZiAoIXRhcmdldCAmJiB0aGlzLmRpYWxvZ18udGFiSW5kZXggPj0gMCkge1xuICAgICAgdGFyZ2V0ID0gdGhpcy5kaWFsb2dfO1xuICAgIH1cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGFyZ2V0ID0gZmluZEZvY3VzYWJsZUVsZW1lbnRXaXRoaW4odGhpcy5kaWFsb2dfKTtcbiAgICB9XG4gICAgc2FmZUJsdXIoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgdGFyZ2V0ICYmIHRhcmdldC5mb2N1cygpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB6SW5kZXggZm9yIHRoZSBiYWNrZHJvcCBhbmQgZGlhbG9nLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZGlhbG9nWlxuICAgKiBAcGFyYW0ge251bWJlcn0gYmFja2Ryb3BaXG4gICAqL1xuICB1cGRhdGVaSW5kZXg6IGZ1bmN0aW9uKGRpYWxvZ1osIGJhY2tkcm9wWikge1xuICAgIGlmIChkaWFsb2daIDwgYmFja2Ryb3BaKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpYWxvZ1ogc2hvdWxkIG5ldmVyIGJlIDwgYmFja2Ryb3BaJyk7XG4gICAgfVxuICAgIHRoaXMuZGlhbG9nXy5zdHlsZS56SW5kZXggPSBkaWFsb2daO1xuICAgIHRoaXMuYmFja2Ryb3BfLnN0eWxlLnpJbmRleCA9IGJhY2tkcm9wWjtcbiAgfSxcblxuICAvKipcbiAgICogU2hvd3MgdGhlIGRpYWxvZy4gSWYgdGhlIGRpYWxvZyBpcyBhbHJlYWR5IG9wZW4sIHRoaXMgZG9lcyBub3RoaW5nLlxuICAgKi9cbiAgc2hvdzogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmRpYWxvZ18ub3Blbikge1xuICAgICAgdGhpcy5zZXRPcGVuKHRydWUpO1xuICAgICAgdGhpcy5mb2N1c18oKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNob3cgdGhpcyBkaWFsb2cgbW9kYWxseS5cbiAgICovXG4gIHNob3dNb2RhbDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZGlhbG9nXy5oYXNBdHRyaWJ1dGUoJ29wZW4nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZXhlY3V0ZSBcXCdzaG93TW9kYWxcXCcgb24gZGlhbG9nOiBUaGUgZWxlbWVudCBpcyBhbHJlYWR5IG9wZW4sIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIG9wZW5lZCBtb2RhbGx5LicpO1xuICAgIH1cbiAgICBpZiAoIWlzQ29ubmVjdGVkKHRoaXMuZGlhbG9nXykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGV4ZWN1dGUgXFwnc2hvd01vZGFsXFwnIG9uIGRpYWxvZzogVGhlIGVsZW1lbnQgaXMgbm90IGluIGEgRG9jdW1lbnQuJyk7XG4gICAgfVxuICAgIGlmICghZGlhbG9nUG9seWZpbGwuZG0ucHVzaERpYWxvZyh0aGlzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZXhlY3V0ZSBcXCdzaG93TW9kYWxcXCcgb24gZGlhbG9nOiBUaGVyZSBhcmUgdG9vIG1hbnkgb3BlbiBtb2RhbCBkaWFsb2dzLicpO1xuICAgIH1cblxuICAgIGlmIChjcmVhdGVzU3RhY2tpbmdDb250ZXh0KHRoaXMuZGlhbG9nXy5wYXJlbnRFbGVtZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKCdBIGRpYWxvZyBpcyBiZWluZyBzaG93biBpbnNpZGUgYSBzdGFja2luZyBjb250ZXh0LiAnICtcbiAgICAgICAgICAnVGhpcyBtYXkgY2F1c2UgaXQgdG8gYmUgdW51c2FibGUuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhpcyBsaW5rOiAnICtcbiAgICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS9kaWFsb2ctcG9seWZpbGwvI3N0YWNraW5nLWNvbnRleHQnKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldE9wZW4odHJ1ZSk7XG4gICAgdGhpcy5vcGVuQXNNb2RhbF8gPSB0cnVlO1xuXG4gICAgLy8gT3B0aW9uYWxseSBjZW50ZXIgdmVydGljYWxseSwgcmVsYXRpdmUgdG8gdGhlIGN1cnJlbnQgdmlld3BvcnQuXG4gICAgaWYgKGRpYWxvZ1BvbHlmaWxsLm5lZWRzQ2VudGVyaW5nKHRoaXMuZGlhbG9nXykpIHtcbiAgICAgIGRpYWxvZ1BvbHlmaWxsLnJlcG9zaXRpb24odGhpcy5kaWFsb2dfKTtcbiAgICAgIHRoaXMucmVwbGFjZWRTdHlsZVRvcF8gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlcGxhY2VkU3R5bGVUb3BfID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSW5zZXJ0IGJhY2tkcm9wLlxuICAgIHRoaXMuZGlhbG9nXy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmJhY2tkcm9wXywgdGhpcy5kaWFsb2dfLm5leHRTaWJsaW5nKTtcblxuICAgIC8vIEZvY3VzIG9uIHdoYXRldmVyIGluc2lkZSB0aGUgZGlhbG9nLlxuICAgIHRoaXMuZm9jdXNfKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGlzIEhUTUxEaWFsb2dFbGVtZW50LiBUaGlzIGlzIG9wdGlvbmFsIHZzIGNsZWFyaW5nIHRoZSBvcGVuXG4gICAqIGF0dHJpYnV0ZSwgaG93ZXZlciB0aGlzIGZpcmVzIGEgJ2Nsb3NlJyBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRfcmV0dXJuVmFsdWUgdG8gdXNlIGFzIHRoZSByZXR1cm5WYWx1ZVxuICAgKi9cbiAgY2xvc2U6IGZ1bmN0aW9uKG9wdF9yZXR1cm5WYWx1ZSkge1xuICAgIGlmICghdGhpcy5kaWFsb2dfLmhhc0F0dHJpYnV0ZSgnb3BlbicpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBleGVjdXRlIFxcJ2Nsb3NlXFwnIG9uIGRpYWxvZzogVGhlIGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBhbiBcXCdvcGVuXFwnIGF0dHJpYnV0ZSwgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgY2xvc2VkLicpO1xuICAgIH1cbiAgICB0aGlzLnNldE9wZW4oZmFsc2UpO1xuXG4gICAgLy8gTGVhdmUgcmV0dXJuVmFsdWUgdW50b3VjaGVkIGluIGNhc2UgaXQgd2FzIHNldCBkaXJlY3RseSBvbiB0aGUgZWxlbWVudFxuICAgIGlmIChvcHRfcmV0dXJuVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kaWFsb2dfLnJldHVyblZhbHVlID0gb3B0X3JldHVyblZhbHVlO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXJpbmcgXCJjbG9zZVwiIGV2ZW50IGZvciBhbnkgYXR0YWNoZWQgbGlzdGVuZXJzIG9uIHRoZSA8ZGlhbG9nPi5cbiAgICB2YXIgY2xvc2VFdmVudCA9IG5ldyBzdXBwb3J0Q3VzdG9tRXZlbnQoJ2Nsb3NlJywge1xuICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICBjYW5jZWxhYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIHNhZmVEaXNwYXRjaEV2ZW50KHRoaXMuZGlhbG9nXywgY2xvc2VFdmVudCk7XG4gIH1cblxufSk7XG5cbnZhciBkaWFsb2dQb2x5ZmlsbCA9IHt9O1xuXG5kaWFsb2dQb2x5ZmlsbC5yZXBvc2l0aW9uID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICB2YXIgc2Nyb2xsVG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgdmFyIHRvcFZhbHVlID0gc2Nyb2xsVG9wICsgKHdpbmRvdy5pbm5lckhlaWdodCAtIGVsZW1lbnQub2Zmc2V0SGVpZ2h0KSAvIDI7XG4gIGVsZW1lbnQuc3R5bGUudG9wID0gTWF0aC5tYXgoc2Nyb2xsVG9wLCB0b3BWYWx1ZSkgKyAncHgnO1xufTtcblxuZGlhbG9nUG9seWZpbGwuaXNJbmxpbmVQb3NpdGlvblNldEJ5U3R5bGVzaGVldCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBzdHlsZVNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgdmFyIGNzc1J1bGVzID0gbnVsbDtcbiAgICAvLyBTb21lIGJyb3dzZXJzIHRocm93IG9uIGNzc1J1bGVzLlxuICAgIHRyeSB7XG4gICAgICBjc3NSdWxlcyA9IHN0eWxlU2hlZXQuY3NzUnVsZXM7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICBpZiAoIWNzc1J1bGVzKSB7IGNvbnRpbnVlOyB9XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBjc3NSdWxlcy5sZW5ndGg7ICsraikge1xuICAgICAgdmFyIHJ1bGUgPSBjc3NSdWxlc1tqXTtcbiAgICAgIHZhciBzZWxlY3RlZE5vZGVzID0gbnVsbDtcbiAgICAgIC8vIElnbm9yZSBlcnJvcnMgb24gaW52YWxpZCBzZWxlY3RvciB0ZXh0cy5cbiAgICAgIHRyeSB7XG4gICAgICAgIHNlbGVjdGVkTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHJ1bGUuc2VsZWN0b3JUZXh0KTtcbiAgICAgIH0gY2F0Y2goZSkge31cbiAgICAgIGlmICghc2VsZWN0ZWROb2RlcyB8fCAhaW5Ob2RlTGlzdChzZWxlY3RlZE5vZGVzLCBlbGVtZW50KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHZhciBjc3NUb3AgPSBydWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RvcCcpO1xuICAgICAgdmFyIGNzc0JvdHRvbSA9IHJ1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm90dG9tJyk7XG4gICAgICBpZiAoKGNzc1RvcCAmJiBjc3NUb3AgIT09ICdhdXRvJykgfHwgKGNzc0JvdHRvbSAmJiBjc3NCb3R0b20gIT09ICdhdXRvJykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmRpYWxvZ1BvbHlmaWxsLm5lZWRzQ2VudGVyaW5nID0gZnVuY3Rpb24oZGlhbG9nKSB7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZGlhbG9nKTtcbiAgaWYgKGNvbXB1dGVkU3R5bGUucG9zaXRpb24gIT09ICdhYnNvbHV0ZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBXZSBtdXN0IGRldGVybWluZSB3aGV0aGVyIHRoZSB0b3AvYm90dG9tIHNwZWNpZmllZCB2YWx1ZSBpcyBub24tYXV0by4gIEluXG4gIC8vIFdlYktpdC9CbGluaywgY2hlY2tpbmcgY29tcHV0ZWRTdHlsZS50b3AgPT0gJ2F1dG8nIGlzIHN1ZmZpY2llbnQsIGJ1dFxuICAvLyBGaXJlZm94IHJldHVybnMgdGhlIHVzZWQgdmFsdWUuIFNvIHdlIGRvIHRoaXMgY3JhenkgdGhpbmcgaW5zdGVhZDogY2hlY2tcbiAgLy8gdGhlIGlubGluZSBzdHlsZSBhbmQgdGhlbiBnbyB0aHJvdWdoIENTUyBydWxlcy5cbiAgaWYgKChkaWFsb2cuc3R5bGUudG9wICE9PSAnYXV0bycgJiYgZGlhbG9nLnN0eWxlLnRvcCAhPT0gJycpIHx8XG4gICAgICAoZGlhbG9nLnN0eWxlLmJvdHRvbSAhPT0gJ2F1dG8nICYmIGRpYWxvZy5zdHlsZS5ib3R0b20gIT09ICcnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gIWRpYWxvZ1BvbHlmaWxsLmlzSW5saW5lUG9zaXRpb25TZXRCeVN0eWxlc2hlZXQoZGlhbG9nKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudCB0byBmb3JjZSB1cGdyYWRlXG4gKi9cbmRpYWxvZ1BvbHlmaWxsLmZvcmNlUmVnaXN0ZXJEaWFsb2cgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gIGlmICh3aW5kb3cuSFRNTERpYWxvZ0VsZW1lbnQgfHwgZWxlbWVudC5zaG93TW9kYWwpIHtcbiAgICBjb25zb2xlLndhcm4oJ1RoaXMgYnJvd3NlciBhbHJlYWR5IHN1cHBvcnRzIDxkaWFsb2c+LCB0aGUgcG9seWZpbGwgJyArXG4gICAgICAgICdtYXkgbm90IHdvcmsgY29ycmVjdGx5JywgZWxlbWVudCk7XG4gIH1cbiAgaWYgKGVsZW1lbnQubG9jYWxOYW1lICE9PSAnZGlhbG9nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHJlZ2lzdGVyIGRpYWxvZzogVGhlIGVsZW1lbnQgaXMgbm90IGEgZGlhbG9nLicpO1xuICB9XG4gIG5ldyBkaWFsb2dQb2x5ZmlsbEluZm8oLyoqIEB0eXBlIHshSFRNTERpYWxvZ0VsZW1lbnR9ICovIChlbGVtZW50KSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnQgdG8gdXBncmFkZSwgaWYgbmVjZXNzYXJ5XG4gKi9cbmRpYWxvZ1BvbHlmaWxsLnJlZ2lzdGVyRGlhbG9nID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQuc2hvd01vZGFsKSB7XG4gICAgZGlhbG9nUG9seWZpbGwuZm9yY2VSZWdpc3RlckRpYWxvZyhlbGVtZW50KTtcbiAgfVxufTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZGlhbG9nUG9seWZpbGwuRGlhbG9nTWFuYWdlciA9IGZ1bmN0aW9uKCkge1xuICAvKiogQHR5cGUgeyFBcnJheTwhZGlhbG9nUG9seWZpbGxJbmZvPn0gKi9cbiAgdGhpcy5wZW5kaW5nRGlhbG9nU3RhY2sgPSBbXTtcblxuICB2YXIgY2hlY2tET00gPSB0aGlzLmNoZWNrRE9NXy5iaW5kKHRoaXMpO1xuXG4gIC8vIFRoZSBvdmVybGF5IGlzIHVzZWQgdG8gc2ltdWxhdGUgaG93IGEgbW9kYWwgZGlhbG9nIGJsb2NrcyB0aGUgZG9jdW1lbnQuXG4gIC8vIFRoZSBibG9ja2luZyBkaWFsb2cgaXMgcG9zaXRpb25lZCBvbiB0b3Agb2YgdGhlIG92ZXJsYXksIGFuZCB0aGUgcmVzdCBvZlxuICAvLyB0aGUgZGlhbG9ncyBvbiB0aGUgcGVuZGluZyBkaWFsb2cgc3RhY2sgYXJlIHBvc2l0aW9uZWQgYmVsb3cgaXQuIEluIHRoZVxuICAvLyBhY3R1YWwgaW1wbGVtZW50YXRpb24sIHRoZSBtb2RhbCBkaWFsb2cgc3RhY2tpbmcgaXMgY29udHJvbGxlZCBieSB0aGVcbiAgLy8gdG9wIGxheWVyLCB3aGVyZSB6LWluZGV4IGhhcyBubyBlZmZlY3QuXG4gIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aGlzLm92ZXJsYXkuY2xhc3NOYW1lID0gJ19kaWFsb2dfb3ZlcmxheSc7XG4gIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB0aGlzLmZvcndhcmRUYWJfID0gdW5kZWZpbmVkO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY2hlY2tET00oW10pOyAgLy8gc2FuaXR5LWNoZWNrIERPTVxuICB9LmJpbmQodGhpcykpO1xuXG4gIHRoaXMuaGFuZGxlS2V5XyA9IHRoaXMuaGFuZGxlS2V5Xy5iaW5kKHRoaXMpO1xuICB0aGlzLmhhbmRsZUZvY3VzXyA9IHRoaXMuaGFuZGxlRm9jdXNfLmJpbmQodGhpcyk7XG5cbiAgdGhpcy56SW5kZXhMb3dfID0gMTAwMDAwO1xuICB0aGlzLnpJbmRleEhpZ2hfID0gMTAwMDAwICsgMTUwO1xuXG4gIHRoaXMuZm9yd2FyZFRhYl8gPSB1bmRlZmluZWQ7XG5cbiAgaWYgKCdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcbiAgICB0aGlzLm1vXyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKHJlY29yZHMpIHtcbiAgICAgIHZhciByZW1vdmVkID0gW107XG4gICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24ocmVjKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBjOyBjID0gcmVjLnJlbW92ZWROb2Rlc1tpXTsgKytpKSB7XG4gICAgICAgICAgaWYgKCEoYyBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGMubG9jYWxOYW1lID09PSAnZGlhbG9nJykge1xuICAgICAgICAgICAgcmVtb3ZlZC5wdXNoKGMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZW1vdmVkID0gcmVtb3ZlZC5jb25jYXQoYy5xdWVyeVNlbGVjdG9yQWxsKCdkaWFsb2cnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmVtb3ZlZC5sZW5ndGggJiYgY2hlY2tET00ocmVtb3ZlZCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIG9uIHRoZSBmaXJzdCBtb2RhbCBkaWFsb2cgYmVpbmcgc2hvd24uIEFkZHMgdGhlIG92ZXJsYXkgYW5kIHJlbGF0ZWRcbiAqIGhhbmRsZXJzLlxuICovXG5kaWFsb2dQb2x5ZmlsbC5EaWFsb2dNYW5hZ2VyLnByb3RvdHlwZS5ibG9ja0RvY3VtZW50ID0gZnVuY3Rpb24oKSB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuaGFuZGxlRm9jdXNfLCB0cnVlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5Xyk7XG4gIHRoaXMubW9fICYmIHRoaXMubW9fLm9ic2VydmUoZG9jdW1lbnQsIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWV9KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIG9uIHRoZSBmaXJzdCBtb2RhbCBkaWFsb2cgYmVpbmcgcmVtb3ZlZCwgaS5lLiwgd2hlbiBubyBtb3JlIG1vZGFsXG4gKiBkaWFsb2dzIGFyZSB2aXNpYmxlLlxuICovXG5kaWFsb2dQb2x5ZmlsbC5EaWFsb2dNYW5hZ2VyLnByb3RvdHlwZS51bmJsb2NrRG9jdW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5oYW5kbGVGb2N1c18sIHRydWUpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlfKTtcbiAgdGhpcy5tb18gJiYgdGhpcy5tb18uZGlzY29ubmVjdCgpO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBzdGFja2luZyBvZiBhbGwga25vd24gZGlhbG9ncy5cbiAqL1xuZGlhbG9nUG9seWZpbGwuRGlhbG9nTWFuYWdlci5wcm90b3R5cGUudXBkYXRlU3RhY2tpbmcgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHpJbmRleCA9IHRoaXMuekluZGV4SGlnaF87XG5cbiAgZm9yICh2YXIgaSA9IDAsIGRwaTsgZHBpID0gdGhpcy5wZW5kaW5nRGlhbG9nU3RhY2tbaV07ICsraSkge1xuICAgIGRwaS51cGRhdGVaSW5kZXgoLS16SW5kZXgsIC0tekluZGV4KTtcbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLnpJbmRleCA9IC0tekluZGV4O1xuICAgIH1cbiAgfVxuXG4gIC8vIE1ha2UgdGhlIG92ZXJsYXkgYSBzaWJsaW5nIG9mIHRoZSBkaWFsb2cgaXRzZWxmLlxuICB2YXIgbGFzdCA9IHRoaXMucGVuZGluZ0RpYWxvZ1N0YWNrWzBdO1xuICBpZiAobGFzdCkge1xuICAgIHZhciBwID0gbGFzdC5kaWFsb2cucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5O1xuICAgIHAuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcbiAgfSBlbHNlIGlmICh0aGlzLm92ZXJsYXkucGFyZW50Tm9kZSkge1xuICAgIHRoaXMub3ZlcmxheS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMub3ZlcmxheSk7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBjYW5kaWRhdGUgdG8gY2hlY2sgaWYgY29udGFpbmVkIG9yIGlzIHRoZSB0b3AtbW9zdCBtb2RhbCBkaWFsb2dcbiAqIEByZXR1cm4ge2Jvb2xlYW59IHdoZXRoZXIgY2FuZGlkYXRlIGlzIGNvbnRhaW5lZCBpbiB0b3AgZGlhbG9nXG4gKi9cbmRpYWxvZ1BvbHlmaWxsLkRpYWxvZ01hbmFnZXIucHJvdG90eXBlLmNvbnRhaW5lZEJ5VG9wRGlhbG9nXyA9IGZ1bmN0aW9uKGNhbmRpZGF0ZSkge1xuICB3aGlsZSAoY2FuZGlkYXRlID0gZmluZE5lYXJlc3REaWFsb2coY2FuZGlkYXRlKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBkcGk7IGRwaSA9IHRoaXMucGVuZGluZ0RpYWxvZ1N0YWNrW2ldOyArK2kpIHtcbiAgICAgIGlmIChkcGkuZGlhbG9nID09PSBjYW5kaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGkgPT09IDA7ICAvLyBvbmx5IHZhbGlkIGlmIHRvcC1tb3N0XG4gICAgICB9XG4gICAgfVxuICAgIGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZS5wYXJlbnRFbGVtZW50O1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmRpYWxvZ1BvbHlmaWxsLkRpYWxvZ01hbmFnZXIucHJvdG90eXBlLmhhbmRsZUZvY3VzXyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHZhciB0YXJnZXQgPSBldmVudC5jb21wb3NlZFBhdGggPyBldmVudC5jb21wb3NlZFBhdGgoKVswXSA6IGV2ZW50LnRhcmdldDtcblxuICBpZiAodGhpcy5jb250YWluZWRCeVRvcERpYWxvZ18odGFyZ2V0KSkgeyByZXR1cm47IH1cblxuICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7IHJldHVybjsgfVxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICBzYWZlQmx1cigvKiogQHR5cGUge0VsZW1lbnR9ICovICh0YXJnZXQpKTtcblxuICBpZiAodGhpcy5mb3J3YXJkVGFiXyA9PT0gdW5kZWZpbmVkKSB7IHJldHVybjsgfSAgLy8gbW92ZSBmb2N1cyBvbmx5IGZyb20gYSB0YWIga2V5XG5cbiAgdmFyIGRwaSA9IHRoaXMucGVuZGluZ0RpYWxvZ1N0YWNrWzBdO1xuICB2YXIgZGlhbG9nID0gZHBpLmRpYWxvZztcbiAgdmFyIHBvc2l0aW9uID0gZGlhbG9nLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHRhcmdldCk7XG4gIGlmIChwb3NpdGlvbiAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fUFJFQ0VESU5HKSB7XG4gICAgaWYgKHRoaXMuZm9yd2FyZFRhYl8pIHtcbiAgICAgIC8vIGZvcndhcmRcbiAgICAgIGRwaS5mb2N1c18oKTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAvLyBiYWNrd2FyZHMgaWYgd2UncmUgbm90IGFscmVhZHkgZm9jdXNlZCBvbiA8aHRtbD5cbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmRpYWxvZ1BvbHlmaWxsLkRpYWxvZ01hbmFnZXIucHJvdG90eXBlLmhhbmRsZUtleV8gPSBmdW5jdGlvbihldmVudCkge1xuICB0aGlzLmZvcndhcmRUYWJfID0gdW5kZWZpbmVkO1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHZhciBjYW5jZWxFdmVudCA9IG5ldyBzdXBwb3J0Q3VzdG9tRXZlbnQoJ2NhbmNlbCcsIHtcbiAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHZhciBkcGkgPSB0aGlzLnBlbmRpbmdEaWFsb2dTdGFja1swXTtcbiAgICBpZiAoZHBpICYmIHNhZmVEaXNwYXRjaEV2ZW50KGRwaS5kaWFsb2csIGNhbmNlbEV2ZW50KSkge1xuICAgICAgZHBpLmRpYWxvZy5jbG9zZSgpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSA5KSB7XG4gICAgdGhpcy5mb3J3YXJkVGFiXyA9ICFldmVudC5zaGlmdEtleTtcbiAgfVxufTtcblxuLyoqXG4gKiBGaW5kcyBhbmQgZG93bmdyYWRlcyBhbnkga25vd24gbW9kYWwgZGlhbG9ncyB0aGF0IGFyZSBubyBsb25nZXIgZGlzcGxheWVkLiBEaWFsb2dzIHRoYXQgYXJlXG4gKiByZW1vdmVkIGFuZCBpbW1lZGlhdGVseSByZWFkZGVkIGRvbid0IHN0YXkgbW9kYWwsIHRoZXkgYmVjb21lIG5vcm1hbC5cbiAqXG4gKiBAcGFyYW0geyFBcnJheTwhSFRNTERpYWxvZ0VsZW1lbnQ+fSByZW1vdmVkIHRoYXQgaGF2ZSBkZWZpbml0ZWx5IGJlZW4gcmVtb3ZlZFxuICovXG5kaWFsb2dQb2x5ZmlsbC5EaWFsb2dNYW5hZ2VyLnByb3RvdHlwZS5jaGVja0RPTV8gPSBmdW5jdGlvbihyZW1vdmVkKSB7XG4gIC8vIFRoaXMgb3BlcmF0ZXMgb24gYSBjbG9uZSBiZWNhdXNlIGl0IG1heSBjYXVzZSBpdCB0byBjaGFuZ2UuIEVhY2ggY2hhbmdlIGFsc28gY2FsbHNcbiAgLy8gdXBkYXRlU3RhY2tpbmcsIHdoaWNoIG9ubHkgYWN0dWFsbHkgbmVlZHMgdG8gaGFwcGVuIG9uY2UuIEJ1dCB3aG8gcmVtb3ZlcyBtYW55IG1vZGFsIGRpYWxvZ3NcbiAgLy8gYXQgYSB0aW1lPyFcbiAgdmFyIGNsb25lID0gdGhpcy5wZW5kaW5nRGlhbG9nU3RhY2suc2xpY2UoKTtcbiAgY2xvbmUuZm9yRWFjaChmdW5jdGlvbihkcGkpIHtcbiAgICBpZiAocmVtb3ZlZC5pbmRleE9mKGRwaS5kaWFsb2cpICE9PSAtMSkge1xuICAgICAgZHBpLmRvd25ncmFkZU1vZGFsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRwaS5tYXliZUhpZGVNb2RhbCgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IWRpYWxvZ1BvbHlmaWxsSW5mb30gZHBpXG4gKiBAcmV0dXJuIHtib29sZWFufSB3aGV0aGVyIHRoZSBkaWFsb2cgd2FzIGFsbG93ZWRcbiAqL1xuZGlhbG9nUG9seWZpbGwuRGlhbG9nTWFuYWdlci5wcm90b3R5cGUucHVzaERpYWxvZyA9IGZ1bmN0aW9uKGRwaSkge1xuICB2YXIgYWxsb3dlZCA9ICh0aGlzLnpJbmRleEhpZ2hfIC0gdGhpcy56SW5kZXhMb3dfKSAvIDIgLSAxO1xuICBpZiAodGhpcy5wZW5kaW5nRGlhbG9nU3RhY2subGVuZ3RoID49IGFsbG93ZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHRoaXMucGVuZGluZ0RpYWxvZ1N0YWNrLnVuc2hpZnQoZHBpKSA9PT0gMSkge1xuICAgIHRoaXMuYmxvY2tEb2N1bWVudCgpO1xuICB9XG4gIHRoaXMudXBkYXRlU3RhY2tpbmcoKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IWRpYWxvZ1BvbHlmaWxsSW5mb30gZHBpXG4gKi9cbmRpYWxvZ1BvbHlmaWxsLkRpYWxvZ01hbmFnZXIucHJvdG90eXBlLnJlbW92ZURpYWxvZyA9IGZ1bmN0aW9uKGRwaSkge1xuICB2YXIgaW5kZXggPSB0aGlzLnBlbmRpbmdEaWFsb2dTdGFjay5pbmRleE9mKGRwaSk7XG4gIGlmIChpbmRleCA9PT0gLTEpIHsgcmV0dXJuOyB9XG5cbiAgdGhpcy5wZW5kaW5nRGlhbG9nU3RhY2suc3BsaWNlKGluZGV4LCAxKTtcbiAgaWYgKHRoaXMucGVuZGluZ0RpYWxvZ1N0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgIHRoaXMudW5ibG9ja0RvY3VtZW50KCk7XG4gIH1cbiAgdGhpcy51cGRhdGVTdGFja2luZygpO1xufTtcblxuZGlhbG9nUG9seWZpbGwuZG0gPSBuZXcgZGlhbG9nUG9seWZpbGwuRGlhbG9nTWFuYWdlcigpO1xuZGlhbG9nUG9seWZpbGwuZm9ybVN1Ym1pdHRlciA9IG51bGw7XG5kaWFsb2dQb2x5ZmlsbC5pbWFnZW1hcFVzZVZhbHVlID0gbnVsbDtcblxuLyoqXG4gKiBJbnN0YWxscyBnbG9iYWwgaGFuZGxlcnMsIHN1Y2ggYXMgY2xpY2sgbGlzdGVycyBhbmQgbmF0aXZlIG1ldGhvZCBvdmVycmlkZXMuIFRoZXNlIGFyZSBuZWVkZWRcbiAqIGV2ZW4gaWYgYSBubyBkaWFsb2cgaXMgcmVnaXN0ZXJlZCwgYXMgdGhleSBkZWFsIHdpdGggPGZvcm0gbWV0aG9kPVwiZGlhbG9nXCI+LlxuICovXG5pZiAod2luZG93LkhUTUxEaWFsb2dFbGVtZW50ID09PSB1bmRlZmluZWQpIHtcblxuICAvKipcbiAgICogSWYgSFRNTEZvcm1FbGVtZW50IHRyYW5zbGF0ZXMgbWV0aG9kPVwiRElBTE9HXCIgaW50byAnZ2V0JywgdGhlbiByZXBsYWNlIHRoZSBkZXNjcmlwdG9yIHdpdGhcbiAgICogb25lIHRoYXQgcmV0dXJucyB0aGUgY29ycmVjdCB2YWx1ZS5cbiAgICovXG4gIHZhciB0ZXN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgdGVzdEZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZGlhbG9nJyk7XG4gIGlmICh0ZXN0Rm9ybS5tZXRob2QgIT09ICdkaWFsb2cnKSB7XG4gICAgdmFyIG1ldGhvZERlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUsICdtZXRob2QnKTtcbiAgICBpZiAobWV0aG9kRGVzY3JpcHRvcikge1xuICAgICAgLy8gbmIuIFNvbWUgb2xkZXIgaU9TIGFuZCBvbGRlciBQaGFudG9tSlMgZmFpbCB0byByZXR1cm4gdGhlIGRlc2NyaXB0b3IuIERvbid0IGRvIGFueXRoaW5nXG4gICAgICAvLyBhbmQgZG9uJ3QgYm90aGVyIHRvIHVwZGF0ZSB0aGUgZWxlbWVudC5cbiAgICAgIHZhciByZWFsR2V0ID0gbWV0aG9kRGVzY3JpcHRvci5nZXQ7XG4gICAgICBtZXRob2REZXNjcmlwdG9yLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaXNGb3JtTWV0aG9kRGlhbG9nKHRoaXMpKSB7XG4gICAgICAgICAgcmV0dXJuICdkaWFsb2cnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWFsR2V0LmNhbGwodGhpcyk7XG4gICAgICB9O1xuICAgICAgdmFyIHJlYWxTZXQgPSBtZXRob2REZXNjcmlwdG9yLnNldDtcbiAgICAgIC8qKiBAdGhpcyB7SFRNTEVsZW1lbnR9ICovXG4gICAgICBtZXRob2REZXNjcmlwdG9yLnNldCA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJyAmJiB2LnRvTG93ZXJDYXNlKCkgPT09ICdkaWFsb2cnKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2V0QXR0cmlidXRlKCdtZXRob2QnLCB2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVhbFNldC5jYWxsKHRoaXMsIHYpO1xuICAgICAgfTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLCAnbWV0aG9kJywgbWV0aG9kRGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdsb2JhbCAnY2xpY2snIGhhbmRsZXIsIHRvIGNhcHR1cmUgdGhlIDxpbnB1dCB0eXBlPVwic3VibWl0XCI+IG9yIDxidXR0b24+IGVsZW1lbnQgd2hpY2ggaGFzXG4gICAqIHN1Ym1pdHRlZCBhIDxmb3JtIG1ldGhvZD1cImRpYWxvZ1wiPi4gTmVlZGVkIGFzIFNhZmFyaSBhbmQgb3RoZXJzIGRvbid0IHJlcG9ydCB0aGlzIGluc2lkZVxuICAgKiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LlxuICAgKi9cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldikge1xuICAgIGRpYWxvZ1BvbHlmaWxsLmZvcm1TdWJtaXR0ZXIgPSBudWxsO1xuICAgIGRpYWxvZ1BvbHlmaWxsLmltYWdlbWFwVXNlVmFsdWUgPSBudWxsO1xuICAgIGlmIChldi5kZWZhdWx0UHJldmVudGVkKSB7IHJldHVybjsgfSAgLy8gZS5nLiBhIHN1Ym1pdCB3aGljaCBwcmV2ZW50cyBkZWZhdWx0IHN1Ym1pc3Npb25cblxuICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUge0VsZW1lbnR9ICovIChldi50YXJnZXQpO1xuICAgIGlmICgnY29tcG9zZWRQYXRoJyBpbiBldikge1xuICAgICAgdmFyIHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcbiAgICAgIHRhcmdldCA9IHBhdGguc2hpZnQoKSB8fCB0YXJnZXQ7XG4gICAgfVxuICAgIGlmICghdGFyZ2V0IHx8ICFpc0Zvcm1NZXRob2REaWFsb2codGFyZ2V0LmZvcm0pKSB7IHJldHVybjsgfVxuXG4gICAgdmFyIHZhbGlkID0gKHRhcmdldC50eXBlID09PSAnc3VibWl0JyAmJiBbJ2J1dHRvbicsICdpbnB1dCddLmluZGV4T2YodGFyZ2V0LmxvY2FsTmFtZSkgPiAtMSk7XG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgaWYgKCEodGFyZ2V0LmxvY2FsTmFtZSA9PT0gJ2lucHV0JyAmJiB0YXJnZXQudHlwZSA9PT0gJ2ltYWdlJykpIHsgcmV0dXJuOyB9XG4gICAgICAvLyB0aGlzIGlzIGEgPGlucHV0IHR5cGU9XCJpbWFnZVwiPiwgd2hpY2ggY2FuIHN1Ym1pdCBmb3Jtc1xuICAgICAgZGlhbG9nUG9seWZpbGwuaW1hZ2VtYXBVc2VWYWx1ZSA9IGV2Lm9mZnNldFggKyAnLCcgKyBldi5vZmZzZXRZO1xuICAgIH1cblxuICAgIHZhciBkaWFsb2cgPSBmaW5kTmVhcmVzdERpYWxvZyh0YXJnZXQpO1xuICAgIGlmICghZGlhbG9nKSB7IHJldHVybjsgfVxuXG4gICAgZGlhbG9nUG9seWZpbGwuZm9ybVN1Ym1pdHRlciA9IHRhcmdldDtcblxuICB9LCBmYWxzZSk7XG5cbiAgLyoqXG4gICAqIEdsb2JhbCAnc3VibWl0JyBoYW5kbGVyLiBUaGlzIGhhbmRsZXMgc3VibWl0cyBvZiBgbWV0aG9kPVwiZGlhbG9nXCJgIHdoaWNoIGFyZSBpbnZhbGlkLCBpLmUuLFxuICAgKiBvdXRzaWRlIGEgZGlhbG9nLiBUaGV5IGdldCBwcmV2ZW50ZWQuXG4gICAqL1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldikge1xuICAgIHZhciBmb3JtID0gZXYudGFyZ2V0O1xuICAgIHZhciBkaWFsb2cgPSBmaW5kTmVhcmVzdERpYWxvZyhmb3JtKTtcbiAgICBpZiAoZGlhbG9nKSB7XG4gICAgICByZXR1cm47ICAvLyBpZ25vcmUsIGhhbmRsZSB0aGVyZVxuICAgIH1cblxuICAgIHZhciBzdWJtaXR0ZXIgPSBmaW5kRm9ybVN1Ym1pdHRlcihldik7XG4gICAgdmFyIGZvcm1tZXRob2QgPSBzdWJtaXR0ZXIgJiYgc3VibWl0dGVyLmdldEF0dHJpYnV0ZSgnZm9ybW1ldGhvZCcpIHx8IGZvcm0uZ2V0QXR0cmlidXRlKCdtZXRob2QnKTtcbiAgICBpZiAoZm9ybW1ldGhvZCA9PT0gJ2RpYWxvZycpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogUmVwbGFjZSB0aGUgbmF0aXZlIEhUTUxGb3JtRWxlbWVudC5zdWJtaXQoKSBtZXRob2QsIGFzIGl0IHdvbid0IGZpcmUgdGhlXG4gICAqIHN1Ym1pdCBldmVudCBhbmQgZ2l2ZSB1cyBhIGNoYW5jZSB0byByZXNwb25kLlxuICAgKi9cbiAgdmFyIG5hdGl2ZUZvcm1TdWJtaXQgPSBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLnN1Ym1pdDtcbiAgdmFyIHJlcGxhY2VtZW50Rm9ybVN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWlzRm9ybU1ldGhvZERpYWxvZyh0aGlzKSkge1xuICAgICAgcmV0dXJuIG5hdGl2ZUZvcm1TdWJtaXQuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgdmFyIGRpYWxvZyA9IGZpbmROZWFyZXN0RGlhbG9nKHRoaXMpO1xuICAgIGRpYWxvZyAmJiBkaWFsb2cuY2xvc2UoKTtcbiAgfTtcbiAgSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5zdWJtaXQgPSByZXBsYWNlbWVudEZvcm1TdWJtaXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpYWxvZ1BvbHlmaWxsO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFwaUlkID0gJ0tJd0UzZWh2TVNMb2hyMVF2NmRIJztcblxuY29uc3QgYmFzZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuXG5jb25zdCB0YXJnZXRVcmwgPSBgJHtiYXNlVXJsICsgYXBpSWR9L2A7XG5cbmNvbnN0IGdldERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICB9XG59O1xuXG5jb25zdCBwb3N0RGF0YSA9IGFzeW5jICh1cmwsIGRhdGEpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gIH1cbn07XG5cbmNvbnN0IGdldFNob3dzID0gYXN5bmMgKCkgPT4gZ2V0RGF0YSgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cycpO1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IGdldERhdGEoYCR7dGFyZ2V0VXJsfWxpa2VzYCk7XG5cbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGl0ZW1JZCkgPT4gZ2V0RGF0YShgJHt0YXJnZXRVcmx9Y29tbWVudHM/aXRlbV9pZD0ke2l0ZW1JZH1gKTtcblxuY29uc3QgcG9zdExpa2VzID0gYXN5bmMgKGxpa2UpID0+IHBvc3REYXRhKGAke3RhcmdldFVybH1saWtlc2AsIGxpa2UpO1xuXG5jb25zdCBwb3N0Q29tbWVudHMgPSBhc3luYyAoY29tbWVudCkgPT4gcG9zdERhdGEoYCR7dGFyZ2V0VXJsfWNvbW1lbnRzYCwgY29tbWVudCk7XG5cbmNvbnN0IHNlYXJjaFNob3dzID0gYXN5bmMgKHF1ZXJ5KSA9PiBnZXREYXRhKGBodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPSR7cXVlcnl9YCk7XG5cbmV4cG9ydCB7XG4gIGdldFNob3dzLCBnZXRMaWtlcywgZ2V0Q29tbWVudHMsIHBvc3REYXRhLCBzZWFyY2hTaG93cywgcG9zdENvbW1lbnRzLCBwb3N0TGlrZXMsXG59O1xuIiwiaW1wb3J0IGRpYWxvZ1BvbHlmaWxsIGZyb20gJ2RpYWxvZy1wb2x5ZmlsbCc7XG5pbXBvcnQge1xuICBnZXRDb21tZW50cyxcbiAgcG9zdENvbW1lbnRzLFxufSBmcm9tICcuL2FwaSc7XG5cbmltcG9ydCB7IGRpc3BsYXlDb21tZW50c0NvdW50ZXIgfSBmcm9tICcuL2NvdW50ZXJzJztcblxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZycpO1xuZGlhbG9nUG9seWZpbGwucmVnaXN0ZXJEaWFsb2coZGlhbG9nKTtcblxuY29uc3QgY29tbWVudHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWxpc3QnKTtcblxuY29uc3QgZGlzcGxheUVycm9yID0gKCkgPT4ge1xuICBjb25zdCBjb21tZW50TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbW1lbnRNZXNzYWdlLmNsYXNzTmFtZSA9ICduby1jb21tZW50cyc7XG4gIGNvbW1lbnRNZXNzYWdlLnRleHRDb250ZW50ID0gJ05vIENvbW1lbnRzJztcbiAgY29tbWVudHNMaXN0LmFwcGVuZChjb21tZW50TWVzc2FnZSk7XG59O1xuXG5jb25zdCBkaXNwbGF5Q29tbWVudCA9IChjb21tZW50KSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29tbWVudEVsZW1lbnQuY2xhc3NOYW1lID0gJ2NvbW1lbnQnO1xuICBjb21tZW50RWxlbWVudC50ZXh0Q29udGVudCA9IGAke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50LnVzZXJuYW1lfSA6ICR7Y29tbWVudC5jb21tZW50fWA7XG4gIGNvbW1lbnRzTGlzdC5hcHBlbmQoY29tbWVudEVsZW1lbnQpO1xufTtcblxuY29uc3QgZGlzcGxheUNvbW1lbnRzID0gYXN5bmMgKHNob3dJZCkgPT4ge1xuICBjb21tZW50c0xpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKHNob3dJZCk7XG4gICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4gZGlzcGxheUNvbW1lbnQoY29tbWVudCkpO1xuICAgIGRpc3BsYXlDb21tZW50c0NvdW50ZXIoZGlhbG9nLCBjb21tZW50c0xpc3QpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BsYXlFcnJvcigpO1xuICB9XG59O1xuXG5jb25zdCB2YWxpZGF0ZUNvbW1lbnQgPSAobmFtZSwgY29tbWVudCkgPT4gbmFtZS52YWx1ZSAhPT0gJycgJiYgY29tbWVudC52YWx1ZSAhPT0gJyc7XG5cbmNvbnN0IGlucHV0Q29tbWVudCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbiAgY29uc3QgY29tbWVudElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnQtaW5wdXQnKTtcbiAgaWYgKHZhbGlkYXRlQ29tbWVudChuYW1lSW5wdXQsIGNvbW1lbnRJbnB1dCkpIHtcbiAgICBjb25zdCBjb21tZW50T2JqID0ge1xuICAgICAgaXRlbV9pZDogYCR7Y29tbWVudHNMaXN0LmlkfWAsXG4gICAgICB1c2VybmFtZTogYCR7bmFtZUlucHV0LnZhbHVlLnRyaW0oKX1gLFxuICAgICAgY29tbWVudDogYCR7Y29tbWVudElucHV0LnZhbHVlLnRyaW0oKX1gLFxuICAgIH07XG4gICAgbmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgY29tbWVudElucHV0LnZhbHVlID0gJyc7XG4gICAgYXdhaXQgcG9zdENvbW1lbnRzKGNvbW1lbnRPYmopO1xuICAgIGRpc3BsYXlDb21tZW50cyhjb21tZW50c0xpc3QuaWQpO1xuICB9XG59O1xuXG5jb25zdCBwb3B1cCA9IChlKSA9PiB7XG4gIGNvbW1lbnRzTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgY29uc3Qgc2hvd0VsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gIGNvbnN0IHNob3dJZCA9IHNob3dFbGVtZW50LmlkO1xuICBjb21tZW50c0xpc3QuaWQgPSBzaG93SWQ7XG5cbiAgY29uc3Qgc3VtbWFyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9nLXN1bW1hcnknKTtcbiAgc3VtbWFyeUVsZW1lbnQuaW5uZXJIVE1MID0gc2hvd0VsZW1lbnQucXVlcnlTZWxlY3RvcignI3N1bW1hcnknKS5pbm5lckhUTUw7XG5cbiAgZGlhbG9nLnNob3dNb2RhbCgpO1xuXG4gIGRpc3BsYXlDb21tZW50cyhzaG93SWQpO1xuXG4gIGNvbnN0IGNvbW1lbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLWNvbW1lbnQnKTtcbiAgY29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiBpbnB1dENvbW1lbnQoZSkpO1xufTtcblxuY29uc3Qgc3RhcnRDb21tZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50cycpO1xuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZScpO1xuXG4gIEFycmF5LmZyb20oY29tbWVudHMsIChhKSA9PiBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHBvcHVwKGUpKSk7XG5cbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgY29tbWVudHNMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cy1oZWFkZXInKS50ZXh0Q29udGVudCA9ICdDb21tZW50cyc7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhcnRDb21tZW50O1xuIiwiaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcblxuY29uc3QgaXRlbXNDb3VudGVyID0gKCkgPT4ge1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50di1zaG93LWNhcmQnKTtcblxuICByZXR1cm4gY2FyZHMubGVuZ3RoO1xufTtcblxuY29uc3QgZGlzcGxheUl0ZW1zQ291bnQgPSAoKSA9PiB7XG4gIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1pdGVtLmFsbCcpO1xuICBjb25zdCBhY3RpdmUgPSBTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZScpO1xuXG4gIGlmIChhY3RpdmUpIHtcbiAgICBjYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXRlZ29yeS1pdGVtLiR7YWN0aXZlfWApO1xuICAgIFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlJywgJycpO1xuICB9XG5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi5jbGFzc05hbWUgPSAnaXRlbXMtY291bnRlcic7XG4gIHNwYW4uaW5uZXJIVE1MID0gYCAoJHtpdGVtc0NvdW50ZXIoKX0pYDtcbiAgY2F0ZWdvcnkuc3R5bGUuY29sb3IgPSAnIzgwODA4MCc7XG4gIGNhdGVnb3J5LmFwcGVuZENoaWxkKHNwYW4pO1xufTtcblxuY29uc3QgY29tbWVudHNDb3VudGVyID0gKGNvbW1lbnRzTGlzdCkgPT4ge1xuICBpZiAoY29tbWVudHNMaXN0LnRhZ05hbWUgPT09ICdVTCcpIHtcbiAgICBjb25zdCBjb21tZW50cyA9IGNvbW1lbnRzTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudCcpO1xuICAgIHJldHVybiBjb21tZW50cy5sZW5ndGg7XG4gIH0gcmV0dXJuICdJbnZhbGlkIElucHV0Jztcbn07XG5cbmNvbnN0IGRpc3BsYXlDb21tZW50c0NvdW50ZXIgPSAoZWxlbWVudCwgY29tbWVudHNMaXN0KSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRIZWFkZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cy1oZWFkZXInKTtcbiAgY29tbWVudEhlYWRlci50ZXh0Q29udGVudCA9IGBDb21tZW50cyAoJHtjb21tZW50c0NvdW50ZXIoY29tbWVudHNMaXN0KX0pYDtcbn07XG5cbmV4cG9ydCB7XG4gIGl0ZW1zQ291bnRlciwgY29tbWVudHNDb3VudGVyLCBkaXNwbGF5SXRlbXNDb3VudCwgZGlzcGxheUNvbW1lbnRzQ291bnRlcixcbn07XG4iLCJpbXBvcnQgeyBzZWFyY2hTaG93cyB9IGZyb20gJy4vYXBpJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5cbmNvbnN0IGNhcmQgPSAoc2hvd3MpID0+IHtcbiAgY29uc3QgY2FyZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtY29udGFpbmVyJyk7XG5cbiAgc2hvd3MuZm9yRWFjaCgoc2hvdykgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5jbGFzc05hbWUgPSAndHYtc2hvdy1jYXJkJztcbiAgICBsaS5pZCA9IHNob3cuZXh0ZXJuYWxzLmltZGI7XG5cbiAgICBjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3VtbWFyeS5pbm5lckhUTUwgPSBzaG93LnN1bW1hcnk7XG4gICAgc3VtbWFyeS5pZCA9ICdzdW1tYXJ5JztcbiAgICBzdW1tYXJ5LmhpZGRlbiA9IHRydWU7XG4gICAgbGkuYXBwZW5kQ2hpbGQoc3VtbWFyeSk7XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuY2xhc3NOYW1lID0gJ3R2LXNob3ctaW1hZ2UnO1xuICAgIGltZy5zcmMgPSBzaG93LmltYWdlLm1lZGl1bTtcbiAgICBpbWcuYWx0ID0gYCR7c2hvdy5uYW1lfSBUViBzaG93IGltYWdlYDtcbiAgICBsaS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGg0LmNsYXNzTmFtZSA9ICd0aXRsZSc7XG4gICAgaDQuaW5uZXJIVE1MID0gc2hvdy5uYW1lO1xuICAgIGxpLmFwcGVuZENoaWxkKGg0KTtcblxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ25ldHdvcmstcmF0aW5nJztcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmlubmVySFRNTCA9IHNob3cubmV0d29yay5uYW1lO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJIVE1MID0gYHJhdGluZzogJHtzaG93LnJhdGluZy5hdmVyYWdlfWA7XG4gICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgIGxpLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ2NvdW50cnktbGlrZXMnO1xuICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5jbGFzc05hbWUgPSAnY291bnRyeSc7XG4gICAgcC5pbm5lckhUTUwgPSBgY291bnRyeTogJHtzaG93Lm5ldHdvcmsuY291bnRyeS5jb2RlfWA7XG4gICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5jbGFzc05hbWUgPSAnbGlrZXMnO1xuICAgIHAuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVxcJ2hlYXJ0IGljb25cXCc+PC9pPiA8c3BhbiBjbGFzcz1cXCdsaWtlcy1jb3VudFxcJz4wPC9zcGFuPiBMaWtlcyc7XG4gICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgIGxpLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ2NhcmQtYWN0aW9ucyc7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b24uY2xhc3NOYW1lID0gJ2NvbW1lbnRzJztcbiAgICBidXR0b24uaW5uZXJIVE1MID0gJ0NvbW1lbnRzJztcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBsaS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgY2FyZExpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlZnJlc2ggPSAoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cbmNvbnN0IGxvYWRTZWFyY2ggPSAoc2hvd3MpID0+IHtcbiAgU3RvcmFnZS5zZXRJdGVtKCdpc1NlYXJjaCcsICdzZWFyY2ggcmVxdWVzdGVkJyk7XG4gIFN0b3JhZ2Uuc2V0SnNvbignc2VhcmNoLXJlc3VsdHMnLCBzaG93cyk7XG4gIHJlZnJlc2goKTtcbn07XG5cbmNvbnN0IHNlYXJjaCA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0Jyk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgY29uc3Qgc2hvd3MgPSBbXTtcblxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaWYgKGlucHV0LnZhbHVlKSB7XG4gICAgICAgIHNlYXJjaFNob3dzKGlucHV0LnZhbHVlKVxuICAgICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCkgPT4gc2hvd3MucHVzaChyZXN1bHQuc2hvdykpO1xuICAgICAgICAgICAgbG9hZFNlYXJjaChzaG93cyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGNhcmQsIHNlYXJjaCwgbG9hZFNlYXJjaCwgcmVmcmVzaCxcbn07IiwiaW1wb3J0IHsgcG9zdExpa2VzLCBnZXRMaWtlcyB9IGZyb20gJy4vYXBpJztcblxuY29uc3QgaXRlbXNJRCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkO1xuXG5jb25zdCBkaXNwbGF5TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxpa2VzRGF0YSA9IGF3YWl0IGdldExpa2VzKCk7XG4gIGNvbnN0IGxpa2VzQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMtY291bnQnKTtcblxuICBsaWtlc0NvdW50LmZvckVhY2goKGxpa2VzKSA9PiB7XG4gICAgY29uc3QgaWQgPSBpdGVtc0lEKGxpa2VzKTtcblxuICAgIGxpa2VzRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5pdGVtX2lkID09PSBpZCkgbGlrZXMuaW5uZXJIVE1MID0gaXRlbS5saWtlcztcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBVcGRhdGVMaWtlID0gYXN5bmMgKHRhcmdldCkgPT4ge1xuICBjb25zdCBsaWtlc1RhZyA9IHRhcmdldC5wYXJlbnROb2RlLmxhc3RFbGVtZW50Q2hpbGQ7XG4gIGxldCBsaWtlcyA9IE51bWJlcihsaWtlc1RhZy50ZXh0Q29udGVudCk7XG4gIGxpa2VzICs9IDE7XG5cbiAgbGlrZXNUYWcuaW5uZXJIVE1MID0gbGlrZXM7XG59O1xuXG5jb25zdCBhZGRMaWtlcyA9ICgpID0+IHtcbiAgY29uc3QgbGlrZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhcnQuaWNvbicpO1xuXG4gIGxpa2VCdXR0b25zLmZvckVhY2goKGhlYXJ0KSA9PiB7XG4gICAgaGVhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBpdGVtc0lEKGUudGFyZ2V0KTtcbiAgICAgIHBvc3RMaWtlcyh7IGl0ZW1faWQ6IGlkIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZSA9PT0gJ0NyZWF0ZWQnKSB7XG4gICAgICAgICAgICBVcGRhdGVMaWtlKGUudGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGFkZExpa2VzLCBkaXNwbGF5TGlrZXMsXG59O1xuIiwiaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7IGxvYWRTZWFyY2gsIHJlZnJlc2ggfSBmcm9tICcuL2hvbWUnO1xuXG5jb25zdCBhZGRBY3RpdmUgPSAoZ2VucmUpID0+IHtcbiAgU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmUnLCBnZW5yZSk7XG59O1xuXG5jb25zdCByZXR1cm5Ib21lID0gKCkgPT4ge1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcblxuICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVmcmVzaCgpKTtcbn07XG5cbmNvbnN0IGhhbmRsZUdlbnJlcyA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeS1pdGVtJyk7XG5cbiAgY2F0ZWdvcnlMaXN0LmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgY2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBnZW5yZSA9IGNhdGVnb3J5LmNsYXNzTGlzdFsxXTtcbiAgICAgIGFkZEFjdGl2ZShnZW5yZSk7XG4gICAgICBsZXQgZmlsdGVyID0gW107XG5cbiAgICAgIHN3aXRjaCAoZ2VucmUpIHtcbiAgICAgICAgY2FzZSAnYWxsJzpcbiAgICAgICAgICByZWZyZXNoKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZHJhbWEnOlxuICAgICAgICAgIGZpbHRlciA9IGRhdGEuZmlsdGVyKChzaG93KSA9PiBzaG93LmdlbnJlcy5pbmNsdWRlcygnRHJhbWEnKVxuICAgICAgICAgICAgfHwgc2hvdy5nZW5yZXMuaW5jbHVkZXMoJ1RocmlsbGVyJylcbiAgICAgICAgICAgIHx8IHNob3cuZ2VucmVzLmluY2x1ZGVzKCdBY3Rpb24nKVxuICAgICAgICAgICAgfHwgc2hvdy5nZW5yZXMuaW5jbHVkZXMoJ015c3RlcnknKSk7XG5cbiAgICAgICAgICBsb2FkU2VhcmNoKGZpbHRlcik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZmljdGlvbic6XG4gICAgICAgICAgZmlsdGVyID0gZGF0YS5maWx0ZXIoKHNob3cpID0+IHNob3cuZ2VucmVzLmluY2x1ZGVzKCdTY2llbmNlLUZpY3Rpb24nKVxuICAgICAgICAgICAgfHwgc2hvdy5nZW5yZXMuaW5jbHVkZXMoJ0ZhbnRhc3knKVxuICAgICAgICAgICAgfHwgc2hvdy5nZW5yZXMuaW5jbHVkZXMoJ015c3RlcnknKVxuICAgICAgICAgICAgfHwgc2hvdy5nZW5yZXMuaW5jbHVkZXMoJ1N1cGVybmF0dXJhbCcpKTtcblxuICAgICAgICAgIGxvYWRTZWFyY2goZmlsdGVyKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdjb21lZHknOlxuICAgICAgICAgIGZpbHRlciA9IGRhdGEuZmlsdGVyKChzaG93KSA9PiBzaG93LmdlbnJlcy5pbmNsdWRlcygnQ29tZWR5JylcbiAgICAgICAgICAgIHx8IHNob3cuZ2VucmVzLmluY2x1ZGVzKCdBZHZlbnR1cmUnKVxuICAgICAgICAgICAgfHwgc2hvdy5nZW5yZXMuaW5jbHVkZXMoJ0ZhbWlseScpXG4gICAgICAgICAgICB8fCBzaG93LmdlbnJlcy5pbmNsdWRlcygnUm9tYW5jZScpKTtcblxuICAgICAgICAgIGxvYWRTZWFyY2goZmlsdGVyKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdob3Jyb3InOlxuICAgICAgICAgIGZpbHRlciA9IGRhdGEuZmlsdGVyKChzaG93KSA9PiBzaG93LmdlbnJlcy5pbmNsdWRlcygnSG9ycm9yJykpO1xuICAgICAgICAgIGxvYWRTZWFyY2goZmlsdGVyKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHJldHVybkhvbWUsIGhhbmRsZUdlbnJlcyB9OyIsImNsYXNzIFN0b3JhZ2Uge1xuICBzdGF0aWMgc2V0SXRlbShrZXksIHZhbHVlKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0SXRlbShrZXkpIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRKc29uKGtleSwgZGF0YSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG5cbiAgc3RhdGljIGdldEpzb24oa2V5KSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRTaG93cyB9IGZyb20gJy4vYXBpJztcbmltcG9ydCBzdGFydENvbW1lbnQgZnJvbSAnLi9jb21tZW50cyc7XG5pbXBvcnQgeyBjYXJkLCBzZWFyY2ggfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7IGFkZExpa2VzLCBkaXNwbGF5TGlrZXMgfSBmcm9tICcuL2xpa2VzJztcbmltcG9ydCB7IGRpc3BsYXlJdGVtc0NvdW50IH0gZnJvbSAnLi9jb3VudGVycyc7XG5pbXBvcnQgeyByZXR1cm5Ib21lLCBoYW5kbGVHZW5yZXMgfSBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgdmFsaWRhdGVEYXRhID0gKGRhdGEpID0+IHtcbiAgY29uc3QgbGlzdCA9IGRhdGE7XG4gIGxldCBmaWx0ZXJlZCA9IFtdO1xuICBmaWx0ZXJlZCA9IGRhdGEuZmlsdGVyKChzaG93KSA9PiAhc2hvdy5pbWFnZSB8fCAhc2hvdy5uZXR3b3JrIHx8ICFzaG93LnJhdGluZy5hdmVyYWdlKTtcblxuICBmaWx0ZXJlZC5mb3JFYWNoKChzaG93KSA9PiB7XG4gICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoc2hvdyA9PT0gaXRlbSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmNvbnN0IGxvYWRQYWdlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBpc1NlYXJjaCA9IFN0b3JhZ2UuZ2V0SXRlbSgnaXNTZWFyY2gnKTtcbiAgbGV0IHNob3dzID0gYXdhaXQgZ2V0U2hvd3MoKTtcbiAgc2hvd3MgPSB2YWxpZGF0ZURhdGEoc2hvd3MpO1xuXG4gIGlmIChpc1NlYXJjaCkge1xuICAgIFN0b3JhZ2Uuc2V0SXRlbSgnaXNTZWFyY2gnLCAnJyk7XG4gICAgbGV0IHNlYXJjaCA9IFN0b3JhZ2UuZ2V0SnNvbignc2VhcmNoLXJlc3VsdHMnKTtcbiAgICBzZWFyY2ggPSB2YWxpZGF0ZURhdGEoc2VhcmNoKTtcblxuICAgIGlmIChzZWFyY2gubGVuZ3RoID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtY29udGFpbmVyJykuaW5uZXJIVE1MID0gJ05vIHJlc3VsdHMgZm91bmQuJztcbiAgICB9XG5cbiAgICBjYXJkKHNlYXJjaCk7XG4gIH0gZWxzZSB7XG4gICAgY2FyZChzaG93cyk7XG4gIH1cblxuICBoYW5kbGVHZW5yZXMoc2hvd3MpO1xuICBhZGRMaWtlcygpO1xuICBkaXNwbGF5TGlrZXMoKTtcbiAgc3RhcnRDb21tZW50KCk7XG4gIGRpc3BsYXlJdGVtc0NvdW50KCk7XG59O1xuXG5zZWFyY2goKTtcbnJldHVybkhvbWUoKTtcbmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=