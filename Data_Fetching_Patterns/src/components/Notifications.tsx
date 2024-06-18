import { useFetchData } from "../utils";
import Loading from './Loading';

type Notification = {
    network : number;
    jobs : number;
    messaging : number;
    notifications : number
}


const Notification = () => {
    const {data, loading} = useFetchData<Notification | undefined>('https://sum-server.100xdevs.com/notifications');

    // if(loading) {
    //     return (
    //         <>
    //             <Loading />
    //         </>
    //     )
    // }

    return (
        <>
        <div className="mt-10">
            <h1>Notification</h1>
            {
                loading ? <Loading /> : 
                    <ul>
                        <li>jobs : { data?.jobs}</li>
                        <li> messaging : { data?.messaging}</li>
                        <li>network : { data?.network}</li>
                        <li>notifications : { data?.notifications}</li>
                    </ul>
            } 
        </div>  
        </>
    )
}

export default Notification;