import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { styled } from "nativewind";

export default function Page() {
  const StyledText = styled(Text, "font-bold ");

  return (
    <>
      <View className="flex-1 items-center justify-center">
        <View className="flex items-center">
          <StyledText>
            hey this is Home page please add Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </StyledText>
          <Link
            className="border py-1 mt-4 w-36 px-2 text-center rounded bg-blue-950 text-white hover:text-blue-400"
            href="/login"
          >
            Login
          </Link>
        </View>
      </View>
    </>
  );
}
