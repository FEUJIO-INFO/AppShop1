import React ,{Component} from 'react'
import { StyleSheet,Image,TextInput, Text, View,ScrollView,TouchableOpacity,Button } from 'react-native';

export class Login extends Component{
  render(){
  return (
    <ScrollView style={styles.container}>
        <View style={styles.profilStyle}>
           <Image  style={styles.profilStyle}
              source={require('../images/Login.png')}
              resizeMode="contain"
             />
            <View style={styles.container}>
        <Text style={styles.txt}>Code d'acces de l'ecole</Text>
       <TextInput
       placeholder='Nom utilisateur...'
            style={styles.input}
            
          />

       <Text style={styles.txt}>Nom d'utilisateur</Text>
       <TextInput
        placeholder='Nom utilisateur...'
            style={styles.input}
          />       
      <Text style={styles.txt}>Password</Text>
      <TextInput 
              placeholder='Password...'
              style={styles.input}
          />
         
          <Text style={{textAlign:'right', marginRight:25,fontWeight:'bold',marginTop:10}}>Forgot Password?</Text>
          <br></br><br></br>
    </View>
 
     
          
    <TouchableOpacity  style={styles.loginbtt} onPress={()=> this.props.navigation.navigate('HomeApp') }>
               <Text style={styles.txtLogin}>Login</Text>
           </TouchableOpacity>
             <TouchableOpacity >
               <Text>Vous n'avez pas de compte?
               <a  style={{marginTop:20,color:'green'}} onPress={()=> this.props.navigation.navigate('Employe') } >Contact administrateur</a></Text>
             </TouchableOpacity>
             <Text style={{marginTop:20,color:'green'}}>Tous droits reserves AppFabrik Sarl 2020-2022</Text>
       </View>

     
           
 
  </ScrollView>
  )
}
}




  
export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    marginTop:-50,
    paddingLeft:20,
    paddingRight:20,
    width:'auto',
    borderRadius:20
  },
  profilStyle:{
    width:'auto',
    height:'250px'
  },
  input: {
    height:40,
    borderRadius:5,
    width:'100%',
    marginTop:15,
    paddingLeft:15,
    backgroundColor:'rgb(245, 245, 239)'
    
  },
  txt:{
    fontWeight:'bold',
    marginTop:25,
  },
  loginbtt:{
    backgroundColor:'green',
    width:'80%',
    height:40,
    borderRadius:20,
    margin:'auto',
    marginTop:20
  },
  txtLogin:{
    color:'white',
    fontWeight:'bold',
    margin:'auto'
  },
  
  connect:{
    color:'white',
    shadowColor: 'green',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,
    elevation: 3,
    margin:'top',
    borderRadius:'10px 10px 10px 10px',
    backgroundColor:'green'
  }

  });