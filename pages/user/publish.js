import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TemplateDefault from '../../src/templates/Default'
import Typography from '@mui/material/Typography'


const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(8, 0, 6),
    },
}))

const Publish = () => {
    const classes = useStyles();
  return(
  <TemplateDefault>
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h2" component="h1" align="center" color="primary">
        Publicar anúncio
      </Typography>
      <Typography variant="h5" component="h5" align="center" color="primary">
        Quanto mais detalhado, melhor!
      </Typography>
    </Container>

    <Container maxWidth="md">
        <Box className={classes.box}>
            <Typography variant="h6" component="h6" align="center" color="primary">
                Título do Anúncio
            </Typography>
            <TextField
                label="ex: Biclicleta Aro 18 com garantia"
                size="small"
                fullWidth


            />

        </Box>
    </Container>


  </TemplateDefault>
  )
}

export default Publish;
