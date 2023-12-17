import axios from "axios";
import React from "react";


const baseUrl = 'https://newsapi.org/v2/everything?q=apple&from=2023-12-16&to=2023-12-16&sortBy=popularity&apiKey=ca2d967d92ce4b43a5330195a8880bb1';



export const useFetch = (search) => {

    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const getData = async () => {
        try {
            const data = await axios.get(baseUrl, {
                params: {
                    search: search
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
