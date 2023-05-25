# 描述

用来将行内样式中的px转换为vw的loader

## 例子

### 输入

```
<div style="width: 10px;height: 10px;background-color: aqua;"></div>
```

### 输出

```
<div style="width: 1.333vw;height: 1.333vw;background-color: aqua;"></div>
```

## 开始使用

### 安装
Add via npm
```
$ npm install postcss-px-to-viewport-inline --save-dev
```
or yarn
```
$ yarn add -D postcss-px-to-viewport-inline
```

## 使用方式

Default Options:
```js
{
  viewportWidth: 750,
  viewportUnit: 'vw',
  unitPrecision: 3,
  minPixelValue: 1
}

- `viewportWidth` (Number) 视图宽度，根据设计稿而定。
- `viewportUnit` (Number) 转换后的单位，默认为vw。
- `unitPrecision` (Number) 转换精度，即最多保留几位小数。
- `minPixelValue` (Number) 最小转换量，默认为1px，即 <= 1px不作转换。
