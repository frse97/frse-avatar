import { GenericProperties } from "../../shared/models/generic.model";

export type IAvatarState = Record<AvatarParts, IPartState>;

export type AttributeState = Record<GenericProperties, any>

export interface IPartState {
    attributes: AttributeState;
}

export enum AvatarParts {
    BLUSH = 'BLUSH',
    BODY = 'BODY',
    EYEBROWN = 'EYEBROWN',
    EYES = 'EYES',
    FACE = 'FACE',
    MOUTH = 'MOUTH',
    NECK = 'NECK',
    NOSE = 'NOSE'
}
