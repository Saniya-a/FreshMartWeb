import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
    root: {
        height:"100vh"
    },
    name:{
        padding: "20px 10px"
    }
}));
export default function () {
    const classes = useStyles();
    return(
        <div className={classes.root}>
           <h2 className={classes.name}>A Digital Marketplace</h2> 
        </div>
    )
}