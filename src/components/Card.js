import {
  Card as CardMUI,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: "56%",
  },
  buttonAdd: {
    margin: "30px auto",
    display: "block",
  }
}));

const Card = ({ image, title, subtitle, actions }) => {
  return (
    <CardMUI>
      <CardMedia className={classes.cardMedia} image={image} title={title} />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>{subtitle}</Typography>
      </CardContent>
      {actions ? <CardActions>{actions}</CardActions> : null}
    </CardMUI>
  );
};

export default Card