import axios from "axios";
import React from "react";


const baseUrl = '';



export const useFetch = (search , date) => {

    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const getData = async () => {
        try {
            const data = await axios.get(`https://newsapi.org/v2/everything?q=${search}&from=${date}&to=${date}&sortBy=popularity&apiKey=ca2d967d92ce4b43a5330195a8880bb1`)
            //console.log(data.data.articles)
            setLoading(false)
            setData(data.data.articles)
            return data.data;
        } catch (error) {
            console.log(error)
        }

    }

    React.useEffect(() => {
        getData(search,date)
    }, [search,date])

    return { data, loading , setLoading }
}


export default useFetch;
