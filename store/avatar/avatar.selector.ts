import { AvatarParts } from "./avatar.state";
import { IAvatarGeneratorState } from "../store.state";
import { GenericProperties } from "../../shared/models/generic.model";

export const avatarPartSelector = (part: AvatarParts) => (state: IAvatarGeneratorState) => {
    return state.avatar[part];
}

export const avatarPropertySelector = (part: AvatarParts, property: GenericProperties) => (state: IAvatarGeneratorState) => {
    const avatar = avatarPartSelector(part)(state);
    if(avatar) {
        return avatar.attributes[property];
    };
    return {};
}