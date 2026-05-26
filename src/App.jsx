import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import FindIdScreen from "./screens/FindIdScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";

import RecipeListScreen from "./screens/RecipeListScreen";
import SearchScreen from "./screens/SearchScreen";
import ScanScreen from "./screens/ScanScreen";
import RecipeDetailScreen from "./screens/RecipeDetailScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Signup"
          component={SignupScreen}
        />

        <Stack.Screen
          name="FindId"
          component={FindIdScreen}
        />

        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
        />

        <Stack.Screen
          name="Home"
          component={RecipeListScreen}
        />

        <Stack.Screen
          name="Search"
          component={SearchScreen}
        />

        <Stack.Screen
          name="Scan"
          component={ScanScreen}
        />

        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetailScreen}
        />

        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}