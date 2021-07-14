const UPDATE_MESSAGE = "UPDATE-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";


export const UpdateMessageCreator = (body) => {
  return {
    type: UPDATE_MESSAGE, body: body
  }
}

export const AddSendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  }
}

let initialState = {
  Dialogs: [
    { id: 1, name: "Nikolay" },
    { id: 2, name: "Katya" },
    { id: 3, name: "Thomas" }
],
  messages: [
    { id: 1, msgtext: "Hello world!" },
    { id: 2, msgtext: "Я пукаю" },
    { id: 3, msgtext: "KEK" },
],
  newMessage: ""
}

const dialogsPage_reducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: 
          let body = state.newMessage;
            return { ...state, newMessage: "",
              messages: [...state.messages, {id: 4, msgtext: body}]
            }
        case UPDATE_MESSAGE:
            state.newMessage = action.body;
            return state;
        default: return state;
    };

}

export default dialogsPage_reducer;