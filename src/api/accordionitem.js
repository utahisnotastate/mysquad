import React, { useState } from 'react';
import {Typography} from "@mui/material";
import Gallery from "../components/Accordion/components/gallery";
import images from "./images.dummydata";

// @ts-ignore
// @ts-ignore
 const AccordionItem = () => {
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active);
    };

    const activeClass = active ? "active" : "inactive";
    return (
        <div className={activeClass} onClick={toggle}>
            <div>
                <span className="summary">{`question.summary`}</span>
                <span className="folding-pannel answer">{`question.answer`}</span>
            </div>
        </div>
    );
};
export default AccordionItem

