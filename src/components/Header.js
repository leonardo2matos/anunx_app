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
  MenuItem,
  Divider,
  Menu,
} from "@material-ui/core";

import { AccountCircle, MenuIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userName: {
    marginLeft: 6,
  },
  divider: {
    margin:'8px 0',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorUserMenu, setAnchorUserMenu] = React.useState(false);

  const openUserMenu = Boolean(anchorUserMenu);

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
          <IconButton
            color="secondary"
            onClick={(e) => setAnchorUserMenu(e.currentTarget)}
          >
            {true === false ? <Avatar src="" /> : <AccountCircle />}
            <Typography
              variant="subtitle2"
              color="secondary"
              className={classes.userName}
            >
              Leonardo Matos
            </Typography>
          </IconButton>

          <Menu
            anchorEl={anchorUserMenu}
            open={openUserMenu}
            onClose={() => setAnchorUserMenu(null)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Link href="/user/dashboard" passHref>
              <MenuItem>Meus anúncios</MenuItem>
            </Link>
            <Link href="/user/publish" passHref></Link>
            <MenuItem>Publicar novo anúncio</MenuItem>
            <Divider className={classes.divider} />
            <MenuItem>Sair</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
