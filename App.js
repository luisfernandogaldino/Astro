import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text,Image } from 'react-native';
import{styles} from './AppStyle';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle = "dark-content"/>
      <Image style={styles.imagens}
        source={require('./assets/astronaut-in-space-looking-up-at-the-stars-generated-by-Fotor-AI.jpg')}
          />
        <Text style = {styles.texto}>Este é um pequeno passo para o homem, mas um gigantesco salto para a humanidade!</Text>
    </SafeAreaView>
  );
}
