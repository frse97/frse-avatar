import { SETTINGS_SET_REGION, SETTINGS_SET_THEME } from './settings.type';
import { FrseAvatarGeneratorThemes } from '../../model/theme.model';
import { FrseAvatarGeneratorSupportedLang } from '../../shared/models/region.model';

type SettingsSetTheme = {
    type: typeof SETTINGS_SET_THEME;
    theme: FrseAvatarGeneratorThemes;
}
type SettingsSetRegion = {
    type: typeof SETTINGS_SET_REGION;
    region: FrseAvatarGeneratorSupportedLang
}

export const settingsSetTheme = (theme: FrseAvatarGeneratorThemes): SettingsSetTheme => {
    return {
        type: SETTINGS_SET_THEME,
        theme
    }
}

export const settingsSetRegion = (region: FrseAvatarGeneratorSupportedLang): SettingsSetRegion => {
    return {
        type: SETTINGS_SET_REGION,
        region
    }
}

export type ALL_ACTIONS = 
  | SettingsSetTheme
  | SettingsSetRegion;
