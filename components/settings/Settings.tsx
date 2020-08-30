import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCog } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import cs from 'classnames';
import { emitKeypressEvents } from 'readline';

enum SettingsModes {
    EXP = 'expanded',
    COL = 'collapsed'
}

type ISettingsElementType = 'link' | 'button';
export interface ISettingsElement {
    /**
     * Label used for Tooltip
     */
    label?: string;
    /**
     * The type of the Element
     */
    type: ISettingsElementType;
    /**
     * Icon to display
     */
    icon: JSX.Element;
    /**
     * Method to call for buttons
     */
    action?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * Link for anchors
     */
    url?: string;
}

interface ISettings {
    settingElements: Array<ISettingsElement>;
}

const Settings: React.FC<ISettings> = props => {
    const { settingElements } = props;
    const [mode, setMode] = useState<SettingsModes>(SettingsModes.COL);

    const classNames: string = cs('settings', mode === SettingsModes.COL ? '--collapsed' : '--expanded');
    const containerClassName: string = cs('settings-container', mode === SettingsModes.COL ? '--collapsed' : '--expanded');
    const iconWrapperClassName: string = cs('settings-icon', mode === SettingsModes.COL ? '--collapsed' : '--expanded');

    const handleModeChange = () => {
        if (mode === SettingsModes.COL) {
            setMode(SettingsModes.EXP);
        } else if (mode === SettingsModes.EXP) {
            setMode(SettingsModes.COL);
        }
    }

    const SettingsElement: React.FC<ISettingsElement> = props => {
        const { label, icon, type, action, url } = props;
    return type === 'button' ? <button type="button" data-tooltip={label} className="settings-button settings-action" onClick={action} >{icon}</button> :
                               <a className="settings-link settings-action" data-tooltip={label} href={url} target="_blank">{icon}</a>
    }

    return <div className={classNames}>
        <button className={iconWrapperClassName} onClick={handleModeChange}><FontAwesomeIcon icon={faCog} /></button>
        <div className={containerClassName}>
            {settingElements.map((el: ISettingsElement) => (
                <SettingsElement key={settingElements.indexOf(el)} label={el.label} icon={el.icon} type={el.type} action={el.action} url={el.url} />
            ))}
        </div>
    </div>

    
}

export default Settings;