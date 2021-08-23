
const initialState = {
    id: 0,
    firstName: '',
    lastName : '',
    status: {
        loading: false,
        username: "",
        role: "",
        authenticated: false
    }
}

function appReducer ( state = initialState, action){
    switch (action.type){
        case "@profile/authenticate":
            return {
                ...state,status:{
                    loading: true,
                    username: 'Administrator',
                    role: 'admin',
                    authenticated: true
                }
            }
        default:
            return state
    }
}


export default appReducer;