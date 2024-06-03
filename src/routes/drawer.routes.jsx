

import Category from "../screens/Category";
import { user } from "../data/Profile";
import Form from "../screens/Form";
import Termos from "../screens/Termos";
import QuemSomos from "../screens/QuemSomos";
import Logo from "../components/Logo";
import CentralDeAjuda from "../screens/CentralDeAjuda";
import Pacotes from "../screens/Pacotes"

import { createDrawerNavigator } from "@react-navigation/drawer";



const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: true, drawerPosition: 'right',
    }}>

      <Drawer.Screen
        name="Category"
        component={Category}
        options={{
          headerTitle: () => (
            <Logo left={260} />
          ),
          drawerLabel: "Categorias",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Form"
        component={Form}
        options={{
          headerTitle: () => (
            <Logo left={260} />
          ),
          drawerLabel: "Cadastro",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Termos"
        component={Termos}
        options={{
          headerTitle: () => (
            <Logo left={260} />
          ),

          drawerLabel: "Termos",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",

        }}
      />
      <Drawer.Screen
        name="Quem Somos"
        component={QuemSomos}
        options={{
          headerTitle: () => (
            <Logo left={260} />
          ),

          drawerLabel: "Quem Somos",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",

        }}
      />
      <Drawer.Screen
        name="Central de Ajuda"
        component={CentralDeAjuda}
        options={{
          headerTitle: () => (
            <Logo left={260} />
          ),

          drawerLabel: "Central de ajuda",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",

        }}
      />
      <Drawer.Screen
        name="Pacotes"
        component={Pacotes}
        options={{
          headerTitle: () => (
            <Logo left={260} />
          ),
          drawerLabel: "Pacotes",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      /> 
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
