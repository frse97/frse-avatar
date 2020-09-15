import { SETTINGS_SET_THEME } from './settings.type';
import { FrseAvatarGeneratorThemes } from '../../model/theme.model';

type SettingsSetTheme = {
    type: typeof SETTINGS_SET_THEME;
    theme: FrseAvatarGeneratorThemes;
}

export const settingsSetTheme = (theme: FrseAvatarGeneratorThemes): SettingsSetTheme => {
    return {
        type: SETTINGS_SET_THEME,
        theme
    }
}

export type ALL_ACTIONS = 
  | SettingsSetTheme;