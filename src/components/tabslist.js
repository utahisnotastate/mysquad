import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import './tabscontainer.css';

// make the TabPanel component flip
export default function TabsList({ tabs }) {
    const [view, setView] = React.useState("mood");
    return (
            <Tabs
                orientation="vertical"
                sx={{ borderRight: 1, borderColor: "divider" }}
            >
                {tabs && tabs.length > 0 ? tabs.map((tab, index) => (
                    <Tab key={index} label={tab.label} onClick={() => setView(tab.view)} />
                )):null}
            </Tabs>
    );
}

/*
*  <FriendDetails view={view} friend={friend} />
*
*
* */