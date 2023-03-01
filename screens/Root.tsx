import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "./Home";
import Settings from "./Settings";
import Search from "./Search";
import { NavigationContainer } from "@react-navigation/native";
const Tab = createBottomTabNavigator();
export default function Root() {

  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Home"
    screenOptions={{
      headerShown:false,
      tabBarStyle:{
        backgroundColor: 'rgba(0,0,0,0.5)',
      }
    }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size}) => (
            <MaterialIcons name="home" size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          headerShown:true,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} />
          ),
        }}
      />
     
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "relative",
  },
});
