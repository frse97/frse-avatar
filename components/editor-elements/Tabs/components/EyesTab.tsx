import React, { useContext } from "react";
// import { AppContext } from "../../../../context/appContext";
import { ColorPicker } from "../../ColorPicker";

const EyesTab: React.FC = () => {

    // const { currentEyesColor, currentEyeBrownColor, setCurrentEyesColor, setCurrentEyeBrownColor } = useContext(AppContext);

    // const handleEyesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.persist();
    //     setCurrentEyesColor(e.target.value);
    // }

    // const handleEyeBrownChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.persist();
    //     setCurrentEyeBrownColor(e.target.value);
    // }

    return (
        <> <ColorPicker
            id="eyes"
            name="Eyes"
            // value={currentEyesColor}
            // onChange={handleEyesChange}
        />
            <ColorPicker
                id="eyebrown"
                name="Eyebrown"
                // value={currentEyeBrownColor}
                // onChange={handleEyeBrownChange}
            /></>
    );
};

export default EyesTab;
