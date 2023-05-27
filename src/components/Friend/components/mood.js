import * as React from 'react';
import { Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import {useDispatch} from "react-redux";
//render a functional component that displays a list of gradients that when pressed change the background of the parent component
//the parent component should be able to pass in a list of gradients and a function that changes the background of the parent component

export default function Mood({gradient}) {
    const dispatch = useDispatch();
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent sx={{
                background: gradient,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography>{gradient.label}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=> dispatch({type: 'UPDATE_FRIEND', background: gradient})}>Set Mood</Button>
            </CardActions>
        </Card>
    );
}

