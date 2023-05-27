import * as React from 'react';
import { MessageList, Input } from "react-chat-elements"
import {Button} from '@mui/material';


export default function Messages({handle, messages}) {
return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <MessageList
            referance={messages}
            className='message-list'
            lockable={true}
            toBottomHeight={'100%'}
            dataSource={messages}
        />
        <Input
            placeholder="Type here..."
            multiline={true}
            maxHeight={300}
            rightButtons={
                <Button>Send</Button>
            }
        />
    </div>
)
}