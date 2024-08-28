import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatarIcon:{
    marginRight: 15,
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={3}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Anunx
          </Typography>
          <Link href="/user/publish">
            <Button color="inherit" variant="outlined">
              Anunciar e Vender
            </Button>
          </Link>
          <IconButton color="secondary" className={classes.avatarIcon}>
            {true === false ? <Avatar src="" /> : <AccountCircle />}
            <Typography variant="subtitle2" color="secondary"  className={classes.avatarIcon}>Leonardo Matos</Typography>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
