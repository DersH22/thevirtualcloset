import { StyleSheet, Image, Pressable, ScrollView} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function SettingsScreen({ navigation }: RootTabScreenProps <'Settings'>) {
  return (
<ScrollView style={{padding: 10, flex: 1}}>
      <Text style={styles.title}>Add Outfit</Text>
      {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />*/}
      {/*<EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={styles.snowimage}
          source={require('../assets/images/outfit_img/id1.jpg')}
        />
      </View>
      <View style={{flex: 1}}>
        <Image
          style={styles.labelimage}
          source={require('../assets/images/outfit_img/OutfitLabel2.png')}
        />
      </View>

      <View>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Closet')}>
          <Text>Add to Closet</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
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
  snowimage: {
    width: 125,
    height: 175,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  labelimage: {
    width: 400,
    height: 600,
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