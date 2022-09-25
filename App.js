import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { AppProvider } from "./context/AppContext";

import HomeScreen from "./src/HomeScreen";

//something new
// add new things
// again new stuff
// yeah ok, lets do something new here,
// and again test
// add some content in new testing branch
// changes to be commited in tree branch

const Stack = createStackNavigator();

function App () {
  return(
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home"}}/>
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
}

export default App;