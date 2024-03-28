import React from "react";
import { Pressable, Text, View } from "react-native";

interface IButton {
  title: string;
  clasName?: string;
  handleSubmit: any;
}

export default function Button(props: IButton) {
  return (
    <View className="">
      <Pressable
        className="border w-24 bg-blue-950 hover:text-blue-400 flex items-center justify-center rounded px-3 py-2"
        onPress={() => {
          props.handleSubmit();
        }}
      >
        <Text className="text-white">{props.title}</Text>
      </Pressable>
    </View>
  );
}
