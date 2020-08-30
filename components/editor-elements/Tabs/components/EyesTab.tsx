import React, { useRef } from "react";
import { useSelector } from 'react-redux';
import { useActions } from "../../../../shared/useActions";
import { avatarPropertySelector } from "../../../../store/avatar/avatar.selector";
import { AvatarParts } from "../../../../store/avatar/avatar.state";
import { GenericProperties } from "../../../../shared/models/generic.model";
import { ColorPicker } from "../../ColorPicker";

const EyesTab: React.FC = () => {

    const storeEyesBackground = useSelector(avatarPropertySelector(AvatarParts.EYES, GenericProperties.BACKGROUND));
    const storeEyebrownBackground = useSelector(avatarPropertySelector(AvatarParts.EYEBROWN, GenericProperties.BACKGROUND));

    const actions = useRef(useActions());

    const handleEyesBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        actions.current.setAvatarProperty(AvatarParts.EYES, GenericProperties.BACKGROUND, e.target.value);
    };

    const handleEyebrownBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        actions.current.setAvatarProperty(AvatarParts.EYEBROWN, GenericProperties.BACKGROUND, e.target.value);
    };

    return (
        <>
        <ColorPicker
            id="eyes"
            name="Eyes"
            value={storeEyesBackground}
            onChange={handleEyesBackgroundChange}
        />
        <ColorPicker
            id="eyebrown"
            name="Eyebrown"
            value={storeEyebrownBackground}
            onChange={handleEyebrownBackgroundChange}
        /></>
    );
};

export default EyesTab;
