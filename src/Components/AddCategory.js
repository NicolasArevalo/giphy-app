import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import setCategories from '../GifExpertApp';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');//si se deja sin las comillas queda valiendo undefined y da error xD


    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    };

    const handleSubmit = (e) =>{
        e.preventDefault(); 
        //Permite quitar el comportamiento por defecto 
        //del submit del formulario sque refresca toda la página xD

        if( inputValue.trim().length > 2){
            setCategories( categories => [ inputValue, ...categories ]);
            setInputValue('');
        }

        


    };


    return (

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
            </form>
    );
};

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
