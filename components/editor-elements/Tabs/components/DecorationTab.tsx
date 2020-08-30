import React, { useContext } from "react";
import { ColorPicker } from "../../ColorPicker";

const DecorationTab: React.FC = () => {

    // const { currentBlushColor, setCurrentBlushColor} = useContext(AppContext);

    // const handleBlushChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.persist();
    //     setCurrentBlushColor(e.target.value);
    //   }

    return (
        <>
            <ColorPicker
                id="blush"
                name="Blush"
                // value={currentBlushColor}
                // onChange={handleBlushChange}
            /></>
    );
};

export default DecorationTab;
