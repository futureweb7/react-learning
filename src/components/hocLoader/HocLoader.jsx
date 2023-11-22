/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

const HocLoader = (WrappedComponent) => {
    return (props) => {
       const [loading, setLoading] = useState(true);

       setTimeout(() => {
        setLoading(false);
       }, 3000)

       return(
        <div>
            {loading ? <p> Loading ...</p> : <WrappedComponent {...props}/>}
        </div>
       );
    }
};

export default HocLoader;