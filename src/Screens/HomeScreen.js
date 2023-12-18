import { View, Text, FlatList, Dimensions, ScrollView, ActivityIndicator, Pressable, TextInput } from 'react-native'
import React from 'react'
import useFetch from '../Hooks/useFetch'
import { debounce } from 'lodash'
import NewDetail from '../Components/NewDetail'
import Icon from 'react-native-vector-icons/FontAwesome5'


const { width, height } = Dimensions.get('window');

const HomeScreen = () => {

    const [search, setSearch] = React.useState("peace")
    const [date, setDate] = React.useState((new Date(Date.now())).getFullYear() + "-" + (new Date(Date.now())).getMonth() + "-" + (new Date(Date.now())).getDate())

    const handleSearch = (text) => {
        if (text) {
            setSearch(text)
        }
    };

    const handleTextDebounce = React.useCallback(debounce(handleSearch, 400), [])

    const { data, loading, setLoading } = useFetch(search, date)

    if (loading) {
        return (
            <ActivityIndicator size={'large'} style={{ alignSelf: 'center', height: '100%' }}></ActivityIndicator>
        )
    }

    const updateDate = () => {
        setDate((new Date(Date.now())).getFullYear() + "-" + (new Date(Date.now())).getMonth() + "-" + (new Date(Date.now())).getDate())
        console.log(date)
    }


    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ padding: 15, elevation: 10, backgroundColor: 'white', alignItems: 'center', gap: 5 }}>
                    <Pressable onPress={updateDate}>
                        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>The NEWS <Icon name="newspaper" size={28} color="black" /></Text>
                    </Pressable>
                    <TextInput onChangeText={handleTextDebounce} style={{ width: '50%', alignSelf: 'center', padding: 5, borderWidth: .5, borderRadius: 15 }}></TextInput>
                </View>
                {
                    !loading &&
                    data.map((item, index) => {
                        return (
                            <NewDetail key={index} item={item}></NewDetail>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default HomeScreen