import { IAvatarGeneratorState } from "../store.state";

export const settingsThemeSelector = () => (state: IAvatarGeneratorState) => {
    return state.settings.theme;
}

export const settingsRegionSelector = () => (state: IAvatarGeneratorState) => {
    return state.settings.region;
}