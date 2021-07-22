const LOGIN = "LOGIN";


export const SetUserLogin = (userId, email, login) => {
    return {
      type: LOGIN, data: {userId, email, login}
    }
}

let initialState = {
    
        userId: null,
        email: null,
        login: null
}


const auth_reducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            return {
              ...state, ...action.data
            }
        
            
        default: return state;
    }
    }

export default auth_reducer;