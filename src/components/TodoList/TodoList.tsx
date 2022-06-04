// Don't forget to import the React library
import React from 'react';
import TodoInfo from '../TodoInfo/TodoInfo';
import UserInfo from '../UserInfo/UserInfo';
// import { preparedTodos } from '../../App';

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    },
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  },
}

interface ToDos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: User | null;
}

interface Props {
  todos: ToDos[];
}

const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <UserInfo user={todo.user} />
        <TodoInfo toDo={todo} />
      </li>
    ))}
  </ul>
);

// Add a default export statement for TodoInfo component to use it in the other files
export default TodoList;
