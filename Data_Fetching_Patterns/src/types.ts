// import { get } from "../utils";
export type Todo = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
};

export type Todos = {
    todos: Todo[];
};
export type NotificationData = {
    network: number;
    jobs: number;
    messaging: number;
    notifications: number;
};


