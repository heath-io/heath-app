import { createMuiTheme } from '@material-ui/core/styles';
import { pink, blue } from '@material-ui/core/colors';

import MuiPaperConfig from './mui-paper';
import MuiButtonConfig from './mui-button';
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

    // override MuiBottomNavigation
    MuiBottomNavigation: {
      root: {
        position: 'fixed',
        width: '100%',
        left: 0,
        bottom: 0,
        height: '50px',
        borderTop: '1px solid #333',
        backgroundColor: '#000',
      },
    },
    MuiBottomNavigationAction: {
      root: {
        color: blue['100'],
      },
    },
    MuiSvgIcon: {
      root: {
        width: '30px',
        height: '30px',
      },
    },

    // override MuiToolbar
    MuiToolbar: {
      regular: {
        height: '50px',
        minHeight: 'auto',
        borderBottom: '1px solid #333',
        backgroundColor: '#000',
      },
    },
    MuiIcon: {
      root: {
        width: 'auto',
        height: 'auto',
        fontSize: '30px',
      },
    },
    MuiCardContent: {
      root: {
        color: '#fff',
        backgroundColor: '#111',
      },
    },
  },
});

export default ThemeConfig;
