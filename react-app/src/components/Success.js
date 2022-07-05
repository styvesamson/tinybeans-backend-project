import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Success() {
    return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
            <Grid item>

                <Card sx={{ maxWidth: 450 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={require('../assets/img/success.jpeg')}
                        />
                        <CardContent>
                            <Typography variant="h4" component="div">
                                Your orderID is:
                            </Typography>
                            <Typography variant="h4" component="div">
                                Your orderID is:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Thanks for your purchase . Your feedback is important to us.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>


    );
}

