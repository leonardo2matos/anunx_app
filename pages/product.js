import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Chip,
  CardHeader,
  Avatar,
  CardMedia,

} from '@material-ui/core'
import TemplateDefault from '../src/templates/Default'
import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  productName: {
    margin: '15px 0',
  },
  price: {
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  card: {
    height: '100%',
  },
  cardMedia: {
    paddingTop: '56%',
  },
}));
const Product = () => {
  const classes = useStyles();

  return (
    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box className={classes.box}>
              <Carousel
                autoPlay={false}
                animation='slide'
                navButtonsAlwaysVisible
                navButtonsProps={{
                  style: {
                    color: 'white',
                  }
                }}
              />
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Jaguar XE 2.0 D R-Sport Aut."
                />
              </Card>
            </Box>

            <Box className={classes.box} textAlign="left">
              <Typography variant="caption" component="span">
                Publicado 16 junho 2024
              </Typography>
              <Typography variant="h4" component="h4" className={classes.productName}>
                Jaguar XE 2.0 D R-Sport Aut.
              </Typography>
              <Typography variant="h4" component="h4" className={classes.price}>
                50.000,00
              </Typography>
              <Chip label="Categoria" />
            </Box>


            <Box className={classes.box} textAlign="left">
              <Typography variant="h6" component="h6">Descrição</Typography>
              <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                euismod, nisl euismod ullamcorper, nisi nisl ultricies libero,
                eget euismod nisl euismod ullamcorper, nisi nisl ultricies libero,
                eget euismod nisl euismod ullamcorper, nisi nisl ultricies libero,
                eget euismod nisl euismod ullamcorper, nisi nisl ultricies libero,
                eget euismod nisl euismod ullamcorper, nisi nisl ultricies libero,
                eget euismod nisl euismod ullamcorper.
              </Typography>


            </Box>
          </Grid>
          <Grid item xs={4}>
            <Card elevation={0} className={classes.box}>
              <CardHeader
                avatar={
                  <Avatar>T</Avatar>
                }
                title="Leonardo Matos"
                subheader="leonardo2matos2@gmail.com"
              />
              <CardMedia
                image='https://source.unsplash.com/random'
                title="Car"
              />
            </Card>

            <Box className={classes.box}>
              <Typography variant="h6" component="h6">
                Localização
              </Typography>
            </Box>

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

export default Product
