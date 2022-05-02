import { StyleSheet, ScrollView, Alert, Button, TextInput, SafeAreaView } from 'react-native';
import { useCallback, useState } from 'react';

import { Text, View } from '../components/Themed';
import Outfit from '../components/Outfit';
import Dropdown from '../components/Dropdown';
import ClothingRack from '../components/ClothingRack';
import React from 'react';
import ClothingRackTest from '../components/ClothingRackTest';

var data = [
  { label: 'Chapel Hill', value: 1 },
  { label: 'Charlotte', value: 2 },
  { label: 'New Closet', value: 0 },
];

export default function ClosetScreen() {
  
  const [selected, setSelected] = useState();

  if(selected != undefined){

    if(selected.label == 'New Closet'){
        Alert.prompt(
          "Enter New Closet Name",
          "Name Your New Closet",
          [
            {
              text: "Cancel",
              style: "cancel",
              onPress: () => {setSelected({label: 'Chapel Hill', value:0})}
            },
            {
              text: "OK",
              onPress: (closetName) => {
                setSelected({label: closetName, value: data.length})
                data[data.length-1] = {label: closetName, value: data.length};
                data.push({label: 'New Closet', value:0});
          
              }
            }
          ],
        );
        return(<View></View>)
      

    } 
     else{
      return (
        <ScrollView style={{padding: 10, flex: 1}}>
          <Dropdown label={selected.label} data={data} onSelect={setSelected} />
          {/* <ClothingRack/>    */}
          <ClothingRackTest/>               

       
        {!!selected && (
            <View style={styles.row}>
            <Outfit closet={selected.label}/>
          </View>
            
          )}
          
        </ScrollView>
      );

    }

    }

  else{
    return(
      <ScrollView style={{padding: 10, flex: 1}}>
      <Dropdown label="Chapel Hill" data={data} onSelect={setSelected} />
      <ClothingRack/>                  

      <View style={styles.row}>
        <Outfit closet='Chapel Hill'/>
      </View>
      
    </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
  
});
