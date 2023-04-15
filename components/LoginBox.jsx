import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useEffect, useState } from 'react';
import UsersJSON from '../data/users.json';

export default function LoginBox({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    try {
      setUsers(UsersJSON);
    }
    catch (error) {
      console.error(error);
    }
  }

  function authenticateUser(){
    let user = users.find((u)=>u.username == username && u.password == password);
    if(user){
      navigation.navigate('ClientScreen');
    }
    else{
      alert("Username or password is incorrect!");
    }
  }

  return (
    <View style={styles.container}>
      <Stack spacing={2} style={{ margin: 16 }}>
        <TextInput
          style={styles.textinput}
          autoFocus={true}
          onChangeText={setUsername}
          label="Username"
          leading={props => <Icon name="account" {...props} />}
        />
        <TextInput
          style={styles.textinput}
          label="Password"
          variant="outlined"
          onChangeText={setPassword}
          trailing={props => (
            <IconButton
              icon={props => <Icon name="eye" {...props} />}
              {...props}
            />
          )}
        />
        <TouchableOpacity onPress={authenticateUser}>
          <View style={styles.loginbutton}>
            <Text style={styles.loginbuttontext}>Login</Text>
          </View>
        </TouchableOpacity>
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#555',
    padding: 15,
    borderRadius: 15,
  },
  textinput: {
    width: 250,
    height: 50,
    margin: 5,
    alignSelf: 'center'
  },
  header: {
    color: '#FFF',
    fontSize: 22,
  },
  loginbutton: {
    backgroundColor: '#55AAAA',
    padding: 5,
    width: 100,
    height: 50,
    margin: 15,
    borderRadius: 5,
    alignSelf: 'center'
  },
  loginbuttontext: {
    color: '#FFF',
    fontSize: 28,
    textAlign: 'center'
  }
});
