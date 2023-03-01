import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import IsearchInput from "../interfaces/searchInput";

export default function SearchInput({
  getSearchForecast,
  setCityName,
  cityName,
}: IsearchInput) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="enter a city"
        placeholderTextColor={"white"}
        onChangeText={setCityName}
        underlineColorAndroid="transparent"
        style={styles.inputStyles}
        keyboardType="web-search"
      />
      <TouchableOpacity onPress={() => getSearchForecast(cityName)}>
        <MaterialIcons name="search" size={25} color={"white"} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  inputStyles: {
    width: Dimensions.get("window").width * 0.8,
    marginHorizontal: "auto",
    padding: 10,
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
  },
});
