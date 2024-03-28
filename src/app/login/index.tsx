import Button from "@/src/components/form/Button";
import CheckBox from "@/src/components/form/CheckBox";
import DropDown from "@/src/components/form/DropDown";
import Input from "@/src/components/form/Input";
import PasswordInput from "@/src/components/form/PasswordInput";
import { validationSchema } from "@/src/components/form/formSchema";
import { Formik } from "formik";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const options: { [key: string]: string }[] = [
  {
    label: "html",
    value: "ht",
  },
  {
    label: "js",
    value: "j",
  },
  {
    label: "c++",
    value: "c",
  },
];

export default function Page() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        checkbox: false,
        dropDownValue: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm({
          values: {
            email: "",
            password: "",
            checkbox: false,
            dropDownValue: "",
          },
        });
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        touched,
        resetForm,
      }) => (
        <View className="flex-1 w-full items-center justify-center">
          <View className="px-4 w-full space-y-4">
            <Text className="text-2xl font-bold text-center text-gray-800">
              Login
            </Text>

            <View className="flex flex-col">
              <Text>Email</Text>
              <Input
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                errors={errors}
                touched={touched}
              />
              {errors.email && touched.email && (
                <Text style={{ color: "red" }}>{errors.email}</Text>
              )}
            </View>
            <View className="flex flex-col">
              <Text>Password</Text>
              <PasswordInput
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                errors={errors}
                touched={touched}
              />
              {errors.password && touched.password && (
                <Text style={{ color: "red" }}>{errors.password}</Text>
              )}
            </View>

            <View className="">
              <Pressable>
                <CheckBox
                  label="Remember Me"
                  onValueChange={() =>
                    setFieldValue("checkbox", !values.checkbox)
                  }
                  value={values.checkbox}
                />
                {errors.checkbox && touched.checkbox && (
                  <Text style={{ color: "red" }}>{errors.checkbox}</Text>
                )}
              </Pressable>
            </View>
            <View>
              <Text className="text-gray-700">Select Values</Text>
              <DropDown
                label="Select Values"
                options={options}
                selectedValue={values.dropDownValue}
                onValueChange={handleChange("dropDownValue")}
              />
            </View>

            <View>
              <Button title="Login" handleSubmit={handleSubmit} />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}
