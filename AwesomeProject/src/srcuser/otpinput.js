import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from '../../stylelogin/styleacc';
const otpinput = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [isSecureText, setSecureText] = React.useState(true);
  return (
    <SafeAreaView>
      <Text style={styles.accept}>Xác minh số điện thoại của bạn.</Text>
      <Text style={styles.baseText2}>Nhập mã OTP chúng tôi vừa gửi qua tin nhắn của bạn</Text>


      <OTPInputView style={styles.otp}
        pinCount={6}
        autoFocusOnLoad
        codeInputFieldStyle={styles.under}
        codeInputHighlightStyle={styles.underonclick} s
      />
      <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
        <Text style={styles.baseText2} >Chưa nhận được mã?</Text>
        <TouchableOpacity  >
          <Text style={{ color: 'green',marginTop: 20, }}>Gửi lại</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.login} onPress={() => { navigation.navigate('information') }}>
        <Text style={{ color: 'white' }}>Xác nhận</Text>
      </TouchableOpacity>
    </SafeAreaView>

  );
};

// const styles = StyleSheet.create({
//   // borderStyleHighLighted: {
//   //   borderColor: "red",
//   // },
// otp:{ width: 328, height: 40, alignSelf: 'center', marginTop: 30 },
//   under: {
//     width: 40,
//     height: 45,
//     borderWidth: 1,
//     color: 'black',
//     borderColor: '#DDDDDD',
//     backgroundColor: "#DDDDDD",

//   },

//   underonclick: {
//     borderColor: "red",
//   },

//   baseText2: {
//     fontSize: 14,
//     marginLeft: 16,
//     marginTop: 20,
//   },
//   accept:{    fontSize: 30,
//     marginTop: 20,
//     //alignSelf:'center',
//     //  fontWeight:'bold',
//     marginLeft: 16,

//   },

//   login: {
//     backgroundColor: '#60B939',
//     //color: 'white',
//     height: 50,
//     borderRadius: 10,
//     marginTop: 30,
//     marginLeft: 16,
//     marginRight: 16,
//     fontSize: 14,
//     width: 328,
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//   },
// });

export default otpinput;