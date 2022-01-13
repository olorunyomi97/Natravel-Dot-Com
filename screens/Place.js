import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, Animated } from 'react-native';
import { COLORS, SIZES, FONTS, icons } from "../constants"


const Place = ({navigation, route}) => {

        const [selectedPlace, setSelectedPlace] = React.useState(null);
    React.useEffect(() => {
        let {selectedPlace} = route.params;
        setSelectedPlace(selectedPlace)
    }, [])

    // Function For Selected Place
    function renderPlace() {
        return (
            <ImageBackground
                source={selectedPlace?.image}
                style={{
                    width:'100%',
                    height:'100%'
                }}
            >

            </ImageBackground>
        )
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {renderPlace()}
        </View>
    )
}

export default Place;