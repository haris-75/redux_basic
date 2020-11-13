
const initialState = {
    counter: 0,
    result: []
}

const reducer = (state = initialState, action) => { 

    switch(action.type) {
        case 'INCREMENT':
            return{
                ...state,
                counter: state.counter + action.value,
            };
        case 'DECREMENT':
            return{
                ...state,
                counter: state.counter - action.value,
            };
        case 'ADD13':
            return{
                ...state,
                counter: state.counter + action.value,
            }
        case 'SUB17':
            return{
                ...state,
                counter: state.counter - action.value,
            }
        case 'STORERESULT':
            return{
                ...state,
                result: state.result.concat({id: new Date().getTime(), value: state.counter})
            }
        // case 'DELETERESULT':
        //     const updatedArray = state.result.filter((result, index) => index !== id)
        //     return{
        //         ...state,
        //         result: updatedArray
        //     }
    }
    return state;
};
export default reducer;