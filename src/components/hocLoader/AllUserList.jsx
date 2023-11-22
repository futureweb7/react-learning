import React from 'react';
import HocLoader from './HocLoader';
import Users from './Users';

const AllUserList = () => {
    const NewUserList = HocLoader(Users);
    return (
        <div>
            <NewUserList/>
        </div>
    );
};

export default AllUserList;