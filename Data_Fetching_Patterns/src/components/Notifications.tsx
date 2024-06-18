import { useFetchData } from "../utils";

type Notification = {
    network : number;
    jobs : number;
    messaging : number;
    notifications : number
}


const Notification = () => {
    const {data, loading} = useFetchData<Notification | undefined>('https://sum-server.100xdevs.com/notifications');

    if(loading) {
        return (
            <>
                <h1>Loading ....</h1>
            </>
        )
    }

    return (
        <>
        <h1>Notification</h1>
        {
            loading ? <h1>Loading ....</h1> : 
                <ul>
                    <li>jobs : { data?.jobs}</li>
                    <li> messaging : { data?.messaging}</li>
                    <li>network : { data?.network}</li>
                    <li>notifications : { data?.notifications}</li>
                </ul>
        }   
        </>
    )
}

export default Notification;