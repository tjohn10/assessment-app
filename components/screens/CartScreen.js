import React, {useState} from "react";
import {View, StyleSheet, Text, Image, FlatList, Dimensions, SafeAreaView, TouchableOpacity} from "react-native";
import { Avatar, Button, Card } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CartScreen() {
    const [orderCount, setOrderCount] = useState(1)
    const products = [
        {id: 1, name: 'Asaro', subtext: '(Yam Porridge)', price: 30},
        {id: 2, name: 'Moi Moi', subtext: '(Bean Cake)', price: 30},
        {id: 3, name: 'Efo Riro', subtext: '', price: 30}
    ]
    const increase = () => {
        setOrderCount(orderCount + 1)
    }

    const decrease = () => {
        setOrderCount(orderCount - 1)
    }

    return(
        <SafeAreaView style={styles.container}>
                <FlatList
                    data={products}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <Card style={styles.card} mode="contained" key={item.id}>
                        <Card.Content>
                            <View style={{flexDirection: 'row'}}>
                                <Image source={require('../../assets/item.png')} style={styles.cardImg}/>
                                <View style={{flexDirection: 'column', width: 180}}>
                                    <Text style={styles.name}>{item.name} <Text style={styles.subtext}>{item.subtext}</Text></Text>
                                    <Text style={styles.price}>£{item.price * orderCount}</Text>
                                    <Ionicons name="trash-outline" size={24} color="#4a4a4a" />
                                </View>
                                <View style={{flexDirection: 'column', alignContent: 'flex-end', justifyContent: 'flex-end'}}>
                                    <Button style={styles.countBtn} labelStyle={{color: '#000'}} onPress={decrease}>-</Button>
                                    <Text style={styles.count}>{orderCount}</Text>
                                    <Button style={styles.countBtn}  labelStyle={{color: '#000'}} onPress={increase}>+</Button>
                                </View>
                            </View>
                        </Card.Content>
                        </Card>
                    )}
                />
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 24, marginRight: 24, marginTop: -100, marginBottom: 8}}>
                <Text style={styles.totalTxt}>Total: <Text style={styles.totalTxt}>(3 items)</Text></Text>
                <Text style={styles.totalTxt}>£90</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Button
                        style={styles.checkoutBtn}
                        labelStyle={{
                            color: '#fff',
                            fontSize: 14,
                            fontStyle: 'normal',
                            fontWeight: '500'}}
                    >
                        Checkout   -   £90
                    </Button>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    card:{
        backgroundColor: '#fff',
        width: 327,
        padding: 8,
        marginLeft: 24,
        marginRight: 24
    },
    cardImg:{
        width: 92,
        height: 92,
        borderRadius: 14.016
    },
    name: {
        color: '#151515',
        fontFamily: 'Poppins_500Medium',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        letterSpacing: 0.42
    },
    subtext:{
        color: '#4A4A4A',
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20,
        letterSpacing: 0.42
    },
    price: {
        marginTop: 8,
        marginBottom: 8,
        color: '#DB3C25',
        fontFamily: 'Poppins_500Medium',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        letterSpacing: 0.42
    },
    countBtn:{
        borderRadius: 8,
        backgroundColor: '#fff',
        width: 32,
        height: 32,
    },
    count:{
        color:  '#4A4A4A',
        marginLeft: 27,
        fontFamily: 'Poppins_500Medium',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        letterSpacing: 0.42
    },
    checkoutBtn: {
        width: Dimensions.get('screen').width - 48,
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 32,
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#DB3C25'
    },
    totalTxt:{
        color: '#151515',
        fontFamily: 'Inter_400Regular',
        fontSize: 14.091,
        fontStyle: 'normal',
        fontWeight: '500',
        letterSpacing: 0.423
    },
    totalItems:{
        color: '#4A4A4A',
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20,
        letterSpacing: 0.42
    }
})
