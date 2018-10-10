webpackJsonp([1],{

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(76);

var _core = __webpack_require__(107);

var _KeyboardArrowLeftRounded = __webpack_require__(610);

var _KeyboardArrowLeftRounded2 = _interopRequireDefault(_KeyboardArrowLeftRounded);

var _htmr = __webpack_require__(611);

var _htmr2 = _interopRequireDefault(_htmr);

var _lodash = __webpack_require__(204);

var _TagList = __webpack_require__(612);

var _TagList2 = _interopRequireDefault(_TagList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var post = _ref.post;
  return _react2.default.createElement(
    _core.Grid,
    { container: true, justify: 'center', style: { padding: '1em', paddingTop: 0 } },
    _react2.default.createElement(
      _core.Grid,
      { item: true, xs: 12, lg: 6 },
      _react2.default.createElement(
        _core.Paper,
        { style: { padding: '2em' } },
        _react2.default.createElement(
          _reactStatic.Head,
          null,
          _react2.default.createElement(
            'title',
            null,
            post.title
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { flexDirection: 'row', display: 'flex' } },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/blog' },
              _react2.default.createElement(_KeyboardArrowLeftRounded2.default, { style: { fontSize: '2em' } })
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _core.Typography,
              { variant: 'headline' },
              post.title
            ),
            _react2.default.createElement(
              _core.Typography,
              { variant: 'subheading' },
              new Date(post.date).toLocaleString()
            )
          )
        ),
        _react2.default.createElement(_core.Divider, null),
        _react2.default.createElement(
          'div',
          { style: { paddingLeft: '2em', lineHeight: 1.5 } },
          (0, _htmr2.default)(post.body)
        ),
        _react2.default.createElement(_core.Divider, null),
        _react2.default.createElement(
          _core.List,
          null,
          _react2.default.createElement(
            _core.ListItem,
            null,
            _react2.default.createElement(_core.ListItemText, { primary: _react2.default.createElement(
                _core.Typography,
                { variant: 'subheading' },
                'Categories'
              ), secondary: (0, _lodash.reduce)(post.categories, function (ret, cat) {
                return ret.push(_react2.default.createElement(_core.Chip, { variant: 'outlined', component: 'span', key: cat, label: cat }), ' '), ret;
              }, []) })
          ),
          _react2.default.createElement(_TagList2.default, { tags: post.tags })
        )
      )
    )
  );
});

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

exports.__esModule = true;
exports.default = void 0;

var _setStatic = _interopRequireDefault(__webpack_require__(599));

var setDisplayName = function setDisplayName(displayName) {
  return (0, _setStatic.default)('displayName', displayName);
};

var _default = setDisplayName;
exports.default = _default;

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

exports.__esModule = true;
exports.default = void 0;

var _getDisplayName = _interopRequireDefault(__webpack_require__(600));

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + "(" + (0, _getDisplayName.default)(BaseComponent) + ")";
};

var _default = wrapDisplayName;
exports.default = _default;

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _pure = _interopRequireDefault(__webpack_require__(597));

var _SvgIcon = _interopRequireDefault(__webpack_require__(18));

function createSvgIcon(path, displayName) {
  var Icon = function Icon(props) {
    return _react.default.createElement(_SvgIcon.default, props, path);
  };

  Icon.displayName = "".concat(displayName, "Icon");
  Icon = (0, _pure.default)(Icon);
  Icon.muiName = 'SvgIcon';
  return Icon;
}

;
var _default = createSvgIcon;
exports.default = _default;

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _interopRequireDefault = __webpack_require__(0);

exports.__esModule = true;
exports.default = void 0;

var _shouldUpdate = _interopRequireDefault(__webpack_require__(598));

var _shallowEqual = _interopRequireDefault(__webpack_require__(601));

var _setDisplayName = _interopRequireDefault(__webpack_require__(594));

var _wrapDisplayName = _interopRequireDefault(__webpack_require__(595));

var pure = function pure(BaseComponent) {
  var hoc = (0, _shouldUpdate.default)(function (props, nextProps) {
    return !(0, _shallowEqual.default)(props, nextProps);
  });

  if (process.env.NODE_ENV !== 'production') {
    return (0, _setDisplayName.default)((0, _wrapDisplayName.default)(BaseComponent, 'pure'))(hoc(BaseComponent));
  }

  return hoc(BaseComponent);
};

var _default = pure;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _interopRequireDefault = __webpack_require__(0);

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(205));

var _react = __webpack_require__(1);

var _setDisplayName = _interopRequireDefault(__webpack_require__(594));

var _wrapDisplayName = _interopRequireDefault(__webpack_require__(595));

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var ShouldUpdate =
    /*#__PURE__*/
    function (_Component) {
      (0, _inheritsLoose2.default)(ShouldUpdate, _Component);

      function ShouldUpdate() {
        return _Component.apply(this, arguments) || this;
      }

      var _proto = ShouldUpdate.prototype;

      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      _proto.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(_react.Component);

    if (process.env.NODE_ENV !== 'production') {
      return (0, _setDisplayName.default)((0, _wrapDisplayName.default)(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }

    return ShouldUpdate;
  };
};

var _default = shouldUpdate;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */

    return BaseComponent;
  };
};

var _default = setStatic;
exports.default = _default;

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

var _default = getDisplayName;
exports.default = _default;

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

exports.__esModule = true;
exports.default = void 0;

var _shallowEqual = _interopRequireDefault(__webpack_require__(206));

var _default = _shallowEqual.default;
exports.default = _default;

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(596));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"
})), 'KeyboardArrowLeftRounded');

exports.default = _default;

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(1)):"function"==typeof define&&define.amd?define(["react"],t):e.htmr=t(e.React)}(this,function(e){"use strict";function t(e){return e.replace(/(-|:)(.)/g,function(e,t,r){return r.toUpperCase()})}function r(e){var r={};return e.split(";").filter(function(e){return""!==e.trim()}).forEach(function(e){var n,a=e.split(":");if(a.length>1){var o=function(e){return/^-ms-/.test(e)&&(e=e.substr(1)),t(e)}(a[0].trim()),i=(n=a.slice(1).join(":").trim(),/^\d+$/.test(n)?Number(n):n.replace(/'/g,'"'));r[o]=i}}),r}e=e&&e.hasOwnProperty("default")?e.default:e;var n={for:"htmlFor",class:"className",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",datetime:"dateTime",enctype:"encType",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"};var a={ELEMENT:1,TEXT:3,COMMENT:8},o=["table","tbody","thead","tfoot","tr"],i=document.createElement("div");function l(c,s,u){var d,f=u.transform._;if(c.nodeType===a.COMMENT)return null;if(c.nodeType===a.TEXT){var m=(d=c.textContent,i.innerHTML=d,i.textContent);return f?f(m):m}for(var p=c.tagName.toLowerCase(),h=u.transform[p],g={},y=0;y<c.attributes.length;y++){var v=c.attributes[y].name,T=c.attributes[y].value;g[v]=T}g.key=s.toString();for(var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments[1];return Object.keys(e).reduce(function(o,i){if(/^on.*/.test(i))return o;var l=i;/^(data|aria)-/.test(i)||0===a.filter(function(e){return e instanceof RegExp?e.test(i):e===i}).length&&(l=t(i));var c=n[l]||l;return o[c]="style"===c?r(e.style):e[i],o},{})}(g,u.preserveAttributes),b=[],x=0;x<c.childNodes.length;x++){var M=c.childNodes[x],C=s+"."+x;if(!(o.indexOf(p)>-1&&M.nodeType===a.TEXT&&(M.textContent=M.textContent.trim(),""===M.textContent))){var N=l(M,C,u);null!==N&&b.push(N)}}return"style"!==p||h||f?(0===b.length&&(b=null),h?e.createElement(h,E,b):f?f(p,E,b):e.createElement(p,E,b)):(E.dangerouslySetInnerHTML={__html:b[0]},e.createElement(p,E,null))}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw new TypeError("Expected HTML string");var r={transform:t.transform||{},preserveAttributes:t.preserveAttributes||[]},n=document.createElement("div");n.innerHTML=e.trim();for(var a=[],o=0;o<n.childNodes.length;o++)a.push(n.childNodes[o]);var i=a.map(function(e,t){return l(e,t,r)}).filter(function(e){return null!==e});return 1===i.length?i[0]:i}});


/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TagList;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(76);

var _core = __webpack_require__(107);

var _lodash = __webpack_require__(204);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TagList(_ref) {
    var tags = _ref.tags;

    if (tags === undefined) {
        return undefined;
    }
    return _react2.default.createElement(
        _core.ListItem,
        null,
        _react2.default.createElement(_core.ListItemText, { primary: _react2.default.createElement(
                _core.Typography,
                { variant: 'subheading' },
                'Tags'
            ), secondary: (0, _lodash.reduce)(tags, function (ret, tag) {
                return ret.push(_react2.default.createElement(
                    _reactStatic.Link,
                    { to: '/blog/tags/' + tag.replace(/\+/g, '__'), key: tag },
                    _react2.default.createElement(_core.Chip, { variant: 'outlined', component: 'span', label: tag })
                ), ' '), ret;
            }, []) })
    );
}

/***/ })

});
//# sourceMappingURL=Post.4659c935.js.map