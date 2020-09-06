import React from 'react';

export default (props) => {
    const result = props.textLength > props.minTextLength ? 'Text long enough' : 'Text too short';
    return (
        <p>{result}</p>
    );
};