import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import icons from "../icons";
export default function TopData({ data, name ='' }:{data: any[] , name:string}) {
  
  const {list} = data[0];
 const {
  dt,
  main: { temp },
  weather: [{ icon, description }],
 } = list[0];
 console.log("the value of name is : ",name);
  let date:Date = new Date(dt * 1000);
let newDate:string = date.toString()
.split(" ")
.slice(0, 4).join(" ");
  let nightIcon = icon.includes("d")? icon.replace("d", "n"): icon;  
  console.log("in TopData");
  console.log(nightIcon);
     return (
    <View style={styles.container}>
        <Text style={{color:'white' ,textAlign:'left',alignSelf:'flex-start', paddingLeft:20}}>
        <Text style={{color:'rgba(190, 190, 190, 1)', fontWeight:'300', fontSize:15}}>Today{'\n'}</Text>
        <Text style={{fontSize:20, paddingTop:5, fontWeight:'300'}}>{newDate}</Text>{/* does not show in  the search screen */}
      </Text>
      <View>
          <Image
          style={{height:200, width:Dimensions.get('window').width*0.4, resizeMode:'cover'}}
            source={{
                uri:`http://openweathermap.org/img/wn/${nightIcon}@4x.png`

            }}
            /> 
         {/* does not show in the home screen */} 
         <Text>{name}</Text>
        <Text style={{fontSize:30,  color:'white', textAlign:'center'}}>{`${temp}`}<Text style={{color:'rgba(190, 190, 190, 1)'}}>°C</Text></Text>
        <Text  style={{fontSize:20,  color:'rgba(173, 216, 230, 1)', textAlign:'center'}}>{`${description}`}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({

    container:{
      width: Dimensions.get('window').width *0.9,
      backgroundColor:'rgba(0,0,0,0.5)',
      paddingVertical:15,
      marginBottom:5,
      color:'#fff',
      justifyContent:'space-evenly',
      alignItems:'center',
      borderRadius:10,
    }
});