import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <>
      <View className="flex-1 justify-center items-center">
        <Text>I am contact pages </Text>
        <Link
          className="border py-1 mt-4 w-36 px-2 text-center rounded bg-blue-950 text-white hover:text-blue-400"
          href="/login"
        >
          Missing Page
        </Link>
      </View>
    </>
  );
}
