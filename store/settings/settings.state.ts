import { FrseAvatarGeneratorThemes } from "../../model/theme.model";
import { FrseAvatarGeneratorSupportedLang } from "../../shared/models/region.model";

export interface ISettingsState {
    theme: FrseAvatarGeneratorThemes;
    region: FrseAvatarGeneratorSupportedLang;
}