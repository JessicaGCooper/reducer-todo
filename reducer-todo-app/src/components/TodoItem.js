import React from 'react';
import './Todo.css';


const TodoItem = props => {
    console.log('todo props', props)

   

    return (
      <div className={`todo${props.item.completed ? 'Completed' : ''}`} 
      onClick={() => props.dispatch({ type: "TOGGLE_TODO_STATUS", payload: props.item.id })}
      >
        <p className="todoItem">{props.item.item}</p>
      </div>
    )
  };
  
  export default TodoItem


