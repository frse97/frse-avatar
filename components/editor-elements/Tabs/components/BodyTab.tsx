import React, { useContext, useRef } from "react";
import { ColorPicker } from "../../ColorPicker";
import { useSelector } from 'react-redux';
import { avatarPropertySelector } from "../../../../store/avatar/avatar.selector";
import { AvatarParts } from "../../../../store/avatar/avatar.state";
import { GenericProperties } from "../../../../shared/models/generic.model";
import { useActions } from './../../../../shared/useActions';

interface IBodyTab {
}

const BodyTab: React.FC<IBodyTab>= props => {
    const storeBodyBackground = useSelector(avatarPropertySelector(AvatarParts.BODY, GenericProperties.BACKGROUND))
    const actions = useRef(useActions(AvatarParts.BODY, GenericProperties.BACKGROUND, undefined));
    
    console.log(actions.current);

    // const { currentSkinColor, currentBodyColor, currentNoseColor, setCurrentSkinColor, setCurrentBodyColor, setCurrentNoseColor } = useContext(AppContext);

    // const handleSkinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.persist();
    //     setCurrentSkinColor(e.target.value);
    //   };
    
      const handleBodyBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        actions.current.setAvatarProperty(AvatarParts.BODY, GenericProperties.BACKGROUND, e.target.value);
        console.log('action');
    };

    //   const handleNoseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.persist();
    //     setCurrentNoseColor(e.target.value);
    //   }

    console.log(storeBodyBackground);

    return (
        <>
            <ColorPicker
                id="skin"
                name="Skin"
                value={storeBodyBackground}
                onChange={handleBodyBackgroundChange}
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
                // value={currentNoseColor}
                // onChange={handleNoseChange}
            />
            {/* <NumberInput /> */}
        </>
    );
};

export default BodyTab;

