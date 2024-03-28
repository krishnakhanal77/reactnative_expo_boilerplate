import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import React from "react";
import HomeHeader from "../components/HomeHeader";
import { RootSiblingParent } from "react-native-root-siblings";

export default function AppLayout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RootSiblingParent>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: "Home",
              headerTitle: (props) => <HomeHeader />,
            }}
          />
          <Stack.Screen
            name="contact/index"
            options={{
              title: "Contact",
            }}
          />
          <Stack.Screen
            name="login/index"
            options={{
              title: "Login",
            }}
          />
          <Stack.Screen
            name="[missing]"
            options={{
              title: "404",
            }}
          />
        </Stack>
      </RootSiblingParent>
    </QueryClientProvider>
  );
}
