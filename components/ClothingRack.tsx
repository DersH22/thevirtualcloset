import React, { Component, useState } from "react";
import { Text, StyleSheet, View, Image, ImageBackground, FlatList, Modal, TouchableOpacity, ImageSourcePropType, Alert } from 'react-native';
import OutfitDatabase from './OutfitDatabase';

interface Props {
  label: string;
}

const ClothingRack: FC<Props> = ({label}) => {
  const [visible, setVisible] = useState(false);
  // const handleClick = () =>{this.forceUpdate(); console.log("test")}
  const toggleRack = () => {
    setVisible(!visible);
  };
  const outfitCount = OutfitDatabase.filter((outfit:any) => {if(outfit.rack){return(outfit)}})
  return(
    
    <View style={containerStyle.rackOpen}>
      <Text style={containerStyle.buttonText}>Clothing Rack</Text>
      <View style={[containerStyle.container]}>
        {OutfitDatabase.map((outfit: any) => {
          if(outfit.rack){
            return(
              <TouchableOpacity 
              onPress={() => {Alert.alert(
                  "Remove Outfit from Clothing Rack?",
                  "Outfit Image",
                  [
                      {
                          text: "Cancel"
                      },
                      {text: "OK",
                      onPress: () => {if(outfit.rack){OutfitDatabase[outfit.id-1].rack = false;}
                       
                      }
                     }
                  ]
              );}} >
                <ImageBackground style={[containerStyle.outfitTest]} imageStyle={{borderRadius:10}} source={outfit.img}/>

              </TouchableOpacity>
            )
          } 

        })}
        
      </View>
    </View>
  )
  // const renderRack = () => {
  //   if(visible){
  //     return (
  //       <TouchableOpacity style={containerStyle.rackOpen} onPress={toggleRack}>
          
  //       </TouchableOpacity>
  //     )
  //   }
  // };

  // return(
  //   <TouchableOpacity style={containerStyle.button} onPress={toggleRack}>
  //     {renderRack()}
  //     <Text style={containerStyle.buttonText}>Clothing Rack</Text>
  //     <Image style={containerStyle.icon} source={require('../assets/images/dropdown.png')} />
  //   </TouchableOpacity>
  // )
}

export default ClothingRack

const containerStyle = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems:"flex-start",
    backgroundColor: 'white',
    height: 50,
    zIndex: 1,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10
    
  
  },
  rackOpen: {
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'white',
    height: 280,
    zIndex: 1,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10

  },
  container:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    // marginTop: 10,
    // marginBottom: 10,
    margin: 10
},
  outfitTest:{
    height: 190,
    width: 50,
    margin:3.5,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    position: 'relative',
    backgroundColor: "aliceblue",
    borderColor: 'gray',
    borderWidth: .5,

},

  buttonText: {
    flex: 1,
    textAlign: 'left',
    fontSize: 20,
    paddingHorizontal:8,
    paddingVertical:6,
  },
  icon: {
    marginRight: 10,
    height: 20,
    width: 20
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
})

// import React, { Component } from "react";
// import { StyleSheet, View, Text, PanResponder, Animated,  } from "react-native";

// class Draggable extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showDraggable: true,
//       dropAreaValues: null,
//       pan: new Animated.ValueXY(),
//       opacity: new Animated.Value(1)
//     };
//   }

//   componentWillMount() {
//     this._val = { x:0, y:0 }
//     this.state.pan.addListener((value) => this._val = value);

//     this.panResponder = PanResponder.create({
//         onStartShouldSetPanResponder: (e, gesture) => true,
//         onPanResponderGrant: (e, gesture) => {
//           this.state.pan.setOffset({
//             x: this._val.x,
//             y:this._val.y
//           })
//           this.state.pan.setValue({ x:0, y:0})
//         },
//         onPanResponderMove: Animated.event([ 
//           null, { dx: this.state.pan.x, dy: this.state.pan.y }
//         ]),
//         onPanResponderRelease: (e, gesture) => {
//           if (this.isDropArea(gesture)) {
//             Animated.timing(this.state.opacity, {
//               toValue: 0,
//               duration: 1000
//             }).start(() =>
//               this.setState({
//                 showDraggable: false
//               })
//             );
//           } 
//         }
//       });
//   }

//   isDropArea(gesture) {
//     return gesture.moveY < 200;
//   }

//   render() {
//     return (
//       <View style={{ width: "20%", alignItems: "center" }}>
//         {this.renderDraggable()}
//       </View>
//     );
//   }

//   renderDraggable() {
//     const panStyle = {
//       transform: this.state.pan.getTranslateTransform()
//     }
//     if (this.state.showDraggable) {
//       return (
//         <View style={{ position: "absolute" }}>
//           <Animated.View
//             {...this.panResponder.panHandlers}
//             style={[panStyle, styles.circle, {opacity:this.state.opacity}]}
//           />
//         </View>
//       );
//     }
//   }
// }

// export default Draggable;

// let CIRCLE_RADIUS = 30;
// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1
//   },
//   ballContainer: {
//     height:200
//   },
//   circle: {
//     backgroundColor: "skyblue",
//     width: CIRCLE_RADIUS * 2,
//     height: CIRCLE_RADIUS * 2,
//     borderRadius: CIRCLE_RADIUS
//   },
//   row: {
//     flexDirection: "row"
//   },  
//   dropZone: {
//     height: 200,
//     backgroundColor: "#00334d"
//   },
//   text: {
//     marginTop: 25,
//     marginLeft: 5,
//     marginRight: 5,
//     textAlign: "center",
//     color: "#fff",
//     fontSize: 25,
//     fontWeight: "bold"
//   }
// });