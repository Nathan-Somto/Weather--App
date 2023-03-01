import { View, Text, Switch, StyleSheet, Platform } from "react-native";
import React, { useContext, useState } from "react";
import { context, SettingsContext } from "../context/settingsContext";
import RNPickerSelect from "react-native-picker-select";
import { MaterialIcons } from "@expo/vector-icons";

export default function Settings() {
  const useSettings = useContext(SettingsContext);
  const { mode, setMode, setUnit } = useSettings as context;
  const [isEnabled, setEnabled] = useState(false);
  const handleSwitch = () => {
    const newEnabledState = !isEnabled;
    const newMode = mode === "day" ? "night" : "day";
    setEnabled(newEnabledState);
    setMode(newMode);
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.textColor}>About the Developer</Text>
        <MaterialIcons size={20} name={"arrow-right"} color={"#edd"} />
      </View>
      <View style={styles.itemContainer}>
        <RNPickerSelect
          placeholder={{ label: "Select Temperature Unit", value: null }}
          style={pickerSelectStyles}
          onValueChange={(value) => setUnit(value)}
          useNativeAndroidPickerStyle={false}
          items={[
            { label: "C", value: "metric" },
            { label: "F", value: "imperial" },
            { label: "K", value: "standard" },
          ]}
        />
      </View>
      <View style={styles.itemContainer}>
        <Text>Contributing to the Project</Text>
        <MaterialIcons size={20} name={"arrow-right"} color={"#edd"} />
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.textColor}>Night Mode</Text>
        <Switch
          trackColor={{ false: "#fff", true: "#0f0" }}
          onValueChange={handleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 25,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderTopColor: "#ddd",
  },
  textColor: {
    color: "white",
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
