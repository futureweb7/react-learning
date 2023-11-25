import React, { memo } from 'react';

const Title = ({title, count}) => {
    console.log(`"🚀 ~ file: Title.js:8 ~ Title ~ Title:", ${title}`)
    return (
        <p> {title} counter gives {count}</p>
    );
};

export default memo(Title);