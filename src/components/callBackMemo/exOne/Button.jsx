import React, { memo } from 'react';

const Button = ({handleClick,children}) => {
    console.log(`"🚀 ~ file: Button.jsx:13 ~ Button ~ Button:", ${children}`)
    return (
       <p>
        <button onClick={handleClick}>
            {children}
        </button>
       </p>
    );
};


export default memo(Button);