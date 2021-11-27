import React,{useEffect} from 'react';
import {useState} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import useMoneda from '../hooks/useMoneda';
import useCriptoMoneda from '../hooks/useCriptoMoneda';
import Error from './error';



const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    border-radius: 10px;
    width: 100%;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {  
        background-color: #5D67E0;
        cursor: pointer;
    }

`;

const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {
    // utilizamos useMoneda para obtener el state y el dispatch.

    const [listadoCriptoMonedas, guardarCriptoMonedas] = useState([]);
    
    const Monedas = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' },
        { codigo: 'CRC', nombre: 'Colón Costarricense' },
    ];

    const [moneda, SelectMonedas, ] = useMoneda('Eliga su moneda', '',Monedas);

    const [criptomoneda, SelectCripto, ] = useCriptoMoneda('Eliga su CriptoMoneda', '',listadoCriptoMonedas);

    const [error, guardarError] = useState(false);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const resultado = await axios.get(url);

            guardarCriptoMonedas(resultado.data.Data);
            console.log(resultado);
        }
        consultarAPI();
    }
    , []);
    


    // validar que los campos no esten vacios
    const cotizarMoneda = e => {
        e.preventDefault();

        // validar que ambos campos esten llenos
        if (moneda === '' || criptomoneda === '') {
            guardarError(true);
            return;
        }   
        
        guardarError(false);

        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
    }
     
    return (
        <form onSubmit={cotizarMoneda}>  

        {error  ?  <Error mensaje='Todos los campos son obligatorios' /> : null}
                <SelectMonedas/>  

                <SelectCripto />

                <Boton 
                    type="submit"
                    value="calcular"
                ></Boton>
        </form>
      );
}
 
export default Formulario;