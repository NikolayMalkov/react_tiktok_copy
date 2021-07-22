const FOLLOW_TOGGLE = "FOLLOW-TOGGLE";
const SET_USERS = "SET-USERS";
const SET_USERSPAGE = "SET-USERSPAGE";
const TOTAL_COUNT = "TOTAL-COUNT";
const TOGGLE_FETCH = "TOGGLE-FETCH"

// Action creators
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

 export const SetUsersPage = (CurrentPage) => {
    return {
      type: SET_USERSPAGE, CurrentPage
    }
 } 

 export const GetTotalCount = (TotalCount) => {
  return {
    type: TOTAL_COUNT, count: TotalCount
  }
} 

 export const ToggleFetching = (isFetching) => {
   return {
     type: TOGGLE_FETCH, isFetching
   }
 }

//Thunk creators
 


let initialState = {
    
        Users: [],
        UsersTotalCount: 0,
        PageSize: 5,
        CurrentPage: 1,
        isFetching: false 
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
              ...state, Users: action.Users
          }
        case SET_USERSPAGE:
          return {
            ...state, CurrentPage: action.CurrentPage
          }
        case TOTAL_COUNT:
          return {
            ...state, UsersTotalCount: action.count
          }
        case TOGGLE_FETCH:
          return {
            ...state, isFetching: action.isFetching
          }
            
        default: return state;
    }
    }

export default usersPage_reducer;