import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  const profileStyle = {
    border: '1px solid black',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: '5px',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    margin: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={profileStyle}>
      {children && <div style={imageStyle}>{children}</div>}
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <button style={buttonStyle} onClick={handleName}>
        Click me
      </button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'Majdi Boughaba',
  bio: 'Web developer',
  profession: 'Student',
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.element,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
