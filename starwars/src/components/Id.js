import React, { useState } from 'react';

const Id = props => {
    const [id, setId] = useState([]);

    return (
      <p>ID: {props.id}</p>
    );
}

export default Id;