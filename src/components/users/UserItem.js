import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// props are passed into UserItem since this is no longer a class component.
// User prop is being passed in from User component.
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // Destructuring to avoid using this.props

  // Dynamically pull data from Users state
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        {/* Pass userlogin to url */}
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

// Add user to proptypes
// User prop is an object and is required.
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
