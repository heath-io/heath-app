import { createMuiTheme } from '@material-ui/core/styles';
import { pink, blue } from '@material-ui/core/colors';

import MuiPaperConfig from './mui-paper';
import MuiButtonConfig from './mui-button';
import MuiAppBarConfig from './mui-appbar';
import MuiGridListConfig from './mui-gridlist';
// import AppColor from '@tool/app-color';

// 自定义 material-ui 主题样式
const ThemeConfig = createMuiTheme({
  // 改变 material-ui 主色
  palette: {
    primary: {
      main: blue['A400'],
    },
    secondary: {
      main: pink['A400'],
    },
  },
  // 改变全局 material-ui 字体
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
  },

  overrides: {
    ...MuiButtonConfig,
    ...MuiPaperConfig,
    ...MuiAppBarConfig,
    ...MuiGridListConfig,

    // override MuiTypography
    MuiTypography: {
      h6: {
        marginBottom: '5px',
        fontSize: '16px',
        fontWeight: 500,
      },
    },
  },
});

export default ThemeConfig;
