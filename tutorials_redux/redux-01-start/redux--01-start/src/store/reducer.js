const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_5 = 'ADD_5';
const SUBTRACT_5 = 'SUBTRACT_5';
const STORE_RESULT = 'STORE_RESULT';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case ADD_5:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case SUBTRACT_5:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        default:
            return state;
    }

}


export default reducer;