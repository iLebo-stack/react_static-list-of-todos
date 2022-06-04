// Don't forget to import the React library
import React from 'react';

// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`

interface ToDo {
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  toDo: ToDo;
}

const TodoInfo: React.FC<Props> = ({ toDo }) => (
  <div>
    <p data-cy="title">{toDo.title}</p>
    <p data-cy="status">{toDo.completed}</p>
    <p>{toDo.user}</p>
  </div>
);

// Add a default export statement for TodoInfo component to use it in the other files

export default TodoInfo;
