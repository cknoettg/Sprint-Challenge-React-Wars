import React, { useState } from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img`
  opacity: 1;
  padding: 2%;
`;

const Image = props => {
    const [imag, setImag] = useState([]);

    return (
      <ImageStyle src={props.imag} alt="Character Not Loaded"></ImageStyle>
    );
}

export default Image;