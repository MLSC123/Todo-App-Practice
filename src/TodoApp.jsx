import React, { useEffect, useReducer, useState } from 'react'
import { useForm } from './hooks/useForm'
import { todoReducer } from './reducer/todoReducer';
import { AddTodo } from './todoComponents/AddTodo';
import { TodoList } from './todoComponents/TodoList';

export const TodoApp = () => {

    const {onResetForm ,description, onInputChange} = useForm({
        description: ""
    });
    
    const initialState = [
    ];
    
    const [stateReducer, dispatch] = useReducer(todoReducer, initialState);
    

    const newTodo = (newTodoReceived) => {

        const action = {
            type: "Todo Add",
            payload: newTodoReceived
        }

        dispatch(action);
        
    }
    const quitTodo = (id) =>{
        const action = {
            type: "Todo Remove",
            payload: id
        }
        dispatch(action);
    } 

    
    const onFormSubmit = (e) => {
        e.preventDefault();
        
        const newTodoCreated = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }
        newTodo(newTodoCreated);
        onResetForm();
    }
    

  return (
    <>  
        <h1>Todo App</h1>


        
        <div className='row'>

            <div className='col-5'>
                <h2>Add TODOS</h2>

                <AddTodo onFormSubmit={onFormSubmit} description={description} onInputChange={onInputChange} />
            </div>

            <div className='col-7'>

                <TodoList quitTodo = {quitTodo} stateReducer={stateReducer}  />

            </div>

            

        </div>
        

    </>
  )
}
