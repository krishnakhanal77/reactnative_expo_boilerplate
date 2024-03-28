import { View, Text, TextInput, TextInputProps } from "react-native";
import React, { useState } from "react";
import { FormikErrors, FormikTouched } from "formik";

interface IPassword extends TextInputProps {
  errors: FormikErrors<{
    email: string;
    password: string;
  }>;
  touched: FormikTouched<{
    email: string;
    password: string;
  }>;
}

export default function PasswordInput(props: IPassword) {
  return (
    <>
      <TextInput
        className="border px-2 py-1 rounded border-gray-600"
        {...props}
        textContentType="password"
        secureTextEntry
      />
    </>
  );
}
