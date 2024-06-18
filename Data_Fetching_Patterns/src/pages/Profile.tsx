import { useCallback, useEffect, useState } from "react";
import Notification from '../components/Notifications';
import TodosComponent from "../components/Todos"
import { NotificationData, Todo, Todos } from "../types";
import { get } from "../utils";
import Loading from "../components/Loading";

type ProfileData = {
    todos : Todo[];
    notifications : NotificationData
}

const useFetchProfileData = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [profileData, setProfileData] = useState<ProfileData | undefined>();

    const fetchProfileState = useCallback ( async () => {

        try {
            setLoading(true);
            const [todosData, notificationData] = await Promise.all([
                get<{todos : Todo[]}>('https://sum-server.100xdevs.com/todos'),
                get<NotificationData>('https://sum-server.100xdevs.com/notifications')
            ]);
            console.log(`todos : => ${JSON.stringify(todosData)}`);
            console.log(`Notifications : => ${JSON.stringify(notificationData)}`);

            setProfileData({todos : todosData.todos, notifications : notificationData})

        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    }, []);


    return {
        loading,
        error,
        profileData,
        fetchProfileState,
    }
}


const Profile = () => {

    const {loading, error, profileData, fetchProfileState} = useFetchProfileData();

    useEffect( () => {
        fetchProfileState();

        const interval = setInterval(fetchProfileState, 5000);

        return () => {
            clearInterval(interval);
        }
    }, [fetchProfileState]);

    if(error) {
        return <div>Something went wrong</div>
    }

    return (
        <>
            {/* <TodosComponent />
            <Notification /> */}
            {
                profileData && (
                    <>
                        <TodosComponent todos={profileData.todos} loading={loading} />
                        <Notification notifications={profileData.notifications} loading={loading}/>
                    </>
                    
                )
            }
        </>
    )
}

export default Profile;