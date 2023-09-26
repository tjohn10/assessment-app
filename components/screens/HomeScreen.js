import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {SliderBox} from "react-native-image-slider-box";
import ProductsCarousel from "../ProductsCarousel";

export default function HomeScreen() {
    const images = [
        'https://static.vecteezy.com/system/resources/thumbnails/002/294/859/small/flash-sale-web-banner-design-e-commerce-online-shopping-header-or-footer-banner-free-vector.jpg',
        'https://static.vecteezy.com/system/resources/thumbnails/008/492/840/small/online-store-concept-banner-isometric-style-vector.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qrkmm9xfspYXTSzSvHv6YOF1KJ2N4i4frQ&usqp=CAU'
    ]
    return(
        <View style={styles.container}>
            <View style={{marginTop: 10}}>
                <SliderBox
                    images={images}
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
            <View style={{marginTop: 10, marginLeft: 24, marginRight: 24}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>Most Viewed</Text>
                    <Text>View All</Text>
                </View>
                <View style={{flex: 1}}>
                    <ProductsCarousel />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    }
})
