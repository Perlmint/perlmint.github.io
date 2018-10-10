exports.ids = [1];
exports.modules = {

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _core = __webpack_require__(3);

var _KeyboardArrowLeftRounded = __webpack_require__(39);

var _KeyboardArrowLeftRounded2 = _interopRequireDefault(_KeyboardArrowLeftRounded);

var _htmr = __webpack_require__(40);

var _htmr2 = _interopRequireDefault(_htmr);

var _lodash = __webpack_require__(7);

var _TagList = __webpack_require__(45);

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

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TagList;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _core = __webpack_require__(3);

var _lodash = __webpack_require__(7);

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

};;
//# sourceMappingURL=Post.4282ea00.js.map