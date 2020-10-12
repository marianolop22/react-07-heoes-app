import { useState } from "react";


/**
 * Este custom Hook, sirve para tratar los campos de un formulario.
 * 
 * @param {*} initialState El estado inicial
 * @returns Retorna el Objeto Actualizado
 */
export const useForm = ( initialState={} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues ( initialState );
    };

    const handleInputChange = ({target}) => {
        
        setValues({
            ...values,
            [target.name]: target.value
        });
    };

    return [values, handleInputChange, reset];

};