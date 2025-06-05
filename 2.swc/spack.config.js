const {config} = require('@swc/core/spack')
// 必须是cjs,暂时不支持csm
module.exports = {
  entry: {
    web: __dirname + "/test2.js",
  },
  output: {
    path: __dirname + "/lib",
  },
};