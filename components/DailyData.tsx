import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { dailyDataType } from "../utils/getDailyData";
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.4);

const DailyData = ({ date, temp, icon, description }: dailyDataType) => {
  const dateArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  date = new Date((date as number) * 1000);
  let dateString: string =
    dateArr[date.getUTCDay()] +
    " " +
    date.getUTCDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes();
  return (
    <View style={styles.container}>
      <Text>{dateString}</Text>
      <Text>
        {`${temp}`}
        <Text>°C</Text>
      </Text>
      <Image
        style={{
          height: ITEM_WIDTH-10,
          width: ITEM_WIDTH-10,
        }}
        source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
      />
      <Text>{description}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    padding: 10,
    width:ITEM_WIDTH,
    backgroundColor:'rgba(0,0,0,0.5)',
    shadowColor:"rgba(0,0,0,0.85)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 4.65,
    elevation: 7,
  }
})
export default DailyData;
