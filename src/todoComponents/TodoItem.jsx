import React, { useEffect, useState } from 'react'
import { getImages } from '../https/getImages';
export const TodoItem = ({stateReducer, quitTodo}) => {

  const [dataUrl, setDataUrl] = useState("");
  
  useEffect(() => {
    getImages(stateReducer.description).then( ({url}) => setDataUrl( url ));

  }, [stateReducer])
  

  return (
    <>
        <div className='card mb-3' >
            <h5 className='description'> {stateReducer.description} </h5>
            <img src={dataUrl} alt="gif for this task" />
            <button 
                className='btn btn-danger' 
                onClick={ () => quitTodo(stateReducer.id) }
            > Delete </button>
        </div>
    </>
  )
}
