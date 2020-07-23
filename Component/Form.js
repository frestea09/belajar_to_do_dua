import React from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'
function Form(props){
    return(
        <View>
            <Text>{props.pengguna}</Text>
            <TextInput style={styles.input} onChangeText={props.setPengguna}/>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        input:{
            borderWidth : 1,
            borderColor:'black',
        }
    }
)
export default Form