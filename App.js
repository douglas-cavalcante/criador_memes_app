import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from "react-native";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      outputText: "",
    }
  }

  alterVowels = (text) => {
    let parseText = text.toLowerCase();
    parseText = parseText.replace(/(a|e|i|o|u)/g, 'i');
    parseText = parseText.replace(/(á|à|ã|â)/g, 'i');
    parseText = parseText.replace(/(é|è|ê)/g, 'i');
    parseText = parseText.replace(/(í|ì|î)/g, 'i');
    parseText = parseText.replace(/(ó|ò|ô)/g, 'i');
    parseText = parseText.replace(/(ú|ù|û)/g, 'i');
    return parseText;
  }

  handleOnChangeText = (text) => {
    if (text.length <= 55) {
      const newText = this.alterVowels(text);
      this.setState({
        inputText: text,
        outputText: newText
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Criador de mimimi....</Text>
        </View>
        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder="Digite seu mimimi ..." onChangeText={this.handleOnChangeText} />
        </View>
        <View style={styles.area}>
          <Text style={[styles.text, styles.text1]}>{this.state.inputText.toUpperCase()}</Text>
          <Image style={styles.children} source={require('./assets/images/mimimi.jpg')} />
          <Text style={[styles.text, styles.text2]}>{this.state.outputText.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: 'rgb(138, 5, 190)'
  },
  inputArea: {
    alignSelf: 'stretch'
  },
  input: {
    borderRadius: 1,
    borderColor: 'rgb(138, 5, 190)',
    backgroundColor: '#eee',
    color: 'rgb(138, 5, 190)',
    height: 40,
    margin: 20,
    padding: 10
  },
  area: {
    width: 300,
    height: 300,
    marginTop: 10
  },
  children: {
    width: 300,
    height: 300,
    marginTop: -70,
    zIndex: 0
  },
  text: {
    fontSize: 15,
    color: '#fff',
    padding: 10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 70
  },
  text1: {
    zIndex: 1
  },
  text2: {
    zIndex: 1,
    marginTop: -70
  }
});
