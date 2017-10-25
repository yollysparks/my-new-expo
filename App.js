import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { Video } from "expo"

MyButton = (props) => {
 //I could do something here
  return (
 <TouchableOpacity onPress={props.onPress}>
   <View style={styles.button}>
     <Text style={styles.buttonText}>{props.text}</Text>
   </View>
 </TouchableOpacity>)
}

class CrazyButton extends React.Component{
 constructor(props){
   super(props);
   this.state = {showText: true}
   this.intervalKey = setInterval(()=>{
     const newVal = !this.state.showText;
     this.setState({showText: newVal});
   },1000)
 }
 componentWillUnmount(){
   clearInterval(this.intervalKey);
 }
 render(){
   const txt = this.state.showText? this.props.text : "  ";
   return (
     <MyButton onPress={this.props.onPress} text={txt}/>
   )
 }
}

class FlexDemo extends React.Component {
FlexDemo=()=>
(
  <View style={{ flex:1, flexDirection:"raw"}}/>
  <View>
  <View style ={{width:50, height:50,backgroundColor:"red"}}/>
  <View style ={{width:50, height:50,backgroundColor:"red"}}/>
  <View style ={{width:50, height:50,backgroundColor:"red"}}/>
  </View>
  <View>
  <View style={{ flex:7}}/>
  <Text>Hi All</Text>
  </View>
     
) }

export default class App extends React.Component {
 render() {
   return (
     <View style={styles.container}>
       <Text>Hi Class</Text>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 button: {
   marginBottom: 30,
   width: 260,
   alignItems: 'center',
   backgroundColor: '#2196F3'
 },
 buttonText: {
   padding: 10,
   fontSize: 28,
   fontWeight: "bold",
   color: 'white'
 }
});
