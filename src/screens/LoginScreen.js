import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit() {



    console.log("submitted");
    // this.props.navigation.navigate("Home")

    //login

  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => {
            this.setState({ email: text })
          }}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder="Email Address"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }) }}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry />
        <TouchableHighlight underlayColor="#C70F66" style={styles.button} onPress={this.handleSubmit.bind(this)} >
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>
      </View >
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  button: {
    backgroundColor: '#ff5a77',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    fontSize: 18,
    color: '#fff',

  }
});

export default LoginScreen;
