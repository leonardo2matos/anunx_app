import {
    Box, 
    Container, 
    IconButton, 
    InputBase, 
    Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/search'
import TemplateDefault from '../src/templates/Default'
import { display, padding } from '@mui/system'

const useStyles = makeStyles(() => ({
    searchContainer: {
        padding: theme.spacing(8, 10, 6)
    },
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0,2),
        marginTop:20,
    }
}))

const Home = () => {
    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth="md" className={classes.searchContainer}>
                <Typography component="h1" variant="h3" align="center" color="textPrimary">
                    O que deseja encontrar?
                </Typography>
                <Box className={classes.searchBox}>
                  <InputBase 
                    placeholder="Ex: Iphone 12 com garantia"
                    fullWidth
                 />
                 <IconButton>
                     <SearchIcon />
                 </IconButton>
                </Box>
            </Container>
        </TemplateDefault>

    )
}

export default Home