// override MuiButton styles
import { pink, blue } from '@material-ui/core/colors';

interface IConfig {
  MuiButton: object,
}

const MuiButtonConfig: IConfig = {
  MuiButton: {
    root: {
      fontSize: '14px',
      borderRadius: 0,
    },
    label: {
      textTransform: 'none', // capitalize
    },
    containedPrimary: {
      boxShadow: `0px 4px 3px 2px rgba(41, 121, 255 ,0.3),
        0px 2px 2px 0px rgba(41, 121, 255 ,0.2),
        0px 1px 5px 0px rgba(41, 121, 255 ,0.2)`,

      '&:hover': {
        backgroundColor: blue['A700'],
        boxShadow: 'none',
        // boxShadow: `0px 4px 3px 2px rgba(41, 98, 255 ,0.3),
        //   0px 2px 2px 0px rgba(41, 98, 255 ,0.2),
        //   0px 1px 5px 0px rgba(41, 98, 255 ,0.2)`,
      },
    },
    containedSecondary: {
      boxShadow: `0px 4px 3px 2px rgba(245, 0, 87 ,0.3),
        0px 2px 2px 0px rgba(245, 0, 87 ,0.2),
        0px 1px 5px 0px rgba(245, 0, 87 ,0.2)`,

      '&:hover': {
        backgroundColor: pink[600],
        boxShadow: 'none',
        // boxShadow: `0px 4px 3px 2px rgba(216, 27, 96 ,0.3),
        //   0px 2px 2px 0px rgba(216, 27, 96 ,0.2),
        //   0px 1px 5px 0px rgba(216, 27, 96 ,0.2)`,
      },
    },
  },
}

export default MuiButtonConfig;
