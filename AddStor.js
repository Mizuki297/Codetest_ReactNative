import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AppRegistry,
} from 'react-native';
// import { Router, Scene, Reducer, Actions,ActionConst } from 'react-native-mobx';
class Product extends Component{

  render(){
    return(
      <Text >
        สินค้า :{this.props.name}{'\n'}
      </Text>
    );
  }
}
class Num extends Component{

  render(){
    return(
      <Text >
        จำนวน :{this.props.num}{'\n'}
      </Text>

    );
  }
}
class Price extends Component{

  render(){
    return(
      <Text>ราคา :{this.props.price}{'\n'}</Text>
    );
  }
}

export default class AddStor extends Component {
  
  render() {
    return (
      <View style={{flex:1}} >
            <View style={{flexDirection:"row"}} >
              <Text style={{flex:1,backgroundColor:"#ff4b51",textAlign:"center",fontSize:20}} 
                >คลังสินค้า
              </Text>
            </View>
        <View style={{flexDirection:"row"}} >
          <Text style={{flex:2,backgroundColor:"#FFDBA9",
            textAlign:"center",fontSize:15,}} >
            <Product name='ม่าม่า'/>
            <Product name='ซาลาเปาหมูแดง'/>
            <Product name='ซาลาเปาหมูสับ'/>
            
          </Text>
          <Text style={{flex:1,backgroundColor:"#96FFDD",
            textAlign:"center",fontSize:15,}} >
            <Num num='10/ซอง'/>
            <Num num='10/ลูก'/>
            <Num num='10/ลูก'/>
          </Text>
          <Text style={{flex:1,backgroundColor:"#FFDBA9",
            textAlign:"center",fontSize:15,}} >
            <Price price='6/บาท'/>
            <Price price='8/บาท'/>
            <Price price='8/บาท'/>
          </Text>
        </View>
        <View style={{
          flex:1,
          flexDirection:"row",
          alignItems:"flex-end",
          backgroundColor: '#ABFFA5',}} >
          <TouchableOpacity style={{
            flex:1,
            height: 50,
            backgroundColor:"#FF4B51",
            alignItems:"center",
            borderRadius:20,
            
            }}>
            <Text style={{
              color:"#ffffff",
              marginTop:15
              }} >Back
            </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={{
            flex:1,
            height: 50,
            backgroundColor:"#97FCFF",
            alignItems:"center",
            borderRadius:20,
            
            }}>
            <Text style={{
              color:"#000000",
              marginTop:15
              }} >Add
            </Text> 
          </TouchableOpacity>

          <TouchableOpacity
            style={{
            flex:1,
            height: 50,
            backgroundColor:"#97FCFF",
            alignItems:"center",
            borderRadius:20,
            
            }}>
            
            <Text style={{
              color:"#000000",
              marginTop:15
              }} >Next
            </Text> 
          </TouchableOpacity>
        </View>
      </View>
    );
  }  
}

