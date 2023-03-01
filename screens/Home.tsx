import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView,
  FlatList,
  Dimensions,
  ImageBackground
} from "react-native";
import { useRoute } from "@react-navigation/native";
import * as expoLocation from "expo-location";
import TopData from "../components/TopData";
import TempChart from "../components/TempChart";
import ExtraData from "../components/ExtraData";
import IextraData from "../interfaces/extraData";
import getExtraData from "../utils/getExtraData";
import getTempAndDate from "../utils/getTempAndDate";
import Error from "./Error";
type tempChart ={tempData:number[],dateData:string[]}
export default function Home(): JSX.Element {
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [extraDataArr, setExtraDataArr] = useState<IextraData[]>([]);
  const[TempChartData, setTempChartData] = useState<tempChart>({tempData:[],dateData:[]});
 
  const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast?';
  const route = useRoute();
  async function RetrieveLocation(): Promise<void> {
    try{let request = await expoLocation.requestForegroundPermissionsAsync();
    let reponse = await expoLocation.getForegroundPermissionsAsync();

    let { status } = reponse;
    console.log(status);

    if (status !== "granted") {
      Alert.alert(
        "Location Permission denied",
        "Oops permission to acess location has been denied"
      );
      return;
    }}
    catch(err)
    {
      setError(true);
    }
    try {
      let currentLocation = await expoLocation.getLastKnownPositionAsync();
      console.log("retrieved location and getting weather");
      getWeather(currentLocation);
    } catch (err) {
      console.log(err);
      setLoader(false);
      setError(true);
    }
  }

  async function getWeather(
    currentLocation: expoLocation.LocationObject | null
  ) {
    // call the api here
    // update the state
    
    console.log(currentLocation);
    if (currentLocation) {
      // make use of the longitude and latitude api call
      console.log("in the function");
      try {
        const response = await fetch(
          `${baseUrl}&lat=${
            (currentLocation as expoLocation.LocationObject).coords.latitude
          }&lon=${
            (currentLocation as expoLocation.LocationObject).coords.longitude
          }&units=metric&appid=96447256278a1b49ec534dc90c7971ba`
        );
        const weatherData = await response.json();
        let arr: any[] = [];
        arr.push(weatherData);
        console.log(arr);
        setData(arr);
        console.log("updating the components state");
      } catch (err) {
        console.log(err);
        setError(true);
      }
      finally{
        setLoader(false);
      }
    }
  }
  useEffect(() => {
    RetrieveLocation();
    console.log("mounted");
  }, []);

  useEffect(() => {
    console.log("in the useEffect hook data is :"+ data)
    if (data) {
    
      setExtraDataArr([...getExtraData(data)]);
      console.log(extraDataArr);
      setTempChartData((_prevState)=>({..._prevState,...getTempAndDate(data)}));
      console.log(TempChartData);
    }
  }, [data]);
  console.log(extraDataArr);
  {
    if (error) {
      return( <View style={styles.containerStyles}><Error pathName={route.name}/>
      </View>);
    } else {
      return (
        <ImageBackground
        style={styles.background}
        source={{
          uri:'https://media.istockphoto.com/id/517897328/photo/beautiful-sky-with-white-cloud-background.jpg?b=1&s=170667a&w=0&k=20&c=kDH_rxWr5uk7UlFIqTYnSTFZfKQC5wIhiIlZuNWd66E='
        }}
        >
        <View style={!data ? styles.loadingStyles : styles.containerStyles}>
          <View>
            <ActivityIndicator
              size={"large"}
              animating={loader}
              color={"black"}
            />
          </View>
          {data && (
                     <View>
              <TopData data={data} />
              <FlatList
              style={{width: Dimensions.get('window').width}}
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
               <TempChart date={TempChartData.dateData} temp={TempChartData.tempData} /> 
            </View>
            
          )}
        </View>
        </ImageBackground>);
    }
  }
}
const styles = StyleSheet.create({
  loadingStyles: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  containerStyles: {
    flex:1,
    color:'white',
    alignContent: "center",
    justifyContent: "center",
    width: Dimensions.get('window').width,
  },
  background:{
    flex:1,
    resizeMode:'cover'
  }
});
