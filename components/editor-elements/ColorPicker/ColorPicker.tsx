import React from "react";
import { IColorPickerProps } from "../../../model/editor.model";

const ColorPicker: React.FC<IColorPickerProps> = props => {
  const { id, name, onChange, value } = props;
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input
        id={id}
        className="frse-colorpicker"
        type="color"
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default ColorPicker;
