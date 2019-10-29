import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import {
  Paper,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  InputBase,
} from '@material-ui/core';
import {
  makeStyles,
  Theme,
  createStyles,
  fade,
} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

// import AppColor from '@tool/app-color';

interface IProps extends RouteComponentProps {
  history: any,
};
interface IState {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperRoot: {
      backgroundColor: '#fff',
    },
    search: {
      position: 'relative',
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '280px',
    },
    searchIcon: {
      width: theme.spacing(5),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(0.8, 1, 0.8, 5),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
  })
);

const TopBar = (props: IProps, state: IState) => {

  useEffect(() => {
    // console.log('props: ', props);

    return () => {
      // console.log('leave...');
    };
  }, []);

  const classes = useStyles();
  return (
    <Paper square={true}
      className={classes.paperRoot}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography>Heath</Typography>
          <Box className={classes.search}>
            <Box className={classes.searchIcon}>
              <SearchIcon />
            </Box>
            <InputBase placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }} />
          </Box>
        </Toolbar>
      </AppBar>
    </Paper>
  )
}

export default withRouter(observer(TopBar));
