import React from 'react';
import { View, Text, TouchableOpacity, Image,  ScrollView, SafeAreaView, Platform, Animated } from 'react-native';

import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants"

const Dashboard = ({ navigation }) => {
    // Function for render Header //
    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizonatal: SIZES.padding,
                    paddingVertical:SIZES.base,
                    alignItems: 'center'
                }}
            >
                {/* Side Drawer */}
                <TouchableOpacity
                    style={{
                        width:45,
                        height:45,
                        alignItems: 'center',
                        justifyContent: 'centet'
                    }}
                    onPress={() => console.log("Side Drawer")}
                >
                    <Image 
                        source={icons.side_drawer}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.white
                        }}
                    />
                </TouchableOpacity>

                {/* Title */}
                    <View
                        style={{
                            flex : 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                    <Text
                        style={{ 
                            color: COLORS.white,
                            ...FONTS.h3
                        }}
                    >
                        Asia
                    </Text>   
                    </View>

                {/* Profile */}
                <TouchableOpacity
                    onPress={() => console.log("Profile")}
                >
                    <Image 
                        source={images.profile_pic}
                        resizeMode='contain'
                        style={{
                            width:45,
                            height: 45,
                            borderRadius: 35
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }



    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
            {renderHeader()}

            <ScrollView
                contentContainerStyle= {{
                    paddingBottom: Platform.OS === 'ios' ? 40 : 0
                }}
            >
                <View style={{ height: 700}}>
                    {/* Countries */}

                    {/* Places */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Dashboard;