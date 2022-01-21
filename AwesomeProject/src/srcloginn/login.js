import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationActions } from 'react-navigation';
import Svg,{ image,SvgUri } from 'react-native-svg';
import styles from '../../stylelogin/style';
const login = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const image = { uri: "https://s3-alpha-sig.figma.com/img/99f8/a80e/33642431e9b5a27620ecc2316ca3b75d?Expires=1643587200&Signature=Ol1RxUGeewLFHbfbzSzcu-U1xjJXQ6tQ50Cy712zrd3K0aCw2MuubDcUWMD3r3bedjCjbBFCWHMHle2EBHs7J9m7H356lpqTgd4ALXeMXA6bPUNIlihQsq~-IeG8QN8BHkj1HYPkBevBfd2XI9TIBf2oRj9-eY5OjwffpShAQChLl4nhe55QJtbz0V6P06c7Yr4WU57z4u-~~9APCu~K1~F9Obp5LHdmmNKnTyGzVxxBXZs6mitJLdRVanGPKOS-8TisrHLNgoHoR~pBHJNrGEhr2iEgyAKVukYDlWq9K8xHi~petJ2gl0gIxCS6XJ~Ric3~qsVwbLO-j9KsIRaaTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" };
  const [isSecureText, setSecureText] = React.useState(true);
  
  return (
    <SafeAreaView>
      <Image source={image} resizeMode="center" style={styles.image} />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nhập email hoặc số điện thoại"
      />
      <View>
        <TextInput
          style={styles.input1}
          onChangeText={onChangeNumber}
          value={number}
          maxLength={5}
          secureTextEntry={isSecureText}
          placeholder="Mật khẩu"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.imageyes} onPress={() => { setSecureText(!isSecureText) }}>

          {!isSecureText ?

            <Image style={{ width: '100%', height: '100%', }} resizeMode="contain" source={{ uri: 'https://icons.iconarchive.com/icons/iconsmind/outline/256/Eye-2-icon.png' }} />
            : <Image style={{ width: '100%', height: '100%' }} resizeMode="contain" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMD3IcMCiSshEopomEAVcP--CPjx9lvVDlw&usqp=CAU' }} />}
        </TouchableOpacity>


      </View>
      <TouchableOpacity  onPress={()=>{navigation.navigate('password')}}>
        <Text style={styles.baseText}>Quên mật khẩu</Text>
      </TouchableOpacity>
      <TouchableOpacity  >
        <Text style={styles.login}>Đăng nhập</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 18 }}>
           <Text style={{ fontSize: 14, marginLeft: 31, }}>Bạn chưa có tài khoản?</Text>
           <TouchableOpacity  onPress={()=>{navigation.navigate('sigin')}}>
              <Text style={styles.dangki}>Đăng kí</Text>
          </TouchableOpacity>

      </View >
      <Text style={styles.Text}>-Hoặc đăng nhập với-</Text>
      <View style={{ flexDirection: 'row', marginTop: 18, alignSelf: 'center' }}>
        <TouchableOpacity>
          <Image
            style={styles.google}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image
              style={styles.facebook}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png',
              }}
            />
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  );
};
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//   },
//   imageyes: {
//     flexDirection: 'row',
//     width: 24,
//     height: 24,
//     position: 'absolute',
//     top: 20,
//     right: 20,
//   },
//   Text1: {
//     fontSize: 15,
//     marginTop: 10,
//     alignSelf: 'center',
//     //fontWeight:'bold',
//   },
//   google1: {
//     borderRadius: 16,
//     height: 36,
//     width: 36,
//     //  alignSelf:'center',

//   },
//   facebook1: {
//     borderRadius: 16,
//     height: 36,
//     width: 36,
//     //  alignSelf:'center',
//     marginLeft: 15,
//   },
//   input: {
//     height: 50,
//     margin: 10,
//     borderWidth: 1,
//     borderRadius: 10,
//     width: 384,
//     borderColor: "#C4C4C4",
//     marginLeft:16,
//     marginRight:16,
//   },
  
//   password:{
//     fontWeight:'bold',
//     alignSelf:'center',
//     fontSize: 14,
//     color:'black',
//   },
//   dangki: {
//     color: '#60B939',
//     fontSize: 14,
//     //fontWeight: 'bold',
//   },
//   Text: {
//     fontSize: 14,
//     marginTop: 50,
//     alignSelf: 'center',
//     //fontWeight: 'bold',
//   },
//   image: {
//     height: 49,
//     width: 166,
//     alignSelf: 'center',
//     //marginLeft:97,
//     //marginRight:97,

//     marginTop: 30,
//   },
//   google: {
//     borderRadius: 16,
//     height: 36,
//     width: 36,
//     //  alignSelf:'center',
//     // marginLeft:10,
//     bottom: '16.41%',
//   },
//   facebook: {
//     borderRadius: 16,
//     height: 36,
//     width: 36,
//     marginLeft: 15,
//     //  alignSelf:'center',
//     bottom: '16.41%',
//   },
//   login: {
//     backgroundColor: '#60B939',
//     color: 'white',
//     padding: 16,
//     borderRadius: 10,
//     paddingHorizontal: 128,
//     alignSelf: 'center',
//     marginTop: 15,
//     fontSize: 14,
//     //width:328,
//   },
//   baseText: {
//     //fontWeight: 'bold',
//     alignSelf: 'flex-end',
//     marginRight: 10,
//     fontSize: 14,
//   },
// });
export default login;