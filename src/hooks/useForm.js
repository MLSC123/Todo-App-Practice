import React, { useState } from 'react'

export const useForm = (initialState={}) => {

    const [formState, setFormState] = useState(initialState);

    const onSubmit = (e) => {
        e.preventDefault();
        //console.log(formState);
        onResetForm();
        
    }
    
    const onInputChange = (e) => {
        //console.log(e.target);
        const {value, name} = e.target;
        setFormState({
            ...formState, 
            [name]: value
        })
        
    }

    const onResetForm = () => {
        setFormState(initialState);
    }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    onSubmit
  }
}
