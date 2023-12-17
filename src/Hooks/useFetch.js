import axios from "axios";
import React from "react";


const baseUrl = 'https://news67.p.rapidapi.com/v2/topic-search';



export const useFetch = (lan, search) => {

    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const getData = async () => {
        try {
            const data = await axios.get(baseUrl, {
                params: {
                    languages: lan,
                    search: search
                },
                headers: {
                    'X-RapidAPI-Key': '079bd4e1cfmshd0eea7848348498p1712dejsn78a10cd19614',
                    'X-RapidAPI-Host': 'news67.p.rapidapi.com'
                }
            })
            console.log(data.data)
            setLoading(false)
            setData(data.data)
            return data.data;
        } catch (error) {
            console.log(error)
        }

    }

    React.useEffect(() => {
        getData(lan, search)
    }, [search])

    return { data, loading }
}


export default useFetch;
