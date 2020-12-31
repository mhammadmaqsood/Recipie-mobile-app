import React from 'react';
import {StyleSheet, View, Text,Image,TextInput,TouchableOpacity,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class SignUp extends React.Component{
    render(){
        return(
            <View style={{width:"100%",height:"100%", backgroundColor: "#6763CE"}}>

                <Icon name="arrow-left" size={20} style={{color:"white",margin:15}} onPress={()=>this.props.navigation.navigate("SignIn")} />

                <View style={{width:"100%",height:"80%",backgroundColor: "white",marginTop: "28%",borderTopRightRadius:60,borderTopLeftRadius:60}}>
                    <Text style={{fontSize:20,marginTop:"5%",textAlign:"center",fontWeight:"bold"}}>Code Verification</Text>
                    <Text style={{marginTop:"5%",textAlign:"center"}}>Enter verification code here</Text>

                    <View style={{flexDirection:"row",justifyContent:"space-between",margin:25,marginTop:"15%"}}>
                        <TextInput
                            keyboardType='default'
                            style={styles.textInput}
                        />
                        <TextInput
                            keyboardType='default'
                            style={styles.textInput}
                        />
                        <TextInput
                            keyboardType='default'
                            style={styles.textInput}
                        />
                        <TextInput
                            keyboardType='default'
                            style={styles.textInput}
                        />
                    </View>

                    <TouchableOpacity style={styles.card}>
                        <View style={{width: "85%",backgroundColor:"white",height:"100%",borderRadius:20,justifyContent:"center"}}>
                            <Text style={{marginLeft:"10%",textAlign:"center"}}>Done</Text>
                        </View>
                        <Icon name="arrow-right" size={15} style={{color:"white",margin:"7%"}} />
                    </TouchableOpacity>
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
        width: "90%",height:"12%",backgroundColor:"#011842",alignSelf: "center",borderRadius:20,marginTop:"20%",flexDirection:"row"
    },
    textInput:{
        width:"15%",
        borderBottomWidth:1,
        borderBottomColor:"#CDCDCD",
        alignSelf: "center"
        // marginTop:15
    },
});
