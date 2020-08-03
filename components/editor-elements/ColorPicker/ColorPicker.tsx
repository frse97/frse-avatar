import React from "react";
import { IColorPickerProps } from "../../../model/editor.model";

const ColorPicker: React.FC<IColorPickerProps> = props => {
  const { id, name, onChange, value } = props;
  return (
    <div className="frse-colorpicker">
      <label htmlFor={id}>{name}</label>
      <input
        id={id}
        type="color"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default ColorPicker;
