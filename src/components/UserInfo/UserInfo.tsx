// Don't forget to import the React library
import React from 'react';
// Create a `UserInfo` component accepting a `user` object and use it to render
// a `todo.user` in the list with some styling. (Show at least a `name` and an
// `email` of the `user`)

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  user: User | null;
}

const UserInfo: React.FC<Props> = ({ user }) => (
  <div>
    <p data-cy="username">{user && user.name}</p>
    <p data-cy="email">{user && user.email}</p>
  </div>
);

// Add a default export statement for UserInfo component to use it in the other files

export default UserInfo;
