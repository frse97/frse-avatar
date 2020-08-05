import React, { useContext } from "react";
import { ColorPicker } from "../../ColorPicker";
import { AppContext } from "../../../../context/appContext";

interface IBodyTab {
}

const BodyTab: React.FC<IBodyTab>= props => {

    const { currentSkinColor, currentBodyColor, currentNoseColor, setCurrentSkinColor, setCurrentBodyColor, setCurrentNoseColor } = useContext(AppContext);

    const handleSkinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setCurrentSkinColor(e.target.value);
      };
    
      const handleBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setCurrentBodyColor(e.target.value);
      };

      const handleNoseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setCurrentNoseColor(e.target.value);
      }

    return (
        <>
            <ColorPicker
                id="skin"
                name="Skin"
                value={currentSkinColor}
                onChange={handleSkinChange}
            />
            <ColorPicker
                id="body"
                name="Body"
                value={currentBodyColor}
                onChange={handleBodyChange}
            />
            <ColorPicker
                id="nose"
                name="Nose"
                value={currentNoseColor}
                onChange={handleNoseChange}
            />
        </>
    );
};

export default BodyTab;

