import React from "react";

import {
  Box,
  TextField,
  Container,
  Typography,
  Select,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";

import { useDropzone } from "react-dropzone";
import { makeStyles } from "@material-ui/core/styles";
import { DeleteForever } from "@material-ui/icons";

import TemplateDefault from "../../src/templates/Default";

const useStyles = makeStyles((theme) => ({
  mask: {},
  mainImage: {},
  boxContainer: {
    paddingBottom: theme.spacing(3),
  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  thumbsContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 15,
  },
  dropzone: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
    width: 200,
    height: 150,
    margin: "0 15px 15px 0",
    backgroundColor: theme.palette.background.default,
    border: "2px dashed black",
  },
  thumb: {
    width: 200,
    height: 150,
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center center",

    "& $mainImage": {
      backgroundColor: "blue",
      padding: "6px 10px",
      position: "absolute",
      bottom: 0,
      left: 0,
    },

    "&:hover $mask": {
      display: "flex",
    },

    "& $mask": {
      display: "flex",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      width: "100%",
      height: "100%",
    },
  },
}));

const Publish = () => {
  const classes = useStyles();
  const [files, setFiles] = React.useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
      });

      setFiles([...files, ...newFiles]);
    },
  });

  const handleRemoveFile = (fileName) => {
    const newFileState = files.filter((file) => file.name !== fileName);
    setFiles(newFileState);
  };

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
              name: "age",
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

      <Container maxWidth="md" className={classes.boxcontainer}>
        <Box className={classes.box}>
          <Typography variant="h6" component="h6" color="textPrimary">
            Imagens
          </Typography>
          <Typography variant="body2" component="div" color="textPrimary">
            A primeira imagem é a foto principal do seu anúncio.
          </Typography>
          <Box className={classes.thumbsContainer}>
            <Box className={classes.dropzone} {...getRootProps()}>
              <input {...getInputProps()} />

              <Typography variant="body2" color="textPrimary">
                Clique para adicionar imagens ou arraste-as aqui.
              </Typography>
            </Box>

            {files.map((file) => (
              <Box
                className={classes.thumb}
                style={{
                  backgroundImage: `url(${file.preview})`,
                }}
              >
                <Box className={classes.mainImage}>
                  <Typography variant="body2" color="secondary">
                    Principal
                  </Typography>
                </Box>
                <Box className={classes.mask}>
                  <IconButton
                    color="secondary"
                    onClick={() => handleRemoveFile(file.name)}
                  >
                    <DeleteForever fontSize="large" />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      <Container maxWidth="md" className={classes.boxcontainer}>
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

      <Container maxWidth="md" className={classes.boxcontainer}>
        <Box className={classes.box}>
          <Typography variant="h6" component="h6" color="textPrimary">
            Preço
          </Typography>
          <br />
          <FormControl fullWidth variant="outlined">
            <InputLabel>Valor</InputLabel>
            <OutlinedInput
              onChange={() => {}}
              startAdornment={
                <InputAdornment position="start">R$</InputAdornment>
              }
              labelWidth={40}
            />
          </FormControl>
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxcontainer}>
        <Box className={classes.box}>
          <Typography
            variant="h6"
            component="h6"
            color="textPrimary"
            gutterBottom
          >
            Dados de Contato
          </Typography>
          <TextField label="Nome" size="small" variant="outlined" fullWidth />
          <br />
          <br />
          <TextField label="E-mail" size="small" variant="outlined" fullWidth />
          <br />
          <br />
          <TextField
            label="Telefone"
            size="small"
            variant="outlined"
            fullWidth
          />
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxcontainer}>
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
