import React from 'react';
import { StyleSheet , Pressable, ColorSchemeName, View } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import ClothingRack from '../components/ClothingRack';


export default class CalendarScreen extends React.Component {
  render() {
    return (
      <View>
        <Calendar/>
        <ClothingRack/>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  choiceContatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timePeriodPressables: {
    paddingRight: 50,
  }
});
