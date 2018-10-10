exports.ids = [0];
exports.modules = {

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(3);

var _ExpandMore = __webpack_require__(35);

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _DateItem = __webpack_require__(42);

var _DateItem2 = _interopRequireDefault(_DateItem);

var _Project = __webpack_require__(43);

var _Project2 = _interopRequireDefault(_Project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return (0, _core.createStyles)({
        root: {
            width: '100%'
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary
        },
        noDeco: {
            textDecoration: 'none'
        },
        secionHeading: {
            paddingTop: theme.typography.pxToRem(20),
            paddingLeft: theme.typography.pxToRem(20)
        }
    });
};
exports.default = (0, _core.withStyles)(styles)(function (_React$Component) {
    _inherits(CareerItem, _React$Component);

    function CareerItem() {
        _classCallCheck(this, CareerItem);

        return _possibleConstructorReturn(this, (CareerItem.__proto__ || Object.getPrototypeOf(CareerItem)).apply(this, arguments));
    }

    _createClass(CareerItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                career = _props.career,
                classes = _props.classes;

            return _react2.default.createElement(
                _core.ExpansionPanel,
                null,
                _react2.default.createElement(
                    _core.ExpansionPanelSummary,
                    { expandIcon: _react2.default.createElement(_ExpandMore2.default, null) },
                    _react2.default.createElement(
                        _core.Typography,
                        { className: classes.heading },
                        career.company
                    ),
                    _react2.default.createElement(
                        _core.Typography,
                        { className: classes.secondaryHeading },
                        _react2.default.createElement(_DateItem2.default, { date: career.begin }),
                        '\xA0~\xA0',
                        _react2.default.createElement(_DateItem2.default, { date: career.end })
                    )
                ),
                _react2.default.createElement(
                    _core.ExpansionPanelDetails,
                    null,
                    career.projects ? _react2.default.createElement(
                        _core.List,
                        null,
                        _react2.default.createElement(
                            _core.ListSubheader,
                            null,
                            '\uD504\uB85C\uC81D\uD2B8'
                        ),
                        career.projects.map(function (project, idx) {
                            return _react2.default.createElement(_Project2.default, { key: idx, project: project });
                        })
                    ) : ''
                )
            );
        }
    }]);

    return CareerItem;
}(_react2.default.Component));

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DateItem;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DateItem(props) {
    if (props.date === undefined) {
        return _react2.default.createElement('span', null);
    }
    var date = new Date(props.date);
    return _react2.default.createElement(
        'span',
        null,
        date.getFullYear(),
        '-',
        (0, _lodash.padStart)((date.getMonth() + 1).toString(10), 2, '0')
    );
}

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return (0, _core.createStyles)({
        root: {
            width: '100%'
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary
        },
        secionHeading: {
            paddingTop: theme.typography.pxToRem(20),
            paddingLeft: theme.typography.pxToRem(20)
        }
    });
};
exports.default = (0, _core.withStyles)(styles)(function (_React$Component) {
    _inherits(ProjectItem, _React$Component);

    function ProjectItem() {
        _classCallCheck(this, ProjectItem);

        return _possibleConstructorReturn(this, (ProjectItem.__proto__ || Object.getPrototypeOf(ProjectItem)).apply(this, arguments));
    }

    _createClass(ProjectItem, [{
        key: 'render',
        value: function render() {
            var project = this.props.project;

            return [_react2.default.createElement(
                _core.ListItem,
                { key: 0 },
                _react2.default.createElement(_core.ListItemText, { primary: project.name, secondary: project.description })
            ), _react2.default.createElement(
                _core.ListItem,
                { key: 1, inlist: true },
                project.tech.map(function (tech, idx) {
                    return _react2.default.createElement(_core.Chip, { label: tech, key: idx });
                })
            )];
        }
    }]);

    return ProjectItem;
}(_react2.default.Component));

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Links;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(3);

var _fontawesomeSvgCore = __webpack_require__(36);

var _freeBrandsSvgIcons = __webpack_require__(37);

var _reactFontawesome = __webpack_require__(38);

var _lodash = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = [_freeBrandsSvgIcons.faGithub, _freeBrandsSvgIcons.faLinkedin, _freeBrandsSvgIcons.faInstagram, _freeBrandsSvgIcons.faTwitter, _freeBrandsSvgIcons.faKeybase, _freeBrandsSvgIcons.faSteam];
_fontawesomeSvgCore.library.add.apply(_fontawesomeSvgCore.library, icons);
function Links(_ref) {
    var links = _ref.links;

    return _react2.default.createElement(
        _core.List,
        { component: 'nav' },
        links.map(function (link, idx) {
            return _react2.default.createElement(
                'a',
                { key: idx, href: link.url, target: '_blank' },
                _react2.default.createElement(
                    _core.ListItem,
                    { button: true },
                    _react2.default.createElement(
                        _core.ListItemIcon,
                        null,
                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: (0, _lodash.find)(icons, function (i) {
                                return i.iconName === link.icon;
                            }) })
                    ),
                    _react2.default.createElement(_core.ListItemText, { inset: true, primary: link.text })
                )
            );
        })
    );
}

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _core = __webpack_require__(3);

var _styles = __webpack_require__(4);

var _Typography = __webpack_require__(34);

var _Typography2 = _interopRequireDefault(_Typography);

var _lodash = __webpack_require__(7);

var _Career = __webpack_require__(41);

var _Career2 = _interopRequireDefault(_Career);

var _Links = __webpack_require__(44);

var _Links2 = _interopRequireDefault(_Links);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return (0, _styles.createStyles)({
        root: {
            width: '100%',
            padding: 20
        },
        secionHeading: {
            paddingTop: theme.typography.pxToRem(20),
            paddingLeft: theme.typography.pxToRem(20)
        }
    });
};

var AboutPage = function (_React$Component) {
    _inherits(AboutPage, _React$Component);

    function AboutPage() {
        _classCallCheck(this, AboutPage);

        return _possibleConstructorReturn(this, (AboutPage.__proto__ || Object.getPrototypeOf(AboutPage)).apply(this, arguments));
    }

    _createClass(AboutPage, [{
        key: 'render',
        value: function render() {
            var classes = this.props.classes;

            return _react2.default.createElement(_reactStatic.RouteData, { render: function render(_ref) {
                    var summary = _ref.summary,
                        careers = _ref.careers,
                        links = _ref.links;
                    return _react2.default.createElement(
                        'div',
                        { className: classes.root },
                        _react2.default.createElement(
                            _reactStatic.Head,
                            null,
                            _react2.default.createElement(
                                'title',
                                null,
                                'About'
                            )
                        ),
                        _react2.default.createElement(
                            _core.Grid,
                            { container: true, spacing: 16 },
                            _react2.default.createElement(
                                _core.Grid,
                                { item: true, xs: 12, md: 6 },
                                _react2.default.createElement(
                                    _core.Paper,
                                    null,
                                    _react2.default.createElement(
                                        _Typography2.default,
                                        { className: classes.secionHeading, component: 'div', variant: 'headline' },
                                        'Summary'
                                    ),
                                    _react2.default.createElement(
                                        _core.List,
                                        { component: 'nav' },
                                        summary.map(function (_ref2, idx) {
                                            var _ref3 = _slicedToArray(_ref2, 2),
                                                key = _ref3[0],
                                                value = _ref3[1];

                                            return _react2.default.createElement(
                                                _core.ListItem,
                                                { key: idx },
                                                _react2.default.createElement(_core.ListItemText, { primary: (0, _lodash.capitalize)(key), secondary: _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        typeof value === 'string' ? value : (0, _lodash.reduce)(value, function (ret, item, iidx) {
                                                            return ret.push(_react2.default.createElement(_core.Chip, { component: 'span', key: iidx, label: item }), ' '), ret;
                                                        }, [])
                                                    ) })
                                            );
                                        })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _core.Grid,
                                { item: true, xs: 12, md: 6 },
                                _react2.default.createElement(
                                    _core.Paper,
                                    null,
                                    _react2.default.createElement(
                                        _Typography2.default,
                                        { className: classes.secionHeading, component: 'div', variant: 'headline', gutterBottom: true },
                                        'Career'
                                    ),
                                    careers.map(function (career, idx) {
                                        return _react2.default.createElement(_Career2.default, { career: career, key: idx });
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _core.Grid,
                                { item: true, xs: 12, md: 4 },
                                _react2.default.createElement(
                                    _core.Paper,
                                    null,
                                    _react2.default.createElement(
                                        _Typography2.default,
                                        { className: classes.secionHeading, component: 'div', variant: 'headline' },
                                        'Links'
                                    ),
                                    _react2.default.createElement(_Links2.default, { links: links })
                                )
                            )
                        )
                    );
                } });
        }
    }]);

    return AboutPage;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles)(AboutPage);

/***/ })

};;
//# sourceMappingURL=About.0ea9bc28.js.map