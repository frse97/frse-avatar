import { IAvatarState } from "./avatar/avatar.state";
import { ISettingsState } from './settings/settings.state';

export type IAvatarGeneratorState = {
    avatar: IAvatarState;
    settings: ISettingsState;
}