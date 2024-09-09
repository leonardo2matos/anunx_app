import {
    Container,
    Grid,
    Typography,
    Box,
    IconButton,
    Paper,
    InputBase,
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core'

import Card from '../../src/components/Card'
import TemplateDefaut from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    searchbox: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 2),
        marginBottom: 20
    },
}))

const List = () => {
    const classes = useStyles()

    return (
        <TemplateDefaut>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Paper component="form" className={classes.searchbox}>
                            <InputBase
                                placeholder="Ex: Iphone 12 com garantia"
                                fullWidth
                            />
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <Box className={classes.box}>
                        <Typography component="h6" variant="h6">
                            Anúncios
                        </Typography>
                        <Typography component="h6" variant="subtitle2">
                            ENCONTRADOS  200 RESULTADOS
                        </Typography>
                        <br /><br />

                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image="https://source.unsplash.com/random"
                                    title="Produto x"
                                    subtitle="$ 10,00"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image="https://source.unsplash.com/random"
                                    title="Produto x"
                                    subtitle="$ 10,00"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image="https://source.unsplash.com/random"
                                    title="Produto x"
                                    subtitle="$ 10,00"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>


            </Container>

        </TemplateDefaut >
    )
}

export default List