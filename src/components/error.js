import React from 'react';
import styled from '@emotion/styled';


const MensajeError = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #FFF;
    text-transform: uppercase;
    font-size: 30px;
    font-family: 'Bebas Neue', cursive;
    font-weight: bold;
`;


const Error = ({mensaje}) => {
    return (
        <MensajeError>{mensaje}</MensajeError>
      );
}
 
export default Error;