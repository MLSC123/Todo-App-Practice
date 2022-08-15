import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({stateReducer, quitTodo}) => {

  return (
    <>
        {
            stateReducer.map( (stateReducer) => 
                <TodoItem  
                    key={stateReducer.id} 
                    stateReducer={stateReducer}  
                    quitTodo = {quitTodo}

                />
            )
        }
    </>
  )
}
