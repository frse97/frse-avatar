import React, { MouseEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCog, faMoon, faEnvelopeSquare, faSun, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import cs from 'classnames';
import { emitKeypressEvents } from 'readline';
import { settingsThemeSelector } from '../../store/settings/settings.selector';
import { useActions } from '../../shared/useActions';
import { FrseAvatarGeneratorThemes } from '../../model/theme.model';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { i18n, withTranslation } from '../../shared/i18n';
import PropTypes from 'prop-types';
import { FrseAvatarGeneratorSupportedLang } from '../../shared/models/region.model';

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

const Settings = ({ t }) => {
    const [mode, setMode] = useState<SettingsModes>(SettingsModes.COL);

    const classNames: string = cs('settings', mode === SettingsModes.COL ? '--collapsed' : '--expanded');
    const containerClassName: string = cs('settings-container', mode === SettingsModes.COL ? '--collapsed' : '--expanded');
    const iconWrapperClassName: string = cs('settings-icon', mode === SettingsModes.COL ? '--collapsed' : '--expanded');

    const settingsThemeState = useSelector(settingsThemeSelector());
    const actions = useRef(useActions());

    const handleThemeChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        actions.current.setTheme(settingsThemeState === 'light' ? FrseAvatarGeneratorThemes.DARK : FrseAvatarGeneratorThemes.LIGHT);
        if (settingsThemeState === FrseAvatarGeneratorThemes.LIGHT) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else if (settingsThemeState === FrseAvatarGeneratorThemes.DARK) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    };

    const handleLanguageChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        if (i18n.language && i18n.language === 'de') {
            i18n.changeLanguage('en');
            actions.current.setRegion(FrseAvatarGeneratorSupportedLang.EN);
        } else if (i18n.language && i18n.language === 'en') {
            i18n.changeLanguage('de');
            actions.current.setRegion(FrseAvatarGeneratorSupportedLang.DE);
        }
    }

const settings: ISettingsElement[] = [
    {
        label: t('actions.settings.change-theme'),
        type: 'button',
        icon: settingsThemeState === FrseAvatarGeneratorThemes.LIGHT ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />,
        action: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleThemeChange(event)
    },
    {
        label: t('actions.settings.github'),
        type: 'link',
        icon: <FontAwesomeIcon icon={faGithub} />,
        url: "https://github.com/frse97"
    },
    {
        label: t('actions.settings.mail-me'),
        type: 'link',
        icon: <FontAwesomeIcon icon={faEnvelopeSquare} />,
        url: "mailto://sebastian.fries@outlook.com"
    },
    {
        label: t('actions.settings.change-region'),
        type: 'button',
        icon: <FontAwesomeIcon icon={faGlobe} />,
        action: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleLanguageChange(event)
    }
]

const handleModeChange = () => {
    if (mode === SettingsModes.COL) {
        setMode(SettingsModes.EXP);
    } else if (mode === SettingsModes.EXP) {
        setMode(SettingsModes.COL);
    }
}

const SettingsElement: React.FC<ISettingsElement> = props => {
    const { label, icon, type, action, url } = props;
    //@ts-ignore
    return type === 'button' ? <button type="button" data-tooltip={label} className="settings-button settings-action" onClick={action} >{icon}</button> :
        <a className="settings-link settings-action" data-tooltip={label} href={url} target="_blank">{icon}</a>
}

return <div className={classNames}>
    <button className={iconWrapperClassName} onClick={handleModeChange}><FontAwesomeIcon icon={faCog} /></button>
    <div className={containerClassName}>
        {settings.map((el: ISettingsElement) => (
            <SettingsElement key={settings.indexOf(el)} label={el.label} icon={el.icon} type={el.type} action={el.action} url={el.url} />
        ))}
    </div>
</div>


}

Settings.getInitialProps = async () => ({
    namespacesRequired: ['common']
});

Settings.propTypes = {
    t: PropTypes.func.isRequired
}

export default withTranslation('common')(Settings);  