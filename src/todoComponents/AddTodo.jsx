import React from 'react'

export const AddTodo = ({onFormSubmit, description, onInputChange}) => {
  return (
    <form onSubmit={onFormSubmit}>
        <input 
            type="text" 
            className='form-control'
            placeholder='Write your next task'
            name='description'
            value={description}
            onChange={onInputChange}
            autoComplete="off"
            //value y onchange
        />
        <button
            type='submit'
            className='btn btn-primary mt-2'
        >Add</button>
    </form>
  )
}
