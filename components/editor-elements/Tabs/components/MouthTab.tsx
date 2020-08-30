import React, { useRef } from "react";
import { useSelector } from 'react-redux';

import { ColorPicker } from "../../ColorPicker";
import { avatarPropertySelector } from "../../../../store/avatar/avatar.selector";
import { AvatarParts } from "../../../../store/avatar/avatar.state";
import { GenericProperties } from "../../../../shared/models/generic.model";
import { useActions } from "../../../../shared/useActions";
// import { AppContext } from "../../../../context/appContext";

const MouthTab: React.FC = () => {

    const storeMouthBackground = useSelector(avatarPropertySelector(AvatarParts.MOUTH, GenericProperties.BACKGROUND));
    const storeTongueBackground = useSelector(avatarPropertySelector(AvatarParts.TONGUE, GenericProperties.BACKGROUND));

    const actions = useRef(useActions());

    const handleMouthBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        actions.current.setAvatarProperty(AvatarParts.MOUTH, GenericProperties.BACKGROUND, e.target.value);
    };

     const handleTongueBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        actions.current.setAvatarProperty(AvatarParts.TONGUE, GenericProperties.BACKGROUND, e.target.value);
    };

    return (
        <><ColorPicker
            id="mouth"
            name="Mouth"
            value={storeMouthBackground}
            onChange={handleMouthBackgroundChange}
        />
            <ColorPicker
                id="tongue"
                name="Tongue"
                value={storeTongueBackground}
                onChange={handleTongueBackgroundChange}
            /></>
    );
};

export default MouthTab;
