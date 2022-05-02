import React, { Component, useState } from 'react';
import { Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import OutfitDatabase from './OutfitDatabase';
import ClothingRack from './ClothingRack';

class Outfit extends Component {
    constructor(props){
        super(props);
        this.closet;
    }
    render(){
    var rackData = []
    const outfitCount = OutfitDatabase.filter((outfit:any) => {if(outfit.closet == this.props.closet){return(outfit)}})
    // const [selected, setSelected] = useState();

    if(outfitCount.length < 1){
            return(
                <View style={containerStyle.nooutfitContainer}>
                    <Text style={containerStyle.title}>You don't have any outfits in this closet yet</Text>
                </View>
            )
        } else {
            return(
                OutfitDatabase.map((outfit:any) => {
                    if(outfit.closet == this.props.closet){
                        return(
                                 <TouchableOpacity 
                                 onPress={() => {Alert.alert(
                                     "Add Outfit to Clothing Rack?",
                                     "Outfit Image",
                                     [
                                         {
                                             text: "Cancel"
                                         },
                                         {text: "OK",
                                         onPress: () => {if(!outfit.rack){rackData.push(outfit.id -1); OutfitDatabase[outfit.id-1].rack = true; this.setState({})}
                                         else if(outfit.rack){Alert.alert("Outfit Already on Clothing Rack")} 
                                         }
                                        }
                                     ]
                                 );}} 
                                 style={[containerStyle.container]}>
                                   <ImageBackground style={[containerStyle.outfitTest]} imageStyle={{borderRadius:10}} source={outfit.img}>
                                    <View style={[tagStyles.tagdisplay]}>
                                        {outfit.tags.map((tag:any) => {
                                            return(
                                                <Text style={[tagStyles.tags]}>
                                                    {tag}
                                                </Text>
                                            )
                                        })}
                                    </View>
                                    
                                    <View style={outfit.worn && containerStyle.outfitTestOverlay}/>

                                    </ImageBackground>
    
                            </TouchableOpacity>
    
        
                        )
                    }
                })
            )

        }
    }
}

export default Outfit;

const containerStyle = StyleSheet.create({
    container:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'center'
    },

    outfitTestOverlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 10
    },

    outfitTest:{
        height: 300,
        width: 160,
        margin:10,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        position: 'relative',
        backgroundColor: "aliceblue",
        shadowColor: 'black',
        shadowOpacity: .25,
        shadowRadius: 4,

    },
    nooutfitContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        paddingHorizontal:1,
        paddingVertical:6,
      },

})

const tagStyles = StyleSheet.create({
    tagdisplay:{
        width:160,
        paddingHorizontal:1,
        paddingVertical:6,
        borderRadius:10,
        backgroundColor: "white",
        opacity: .8,
        alignSelf: "flex-end",
        marginHorizontal:"1%",
        marginBottom: 2,
        minWidth: "50%",
        flexWrap:"wrap",
        fontSize:10,
        overflow:"hidden",
        flexDirection: 'row',

    },

    tags:{
        paddingHorizontal:8,
        paddingVertical:6,
        borderRadius:10,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal:"1%",
        marginBottom: 6,
        minWidth: "30%",
        textAlign: "center",
        flexWrap:"wrap",
        fontSize:10,
        overflow:"hidden",
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        position: 'relative',
        borderColor: 'gold',
        borderWidth: 1,


    }
})
