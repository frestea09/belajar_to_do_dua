import React from 'react'
import {View,Text,TextInput,StyleSheet,Button} from 'react-native'
function FormToDo(props){
    return(
        <View>
            <Text>Hello</Text>
            <TextInput onChangeText={props.setListMahasiswa}  style={styles.form_input} />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        form_input : {
            borderWidth : 1,
            borderColor : 'black'
        }
    }
)
export default FormToDo