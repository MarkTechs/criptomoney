import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: arial, Helvetica, sans-serif;

`;

const INFO = styled.p`
    font-size: 18px;
    span {
        font-weight: bold;
    }

`;

const Precio = styled.p`
    font-size: 50px;

    span {
        font-weight: bold;
    }
`;



const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    
    return ( <ResultadoDiv>
        <Precio>El precio es: <span> {resultado.PRICE} </span></Precio>
        <INFO>El precio más alto del día: <span> {resultado.HIGHDAY} </span></INFO>
        <INFO>El precio más bajo del día: <span> {resultado.LOWDAY} </span></INFO>
        <INFO>El precio de variacion 24h: <span> {resultado.CHANGEPCT24HOUR} </span></INFO>
        <INFO>última actualización: <span> {resultado.LASTUPDATE} </span></INFO>
    </ResultadoDiv> );
}
 
export default Cotizacion;