import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from '../../stylelogin/styleacc';
const email = () => {

  const [text1, onChangeText1] = React.useState(null);
  return (
    <SafeAreaView >

      <Text style={styles.accept}>Xác minh thư điện tử của bạn.</Text>
      <Text style={styles.baseText2}>Để tăng tính xác thực cho tài khoản, chúng tôi khuyên{"\n"}bạn nên nhập chính xác số điện thoại của mình.</Text>
      <View >
        <TextInput
          style={styles.input}
          onChangeText={onChangeText1}
          value={text1}
          placeholder="Nhập Email để xác thực"
        />

      </View>
      <Text style={styles.baseText2}>Chúng tôi sẽ gửi Email xác thực qua Email này của bạn</Text>
      <TouchableOpacity  style={styles.login}>
        <Text style={{color:'white'}} >Tiếp tục</Text>
      </TouchableOpacity>



    </SafeAreaView>

  );
};

// const styles = StyleSheet.create({
 
//   input2: {
//     height: 50,
//     margin: 10,
//     borderWidth: 1,
//     borderRadius: 16,
//     paddingHorizontal: 10,
//     borderColor: "#C4C4C4",
//     backgroundColor:"#DDDDDD",
//     justifyContent:"center",
//      marginLeft:15,
//      width:328,
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
//     color: 'white',
//     padding: 16,
//     borderRadius: 16,
//     marginTop: 20,
//     fontSize: 15,
//     alignSelf: 'center',
//     paddingHorizontal: 163,
//   },
// });

export default email;