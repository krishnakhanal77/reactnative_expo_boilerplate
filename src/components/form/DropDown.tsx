import { Picker, PickerProps } from "@react-native-picker/picker";
import React from "react";
import { Text, View } from "react-native";

interface IDropdown extends PickerProps {
  label: string;
  options: { [key: string]: string }[];
  onValueChange: any;
}

const DropDown = (props: IDropdown) => {
  return (
    <>
      <Picker {...props}>
        {props.options?.map((op, index) => {
          return <Picker.Item key={index} label={op.label} value={op.value} />;
        })}
      </Picker>
    </>
  );
};

export default DropDown;
