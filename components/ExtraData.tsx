import { View, Text ,StyleSheet, Dimensions } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IextraData from "../interfaces/extraData";

export default function ExtraData({ text, condition, unit, icon }: IextraData) {
  return (
    <View style ={styles.container}>
      <MaterialCommunityIcons name={icon} size={50} color={'white'} />
      <Text style={{color:'white', fontSize: 20}}>
        {text.toString()}
        <Text>{unit}</Text>
      </Text>
      <Text  style={{color:'white', fontSize:15}}>{condition}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    height:200,
    width: Dimensions.get('window').width * 0.3,
    backgroundColor:'rgba(0,0,0,0.5)',
    padding:10,
    margin:10,
    color:'#fff',
    justifyContent:'space-evenly',
    alignItems:'center',
    borderRadius:10,
  }
});
