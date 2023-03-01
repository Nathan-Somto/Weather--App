import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import TodoItem from "./Components/TodoItem";
import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";

export default function TodoApp() {
  const [openModal, setOpenModal] = useState(false);
  const [complete, setComplete] = useState(false);
  const [item, setItem] = useState("");
  const [todoItem, setTodoItem] = useState([
    {
      item: "Eat food",
      complete: false,
      id: 1,
    },
    {
      item: "Buy pizza",
      complete:true,
      id: 2,
    },
    {
      item: "Have a shower",
      complete:false,
      id: 3,
    },
  ]);
  function setTodo() {
    setTodoItem((prevTodos) => [
        {
          item: item,
          complete:false,
          id: Math.random(),
        },
        ...prevTodos,
      ]);
      console.log("clicked");
      setOpenModal(false);
      console.log(item);
    if(item.length > 3)
    {
   
    return;
}
//Alert.alert(title:"Todo error message", message:"the length of a todo must be longer than 3")

  }
  function deleteTodo(id: string) {
    setTodoItem((prevTodos) =>
      prevTodos.filter((todo) => todo.id.toString() != id)
    );
  }
function handleComplete(){
    
}
  return (
    <View style={styles.container}>
        <Header/>
      <AddTodo openModal={openModal} setTodo={setTodo} setItem={setItem} setOpenModal={setOpenModal}/>
      <View style={styles.container}>
        <FlatList
          data={todoItem}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item: { item, id, complete } }) => (
            <TodoItem todo={item} id={id.toString()} deleteTodo={deleteTodo} complete ={complete}/>
          )}
        />
      </View>
      <TouchableOpacity onPress={() => setOpenModal(true)} style={{justifyContent:'flex-end',position: "absolute",
    bottom: 0,
    right:0,}}>
        <View style={styles.addContainer}>
          <MaterialIcons name={"add"} size={30}  color="white" style={styles.center}/>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
   
  },
  addContainer: {
    backgroundColor: "purple",
    height: 50,
    width: 50,
    borderRadius: 25,
    position: "absolute",
    bottom: 0,
    right:0,
    alignItems:"center",
    justifyContent:'center'
  },
  center:{
    textAlign:'center',
  }
});
