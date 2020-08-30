import React, { useContext } from "react";
import { ColorPicker } from "../../ColorPicker";
// import { AppContext } from "../../../../context/appContext";

const MouthTab: React.FC = () => {

    // const { currentMouthColor, currentTongueColor, setCurrentMouthColor, setCurrentTongueColor } = useContext(AppContext);

    // const handleMouthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.persist();
    //     setCurrentMouthColor(e.target.value);
    // };

    // const handleTongueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.persist();
    //     setCurrentTongueColor(e.target.value);
    // };

    return (
        <><ColorPicker
            id="mouth"
            name="Mouth"
            // value={currentMouthColor}
            // onChange={handleMouthChange}
        />
            <ColorPicker
                id="tongue"
                name="Tongue"
                // value={currentTongueColor}
                // onChange={handleTongueChange}
            /></>
    );
};

export default MouthTab;
