import React from 'react';


const TodoItem = props => {
    console.log('todo', props)
    return (
      <div className="todo">
        <p className="todoItem">{props.item.item}</p>
      </div>
    )
  };
  
  export default TodoItem


  /* if 'done: true' then classname = "todo done" else classname="todo" */