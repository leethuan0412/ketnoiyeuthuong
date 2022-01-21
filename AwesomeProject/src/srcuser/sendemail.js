import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from '../../stylelogin/styleacc';
const sendemail = () => {
    
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [isSecureText, setSecureText] = React.useState(true);
  return (
    <SafeAreaView>
      <Text style={styles.accept}>Xác minh số điện thoại của bạn.</Text>
      <Text style={styles.baseText2}>Để tăng tính xác thực cho tài khoản, chúng tôi khuyên {"\n"} bạn nên nhập chính xác Email của mình.</Text>
      <View >
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Nhập Email để xác thực"
        />

      </View>
      
     
      <View style={{flexDirection:'row', alignSelf:'center',}}>
      <Text style={styles.baseText2} >Chưa nhận được mã?</Text>
      <TouchableOpacity  >
      <Text style={{color:'green',marginTop: 20,}}>Gửi lại</Text>
      </TouchableOpacity> 
      </View>
      <TouchableOpacity  style={styles.login}>
      <Text style={{color:'white'}}>Xác nhận</Text>
      </TouchableOpacity>
    
     
      
    </SafeAreaView>

  );
};

// const styles = StyleSheet.create({
  
//   input: {
//     height: 60,
//     margin: 10,
//     borderWidth: 1,
//     borderRadius: 16,
//     paddingHorizontal: 10,
//     borderColor:"#C4C4C4",
//     backgroundColor:"#DDDDDD",
//     marginLeft:15,
//     width:382,
//   },
// baseText:{
//     fontSize: 15,
//     marginLeft:15,
   
// },
//   Text:{
//     fontSize: 30,
//     marginTop:10,
//     //alignSelf:'center',
//   //  fontWeight:'bold',
//   marginLeft:15,
  
//   },
//   image: {
//     height: 100,
//     width:200,
//     alignSelf:'center',
//     marginTop:80,
//   },

//   login:{
//     backgroundColor:'#60B939',
//     color:'white',
//     padding:16,
//     borderRadius:16,
//     marginTop:15,
//     fontSize:15,
//     alignSelf:'center',
//     paddingHorizontal:160,
//   },
// });

export default sendemail;