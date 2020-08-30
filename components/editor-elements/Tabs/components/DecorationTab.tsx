import React, { useContext, useRef } from "react";
import { useSelector } from 'react-redux';

import { ColorPicker } from "../../ColorPicker";
import { avatarPropertySelector } from "../../../../store/avatar/avatar.selector";
import { AvatarParts } from "../../../../store/avatar/avatar.state";
import { GenericProperties } from "../../../../shared/models/generic.model";
import { useActions } from "../../../../shared/useActions";

const DecorationTab: React.FC = () => {

    const storeBlushBackground = useSelector(avatarPropertySelector(AvatarParts.NOSE, GenericProperties.BACKGROUND));
    const actions = useRef(useActions());

    const handleBlushBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        actions.current.setAvatarProperty(AvatarParts.BLUSH, GenericProperties.BACKGROUND, e.target.value);
    };

    return (
        <>
            <ColorPicker
                id="blush"
                name="Blush"
                value={storeBlushBackground}
                onChange={handleBlushBackgroundChange}
            /></>
    );
};

export default DecorationTab;
