import { View, TextInput, Button, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
         <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png',
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário:"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Senha:"
      />
      <Button
        title="Entrar"
        onPress={() => {i
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 780,
    height: 150,
    marginBottom: 10,
  },

  input: {
    height: 60,
    backgroundColor: '#fff',
    borderColor: '#000000',
    borderWidth: 1,
    justifyContent: 'center',
  },
});

export default App;