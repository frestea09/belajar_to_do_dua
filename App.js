import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {View,Text,StyleSheet,FlatList, ListView, ScrollView} from 'react-native'
import Mahasiswa from './Component/Mahasiswa'
import Header from './Component/Header'
import FormToDo from './Component/FormToDo'
import Form from './Component/Form'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      'pengguna':'',
      'listMahasiswa':[
        {
          'nim':'10112299',
          'nama':'ilman teguh prasteya'
        },
        {
          'nim':'10112293',
          'nama':'deni jaeni'
        },
        {
          'nim':'10112294',
          'nama':'lies hartiani'
        },
        {
          'nim':'10112292',
          'nama':'faris syahroni ramdhan'
        }

      ]
    }
    this.hapusData = this.hapusData.bind(this)
    this.setPengguna = this.setPengguna.bind(this)
    this.setListMahasiswa = this.setListMahasiswa.bind(this)
  }
  setListMahasiswa(inputNama){
    this.setState(
      {
        listMahasiswa : {
          nim : Math.random().toString(),
          nama : inputNama
        }
      }
    )
  }
  setPengguna(inputPengguna){
    this.setState(
      {
        pengguna : inputPengguna
      }
    )
  }
  hapusData(inputData){
    let newData =  this.state.listMahasiswa.filter(item=>item.nim!= inputData)
    this.setState(
      {
        listMahasiswa : newData
      }
    )
  }
  render(){
  const objSiswa = this.state.listMahasiswa.map(item=>
        <Mahasiswa key={item.nim} dataItem={item}/>
  );
    return(
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <Form pengguna={this.state.pengguna} setPengguna={this.setPengguna}/>
          <FormToDo setListMahasiswa={this.setListMahasiswa}/>
          <FlatList
            data={this.state.listMahasiswa}
            keyExtractor={(item)=>item.nim}
            renderItem={
              ({item}) => <Mahasiswa setListMahasiswa={this.setListMahasiswa} dataItem={item} hapusData={this.hapusData}/>
            }
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    'container':{
      flex:1,
      backgroundColor:'#ffff',
    },
    'content':{
      padding:40,
    },
    'item':{
      margin:24,
      padding:40,
      fontSize:30,
    }
  }
)

export default App