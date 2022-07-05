import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {useNavigate} from "react-router-dom";

export default function RecipeReviewCard(props) {

    const navigate = useNavigate();
    const routeChange = () =>{

    const path = `checkout/${props.id}`;
        navigate(path);}

    return (
        <div>

            <Card sx={{ maxWidth: 345 }} onClick={routeChange} >

                <CardMedia
                    component="img"
                    height="194"
                    src={props.photoUrl}
                    alt={props.name}
                />
                <CardContent>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography gutterBottom variant="h4" component="div" align="left">
                                {props.name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography gutterBottom variant="h6" component="div" align="right">
                                {props.price}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>

        </div>


    );
}
