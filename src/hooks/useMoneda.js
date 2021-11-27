import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';


const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 2rem;
    display: block;
    
    
    
`;

const Select = styled.select`
    width: 100%;
    font-size: 1.2rem;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
`;




const useMoneda = (label, stateInicial, opciones) => {
    //manejar el state

    const [state, actualizarState] = useState();
    
    
    const seleccionar = () => (

        <Fragment>
            <Label>Moneda </Label>
              <Select onChange={ e => actualizarState(e.target.value)} value={state}>
            
                    <option value=""> -- Seleccione -- </option>
                    {opciones.map(opcion => (
                        <option key={opcion.codigo}  value={opcion.codigo}>{opcion.nombre}</option>
                    ))}
              </Select>
            
        </Fragment>

    );
    return [state, seleccionar,actualizarState];
}

export default useMoneda;