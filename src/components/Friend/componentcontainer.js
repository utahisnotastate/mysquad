import * as React from 'react';
import Moods from "./components/moods";
import {useSelector} from "react-redux";
import Gallery from "./components/gallery";
import Messages from "./components/messages";

export default function ComponentContainer({friend, view, setView}) {
    const {handle, images, messages, background} = friend;
    const gradients = useSelector(state => state.gradients);
    switch (view) {
        case 'moods':
            return <Moods gradients={gradients} friend={friend} background={background} />;
        case 'messages':
            return <Messages handle={handle} messages={messages}  />;
        case 'gallery':
            return <Gallery gallery={images} />;
        default:
            return <Moods gradients={gradients} friend={friend} background={background} />;
    }
}