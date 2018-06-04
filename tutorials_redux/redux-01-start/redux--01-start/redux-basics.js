const redux = require('redux'); //nodejs synthax

const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducers
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.value
            };
        default:
            return state;
    }
};



// store 
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(()=> {
    console.log('[Subscription]', store.getState());
});

// Dsispatching Action
store.dispatch({
    type: 'INC_COUNTER'
});
store.dispatch({
    type: 'ADD_COUNTER',
    value: 15
});
console.log(store.getState());

