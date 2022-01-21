import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { greaterThan } from "react-native-reanimated";
//const image={uri: "https://icon2.cleanpng.com/20180315/vdw/kisspng-computer-icons-scalable-vector-graphics-symbol-cli-plus-sign-5aaad88d06c221.6107098215211459970277.jpg"};
import { useNavigation } from '@react-navigation/native';
import styles from '../../stylelogin/styleacc';
const information = () => {
  
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [text1, onChangeText1] = React.useState(null);
  const [text2, onChangeText2] = React.useState(null);
  const navigation = useNavigation();

  
  return (
    <SafeAreaView>
        <View> 
    <Text style={styles.textfirst}>Tên của bạn*</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nhập họ tên"
      />
      </View>
      <View>
      <Text style={styles.basetext1}>Ngày sinh</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText1}
          value={text1}
         
          placeholder="dd/mm/yyyy"
        />
      </View>
      <View >
      <Text style={styles.basetext1}>Số điện thoại</Text>
        <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
          maxLength={10}
          placeholder="Xác minh" 
        />
        <TouchableOpacity
          style={{ flexDirection: 'row', position: 'absolute', top: 25, right: 25 }} 
          onPress={()=>{navigation.navigate('phone')}}>
     <Image style={{ width: 21, height:21 }} resizeMode="contain" source={{ uri: 'https://icon2.cleanpng.com/20180315/vdw/kisspng-computer-icons-scalable-vector-graphics-symbol-cli-plus-sign-5aaad88d06c221.6107098215211459970277.jpg' }} />
        </TouchableOpacity>
        </View>
      </View>
      <View>
      <Text style={styles.basetext1}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText2}
          value={text2}
          maxLength={5}
          placeholder="Xác minh"
        />
      </View>
      <TouchableOpacity style={styles.login}  onPress={()=>{navigation.navigate('settingacc')}}>
        <Text style={{ color:'white'}} >Hoàn Thành</Text>
      </TouchableOpacity>


    </SafeAreaView>

  );
};

// const styles = StyleSheet.create({
//   // container: {
//   //  // paddingTop: 50,
//   //  //alignSelf:"center",
//   // },
//   input: {
//    // padding: 30,
//     height: 50,
//     marginTop: 10,
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 20,
//     borderColor: "#C4C4C4",
//     backgroundColor:"#DDDDDD",
//     marginLeft:16,
//     marginRight:16,
    
//   },
 
  
//     login: {
//       backgroundColor: '#60B939',
//       //color: 'white',
//       height:50,
//       borderRadius: 10,
//       marginTop: 30,
//       marginLeft: 16,
//       marginRight: 16,
//       fontSize: 14,
//       width: 328,
//       alignItems:'center',
//       justifyContent:'center',
//       alignSelf:'center',
//   },
//   textfirst:{
//       color:"#60B939",
//       fontSize:14,
//       marginTop:20,
//   },
//   basetext1:{
//     fontSize: 14,
//     color:"black",
//     marginTop:20,
//   },
  
// });

export default information;