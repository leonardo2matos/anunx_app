import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TemplateDefault from "../../src/templates/Default";
import { Box, TextField, Container, Typography, Select, Button } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  boxcontainer:{ 
    padding: theme.spacing(3),

  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
}));

const Publish = () => {
  const classes = useStyles();
  return (
    <TemplateDefault>
      <Container maxWidth="sm" className={classes.container}>
        <Typography
          variant="h2"
          component="h1"
          align="center"
          color="textPrimary"
        >
          Publicar anúncio
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          align="center"
          color="textPrimary"
        >
          Quanto mais detalhado, melhor!
        </Typography>
      </Container>

      <Container maxWidth="md" className={classes.boxcontainer}>
        <Box className={classes.box}>
          <Typography variant="h6" component="h6" color="textPrimary">
            Título do Anúncio
          </Typography>
          <TextField
            label="ex: Biclicleta Aro 18 com garantia"
            size="small"
            fullWidth
          />

          <br />
          <br />
          <Typography variant="h6" component="h6" color="textPrimary">
            Categoria
          </Typography>
          <Select
            native
            value=""
            fullWidth
            onChange={() => {}}
            inputProps={{
              name: 'age',
            }}          
          > 
            <option value="">Escolha uma categoria</option>
            <option value={1}>Bebê e Criança</option>
            <option value={2}>Agricultura</option>
            <option value={3}>Moda</option>
            <option value={3}>Carros, Motos e Barcos</option>
            <option value={3}>Serviços</option>
            <option value={3}>Lazer</option>
            <option value={3}>Animais</option>
            <option value={3}>Moveis, Casa e Jardim</option>
            <option value={3}>Imóveis</option>
            <option value={3}>Equipamentos e Ferramentas</option>
            <option value={3}>Celulares e Tablets</option>
            <option value={3}>Esportes</option>
            <option value={3}>Tecnologia</option>
            <option value={3}>Emprego</option>
            <option value={3}>Outros</option>
          </Select>

        </Box>
      
      </Container>

      <Container maxWidth="md"className={classes.boxcontainer}>
        <Box className={classes.box}>
          <Typography variant="h6" component="h6" color="textPrimary">
           Imagens
          </Typography>
          <Typography variant="body2" component="div" color="textPrimary">
           A primeira imagem é a foto principal do seu anúncio.
          </Typography>
        </Box>    
      </Container>
      <Container maxWidth="md"className={classes.boxcontainer}>
        <Box className={classes.box}>
          <Typography variant="h6" component="h6" color="textPrimary">
           Descrição
          </Typography>
          <Typography variant="body2" component="div" color="textPrimary">
           Escreva uma boa descrição para o seu anúncio.
          </Typography>
          <TextField
            multiline
            mimrows={6}
            maxRows={6}
            variant="outlined"
            fullWidth    
          />
        </Box>    
      </Container>
      <Container maxWidth="md"className={classes.boxcontainer}>
        <Box className={classes.box}>
          <Typography variant="h6" component="h6" color="textPrimary"gutterBottom>
           Dados de Contato
          </Typography>
          <TextField
            label="Nome"
            size="small"
            variant="outlined"
            fullWidth    
          />
          <br/>
          <br/>
          <TextField
            label="E-mail"
            size="small"
            variant="outlined"
            fullWidth    
          />
          <br/>
          <br/>
          <TextField
            label="Telefone"
            size="small"
            variant="outlined"
            fullWidth    
          />
        </Box>    
      </Container>

      <Container maxWidth="md"className={classes.boxcontainer}>
        <Box textAlign="right">
          <Button variant="contained" color="primary">
            Publicar Anúncio
          </Button>
        </Box>
      </Container>
    </TemplateDefault>
  );
};

export default Publish;
