import React, { useReducer } from 'react';

import PedidoReducer from './pedidosReducer';
import PedidoContext from './pedidosContext';

const PedidoState = props => {

    //console.log(firebase);
    //Crear el state inicial 
    const initialState = {
        pedido: []
    }

    //useReducer con dispatch para ejecutar las funciones 
    const [ state, dispatch ] = useReducer(PedidoReducer, initialState);

    return (
        <PedidoContext.Provider
        value={{
            pedido: state.pedido,
            firebase
        }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}


export default PedidoState;