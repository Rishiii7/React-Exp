import axios from "axios"
import { useEffect, useState } from "react"
// const baseUrl = 'https://sum-server.100xdevs.com'


export async function get<T>(url: string): Promise<T> {
    try {
        const response = await axios.get<T>(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    } finally {
        console.log('Finished fetching data');
    }
}

export const useFetchData  = <T,>(url : string) => {
    const [data, setData] = useState<T | undefined>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect( () => {
        
        console.log("Mount Todo component");
        
        
        const fetchTodo = async () => {
            try {
                setLoading(true);
                const response = await get<T>(url)
                console.log(response);
                console.log("In the fetch")
                setData(response);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
            // await new Promise( () => setTimeout( () => {}, 1000));
            
        }

        fetchTodo();

        // const interval = setInterval(fetchTodo, 5000);

        // return () => {
        //     console.log("unmount Todo component");
        //     clearInterval(interval);
        // }
    }, []);

    return {data, loading};
}