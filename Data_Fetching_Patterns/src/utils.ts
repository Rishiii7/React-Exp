import axios from "axios"
import { useEffect, useState } from "react"
// const baseUrl = 'https://sum-server.100xdevs.com'


// export async function get<T>(url: string): Promise<T> {
//     const response = await axios.get(`${baseUrl}${url}`);
  
//     return response;
//   }

export const useFetchData  = <T,>(url : string) => {
    const [data, setData] = useState<T | undefined>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect( () => {
        
        console.log("Mount Todo component");
        setLoading(true);
        
        const fetchTodo = async () => {
            try {
                const response = await axios.get<T>(url)
                console.log(response.data);
                console.log("In the fetch")
                setData(response.data);
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