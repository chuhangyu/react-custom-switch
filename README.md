# react-custom-switch
react定制化switch![switch](switch.gif)

## usage
```
npm i react-custom-switch -S
```
```
import Switch from 'react-custom-switch';

render() {
    return (
        <Switch {...switchprops} />
    )
}
```

## props
dataSource: 传入的配置数组 <Array>{label: string, value: string | number}
defaultValue: 默认值
onChange： 回调函数
className： 个人定制化样式
