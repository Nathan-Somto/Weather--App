import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
export default function TempChart({temp , date}:{temp:number[], date:string[]}) {
  console.log("the temp value: "+temp +"\n the date value: "+ date);
  console.log("In Temp Chart");
  const lineData = {
    labels:date,
    datasets:
    [
      {
      data:temp,
    },
  ],
  }
  return (
    <View style={{marginHorizontal:'auto', flex:1,}}>
      <LineChart
      data={lineData}
      width={Dimensions.get("window").width*0.9}
      height={150}
      yAxisLabel="C"
      yAxisSuffix="C"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }}
        bezier
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
      />    
      </View>
  )
}