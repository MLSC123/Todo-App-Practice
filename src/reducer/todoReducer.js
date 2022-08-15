

export const todoReducer = (initialState=[], action) => {

    switch (action.type) {
        case "Todo Add":
            return [action.payload, ...initialState]
        case "Todo Remove":
            return initialState.filter( (todo) => todo.id !== action.payload )
        //Add more cases, i should have a crud
        default:
            return initialState;
    }

}
