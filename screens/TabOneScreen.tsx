import { StyleSheet, Image} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import MyCalendar from '../components/MyCalendar';
import Colors from '../constants/Colors';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <Text style={styles.title}>Today's View</Text>
      </View>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      {/*
      <View style={styles.container}>
        <Image
          style={styles.weather}
          source={require('../sample_weather_api.png')}
        />
      </View>
      */}

      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    paddingLeft: 30,
    fontWeight: 'bold',
    color: 'grey'
  },
  separator: {
    marginTop: 20,
    height: 1,
    width: '80%',
  },
  weather: {
    width: 250,
    height: 350,
    marginVertical: 10,
    marginHorizontal: 10,
  }
});
