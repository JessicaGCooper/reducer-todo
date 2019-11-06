

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

        case "TOGGLE_TODO_STATUS":
            return state.map( el => {
                console.log('action.payload', action.payload)
                if (el.id === action.payload) {
                return {...el, completed: !el.completed}
            } else { 
                return el;
              }
            });
            
        case "CLEAR_COMPLETED_TODOS":
            return state.filter(el => {
                return el.completed === false
            })
        default:
            return state;
    }
}
