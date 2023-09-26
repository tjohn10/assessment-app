import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import {List} from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AccountScreen() {
    return(
        <View style={styles.container}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/account.png')} style={{width: 80, height: 80, borderRadius: 50}} />
                <Text style={styles.name}>John Doe</Text>
            </View>
            <View style={{margin: 24}}>
                <List.Item
                    style={styles.list}
                    title="Account Info"
                    left={props => <List.Icon {...props} icon="account" />}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                /><
                List.Item
                style={styles.list}
                    title="Security"
                    left={props => <List.Icon {...props} icon="lock" />}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                />
                <List.Item
                    style={styles.list}
                    title="Cards"
                    left={props => <List.Icon {...props} icon="credit-card-multiple" />}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                />
                <List.Item
                    style={styles.list}
                    title="App Preference"
                    left={props => <List.Icon {...props} icon="gavel" />}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                />
            </View>
            <View>
                <Text style={styles.logout}>
                    <Ionicons name="exit" size={21} color="#DB3C25" />
                    Logout
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    name:{
        marginTop: 10,
        color: '#151515',
        fontFamily: 'Poppins_500Medium',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '500',
        letterSpacing: 0.42
    },
    list:{
        height: 50,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        marginBottom: 20
    },
    logout:{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30
    }
})
