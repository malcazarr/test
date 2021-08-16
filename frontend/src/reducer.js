
const initialState = {
    components: [
        {
            id: 1,
            name: 'Authentication',
            state: {
                show: true,
                username: "",
                role: ""
            }
        },{
            id: 2,
            name: 'Home',
            state: {
                show: true,
                username: "",
                role: ""
            }
        }
    ]
}

function appReducer ( state = initialState, action){

    console.log("ENTRANDO A APP REDUCER: ")
    console.log(action) 
    if (action.type === "TEST"){
        console.log("dispatch test")
        state.components[0].show = true;
        initialState = state;
        console.log(initialState)

    }

    return state;
}


export default appReducer;