const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_5 = 'ADD_5';
const SUBTRACT_5 = 'SUBTRACT_5';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                counter: state.counter - 1
            }
        case ADD_5:
            return {
                counter: state.counter + action.value
            }
        case SUBTRACT_5:
            return {
                counter: state.counter - action.value
            }
        default:
            return state;
    }

}


export default reducer;