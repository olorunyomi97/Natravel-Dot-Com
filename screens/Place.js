import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, Animated } from 'react-native';
import { COLORS, SIZES, FONTS, icons } from "../constants"
import { HeaderBar } from '../component';
import { TextIconButton } from '../component';

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
                <HeaderBar 
                    title=""
                    leftOnPressed={() => navigation.goBack()}
                    right= {false}
                    containerStyle={{
                        marginTop: SIZES.padding * 2
                    }}
                />

                <View 
                    style={{
                        flex: 1,
                        paddingHorizontal: SIZES.padding,
                        justifyContent: 'flex-end',
                        marginBottom: 100
                    }}
                >
                    {/* Name & Ratings */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text style={{color: COLORS.white, ...FONTS.largeTitle}}>{selectedPlace?.name}</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems:'center'
                            }}
                        >
                            <Text style={{marginRight: 5, color: COLORS.white, ...FONTS.h3}}>{selectedPlace?.rate}</Text>
                            <Image
                                source={icons.star}
                                style={{
                                    width:20,
                                    height:20
                                }}
                            />
                        </View>
                    </View>
                    
                    {/* description */}
                    <Text style={{marginTop: SIZES.base, color: COLORS.white, ...FONTS.body3}}>{selectedPlace?.description}</Text>
                    {/* Text Icon Button */}
                    <TextIconButton 
                        label="Book A Flight"
                        icon={icons.aeroplane}
                        customContainerStyle={{
                            marginTop: SIZES.padding
                        }}
                        onPress={() => console.log('Book A Flight')}
                    />
                </View>
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