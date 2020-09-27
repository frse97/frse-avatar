import React, { Dispatch, SetStateAction } from 'react';
import cs from 'classnames';
import { useState } from 'react';
import BodyTab from './components/BodyTab';
import DecorationTab from './components/DecorationTab';
import EyesTab from './components/EyesTab';
import MouthTab from './components/MouthTab';

type ITabType = 'body' | 'eyes' | 'mouth' | 'decoration';

export interface ITab {
    /**
     * The identifier of the Tab
     */
    id: ITabType;
    /**
     * An additional icon to display on the Tab
     */
    icon?: JSX.Element;
    /**
     * The label of the Tab
     */
    label?: string;
    /**
     * The content displayed by the Tab
     */
    content?: JSX.Element;
}

interface ITabs {
    /**
     * The array of Tabs to display
     */
    tabs: Array<ITab>;
}

interface ITabsHeader {
    tabs: Array<ITab>;
}

interface ITabContent {
    currentTabId: ITabType;
}

const Tabs: React.FC<ITabs> = props => {
    const [currentSelectedTab, setCurrentSelectedTab] = useState<ITabType>('body');
    const { tabs } = props;

    const handleTabChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.persist();
        //@ts-ignore
        setCurrentSelectedTab(event.target.value);
    }

    const TabsHeader: React.FC<ITabsHeader> = props => {
        const { tabs } = props;
        return (
            <div className='tabs-wrapper'>
                {tabs.map((tab: ITab) => {
                    const classNames = cs('tabs-button', currentSelectedTab === tab.id ? '--selected' : '');
                    return (<button key={tab.id}
                        id={tab.id}
                        value={tab.id}
                        className={classNames}
                        type="button"
                        name={tab.label}
                        onClick={handleTabChange}
                        formTarget="_blank"
                    >
                        {tab.label}
                    </button>
                    )
                })}
            </div>);
    }

    const TabsContent: React.FC<ITabContent> = props => {
        const { currentTabId } = props;
        let content: JSX.Element = undefined;

        if (currentTabId === 'body') {
            content = <BodyTab />
        } else if (currentTabId === 'decoration') {
            content = <DecorationTab />
        } else if (currentTabId === 'eyes') {
            content = <EyesTab />
        } else if (currentTabId === 'mouth') {
            content = <MouthTab />
        }

        return <div className="tabs-content">
            {content}
        </div>
    }

    return (
        <div className="tabs">
            <TabsHeader tabs={tabs} />
            <TabsContent currentTabId={currentSelectedTab} />
        </div>
    )
}

export default Tabs;