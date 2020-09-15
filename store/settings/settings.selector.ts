import { IAvatarGeneratorState } from "../store.state";

export const settingsThemeSelector = () => (state: IAvatarGeneratorState) => {
    return state.settings.theme;
}