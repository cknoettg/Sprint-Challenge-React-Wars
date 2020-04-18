import React, { useState } from 'react';

const Name = props => {
    const [name, setName] = useState([]);

    return (
      <h3>{props.name}</h3>
    );
}

export default Name;