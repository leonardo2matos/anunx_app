import { Box, Container, Grid, Typography, Chip } from "@material-ui/core";
import TemplateDefault from "../src/templates/Default";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.background.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));
const Product = () => {
  const classes = useStyles();
  return (
    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Box className={classes.box}>Carrosel</Box>
          <Box className={classes.box}>Carrosel</Box>
          <Grid item xs={4}>
            <Typography
              variant="caption"
              component="span"
              className={classes.titles}
            >
              Publicado 16 junho 2024
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              className={classes.productName}
            >
              Jaguar XE 2.0 D R-Sport Aut.
            </Typography>
            <Typography variant="h4" component="h4" className={classes.price}>
              50.000,00
            </Typography>
            <Chip label="Categoria" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} md={4}>
            <Card />
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  );
};
