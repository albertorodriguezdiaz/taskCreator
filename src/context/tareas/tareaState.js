import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';

const TareaState = props => {
    const initialState = {
        tareasproyecto: [],
    }

    // Crear dispatch y state
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useReducer(tareaReducer, initialState);

    return(
        <tareaContext.Provider>
            {props.children}
        </tareaContext.Provider>
    )
}
 
export default TareaState;