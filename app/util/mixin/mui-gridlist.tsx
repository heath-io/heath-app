interface IConfig {
  MuiGridList: object
  MuiGridListTile: object,
  MuiGridListTileBar: object,
}

const MuiGridListConfig: IConfig = {
  MuiGridList: {
    root: {
      flexWrap: 'nowrap',
      overflow: 'auto',
    },
  },
  MuiGridListTile: {
    root: {
      width: '210px !important',
      height: '130px !important',
    },
  },
  MuiGridListTileBar: {
    root: {
      height: '30px',
      background: 'rgba(0, 0, 0, 0.7)',
    },
    titleWrap: {
      marginLeft: '10px',
    },
  },
}

export default MuiGridListConfig;
