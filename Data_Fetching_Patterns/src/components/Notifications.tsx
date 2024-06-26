import { NotificationData } from '../types';
import { useFetchData } from "../utils";
import Loading from './Loading';

const Notification = ({notifications , loading} : {notifications : NotificationData, loading:boolean}) => {
    // const {data, loading} = useFetchData<NotificationData | undefined>('https://sum-server.100xdevs.com/notifications');
    const data = notifications

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