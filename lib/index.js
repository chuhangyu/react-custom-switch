"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var useState = React.useState, useMemo = React.useMemo, useEffect = React.useEffect, useCallback = React.useCallback;
var defaultDataSource = [
    { label: '测试类目122', value: 'value1' },
    { label: '测试类目2类目2', value: 'value2' },
    { label: '测试类目3', value: 'value3' },
];
function App(props) {
    var _a = props.dataSource, dataSource = _a === void 0 ? defaultDataSource : _a, _b = props.defaultValue, defaultValue = _b === void 0 ? '' : _b, onChange = props.onChange, _c = props.className, className = _c === void 0 ? '' : _c;
    var _d = useState(0), current = _d[0], setCurrent = _d[1];
    var _e = useState(0), width = _e[0], setWidth = _e[1];
    var _f = useState([]), nodes = _f[0], setNodes = _f[1];
    function handleClickSwitchItem(index) {
        setCurrent(index);
        setWidth(getBoxWidth(index));
        if (onChange) {
            onChange(dataSource[index].value);
        }
    }
    function handleLoaded() {
        setNodes(document.querySelectorAll('.switch-item'));
    }
    document.addEventListener('DOMContentLoaded', handleLoaded);
    useEffect(function () {
        return function () { return document.removeEventListener('DOMContentLoaded', handleLoaded); };
    }, [dataSource]);
    useEffect(function () {
        if (nodes.length > 0) {
            var index = dataSource.findIndex(function (item) { return item.value === defaultValue; });
            index = index === -1 ? 0 : index;
            setWidth(getBoxWidth(index));
            setCurrent(index);
        }
    }, [nodes, defaultValue, dataSource]);
    var getNodeWidth = useCallback(function (current) {
        if (!nodes || !nodes.length)
            return 0;
        return nodes[current].getBoundingClientRect().width;
    }, [current, nodes]);
    var leftSum = useMemo(function () {
        if (!nodes) {
            return 0;
        }
        var sum = 0;
        for (var i = 0; i < current; i++) {
            sum += (getNodeWidth(i));
        }
        return sum;
    }, [current, nodes]);
    var getBoxWidth = useCallback(function (current) {
        return getNodeWidth(current);
    }, [current, nodes]);
    var switchNodes = dataSource.map(function (item, index) { return (React.createElement("div", { className: "switch-item", key: item.value, onClick: handleClickSwitchItem.bind(null, index) }, item.label)); });
    var prefix = "react-custom-switch";
    var cls = prefix + " " + className;
    return (React.createElement("div", { className: cls },
        React.createElement("div", { className: "slider-content" },
            React.createElement("div", { className: "slider-box", style: { left: leftSum, width: width } })),
        switchNodes));
}
exports.default = App;
