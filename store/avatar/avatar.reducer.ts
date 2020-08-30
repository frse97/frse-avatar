import produce, { Draft } from 'immer';
import {IAvatarState, AvatarParts } from './avatar.state';
import * as AvatarActions from './avatar.actions';
import { GenericProperties } from '../../shared/models/generic.model';
import { AVATAR_SET_PART_PROPERTY } from './avatar.type';

const key = 'avatar';
// const string = localStorage.getItem(key);
const string = undefined;


const saveToLs = (value: any) => {
    // localStorage.setItem(key, JSON.stringify(value));
}

const getInitialState = (forceReset: boolean): IAvatarState => {
    let initialState: IAvatarState;
    if (string && !forceReset) {
        const data = JSON.parse(string);
        initialState = data as IAvatarState;
    } else {
        initialState = {
            [AvatarParts.BLUSH] : {
                attributes: {
                    [GenericProperties.WIDTH]: '',
                    [GenericProperties.HEIGHT]: '',
                    [GenericProperties.TOP]: '',
                    [GenericProperties.LEFT]: '',
                    [GenericProperties.BORDER_RADIUS]: '',
                    [GenericProperties.BACKGROUND]: '#f254a9',
                    [GenericProperties.Z_INDEX]: '',
                }
            },
            [AvatarParts.BODY] : {
                attributes: {
                    [GenericProperties.WIDTH]: '',
                    [GenericProperties.HEIGHT]: '',
                    [GenericProperties.TOP]: '',
                    [GenericProperties.LEFT]: '',
                    [GenericProperties.BORDER_RADIUS]: '',
                    [GenericProperties.BACKGROUND]: '#133337',
                    [GenericProperties.Z_INDEX]: '',
                }
            },
            [AvatarParts.EYEBROWN] : {
                attributes: {
                    [GenericProperties.WIDTH]: '',
                    [GenericProperties.HEIGHT]: '',
                    [GenericProperties.TOP]: '',
                    [GenericProperties.LEFT]: '',
                    [GenericProperties.BORDER_RADIUS]: '',
                    [GenericProperties.BACKGROUND]: '#ffa500',
                    [GenericProperties.Z_INDEX]: '',
                }
            },
            [AvatarParts.EYES] : {
                attributes: {
                    [GenericProperties.WIDTH]: '',
                    [GenericProperties.HEIGHT]: '',
                    [GenericProperties.TOP]: '',
                    [GenericProperties.LEFT]: '',
                    [GenericProperties.BORDER_RADIUS]: '',
                    [GenericProperties.BACKGROUND]: '#3c87b9',
                    [GenericProperties.Z_INDEX]: '',
                }
            },
            [AvatarParts.FACE] : {
                attributes: {
                    [GenericProperties.WIDTH]: '',
                    [GenericProperties.HEIGHT]: '',
                    [GenericProperties.TOP]: '',
                    [GenericProperties.LEFT]: '',
                    [GenericProperties.BORDER_RADIUS]: '',
                    [GenericProperties.BACKGROUND]: '#f0beaf',
                    [GenericProperties.Z_INDEX]: '',
                }
            },
            [AvatarParts.MOUTH] : {
                attributes: {
                    [GenericProperties.WIDTH]: '',
                    [GenericProperties.HEIGHT]: '',
                    [GenericProperties.TOP]: '',
                    [GenericProperties.LEFT]: '',
                    [GenericProperties.BORDER_RADIUS]: '',
                    [GenericProperties.BACKGROUND]: '#424B54',
                    [GenericProperties.Z_INDEX]: '',
                }
            },
            [AvatarParts.TONGUE]: {
                attributes: {
                    [GenericProperties.WIDTH]: '',
                    [GenericProperties.HEIGHT]: '',
                    [GenericProperties.TOP]: '',
                    [GenericProperties.LEFT]: '',
                    [GenericProperties.BORDER_RADIUS]: '',
                    [GenericProperties.BACKGROUND]: '#f254a9',
                    [GenericProperties.Z_INDEX]: '',
                }
            },
            [AvatarParts.NECK] : {
                attributes: {
                    [GenericProperties.WIDTH]: '',
                    [GenericProperties.HEIGHT]: '',
                    [GenericProperties.TOP]: '',
                    [GenericProperties.LEFT]: '',
                    [GenericProperties.BORDER_RADIUS]: '',
                    [GenericProperties.BACKGROUND]: '#133337',
                    [GenericProperties.Z_INDEX]: '',
                }
            },
            [AvatarParts.NOSE] : {
                attributes: {
                    [GenericProperties.WIDTH]: '',
                    [GenericProperties.HEIGHT]: '',
                    [GenericProperties.TOP]: '',
                    [GenericProperties.LEFT]: '',
                    [GenericProperties.BORDER_RADIUS]: '',
                    [GenericProperties.BACKGROUND]: '#DB9B99',
                    [GenericProperties.Z_INDEX]: '',
                }
            }
        };
    }
    return initialState;
};

export const avatarReducer = (state: IAvatarState = getInitialState(false), a: AvatarActions.ALL_ACTIONS): IAvatarState => {
    const result = produce((draft: Draft<IAvatarState>, action: AvatarActions.ALL_ACTIONS) => {
        switch (action.type) {
            case AVATAR_SET_PART_PROPERTY: {
                if(draft[action.avatarParts]) {
                    draft[action.avatarParts].attributes[action.avatarAttribute] = action.attributeValue;
                }
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