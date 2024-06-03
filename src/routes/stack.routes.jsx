import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Category from "../screens/Category";
import Hoteis from "../screens/Hoteis";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Hoteis} />
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
  