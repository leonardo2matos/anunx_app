import React from "react"
import { Button, CardMedia, CardActions, CardContent, Container, Card, Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import TemplateDefault from "../../src/templates/Default"

const useStyles = makeStyles((theme) => ({
  container: { padding: theme.spacing(8, 0, 6) },
  cardMedia: { paddingTop: "56%" },
  buttonAdd: { margin: "30px auto", display: "block" },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <TemplateDefault>
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h2" component="h1" align="center">
          Meus Anúncios
        </Typography>
        <Button variant="contained" color="primary" className={classes.buttonAdd}>
          Publicar novo anúncio
        </Button>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia className={classes.cardMedia} image={"https://source.unsplash.com/random"} title="Título da imagem" />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Product x
                </Typography>
                <Typography>$ 10,00</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia className={classes.cardMedia} image={"https://source.unsplash.com/random"} title="Título da imagem" />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Product x
                </Typography>
                <Typography>$ 10,00</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia className={classes.cardMedia} image={"https://source.unsplash.com/random"} title="Título da imagem" />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Product x
                </Typography>
                <Typography>$ 10,00</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  );
}
