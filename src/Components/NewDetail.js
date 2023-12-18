import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const NewDetail = ({ item }) => {
    //console.log(item.author)
    return (
        <Pressable>
            <View style={{ margin: 10, borderLeftWidth: 1, borderRightWidth: 1, backgroundColor: '#e2e2e2', elevation: 5, padding: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, width: '75%' }}>{item.title}</Text>
                    <Image style={{ width: 50, height: 50, borderRadius: 40, resizeMode: 'center' }} source={{ uri: item.urlToImage }}></Image>
                </View>


                <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 16 }}>{item.description}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default NewDetail