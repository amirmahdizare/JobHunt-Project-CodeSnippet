import { Button, Box, Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, makeStyles, Grid, Divider } from '@material-ui/core'
import React from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: theme.spacing(1),
        boxShadow: 'unset',
        border: '1px solid #e2e2e2',
        bottom: '0px',
        textAlign: 'center',
        position: 'relative',
        transition: 'bottom 0.4s ease',
        '&:hover': {
            boxShadow: '0px 0px 25px rgba(0,0,0 , 0.15)',
            borderColor: 'white',
            bottom: '15px'
        },
        '& .MuiCardContent-root': {
            padding: theme.spacing(1),
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
            position: 'relative'

        },
        '& .MuiCardActions-root': {
            justifyContent: 'center'
        },
        '& .MuiButtonBase-root':{
            textTransform:'none'
        }
    },
    detail: {
        backgroundColor:'white',
        borderRadius:theme.spacing(1),
        display: 'flex',
        justifyContent: 'center',
        left:'50%',
        padding:'10px',
        position: 'absolute',
        transform:'translateX(-50%)',
        top: '-20%',
        width: '70%',
        '& .MuiDivider-root':{
            backgroundColor:theme.palette.secondary.main,
            marginLeft:theme.spacing(1),
            marginRight:theme.spacing(1)
        }
    }
}));

const Tip = (props) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} lg={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={props.title}
                        height="250"
                        image={props.image}
                        title={props.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {props.title}
                        </Typography>
                        <Box className={classes.detail}>
                            <Typography  color="secondary">{props.date}</Typography>
                            <Divider color="secondary" orientation="vertical" flexItem  />
                            <Typography color="secondary" >{props.numberOfComments} Comments</Typography>

                        </Box>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                    <Divider variant="middle" light />
                    <CardActions>
                        <Button
                            size="medium"
                            color="secondary"
                            href="#"
                            variant="text"
                            endIcon={<ArrowRightAltIcon />}>
                            Read More
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
export default Tip