import * as React from 'react'
import {useSelector} from "react-redux";
import Friend from '../components/Friend/friend'


// @ts-ignore
export default function MySquad() {
    const friends = useSelector((state) => state.friends)
    return (
        <div>
            {friends && friends.length > 0 ? friends.map((friend, index) => (
                    <Friend
                        key={index}
                        friend={friend}
                    />
                )) : null}
        </div>
    )
}

/*
*  <Accordion>
                  {friends && friends.length > 0? friends.map((friend, index) => (
                      <AccordionItem key={index} handle={friend.handle} gallery={friend.images}/>
                    )): null}
            </Accordion>
*
* */
