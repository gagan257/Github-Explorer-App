import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const UserCard = ({ user }) => {
    return ( 
    <div className="card">
        <div className="card-body text-center">
            <img src={user.avatar_url} />
            <h1>{user.name}</h1>
            <p>{user.company}</p>
            <p>{user.bio}</p>
        </div>
    </div>
    );
};
export default UserCard;