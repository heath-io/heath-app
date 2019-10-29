import { createMuiTheme } from '@material-ui/core/styles';
import { pink, blue } from '@material-ui/core/colors';

import MuiPaperConfig from './mui-paper';
import MuiButtonConfig from './mui-button';
import MuiToolbarConfig from './mui-toolbar';
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
    ...MuiToolbarConfig,

    // override MuiTab
    MuiTab: {
      root: {
        fontSize: '14px',
        textTransform: 'none',
      },
    },
    MuiAvatar: {
      root: {
        width: '30px',
        height: '30px',
      },
    },
    MuiTypography: {
      root: {
        width: '100%',
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '15px !important',
      },
    },
    MuiDivider: {
      root: {
        width: '100%',
        background: '#eee',
      },
    },

  },
});

export default ThemeConfig;
