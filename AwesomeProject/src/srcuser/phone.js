import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from '../../stylelogin/styleacc';
const phone = () => {

  const [text, onChangeText] = React.useState("    +84");
  const [text1, onChangeText1] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const navigation = useNavigation();
  return (
    
    <SafeAreaView >

      <Text style={styles.accept}>Xác minh số điện thoại của bạn.</Text>
      <Text style={styles.baseText2}>Để tăng tính xác thực cho tài khoản, chúng tôi khuyên{"\n"}bạn nên nhập chính xác số điện thoại của mình.</Text>
      <View style={{ flexDirection: 'row' }}>
      <View style={{ flexDirection: 'row' }} >
        <TextInput
          style={styles.input2}
          onChangeText={onChangeText}
          value={text}
          //placeholder="+84"
        />
        <Image style={{ width:30, height: 20 ,top:30,right:70, position: 'absolute'}} resizeMode="contain" source={{ uri: 'https://product.hstatic.net/200000122283/product/c-e1-bb-9d-vi-e1-bb-87t-nam_2c0683597d2d419fac401f51ccbae779_master.jpg' }} />
        </View>
        <TextInput
          style={styles.input3}
          onChangeText={onChangeText1}
          value={text1}
          placeholder="Nhập số điện thoại"
        />

      </View>
      <Text style={styles.baseText}>Chúng tôi sẽ gửi tin nhắn có kèm OTP cho bạn qua số (+84)</Text>
      <TouchableOpacity style={styles.login} onPress={()=>{navigation.navigate('otpinput')}}>
        <Text style={{color:'white'}}>Tiếp tục</Text>
      </TouchableOpacity>



    </SafeAreaView>

  );
};

// const styles = StyleSheet.create({
//   input2: {
//     marginTop: 10,
//     height: 60,
//     borderWidth: 1,
//     paddingHorizontal: 30,
//     borderColor: "#C4C4C4",
//     backgroundColor: "#DDDDDD",
//     marginRight: 10,
//     borderTopLeftRadius: 8,
//     borderBottomLeftRadius: 8,
//     marginLeft: 15,
//   },
//   input3: {
//     height: 60,
//     marginTop: 10,
//     borderWidth: 1,
//     paddingHorizontal: 70,
//     borderColor: "#C4C4C4",
//     backgroundColor: "#DDDDDD",
//     borderTopRightRadius: 8,
//     borderBottomRightRadius: 8,
//   },
//   baseText2: {
//     fontSize: 14,
//     marginTop: 20,
//     //alignSelf: 'center',
//     marginLeft:16,
//     //  fontWeight:'bold',

//   },

//   login: {
//     backgroundColor: '#60B939',
//     //color: 'white',
//     height:50,
//     borderRadius: 10,
//     marginTop: 30,
//     marginLeft: 16,
//     marginRight: 16,
//     fontSize: 14,
//     width: 328,
//     alignItems:'center',
//     justifyContent:'center',
//     alignSelf:'center',
//   },
// });

export default phone;