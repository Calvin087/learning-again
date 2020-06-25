import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 240,
    },
});


function ImgMediaCard(props) {
    const classes = useStyles();
    const baseMap = "https://www.google.com/maps/place/" + props.bizName + ", " + props.street + ", " + props.city + ", " + props.country

    return (


        <div className="item">
            <Card className={classes.root}>
                <CardActionArea>

                    <CardMedia
                        component="img"
                        alt={props.bizName}
                        height="130"
                        image={props.heroImg}
                        title={props.bizName}
                    />

                    <CardContent>                
                    
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.bizName}
                        </Typography>
                    
                        <Typography className="trunc" variant="body2" color="textSecondary" component="p">
                            {props.description}
                        </Typography>
                        
                        <Typography className="addy" variant="body2" color="textSecondary" component="p">
                            <i class="fas fa-map-marked-alt"></i><a href={baseMap} target="_blank">{props.street}, {props.city}, {props.country}</a>
                        </Typography>

                        <Typography className="phone" variant="body2" color="textSecondary" component="p">
                            <i class="fas fa-mobile-alt"></i> {props.phone}
                        </Typography>


                    </CardContent>

                </CardActionArea>
                
                <CardActions>
                    <Button size="small" color="primary">
                        <a href={props.website} target='_blank'>Visit Website</a> 
                    </Button>
                </CardActions>
                
            </Card>
        </div>
    );
}

export default ImgMediaCard