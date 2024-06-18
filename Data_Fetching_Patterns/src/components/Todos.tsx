// import axios from "axios";
import { useFetchData } from "../utils";
import Loading from "./Loading";

// import { get } from "../utils";

type Todo = {
    id : number;
    title : string;
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

    // if (loading) {
    //     console.log("in the loading ");
    //     return (
    //         <>
    //             <Loading /> 
    //         </>
    //     )
    // }
    

    return (
        <>
            <div className="mt-10">
                <h1>Todos</h1>
                {
                    loading ? <Loading /> : 
                    <ul className="mt-2">
                        {todos?.map((todo, ind) => (
                            <li key={ind} className="mt-2">
                                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                    {todo.title}<br></br>
                                    {todo.description}
                                </span>
                            </li>
                            ))}
                    </ul>
                }
            </div>
        </>
    );
}

export default TodosComponent;