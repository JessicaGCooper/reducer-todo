import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const TodoList = (props) => { 
    console.log('TodoList Props', props)
    return (
        <TodoListItems className="TodoListItems">
           {props.state.map( item => (
               <TodoItem
               key={item.id} 
               item={item}
               dispatch={props.dispatch}
               />
           ))}
           <ClearButton className="clearButton" onClick={() => props.dispatch({type: "CLEAR_COMPLETED_TODOS"})}>Remove Complete</ClearButton>     
        </TodoListItems>
    );
}
    
export default TodoList;

const TodoListItems = styled.div`
    width: 50%;
    margin-right: 25%;
    margin-left: 25%;
`;

const ClearButton = styled.button`
    width: 50%;
    margin: 10px;
    padding: 15px;
    border-radius: 10px;
    font-size: 1.25rem;
    font-family: 'Montserrat', sans-serif;
    color: #2e8ea0;
    border: 2px solid #2e8ea0;
    margin-bottom: 50px;
`;