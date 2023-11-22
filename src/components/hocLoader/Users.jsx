import React from 'react';

const Users = () => {
    const userlist = {
        name:"robin",
        email: "robin@gmail.com"
    }
    return (
        <div>
            <ol>
                <li>Name: {userlist.name}</li>
                <li>Email: {userlist.email}</li>
            </ol>
        </div>
    );
};

export default Users;