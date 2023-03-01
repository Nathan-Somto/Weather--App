import { StyleSheet, Text, View,FlatList,TouchableOpacity} from 'react-native';
import{MaterialIcons} from "@expo/vector-icons";
type TodoItemProp =
{
    todo:string;
    id:string;
    deleteTodo:(id:string)=> void;
}
export default function TodoItem ({todo, id,deleteTodo}:TodoItemProp)
{

    return(
        <View style={styles.itemContainer}>
           {/* Add the complete button */}
           <TouchableOpacity >
                <MaterialIcons name='circle' size={20} color="#ddd"/>
                </TouchableOpacity>
            <Text style={styles.item}>{todo}</Text>
            <TouchableOpacity onPress={()=>deleteTodo(id)} style={styles.deleteButton}>
                <MaterialIcons name='delete' size={20} color="purple" style={styles.center}/>
                </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    itemContainer:{
        borderWidth:1,
        borderColor:"#ddd",
        width:300,
        padding:10,
        margin:15,
        flexDirection:'row',
        position:"relative"

    },
    item:{
        marginLeft:10
    },
    deleteButton:{
        alignItems:'flex-end',
        position:'absolute',
        right:0,
       
    },
    center:{
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
      }
})