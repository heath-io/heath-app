interface IConfig {
  MuiAppBar: object,
  MuiToolbar: object,
}

const MuiAppBarConfig: IConfig = {
  MuiAppBar: {
    root: {
      width: 'calc(100% - 180px)',
    },
  },
  MuiToolbar: {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    regular: {
      height: '56px',
      minHeight: '56px',

      '@media (min-width: 600px)': {
        height: '56px',
        minHeight: '56px',
      },
    },
    gutters: {
      paddingLeft: '20px',
      paddingRight: '20px',

      '@media (min-width: 600px)': {
        paddingLeft: '20px',
        paddingRight: '20px',
      },
    },
  },
};

export default MuiAppBarConfig;
