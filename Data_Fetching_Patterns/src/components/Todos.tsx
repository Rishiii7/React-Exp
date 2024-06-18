// import axios from "axios";
import { useFetchData } from "../utils";

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

const TodosComponent = () => {

    const {data , loading} = useFetchData<Todos | undefined>('https://sum-server.100xdevs.com/todos');
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