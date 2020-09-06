import React from 'react';

export default (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.userName} />
        </div>
    )
}