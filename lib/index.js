"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("intersection-observer-polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useState = _react["default"].useState,
    useEffect = _react["default"].useEffect;

function App(props) {
  var item = props.item,
      loadingImg = props.loadingImg,
      bottom = props.bottom;

  function oberserve(entries) {
    if (entries[0].intersectionRatio > 0) {
      console.log('出现了');
    } else {
      console.log('消失了');
    }
  }

  useEffect(function () {
    var node = document.getElementById("bottom");
    var options = {};
    var observer = new IntersectionObserver(oberserve, options);
    observer.observe(node);
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("p", null, "123"), /*#__PURE__*/_react["default"].createElement("div", {
    id: "bottom"
  }, "bottom"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: 200,
      width: '100%',
      background: 'red'
    }
  }));
}

var _default = App;
exports["default"] = _default;