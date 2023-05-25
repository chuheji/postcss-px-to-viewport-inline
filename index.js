/*
 * @Author: liuyouxiang<xlfLuminous@163.com>
 * @Date: 2023-05-25 09:36:21
 * @LastEditTime: 2023-05-25 09:36:24
 * @LastEditors: liuyouxiang<xlfLuminous@163.com>
 * @FilePath: /postcss-px-to-viewport-inline/index.js
 * @Description: 文件描述
 */
const defaultsProp = {
  viewportWidth: 750,
  viewportUnit: 'vw',
  unitPrecision: 3,
  minPixelValue: 1,
}

const ZPXRegExp = /(\d+)px/;

function createPxReplace(
  viewportSize,
  minPixelValue,
  unitPrecision,
  viewportUnit
) {
  return function ($0, $1) {
    if (!$1) return;
    var pixels = parseFloat($1);
    if (pixels <= minPixelValue) return;
    return toFixed((pixels / viewportSize) * 100, unitPrecision) + viewportUnit;
  };
}
function toFixed(number, precision) {
  var multiplier = Math.pow(10, precision + 1),
    wholeNumber = Math.floor(number * multiplier);
  return (Math.round(wholeNumber / 10) * 10) / multiplier;
}
module.exports = function (source) {
  const opts = this.query
  const defaults = Object.assign({}, defaultsProp, opts)

  let pxGlobalRegExp = new RegExp(ZPXRegExp.source, 'ig')
  if (pxGlobalRegExp.test(source)) {
    // px转换vw，核心部分
    let $_source = source.replace(
      pxGlobalRegExp,
      createPxReplace(
        defaults.viewportWidth,
        defaults.minPixelValue,
        defaults.unitPrecision,
        defaults.viewportUnit
      )
    );
    return $_source
  } else {
    return source;
  }
}
