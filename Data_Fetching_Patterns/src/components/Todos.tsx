import axios from "axios";
import { useEffect, useState } from "react"

type Todo = {
    id : number;
    tittle : string;
    description : string;
    completed : boolean;
}


const useFetchTodos = () => {
    const [todos, setTodos] = useState<Todo[] | undefined>([]);

    useEffect( () => {
        const fetchTodo = async () => {
            const response = await axios.get('https://sum-server.100xdevs.com/todos');
            console.log(response.data);
            setTodos(response.data.todos);
        }

        fetchTodo();

        const interval = setInterval(fetchTodo, 5000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return todos;
}



const Todos = () => {

    const todos = useFetchTodos();
    
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

export default Todos;