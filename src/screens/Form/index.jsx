import { Button, Text, TextInput, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { useEffect, useState } from "react";
import EasyNavegation from "../../components/EasyNavegation";
import NewFooter from "../../components/NewFooter";
export default function Form() {
  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [sex, setSex] = useState('');
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [checked, setChecked] = useState('M');
  const [popUp, setPopUp] = useState(false);
  function handleUser() {
    if (!name || !birthYear || !email || !cpf || !phone || !sex || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    if ( isNaN(birthYear)) {
      alert("Idade e Ano de Nascimento devem ser números!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Email inválido!");
      return;
    }

    console.log({
      name,
      birthYear,
      email,
      cpf,
      phone,
      sex,
      password,
    });
    setPopUp(true);
    clearFields();
  }

  function clearFields() {
    setName("");
    setBirthYear("");
    setEmail("");
    setCpf("");
    setPhone("");
    setSex("");
    setPassword("");
  }

  function showHidePassword() {
    setShowPassword(!showPassword);
  }
  const sexpassage = (value) => {
    setSex(value)
  }

  useEffect(() => {
    if (popUp) {
      setTimeout(() => {
        setPopUp(false);
      }, 3555);
    }
  }, [popUp]);
  
  return (
    <View style={styles.container}>

       <ScrollView >
                     

                    <EasyNavegation />
      <Text style={styles.title}> Cadastro </Text>

      <View style={styles.user}>
        <TextInput style={styles.input} placeholder="Nome Completo" onChangeText={setName} value={name} />
        <TextInput style={styles.input} placeholder="Ano de Nascimento" onChangeText={setBirthYear} value={birthYear} />
        <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} />
      <Text>Femea</Text>
        <View style={styles.passwordarea}>
          <TextInput style={styles.inputsenha} placeholder="Senha" secureTextEntry={showPassword} onChangeText={setPassword} value={password} />
          <TouchableOpacity onPress={showHidePassword} style={styles.button}>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleUser} style={styles.button2} >

        </TouchableOpacity>
        {
          popUp && <Text style={styles.popUp}>Usuário cadastrado com sucesso!</Text>
        }
      </View>
      <NewFooter />
    </ScrollView>
    </View>
  );
}
