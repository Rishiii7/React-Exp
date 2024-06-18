import axios from "axios";
import { useEffect, useState } from "react"
// import { get } from "../utils";

type Todo = {
    id : number;
    tittle : string;
    description : string;
    completed : boolean;
}

type Todos = {
    todos : Todo[];
}

const useFetchTodos  = <T,>(url : string) => {
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

        const interval = setInterval(fetchTodo, 5000);

        return () => {
            console.log("unmount Todo component");
            clearInterval(interval);
        }
    }, []);

    return {data, loading};
}



const TodosComponent = () => {

    const {data , loading} = useFetchTodos<Todos>('https://sum-server.100xdevs.com/todos');
    console.log(data);
    const todos = data?.todos;

    if (loading) {
        console.log("in the loading ");
        return (
            <>
                <h1>Loading...</h1> 
            </>
        )
    }
    

    return (
        <>
            <div>
                <h1>Todos</h1>
                <ul>
                    {todos?.map((todo, ind) => (
                        <li key={ind}>
                            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                {todo.tittle}
                                {todo.description}
                            </span>
                        </li>
                        ))}
                </ul>
            </div>
        </>
    );
}

export default TodosComponent;