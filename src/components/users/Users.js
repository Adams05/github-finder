import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GitHubContext from '../../context/github/gitHubContext';

const Users = () => {
  const githubContext = useContext(GitHubContext);

  const { loading, users } = githubContext;

  // If loading then return spinner component
  if (loading) {
    return <Spinner />;
  } else {
    // Map through users array and output list of users.
    // User parameter in map function represents one user from state.
    // Pass user as a prop to UserItem
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
