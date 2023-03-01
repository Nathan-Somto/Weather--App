import {View, Text,StyleSheet} from "react-native";
export default function Header()
{
      
    return(
    <View style={styles.header}>
    <Text style={styles.text}>Todo App</Text>
 </View>
    );
}
const styles =StyleSheet.create({
    header:{
        backgroundColor:"purple",
        fontSize:20,
        width:'100%',
        paddingVertical:10,
       
    
      },
      text:{
        color:"white",
        textAlign:'center',
      }
})