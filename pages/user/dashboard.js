import React, { useState, useEffect } from "react";
import {
  Button,
  CardMedia,
  CardActions,
  CardContent,
  Container,
  Card,
  Typography,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TemplateDefault from "../../src/templates/Default";

const useStyles = makeStyles((theme) => ({
  container: { padding: theme.spacing(8, 0, 6) },
  cardMedia: { paddingTop: "56%" },
  buttonAdd: { margin: "30px auto", display: "block" },
}));

export default function Home() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simular chamada de API
    async function fetchData() {
      try {
        // Simulando dados de API
        const response = await fetch("/api/products"); // Modifique para sua API real
        if (!response.ok) {
          throw new Error(`Erro: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <TemplateDefault>
        <Container maxWidth="sm" className={classes.container}>
          <CircularProgress />
        </Container>
      </TemplateDefault>
    );
  }

  if (error) {
    return (
      <TemplateDefault>
        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h6" color="error" align="center">
            {error}
          </Typography>
        </Container>
      </TemplateDefault>
    );
  }

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
          {data.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  className={classes.cardMedia}
                  image={item.image || "https://source.unsplash.com/random"}
                  title={item.title || "Título da imagem"}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {item.title || "Produto X"}
                  </Typography>
                  <Typography>{item.price || "$ 10,00"}</Typography>
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
          ))}
        </Grid>
      </Container>
    </TemplateDefault>
  );
}
