import React from "react";
import {View, StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity, Image} from "react-native";
import {Button, Card} from "react-native-paper";

export default function MenuScreen({navigation}) {
    const products = [
        {id: 1, name: 'African Doughnut Mix', subtext: '(Puff Puff)', price: 30, uri: require('../../assets/doughnut.png')},
        {id: 2, name: 'Moi Moi', subtext: '(Bean Cake)', price: 30,  uri: require('../../assets/item.png')},
        {id: 3, name: 'Efo Riro', subtext: '', price: 30, uri: require('../../assets/efo.png')},
        {id: 4, name: 'Chicken Stew', subtext: '', price: 30, uri: require('../../assets/chicken.png')},
        {id: 5, name: 'Asaro', subtext: '(Yam Porridge)', price: 30, uri: require('../../assets/item.png')},
        {id: 6, name: 'Asaro', subtext: '(Yam Porridge)', price: 30, uri: require('../../assets/item.png')}
    ]
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', { name: item.name, uri: item.uri, price: item.price, subtext: item.subtext})}>
                        <Card key={item.id} style={styles.card} mode="contained">
                            <Card.Content>
                                <Image source={item.uri} style={styles.cardImg} />
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 8}}>
                                    <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>{item.name}<Text>{item.subtext}</Text></Text>
                                    <Text style={styles.price}>£{item.price}</Text>
                                </View>
                                <TouchableOpacity>
                                    <Button
                                        icon="shopping"
                                        labelStyle={styles.btnTxt}
                                        onPress={() => navigation.navigate('Cart')}
                                        style={styles.addBtn}>
                                        Add to Cart
                                    </Button>
                                </TouchableOpacity>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                )}
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
         backgroundColor: '#fff'
    },
    card: {
        margin: 16,
        width: 156,
        height: 228,
        flexShrink: 0,
        borderRadius: 8,
        backgroundColor: '#FFF'
    },
    cardImg:{
        width: 92,
        height: 92,
        marginLeft: 20,
        marginRight: 24
    },
    title:{
        marginTop: 8,
        width: 100,
        overflow: 'hidden',
        color: '#151515',
        fontFamily: 'Poppins_500Medium',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
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
    addBtn:{
        marginTop: 17,
        width: 135,
        marginRight: 11,
        backgroundColor: '#DB3C25',
        borderRadius: 50
    },
    btnTxt:{
        color: '#FFF',
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
    }
})
