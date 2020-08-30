
import { AVATAR_SET_PART_PROPERTY } from './avatar.type';
import { AvatarParts, IPartState, AttributeState } from './avatar.state';
import { GenericProperties } from '../../shared/models/generic.model';

type SetAvatarPartProperty = {
    type: typeof AVATAR_SET_PART_PROPERTY,
    avatarParts: AvatarParts;
    avatarAttribute: GenericProperties;
    attributeValue: any;
}

export const avatarSetPartProperty = (avatarParts: AvatarParts, avatarAttribute: GenericProperties, attributeValue: any): SetAvatarPartProperty => {
    return {
        type: AVATAR_SET_PART_PROPERTY,
        avatarParts,
        avatarAttribute,
        attributeValue
    }
}

export type ALL_ACTIONS = 
  | SetAvatarPartProperty;