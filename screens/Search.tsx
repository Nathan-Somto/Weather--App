import {
  KeyboardAvoidingView,
  Text,
  Platform,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import SearchInput from "../components/SearchInput";
import TempChart from "../components/TempChart";
import IextraData from "../interfaces/extraData";
import TopData from "../components/TopData";
import { useRoute } from "@react-navigation/native";
import getExtraData from "../utils/getExtraData";
import ExtraData from "../components/ExtraData";
import getDailyData, { dailyDataType } from "../utils/getDailyData";
import Carousel from "../components/Carousel";
import DailyData from "../components/DailyData";
import CarouselContainer from "../components/Carousel";
import { apiKey } from "../utils/apiKey";

export default function Search() {
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const [cityName, setCityName] = useState("");
  const [cityData, setCityData] = useState<any>(null);
  const [extraDataarr, setExtraDataArr] = useState<IextraData[] | null>(null);
  const [dailyDataArr, setDailyDataArr] = useState<dailyDataType[] | null>(null);
  const route = useRoute();
  async function getSearchForecast() {
    if (cityName.length < 2) {
      // tell the user to type some text
      Alert.alert("Invalid City", "City name cannot be less than 1", [
        { text: "Ok", onPress: () => console.log("Cancel pressed") },
      ]);
      return;
    }
    let city =
      cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      setCityData((_prevState: any) => [...data]);
      setExtraDataArr([...getExtraData(data)]);
      setDailyDataArr([...getDailyData(data)]);
      setCityName('');
    } catch (err) {
      setError(true);
    } finally {
      setLoader(false);
    } //Todo: gets the info from the search location.
  }

  useEffect(() => {
    if (cityName) {
      getSearchForecast();
    }
    return () => {};
  }, [cityName]);
  const tempData: number[] = [];
  const dateData: number[] = [];
  const extraDataArr: IextraData[] = [];
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS != "ios" ? "height" : "padding"}
    >
      <View>
        <SearchInput
          cityName={cityName}
          setCityName={setCityName}
          getSearchForecast={getSearchForecast}
        />
        <ActivityIndicator size={"large"} animating={loader} />
        {error && <Text>City Name Could not Be found</Text>}
        {cityData && (
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View>
              <TopData data={cityData} name={cityName} />
              <FlatList
                style={{ width: Dimensions.get("window").width }}
                data={extraDataArr}
                horizontal
                renderItem={({ item: { condition, unit, icon, text } }) => (
                  <ExtraData
                    condition={condition}
                    unit={unit}
                    icon={icon}
                    text={text}
                  />
                )}
              />
          <CarouselContainer data = {dailyDataArr as dailyDataType[]}/>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
