import {
  Card as CardMUI,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  cardMedia: {
    paddingTop: "56%",
  },
}));

const Card = ({ image, title, subtitle, actions }) => {
  const classes = useStyles();
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

export default Card;
