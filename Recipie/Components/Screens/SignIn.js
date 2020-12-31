import React from 'react';
import {StyleSheet, View, Text,Image,TextInput,TouchableOpacity,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class SignIn extends React.Component{
    render(){
        return(
            <View style={{width:"100%",height:"100%", backgroundColor: "#6763CE"}}>

                <StatusBar backgroundColor="#6763CE"/>

                <Text style={{color:"white",fontSize:20,margin:25}}>Welcome Back</Text>

                <View style={{width:"100%",height:"60%",backgroundColor: "white",marginTop: "58%",borderTopRightRadius:60,borderTopLeftRadius:60}}>
                    <TouchableOpacity style={{width:"20%",height:"17%",borderRadius: 60, backgroundColor: "#082464",marginLeft:"50%",marginTop:"-10%",justifyContent:"center"}}>
                        <Icon name="arrow-right" size={20} style={{color:"white",alignSelf:"center"}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:25,margin:30,fontWeight:"bold"}}>Sign In</Text>
                    <TextInput
                        keyboardType={'numeric'}
                        style={styles.textInput}
                        placeholder="Phone"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <View style={{flexDirection: "row",justifyContent:"space-between",margin:25,marginTop: "10%"}}>
                        <Text style={{color:"#6763CE"}} onPress={()=>this.props.navigation.navigate("ForgotPassword")}>Forgot Password?</Text>
                        <Text style={{fontWeight:"bold",color:"#A4A4AA"}} onPress={()=>this.props.navigation.navigate("SignUp")}>Sign Up</Text>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        width: "90%",height:"13%",backgroundColor:"#011842",alignSelf: "center",borderRadius:20,marginTop:"20%",flexDirection:"row"
    },
    textInput:{
        width:"85%",
        borderBottomWidth:1,
        borderBottomColor:"#CDCDCD",
        alignSelf: "center"
        // marginTop:15
    },
});
