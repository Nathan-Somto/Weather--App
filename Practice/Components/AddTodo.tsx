import { StyleSheet, Text, View, TextInput,Modal,Button, TouchableOpacity} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
type AddTodoProps={
    openModal:boolean;
    setTodo: ()=> void;
    setItem:React.Dispatch<React.SetStateAction<string>>;
    setOpenModal:React.Dispatch<React.SetStateAction<boolean>>;
}
export default function AddTodo({openModal,setTodo, setItem, setOpenModal}:AddTodoProps)
{
    return(
      
           
            <Modal visible={openModal} animationType='slide' style={styles.container}>
            <Text style={{textAlign:'center',fontSize:25, color:"purple", marginTop:30}}>Add a Todo</Text>
                {/* Add a material icon */}
                <TouchableOpacity onPress={()=>setOpenModal(false)}  style={{position:'absolute', top:0, right:0}}>
                <MaterialIcons name={'close'} size={30}/>
                </TouchableOpacity>
                <View style={styles.container}>
                <TextInput 
                placeholder='enter a new todo...'
                onChangeText={setItem} 
                style={styles.input}
               
                />
                <View style={{width:250}}>
                    <Button title="Add todo" onPress={ setTodo} color={'purple'} />
                </View>
                </View>
            </Modal>
      
    )
}
const styles = StyleSheet.create({
    container:
    {
        flex:1,
        alignItems:"center",
        justifyContent:'flex-start',
        width:'100%',
    },
   input:{
    borderWidth:2,
    padding:10,
    borderColor:"#ccc",
    width:250,
    marginVertical:30
   }
})