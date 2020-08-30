import React, { useContext, useRef } from "react";
import { useSelector } from 'react-redux';
import { ColorPicker } from "../../ColorPicker";
import { avatarPropertySelector } from "../../../../store/avatar/avatar.selector";
import { AvatarParts } from "../../../../store/avatar/avatar.state";
import { GenericProperties } from "../../../../shared/models/generic.model";
import { useActions } from './../../../../shared/useActions';
import { avatarPartSelector } from './../../../../store/avatar/avatar.selector';

interface IBodyTab {
}

const BodyTab: React.FC<IBodyTab> = props => {
    const storeFaceBackground = useSelector(avatarPropertySelector(AvatarParts.FACE, GenericProperties.BACKGROUND));
    const storeBodyBackground = useSelector(avatarPropertySelector(AvatarParts.BODY, GenericProperties.BACKGROUND));
    const storeNoseBackground = useSelector(avatarPropertySelector(AvatarParts.NOSE, GenericProperties.BACKGROUND));
    const actions = useRef(useActions());

    const handleFaceBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        actions.current.setAvatarProperty(AvatarParts.FACE, GenericProperties.BACKGROUND, e.target.value);
    };

    const handleBodyBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        actions.current.setAvatarProperty(AvatarParts.BODY, GenericProperties.BACKGROUND, e.target.value);
    };

    const handleNoseBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        actions.current.setAvatarProperty(AvatarParts.NOSE, GenericProperties.BACKGROUND, e.target.value);
    }

    return (
        <>
            <ColorPicker
                id="skin"
                name="Skin"
                value={storeFaceBackground}
                onChange={handleFaceBackgroundChange}
            />
            <ColorPicker
                id="body"
                name="Body"
                value={storeBodyBackground}
                onChange={handleBodyBackgroundChange}
            />
            <ColorPicker
                id="nose"
                name="Nose"
                value={storeNoseBackground}
                onChange={handleNoseBackgroundChange}
            />
        </>
    );
};

export default BodyTab;

