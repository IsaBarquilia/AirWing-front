import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";



const EasyNavegation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home", "Go to Home" )}
      >
        <View style={styles.centralize}>
                
        <Text style={styles.p}>Hoteis</Text>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Category", "Go to Category" )}
      >
        <View style={styles.centralize}>
       
        <Text style={styles.p}>Voos</Text>
        </View>
      </TouchableOpacity>
     
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile", "Go to Profile")}
      >
        <View style={styles.centralize}>
                
        <Text style={styles.p}>Pacotes</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EasyNavegation;
