import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from '@material-ui/core/Link';
import Cart from './Cart'
import CartIcon from '../Icons/CartIcon'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        {matches &&  <Button size="small">Subscribe</Button>}
       
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          href="/"
          noWrap
          className={classes.toolbarTitle}
        >
           {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
       
       <IconButton href="/cart">
          <Cart />
        </IconButton>
        <Button variant="outlined" size="small" href="/login">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};