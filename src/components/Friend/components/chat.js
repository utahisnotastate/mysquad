import * as React from 'react';
import {useSelector} from "react-redux";
import { Input, MessageList } from "react-chat-elements"
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';

export default function Messages({messages}) {
return (
    <div>
        <MessageList
            className='message-list'
            referance={`message-list-${messages.length}`}
            lockable={true}
            toBottomHeight={'100%'}
            dataSource={messages}
        />

    </div>
)
}

