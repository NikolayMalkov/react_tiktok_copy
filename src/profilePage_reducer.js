const ADD_POST = "ADD-POST";

export const AddPostCreator = () => {
    return {
      type: ADD_POST
    }
  }

let initialState = {
    
        Videos: [
          { id: 1, name: "first video", likesCount: "" },
          { id: 2, name: "my cats", likesCount: "" },
          { id: 3, name: "cars", likesCount: "" },
      ],
}


const profilePage_reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST':
            return { ...state, Videos: [...state.Videos, {id: 4, name: "test", likesCount: "5"}]
            } 
        default: return state;
    }
    }

export default profilePage_reducer;