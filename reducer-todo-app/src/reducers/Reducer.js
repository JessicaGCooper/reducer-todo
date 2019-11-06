import React from 'react'

export const initialState = [
        {
        item: 'Avoid Crocodiles',
        completed: false,
        id: 1522517084378
    }
]


export const appReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const newTodo = { 
            item: action.payload, 
            id: Date.now(), 
            completed: false 
        };
            return [...state, newTodo];
        default:
            return state;
    }
}
