import { createMuiTheme } from '@material-ui/core/styles';
import { pink, blue } from '@material-ui/core/colors';

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
    MuiButton: {
      root: {
        fontSize: '14px',
      },
      label: {
        textTransform: 'none', // capitalize
      },
    },
    // 改变 Tab 的样式
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
    MuiPaper: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        backgroundColor: '#000',
      },
    },

    // change bottomNavigation styles
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

    // change app-bar styles
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
