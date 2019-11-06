import React, { useState } from 'react'
import styled from 'styled-components';



const InputForm = props => {
    
    const [listItem, setListItem] = useState("")


    const handleSubmit = event => {
        event.preventDefault();
        console.log('Its working')
        props.dispatch({ type: "ADD_ITEM", payload: listItem})
      }

    const handleChanges = event => {
        console.log("Value", event.target.value)
        setListItem(event.target.value);
    };


    return (
        <FormContainer onSubmit={handleSubmit}>  
        <LabelContainer>
            <LabelInput htmlFor="listItem">Add Item:</LabelInput>
        </LabelContainer>
        <AddObstacleInput
        type="text"
        name="newItem"
        id="newItem"
        placeholder="add item"
        value={listItem}
        onChange={handleChanges}
        />
        <AddObstacle type='submit' className="addObstacle">Add Item</AddObstacle>
    </FormContainer>
    )
}

export default InputForm

const AddObstacle = styled.button`
    width: 40%;
    margin: 10px;
    padding: 15px;
    border-radius: 10px;
    font-size: 1.25rem;
    font-family: 'Montserrat', sans-serif;
    color: #2e8ea0;
    border: 2px solid #2e8ea0;
    font-weight: bolder;
`;

const FormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
`;

const LabelContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
`;

const LabelInput = styled.label`
    width: 100%;
    margin-right: 5px;
    padding: 15px;
    font-size: 1.25rem;
    font-family: 'Montserrat', sans-serif;
    color: #3e7d20;
    text-align: right;
`;

const AddObstacleInput = styled.input`
    width: 40%;
    margin: 10px;
    padding: 15px;
    border-radius: 10px;
    font-size: 1.25rem;
    font-family: 'Montserrat', sans-serif;
    color: #2e8ea0;
    border: 2px solid #2e8ea0;
`;