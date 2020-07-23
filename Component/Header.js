import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.header_font}>Go GPS</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        header : {
            height : 80,
            paddingTop:38,
            backgroundColor : 'coral',
        },
        header_font : {
            fontSize : 30,
            color:'#ffffff',
            textAlign:'center',
        }
    }
)

export default Header