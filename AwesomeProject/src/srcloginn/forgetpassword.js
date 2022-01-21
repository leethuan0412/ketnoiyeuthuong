import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from '../../stylelogin/style';
const forgetpassword = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const image = { uri: "https://s3-alpha-sig.figma.com/img/99f8/a80e/33642431e9b5a27620ecc2316ca3b75d?Expires=1643587200&Signature=Ol1RxUGeewLFHbfbzSzcu-U1xjJXQ6tQ50Cy712zrd3K0aCw2MuubDcUWMD3r3bedjCjbBFCWHMHle2EBHs7J9m7H356lpqTgd4ALXeMXA6bPUNIlihQsq~-IeG8QN8BHkj1HYPkBevBfd2XI9TIBf2oRj9-eY5OjwffpShAQChLl4nhe55QJtbz0V6P06c7Yr4WU57z4u-~~9APCu~K1~F9Obp5LHdmmNKnTyGzVxxBXZs6mitJLdRVanGPKOS-8TisrHLNgoHoR~pBHJNrGEhr2iEgyAKVukYDlWq9K8xHi~petJ2gl0gIxCS6XJ~Ric3~qsVwbLO-j9KsIRaaTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" };
  const [isSecureText, setSecureText] = React.useState(true);
  return (
    <SafeAreaView>
      <Image source={image} resizeMode="center" style={styles.imagee} />
      <Text style={styles.otp}>Nhập mã OTP để xác nhận</Text>
      <View style={styles.Text2}>
        <Text >Mã OTP sẽ được gửi đến số điện thoại {"\n"}         đăng ký của bạn trong vài giây</Text>
      </View>
      <View style={styles.maotp}>
        <OTPInputView
          pinCount={6}
          //autoFocusOnLoad
          codeInputFieldStyle={styles.under}
          codeInputHighlightStyle={styles.underonclick}
        />
      </View>
      <View >
        <TouchableOpacity  >
          <Text style={styles.send}>Gửi lại mã OTP </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => { navigation.navigate('forget') }}>
        <Text style={styles.login}>Xác nhận</Text>
      </TouchableOpacity>



    </SafeAreaView>

  );
};

// const styles = StyleSheet.create({
//   // borderStyleHighLighted: {
//   //   borderColor: "red",
//   // },

//   under: {
//     width: 30,
//     height: 45,
//     borderWidth: 0,
//     borderBottomWidth: 1,
//     color:'black',
//     borderColor:'black'

//   },

//   underonclick: {
//     borderColor: "red",
//   },
//   maotp:{
//     width: '80%',
//      height: 27, 
//      alignSelf:'center',
//      marginTop:18,
//   },
//   input: {
//     height: 50,
//     margin: 10,
//     borderWidth: 1,
//     borderRadius: 10,
//     width:350,
//     borderColor: "#C4C4C4",
//     marginLeft:16,
//     marginRight:16,
//   },
//   otp:{
//     fontWeight:'bold',
//     alignSelf:'center',
//     fontSize: 14,
//     color:'black',
//     marginTop:25,
//     //marginLeft:88,
//   },
//   send:{
//    // fontWeight:'bold',
//     alignSelf:'center',
//     fontSize: 14,
//     color:'#60B939',
//     marginTop:18,
//    // marginLeft:132,
//   },
//   Text2:{
//     fontSize: 15,
//     marginTop:10,
//     alignSelf:'center',
//   //  fontWeight:'bold',

//   },
//   image: {
//     height: 49,
//         width: 166,
//     alignSelf:'center',
//     marginTop:81,
//   },

//   login:{
//     backgroundColor:'#60B939',
//     color:'white',
//     padding:16,
//     borderRadius:16,
//     marginTop:15,
//     fontSize:15,
//     alignSelf:'center',
//     paddingHorizontal:150,
//   },

//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:'#E5E5E5'
//   },
// });

export default forgetpassword;