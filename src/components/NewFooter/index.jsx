import { View, Text, Image } from "react-native";


import styles from "./styles";

import Logo from "../Logo";

const NewFooter = () => {
    return (
        <View style={styles.footer}>
            <Logo left={27}/>
            <View style={styles.icons}>
            
                </View>
                <Text style={{color: "white"}}>© Todos os Direitos Reservados</Text>
        </View>
    );
};

export default NewFooter;