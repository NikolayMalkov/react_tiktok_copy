const FOLLOW_TOGGLE = "FOLLOW-TOGGLE";
const SET_USERS = "SET-USERS";

export const ToggleFollowAC = (userId) => {
    return {
      type: FOLLOW_TOGGLE, userId
    }
  }
export const SetUsers = (Users) => {
    return {
      type: SET_USERS, Users
    }
  }

let initialState = {
    
        Users: [],
}


const usersPage_reducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_TOGGLE:
            return { ...state, 
              Users: state.Users.map( u => { 
                if (u.id === action.userId) {
                  return {...u, followed: !u.followed }
                }
                return u;
               } ) 
              }
        case SET_USERS:
          return {
              ...state, Users: [...state.Users, ...action.Users]
          }
            
        default: return state;
    }
    }

export default usersPage_reducer;