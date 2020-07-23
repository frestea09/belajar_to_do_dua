import React from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'

function Mahasiswa(props){
    return(
        <TouchableOpacity onPress={()=>{props.hapusData(props.dataItem.nim)}}>
            <Text style={styles.item}>{props.dataItem.nama}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        margin:24,
        padding:30,
        fontSize:24,
        borderColor:'#b7b5b5',
        borderWidth:1,
        borderStyle:"dashed",
        
    }
})
export default Mahasiswa