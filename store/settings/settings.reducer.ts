
import { ISettingsState } from './settings.state';
import * as SettingsActions from './settings.actions';
import { FrseAvatarGeneratorThemes } from '../../model/theme.model';
import { SETTINGS_SET_REGION, SETTINGS_SET_THEME } from './settings.type';
import produce, { Draft } from 'immer';
import { FrseAvatarGeneratorSupportedLang } from '../../shared/models/region.model';
const key = 'settings';
// const string = localStorage.getItem(key);
const string = undefined;

const saveToLs = (value: any) => {
    // localStorage.setItem(key, JSON.stringify(value));
}

const getInitialState = (forceReset: boolean): ISettingsState => {
    let initialState: ISettingsState;
    if(string && !forceReset) {
        const data = JSON.parse(string);
        initialState = data as ISettingsState;
    } else {
        initialState = {
            theme: FrseAvatarGeneratorThemes.DARK,
            region: FrseAvatarGeneratorSupportedLang.DE
        };
    }
    return initialState;
}

export const settingsReducer = (state: ISettingsState = getInitialState(false), a: SettingsActions.ALL_ACTIONS): ISettingsState => {
    const result = produce((draft: Draft<ISettingsState>, action: SettingsActions.ALL_ACTIONS) => {
        switch (action.type) {
            case SETTINGS_SET_THEME: {
                draft.theme = action.theme
                return draft;
            }
            case SETTINGS_SET_REGION: {
                draft.region = action.region
                return draft;
            }
            default: 
                return draft;
        }
    });

    const out = result(state, a);
    saveToLs(out);
    return out;
}