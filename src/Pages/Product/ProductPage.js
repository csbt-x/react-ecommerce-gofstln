import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2)
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  img: {
    width: "auto",
    height: "550px",
    objectFit: "cover"
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  addButton:{
    padding: '15px 10px',
    color: '#fff',
    background: 'black',
    width: '155px',
    outline:'none',
    fontWeight: 'bold',
    marginTop: '15px',
    cursor: 'pointer',
    letterSpacing: '2px'
  }
}));

const Product = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={8} className={classes.imageContainer}>
            <img
              className={classes.img}
              src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1f%2F6c%2F1f6c53934d0bd9db58ffa440c5711e67e3eda8fe.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="overline" variant="h5" gutterBottom>
              Chamarra con forro de peluche
            </Typography>
            <Typography variant="overline" variant="h5" gutterBottom>
              $999.00
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              className={classes.sidebarSection}
            >
              Chamarra de gamuza sintética con detalles en piel sintética.
              Cuello clásico con trabillas y hebillas de metal, zíper al frente
              y bolsillos delanteros con zíper. Forro de peluche.
            </Typography>
            {/*<Button variant="outlined" color="primary">
              AÑADIR
            </Button>*/}
            <button className={classes.addButton}> AÑADIR</button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Product;
