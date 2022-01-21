import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from '../../stylelogin/style';
const forget = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState(null);
  const [text1, onChangeText1] = React.useState(null);
  //const [number, onChangeNumber] = React.useState(null);
  const image = {uri: "https://s3-alpha-sig.figma.com/img/99f8/a80e/33642431e9b5a27620ecc2316ca3b75d?Expires=1643587200&Signature=Ol1RxUGeewLFHbfbzSzcu-U1xjJXQ6tQ50Cy712zrd3K0aCw2MuubDcUWMD3r3bedjCjbBFCWHMHle2EBHs7J9m7H356lpqTgd4ALXeMXA6bPUNIlihQsq~-IeG8QN8BHkj1HYPkBevBfd2XI9TIBf2oRj9-eY5OjwffpShAQChLl4nhe55QJtbz0V6P06c7Yr4WU57z4u-~~9APCu~K1~F9Obp5LHdmmNKnTyGzVxxBXZs6mitJLdRVanGPKOS-8TisrHLNgoHoR~pBHJNrGEhr2iEgyAKVukYDlWq9K8xHi~petJ2gl0gIxCS6XJ~Ric3~qsVwbLO-j9KsIRaaTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"};
//  const [isSecureText, setSecureText] = React.useState(true);
  return (
    <SafeAreaView>
      <Image source={image} resizeMode="center" style={styles.imagee} />
      <Text style={styles.otp}>Đặt lại mật khẩu</Text>
      <View style={styles.Text2}>
      <Text >Tạo mật khẩu mới</Text>
      </View>
      <TextInput
        style={styles.input1}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nhập mật khẩu"
      />  
        <TextInput
        style={styles.input1}
        onChangeText={onChangeText1}
        value={text1}
        placeholder="Nhập lại mật khẩu"
      />    
      <TouchableOpacity  onPress={()=>{navigation.navigate('login')}}>
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
//     borderRadius: 16,
//     paddingHorizontal: 20,
//     borderColor:"#C4C4C4"
//   },
//   password:{
//     fontWeight:'bold',
//     alignSelf:'center',
//     fontSize: 15,
//     color:'black',
//   },
//   Text:{
//     fontSize: 15,
//     marginTop:10,
//     alignSelf:'center',
//   //  fontWeight:'bold',
  
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
//     paddingHorizontal:150,
//   },
 
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:'#E5E5E5'
//   },
// });

export default forget;