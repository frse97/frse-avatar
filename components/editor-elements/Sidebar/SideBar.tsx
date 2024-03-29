import React, { Dispatch, SetStateAction } from "react";
import { Tabs } from "../Tabs";
import { ITab } from "../Tabs/Tabs";

interface ISideBarProps {}

const tabs: ITab[] = [
    {
        id: 'body',
        label: 'Body'
    },
    {
        id: 'eyes',
        label: 'Eyes'
    },
    {
        id: 'mouth',
        label: 'Mouth'
    },
    {
        id: 'decoration',
        label: 'Decoration'
    }
]

const SideBar: React.FC<ISideBarProps> = props => {
    
    return (
        <div className="sidebar">
            <h2>Avatar.edit</h2>
            <Tabs tabs={tabs} />
        </div>
    );
};

export default SideBar;
