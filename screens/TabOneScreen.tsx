import { StyleSheet, Image, Pressable} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <Text style={styles.title}>Today's View</Text>
      </View>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      
      <View style={styles.container}>
        <Image
          style={styles.weather}
          source={require('../sample_weather_api.png')}
        />
      </View>

      <View>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Settings')}>
          <Text>Log in</Text>
        </Pressable>
      </View>


      {/*<EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  weather: {
    width: 250,
    height: 350,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'grey',
  }
});
