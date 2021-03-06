import React from 'react';

const User = ({ users }) => {
  return (
    <ul>
      {Object.keys(users).map(id => (
        <li key={id}>{users[id]}</li>
      ))}
    </ul>
  );
};
export default User;
