// import axios from "axios";
import { Todos, Todo } from "../types";
import { useFetchData } from "../utils";
import Loading from "./Loading";

const TodosComponent = ({todos, loading} : {todos:Todo[], loading:boolean}) => {

    // const {data , loading} = useFetchData<Todos | undefined>('https://sum-server.100xdevs.com/todos');
    // console.log(data);
    // const todos = data?.todos;

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