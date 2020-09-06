import React from 'react';

export default (props) => {
    const validationMessage = props.textLength >= props.minTextLength ? 'Text long enough' : 'Text too short';
    return (
        <p>{validationMessage}</p>
    );
};