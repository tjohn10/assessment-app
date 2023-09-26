import React from "react";
import {Dimensions, View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList} from "react-native";
import {Button, Card} from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Inter_500Medium} from "@expo-google-fonts/inter";

export default function ProductsCarousel(){
    const items = [
        {id: 1, name: 'African Doughnut Mix', subtext: '(Puff Puff)', price: 30, uri: require('../assets/doughnut.png')},
        {id: 2, name: 'Moi Moi', subtext: '(Bean Cake)', price: 30,  uri: require('../assets/item.png')},
        {id: 3, name: 'Efo Riro', subtext: '', price: 30, uri: require('../assets/efo.png')},
        {id: 4, name: 'Chicken Stew', subtext: '', price: 30, uri: require('../assets/chicken.png')},
        {id: 5, name: 'Asaro', subtext: '(Yam Porridge)', price: 30, uri: require('../assets/item.png')},
        {id: 6, name: 'Asaro', subtext: '(Yam Porridge)', price: 30, uri: require('../assets/item.png')}
    ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={true} pagingEnabled={true}>
                <FlatList
                    data={items}
                    numColumns={6}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                        <TouchableOpacity>
                            <Card style={styles.card} mode="elevated">
                                <Card.Content>
                                    <Image source={item.uri} style={{width: 55, height: 55, backgroundColor: '#fff'}}/>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.total}>£{item.price}</Text>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    }
                />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    name:{
        color: '#1D1E20',
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Inter_500Medium',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: '500',
    },
    card: {
        width: 90,
        height: 124,
        margin: 8,
        borderRadius: 10,
        backgroundColor: '#F5F6FA'
    },
    total:{
        color: '#BDBDBD',
        textAlign: 'center',
        fontFamily: 'Inter_500Medium',
        marginTop: 2,
        fontSize: 8,
        fontStyle: 'normal',
        fontWeight: '500'
    }
})
