exports.ids = [2];
exports.modules = {

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _core = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts,
      title = _ref.title;

  var titleName = ['Posts'].concat(title).join(' : ');
  return _react2.default.createElement(
    'div',
    { style: { padding: 20 } },
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement(
        'title',
        null,
        titleName
      )
    ),
    _react2.default.createElement(
      _core.Grid,
      { container: true, spacing: 40 },
      _react2.default.createElement(
        _core.Grid,
        { item: true, xs: 12 },
        _react2.default.createElement(
          _core.Typography,
          { variant: 'display1' },
          titleName
        )
      ),
      posts.map(function (post) {
        return _react2.default.createElement(
          _core.Grid,
          { item: true, xs: 12, md: 4, key: post.id },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/blog/post/' + post.id + '/' },
            _react2.default.createElement(
              _core.Card,
              null,
              _react2.default.createElement(
                _core.CardContent,
                null,
                _react2.default.createElement(
                  _core.Typography,
                  { component: 'h2', variant: 'headline' },
                  post.title
                ),
                _react2.default.createElement(
                  _core.Typography,
                  { variant: 'subheading', color: 'textSecondary' },
                  new Date(post.date).toLocaleDateString()
                ),
                post.categories.map(function (cat) {
                  return _react2.default.createElement(_core.Chip, { variant: 'outlined', key: cat, label: cat });
                })
              )
            )
          )
        );
      })
    )
  );
});

/***/ })

};;
//# sourceMappingURL=Posts.f3bcfe95.js.map