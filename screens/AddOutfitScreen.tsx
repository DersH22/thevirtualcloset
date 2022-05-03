import { StyleSheet, Image, Pressable} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function AddOutfitScreen({ navigation }: RootTabScreenProps<'AddOutfit'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Outfit</Text>
      {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />*/}
      {/*<EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={styles.weather}
          source={require('../assets/images/outfit_img/id1.jpg')}
        />
      </View>

      <View>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Settings')}>
          <Text>Add Outfit</Text>
        </Pressable>
      </View>
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
    marginBottom: 30,
  }
});