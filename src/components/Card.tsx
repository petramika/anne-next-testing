import { Card as MUICard } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Card = (props: any) => {
  return (
    <MUICard 
      sx={{ maxWidth: 345 }}
      {...props}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="/pear.svg"
        title="yellow pear"
      />
      <CardContent>
        <Typography 
          gutterBottom
          variant="h5"
          component="div"
        >
          Lizard
        </Typography>
        <Typography 
          variant="body2"
          color="text.secondary"
        >
          Asian pears are uniform in color (yellowish-tan) 
          and shaped more like apples, with a completely different texture and taste
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </MUICard>
  );
};

export default Card;