import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from '../../stylelogin/style';
const password = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const image = {uri: "https://s3-alpha-sig.figma.com/img/99f8/a80e/33642431e9b5a27620ecc2316ca3b75d?Expires=1643587200&Signature=Ol1RxUGeewLFHbfbzSzcu-U1xjJXQ6tQ50Cy712zrd3K0aCw2MuubDcUWMD3r3bedjCjbBFCWHMHle2EBHs7J9m7H356lpqTgd4ALXeMXA6bPUNIlihQsq~-IeG8QN8BHkj1HYPkBevBfd2XI9TIBf2oRj9-eY5OjwffpShAQChLl4nhe55QJtbz0V6P06c7Yr4WU57z4u-~~9APCu~K1~F9Obp5LHdmmNKnTyGzVxxBXZs6mitJLdRVanGPKOS-8TisrHLNgoHoR~pBHJNrGEhr2iEgyAKVukYDlWq9K8xHi~petJ2gl0gIxCS6XJ~Ric3~qsVwbLO-j9KsIRaaTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"};
  const [isSecureText, setSecureText] = React.useState(true);
  return (
    <SafeAreaView>
      <Image source={image} resizeMode="center" style={styles.imagee} />
      <Text style={styles.password}>Lấy lại mật khẩu</Text>
      <View style={styles.Text2}>
      <Text >  Nếu bạn quên mật khẩu vui lòng nhập{"\n"}Email hoặc số điện thoại tại đây để lấy lại</Text>
      </View>
      <TextInput
        style={styles.input1}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nhập email hoặc số điện thoại"
      />  

      <TouchableOpacity  onPress={()=>{navigation.navigate('forgetpassword')}}>
      <Text style={styles.login}>Xác nhận</Text>
      </TouchableOpacity>
    
     
      
    </SafeAreaView>

  );
};

// const styles = StyleSheet.create({
//   input: {
//     height: 50,
//     margin: 10,
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 20,
//     borderColor:"#C4C4C4",
//     //width:328,
//   },
//   password:{
//     fontWeight:'bold',
//     alignSelf:'center',
//     fontSize: 14,
//     color:'black',
//     marginTop:25,
//     //marginLeft:122,
//   },
//   Text2:{
//     fontSize: 14,
//     marginTop:18,
//     alignSelf:'center',
//   //  fontWeight:'bold',
//   marginLeft:18,
  
//   },
//   imagee: {
//     height: 49,
//         width: 166,
//     alignSelf:'center',
//     marginTop:81,
//     marginLeft:97,
//     marginRight:97,
//   },

//   login:{
    
//       backgroundColor: '#60B939',
//       color: 'white',
//       padding: 16,
//       borderRadius: 10,
//       paddingHorizontal: 128,
//       alignSelf: 'center',
//       marginTop: 15,
//       fontSize: 14,
//       //width:328,
    
//   },
 
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:'#E5E5E5'
//   },
// });

export default password;