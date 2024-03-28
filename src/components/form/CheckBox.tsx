import Checkbox, { CheckboxProps } from "expo-checkbox";
import { useState } from "react";
import { Text, View } from "react-native";

interface ICheckBox extends CheckboxProps {
  label: string;
  onValueChange: any;
}

export default function CheckBox(props: ICheckBox) {
  return (
    <>
      <View className="flex flex-row space-x-2">
        <Checkbox
          className=""
          {...props}
          // value={props.value}
          // onValueChange={setChecked}
          // color={isChecked ? "#4630EB" : undefined}
        />
        <Text className="">{props.label}</Text>
      </View>
    </>
  );
}
