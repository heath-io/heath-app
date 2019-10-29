import AppColor from '@tool/app-color';

interface IConfig {
  MuiPaper: object,
}

const MuiPaperConfig: IConfig = {
  MuiPaper: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      color: AppColor.c000,
      backgroundColor: AppColor.fff,
    },
    elevation1: {
      // boxShadow: `0px 5px 3px -1px rgba(0,0,0,0.2),
      //   0px 1px 1px 0px rgba(0,0,0,0.14),
      //   0px 1px 3px 0px rgba(0,0,0,0.12)`,
      boxShadow: `0 6px 12px rgba(0, 0, 0, 0.16)`,
    },
  },
};

export default MuiPaperConfig;
