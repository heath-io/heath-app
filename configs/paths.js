const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appTsLint: resolveApp('tslint.json'),
  appSrc: resolveApp('app'),
  appCommon: resolveApp('app/common'),
  appCommonScss: resolveApp('app/common/scss'),
  appCommonStore: resolveApp('app/common/store'),
  appCommonStyled: resolveApp('app/common/styled'),
  appComponents: resolveApp('app/components'),
  appContainer: resolveApp('app/container'),
  appScss: resolveApp('app/scss'),
  appStore: resolveApp('app/store'),
  appUtil: resolveApp('app/util'),
  appTool: resolveApp('app/util/tools'),
  appMixin: resolveApp('app/util/mixin'),
  appStatic: resolveApp('app/static'),
  appImage: resolveApp('app/static/image'),
  appPicture: resolveApp('app/static/picture'),
};
