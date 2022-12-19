import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  meta: {
    textAlign: 'left'
  }
}));

const Item = () => {
  const classes = useStyles();
  return (
    <Grid item xs={6} lg={3}>
      <div className={classes.paper}>
      <Link to="/product/456tr4">
        <img
          className={classes.img}
          src="https://lp2.hm.com/hmgoepprod?set=source[/1f/6c/1f6c53934d0bd9db58ffa440c5711e67e3eda8fe.jpg],origin[dam],category[men_jacketscoats_jackets],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]"
        />
        </Link>
        <div className={classes.meta}>
        <Link to="/product/456tr4" style={{ textDecoration: 'none', color:'gray' }}>
        <Typography variant="overline" display="block" >
        Chamarra con forro de peluche
      </Typography>
      </Link>
      <Typography variant="overline" display="block" >
        $1,999
      </Typography>
      </div>
      </div>
    </Grid>
  );
};

export default Item;
