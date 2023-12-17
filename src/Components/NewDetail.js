import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const NewDetail = ({ item }) => {
    return (
        <Pressable>
            <View style={{ margin: 10, borderLeftWidth: 1, borderRightWidth: 1, backgroundColor: '#e2e2e2' , elevation:5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>BAŞLIK</Text>
                    <Image style={{ width: 40, height: 40, borderRadius: 40 }} source={{ uri: 'https://www.yerevdekor.com/images_buyuk/f71/duz-duvar-kagidi-siyah-101-51210_13471_1.jpg' }}></Image>
                </View>


                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 18 }}>Description</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default NewDetail