import { View, Text, FlatList, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import useFetch from '../Hooks/useFetch'
import NewDetail from '../Components/NewDetail'
import Icon from 'react-native-vector-icons/FontAwesome5'

const data = [1, 2, 3, 4]
const { width, height } = Dimensions.get('window');
const HomeScreen = () => {

    // const [lan, setLan] = React.useState("en")
    // const [search, setSearch] = React.useState("war")

    // const { data, loading } = useFetch(lan, search)

    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ padding: 15, elevation: 10, backgroundColor: 'white', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>The NEWS <Icon name="newspaper" size={28} color="black" /></Text>
                </View>
                {
                    data.map((item, index) => {
                        return (
                            <NewDetail item={item}></NewDetail>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default HomeScreen