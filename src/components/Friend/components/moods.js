import * as React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Paper, Stack} from '@mui/material';
import { styled } from '@mui/material/styles';
import "../friend.css"


const Item = styled(Paper)(({ theme, background }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    background: background,
    textAlign: 'center',
    color: 'white',

}));

export default function Moods({gradients, friend}) {
    const friends = useSelector((state) => state.friends)
    const dispatch = useDispatch();

    return (
            <Stack
                direction="row"
                spacing={2}
            >
                {gradients && gradients.length > 0 ? gradients.map((gradient, index) => (
                    <Item
                        background={gradient.background}
                        key={index}
                        onClick={() => {
                            dispatch({type: 'UPDATE_FRIEND', friend: friend})
                        }}
                    >
                        {gradient.label}
                    </Item>
                )):null}
            </Stack>
    );
}

/*
 <div key={index} onClick={() => setMood(gradient)}>
                    <div style={{background: gradient, width: 100, height: 100}} />
                </div>
 */