import { enableES5 } from "immer";
import { combineReducers } from "redux";
import { IAvatarGeneratorState } from "./store.state";
import { avatarReducer } from './avatar/avatar.reducer';
import { settingsReducer } from './settings/settings.reducer';

enableES5();
export const rootReducer = combineReducers<IAvatarGeneratorState>({
    avatar: avatarReducer, settings: settingsReducer
});