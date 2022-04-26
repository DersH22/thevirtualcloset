import { StyleSheet, Image, Pressable} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
//import pic from 'C:/Users/hartmark/thevirtualcloset/thevirtualcloset/sample_weather_api.png';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Today's View</Text>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      
      <View style={styles.container}>
        <Image
          style={styles.weather}
          source={require('../sample_weather_api.png')}
        />
      </View>

      <View>
        <Pressable style={styles.button} onPress={() => navigation.navigate('NotFound')}>
          <Text>Log in</Text>
        </Pressable>
      </View>
    </View>
  );

  /*
  return(
    <div className='wrapper'>
      <h1>Today's view</h1>
      <Image 
        source={require('../sample_weather_api.png')}
      />
    </div>

  )*/
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
    marginVertical: 30
  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: '80%',
  },
  weather: {
    width: 350,
    height: 420,
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
    marginBottom: 30,
  }
});