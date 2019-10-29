interface IConfig {
  MuiToolbar: object,
}

const MuiToolbarConfig: IConfig = {
  MuiToolbar: {
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

export default MuiToolbarConfig;
