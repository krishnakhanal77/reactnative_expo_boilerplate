import { FormikErrors, FormikTouched } from "formik";
import React from "react";
import { TextInput, TextInputProps } from "react-native";

interface IInput extends TextInputProps {
  errors: FormikErrors<{
    email: string;
    password: string;
  }>;
  touched: FormikTouched<{
    email: string;
    password: string;
  }>;
}

export default function Input(props: IInput) {
  return (
    <>
      <TextInput
        {...props}
        className="border px-2 py-1 rounded border-gray-600"
      />
    </>
  );
}
