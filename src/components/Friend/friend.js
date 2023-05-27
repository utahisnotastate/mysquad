import * as React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {useSelector, useDispatch} from "react-redux";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ComponentContainer from "./componentcontainer";
import TabsList from "../tabslist";
import './friend.css';


const Friend = ({friend}) => {
    const dispatch = useDispatch();
    const {handle, images, messages, background} = friend;
    const [view, setView] = React.useState('mood');
    const tabs = [
        {label: 'Mood', view: 'mood'},
        {label: 'Messages', view: 'messages'},
        {label: 'Gallery', view: 'gallery'},
    ];

    // update friend object  with an updated background property
    return (
        <Accordion>
            <AccordionSummary
                style={{background: background}}
                expandIcon={<ExpandMoreIcon/>}
            >
                <Typography>{handle}</Typography>
            </AccordionSummary>
            <AccordionDetails
                style={{display: 'flex'}}
            >
                <TabsList tabs={tabs} />
                <ComponentContainer friend={friend} view={view} setView={setView} />
            </AccordionDetails>
        </Accordion>
    );
};
export default Friend;
