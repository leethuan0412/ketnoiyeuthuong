import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity, FlatList, Switch } from "react-native";

const image = { uri: "data:image/png;base64,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" };
const image1 = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHcpDTzFFlQz2-TvYdGGr_ZwxqgDe9elShhQ&usqp=CAU" };
const notifications = () => {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    return (
        <SafeAreaView >
            <View style={styles.message}>
                <Image source={image} resizeMode="contain" style={styles.image} />
                <Text style={{ fontSize: 14, alignSelf:'center'}}>Tin nhắn</Text>
                <Switch
                    trackColor={{ false: "grey-7", true: "#8FCAF9" }}
                    thumbColor={isEnabled1 ? "#2C98F0" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                />
            </View>
            <View style={styles.message}>
                <Image source={image1} resizeMode="contain" style={styles.image} />
                <Text style={{ fontSize: 14, alignSelf:'center'}}>Người theo dõi</Text>
                <Switch style={{alignSelf:'center',}}
                    trackColor={{ false: "grey-7", true: "#8FCAF9" }}
                    thumbColor={isEnabled ? "#2C98F0" : "#f4f3f4"}
                    ios_backgroundColor="#8FCAF9"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    image: {
        height: 24,
        width: 24,
        alignSelf:'center',
        
    },
    message: {
        flexDirection: 'row',
        //justifyContent: 'center',
        borderBottomWidth: 1,
        //marginTop: 21,
        width: 360,
        height:56,
        alignSelf: 'center',
        justifyContent:'space-between',
    },
});

export default notifications;