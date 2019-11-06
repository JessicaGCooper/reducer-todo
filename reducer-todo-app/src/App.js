import React, { useReducer } from 'react';
import './App.css';
import styled from 'styled-components';
import { appReducer, initialState } from './reducers/Reducer'

import InputForm from './components/InputForm'
import TodoList from './components/TodoList'

function App() {

const [state, dispatch] = useReducer(appReducer, initialState);

    return (
      <AppContainer className="AppContainer">
        <div className='AppTop'>
          <section className='listHeader'>
            <ListHeading className="listHeading">Goals and Reminders</ListHeading>
            <ListSubHeading>Don't forget to prioritize!</ListSubHeading>
            <Message>You can accomplish anything with money, talent, charisma, althetic prowess, and animal taming skills!</Message>
          </section>
          <section className="InputFormContainer">
            <InputForm 
              state={state}
              dispatch={dispatch}/>
          </section>
          <section className='TodoList Container'>      
            <TodoList 
              state={state}
              dispatch={dispatch}
            /> 
          </section> 
        </div>
    </AppContainer>
    );
}

export default App;

const AppContainer = styled.div`
width: 80%;
margin-right: 10%;
margin-left: 10%;
`;

const ListHeading = styled.h2`
color: #2d6071;
font-size: 2.25rem;
padding: 10px;
text-align: center;
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
margin-top: 20px;
`;

const ListSubHeading = styled.h3`
color: #2d6071;
font-size: 1.5rem;
padding: 10px;
text-align: center;
font-family: 'Montserrat', sans-serif;`;

const Message = styled.h4`
color: #2d6071;
font-size: 1rem;
padding: 10px;
text-align: center;
font-family: 'Montserrat', sans-serif;
`;
