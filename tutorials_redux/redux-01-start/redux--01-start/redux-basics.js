const redux = require('redux'); //nodejs synthax

const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducers
const rootReducer = (state = initialState, action) => {
    return state;
};

// store 
const store = createStore(rootReducer);
console.log(store.getState());



// Dsispatching Action

// Subscription