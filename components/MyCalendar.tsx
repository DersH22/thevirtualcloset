import * as React from 'react';
import * as RN from 'react-native';
import { StyleSheet , TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MyCalendar() {
    return (
        <View> 
            <View style={styles.timePeriodContainer}>
                <RN.Pressable 
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? 'red' : 'white'
                    }
                ]}>
                    <Text>
                        Day
                    </Text>
                </RN.Pressable>
                <RN.Pressable 
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? 'red' : 'white'
                    }
                ]} >
                    <Text>
                        Week
                    </Text>
                </RN.Pressable>
                <RN.Pressable 
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? 'red' : 'white'
                    }
                ]} >
                    <Text>
                        Month
                    </Text>
                </RN.Pressable>
            </View>
            

        </View>
    )

}



const styles = StyleSheet.create({
    timePeriodContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timePeriodButton: {
        paddingLeft: 75,
        paddingTop: 20
    }
})