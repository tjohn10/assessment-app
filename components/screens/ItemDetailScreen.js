import React, {useState} from "react";
import {View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions} from "react-native";
import {SliderBox} from "react-native-image-slider-box";
import {Button, Divider, List} from "react-native-paper";

export default function ItemDetailScreen({navigation, route}) {
    const [orderCount, setOrderCount] = useState(1)
    const [expanded, setExpanded] = React.useState(true);
    const [expandedDiet, setExpandedDiet] = React.useState(true);
    const [expandedNutrition, setExpandedNutrition] = React.useState(true);
    const [expandedPrepare, setExpandedPrepare] = React.useState(true);
    const [expandedStorage, setExpandedStorage] = React.useState(true);
    const [expandedExtra, setExpandedExtra] = React.useState(true);
    const handlePress = () => {
        setExpanded(!expanded)
        setExpandedExtra(!expandedExtra)
        setExpandedNutrition(!expandedNutrition)
        setExpandedStorage(!expandedStorage)
        setExpandedDiet(!expandedDiet)
        setExpandedPrepare(!expandedPrepare)
    }
    const increase = () => {
        setOrderCount(orderCount + 1)
    }

    const decrease = () => {
        setOrderCount(orderCount - 1)
    }
    const name = route.params.name
    const uri = route.params.uri
    const subtext = route.params.subtext
    const price = route.params.price
    const state = {
        images: [
            uri,
            uri,
            uri
        ]
    };
    return (
        <ScrollView style={styles.container}>
            <View style={{marginTop: 10}}>
                <SliderBox
                    images={state.images}
                    sliderBoxHeight={304}
                    dotColor="#ffee59"
                    inactiveDotColor="#90A4AE"
                    paginationBoxVerticalPadding={20}
                    autoplay
                    circleLoop
                    resizeMethod={'resize'}
                    resizeMode={'contain'}
                    paginationBoxStyle={{
                        position: "relative",
                        bottom: 0,
                        padding: 0,
                        alignItems: "center",
                        alignSelf: "center",
                        justifyContent: "center",
                        paddingVertical: 10,
                        marginTop: 11
                    }}
                />
            </View>
            <View style={{marginTop: 8, marginLeft: 24, marginRight: 24}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.title}>{name}<Text>{subtext}</Text></Text>
                    <Text style={styles.price}>£{price}</Text>
                </View>
                <Text style={styles.desc}>
                    Rare Eat Puff Puff Mix can be made into a deep-fried dough.
                    They are made from yeast dough, shaped into balls and deep-fried until golden brown.
                    It has a doughnut-like texture but slightly o....Read more
                </Text>
            </View>
            <View style={{marginLeft: 24, marginRight: 24}}>
                <List.Section>
                    <List.Accordion
                        title="Ingredients"
                        titleStyle={styles.listTitle}
                        expanded={expanded}
                        onPress={handlePress}>
                        <Text>Ingredients</Text>
                    </List.Accordion>
                    <Divider/>
                    <List.Accordion
                        title="Nutritional Information"
                        titleStyle={styles.listTitle}
                        expanded={expandedNutrition}
                        onPress={handlePress}>
                        <Text>Ingredients</Text>
                    </List.Accordion>
                    <Divider/>
                    <List.Accordion
                        title="How to Prepare"
                        titleStyle={styles.listTitle}
                        expanded={expandedPrepare}
                        onPress={handlePress}>
                        <Text>How to Prepare</Text>
                    </List.Accordion>
                    <Divider/>
                    <List.Accordion
                        title="Dietary Information"
                        titleStyle={styles.listTitle}
                        expanded={expandedDiet}
                        onPress={handlePress}>
                        <Text>Dietary Information</Text>
                    </List.Accordion>
                    <Divider/>
                    <List.Accordion
                        title="Storage Information"
                        titleStyle={styles.listTitle}
                        expanded={expandedStorage}
                        onPress={handlePress}>
                        <Text>Storage Information</Text>
                    </List.Accordion>
                    <Divider/>
                    <List.Accordion
                        title="Extra Info"
                        titleStyle={styles.listTitle}
                        expanded={expandedExtra}
                        onPress={handlePress}>
                        <Text>Extra Info</Text>
                    </List.Accordion>
                    <Divider/>
                </List.Section>
            </View>
            <View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 40,
                    marginRight: 24,
                    marginLeft: 24,
                }}>
                    <Button mode="outlined" icon="minus"
                            style={styles.countButtons}
                            labelStyle={{color: '#E1E5E9', fontSize: 24, marginLeft: 10}}
                            onPress={decrease}/>
                    <Text style={styles.count}>{orderCount}</Text>
                    <Button mode="outlined" icon="plus" style={styles.countButtons}
                            labelStyle={{color: '#000', fontSize: 24, marginLeft: 10}} onPress={increase} />
                </View>
            </View>
            <View style={{margin: 24}}>
                <TouchableOpacity>
                    <Button
                        style={styles.addBtn}
                        onPress={() => navigation.navigate('Cart')}
                        labelStyle={{
                            height: 21,
                            color: '#fff',
                            fontSize: 14,
                            fontStyle: 'normal',
                            fontWeight: '500'}}
                    >
                        Add to Cart
                    </Button>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Button
                        mode="outlined"
                        style={styles.checkoutBtn}
                        labelStyle={{
                            color: '#DB3C25',
                            fontSize: 14,
                            fontStyle: 'normal',
                            fontWeight: '500'}}
                    >
                        Subscribe to a Plan
                    </Button>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        color: '#151515',
        fontFamily: 'Poppins_500Medium',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        letterSpacing: 0.42
    },
    price: {
        color: '#DB3C25',
        fontFamily: 'Poppins_500Medium',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        letterSpacing: 0.42
    },
    desc: {
        color: '#4A4A4A',
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
        letterSpacing: 0.36
    },
    listTitle: {
        color: '#151515',
        fontFamily: 'Poppins_500Medium',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        letterSpacing: 0.42
    },
    countButtons: {
        borderColor: '#e1e1e1',
        borderStyle: 'solid',
        borderWidth: 1,
        minWidth: 48,
        minHeight: 48,
        flexShrink: 0,
        borderRadius: 6,
        backgroundColor: '#fff'
    },
    count: {
        marginTop: 10,
        color: '#131313',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '600',
        letterSpacing: 0.42
    },
    addBtn:{
        width: Dimensions.get('screen').width - 48,
        marginBottom: 32,
        height: 48,
        padding: 8,
        borderRadius: 50,
        backgroundColor: '#DB3C25'
    }
})
