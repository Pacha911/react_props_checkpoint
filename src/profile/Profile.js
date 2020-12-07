import React from 'react';
import PropTypes from "prop-types";

const Profile = props =>{
    const {fullName , bio , profession , children , handleName} = props;
    return (
        <div>
            <h1>I'm {fullName}</h1>
            <h2>{bio}</h2>
            <h3>And I'm a {profession}</h3>
            {children}
            <br />
        <button onClick={() => handleName(`The user is Houssem`)}>
        Who is the user?
        </button>
        </div>
)
}
//defaultProps
Profile.defaultProps = {
    fullName: 'Sergio Ramos' //:D
};
//propTypes
Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession :PropTypes.string.isRequired
};

export default Profile;
