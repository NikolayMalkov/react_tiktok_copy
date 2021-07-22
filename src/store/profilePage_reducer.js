const ADD_POST = "ADD-POST";
const SET_USERINFO = "SET-USERINFO";

export const AddPostCreator = () => {
    return {
      type: ADD_POST
    }
  }

export const SetUserInfo = (profileInfo) => {
  return {
    type: SET_USERINFO, profileInfo
  }
}

let initialState = {
    
        Videos: [
          { id: 1, name: "first video", likesCount: "" },
          { id: 2, name: "my cats", likesCount: "" },
          { id: 3, name: "cars", likesCount: "" },
      ],
        profileInfo: null
}


const profilePage_reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST':
            return { ...state, Videos: [...state.Videos, {id: 4, name: "test", likesCount: "5"}]
            } 
        case SET_USERINFO:
            return { ...state, profileInfo: action.profileInfo}
        default: return state;
    }
    }

export default profilePage_reducer;