import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image,TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import {Header} from 'react-native-elements';
export default class App extends React.Component {
  constructor (){
    super();
    this.state={
      name:''
    }
  }
speak=()=>{
  var thinktosay =this.state.name 
  Speech.speak(thinktosay)
}

render(){
  return (
    <View style={styles.container}>
      <Header
      backgroundColor={'#07B89E'}
      centerComponent={{
        text:'text to speech converter',
        style:{color:'black',fontSize:15,fontWeight:700}
      }}

      />

<Image
style={styles.imageicon}
source={{
  uri:'https://www.seekpng.com/png/detail/45-458366_microphone-icon-png-vector-microphone.png'
}}
/>
<Text style= {styles.text3}>
enter the word
</Text>
<TextInput
style={styles.inputBox}
onChangeText={(text)=>{
  this.setState({name:text})
}}
value={this.state.text}
/>

<View>
<TouchableOpacity
style={styles.button}
onPress={this.speak}
>
<Text style={styles.text2}>
convert
</Text>
</TouchableOpacity>
</View>
    </View>
  )
}


}

const styles = StyleSheet.create({
  container: {
    marginTop:0,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 imageicon:{
   width:150,
   height:150,
   alignSelf:'center',
   marginTop:50,
 },
 inputBox:{
   marginTop:20,
   borderWidth:2,
   outline:'none',
   width:'80%',
   height:40,
   alignSelf:'center'
   
 },
 button:{
   padding:7.5,
   backgroundColor:'#07B89E',
   borderRadius:50,
   height:50,
   width:'80%',
   marginTop:50,
   alignSelf:'center'
 },
 text2:{
   color:'black',
   fontSize:20,
   textAlign:'center',
   fontStyle:'bold'
 },
 text3:{
   color:'black',
   fontSize:17,
   textAlign:'center',
   fontStyle:'bold',
   padding:24,
 }
 
});
