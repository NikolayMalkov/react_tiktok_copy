import dialogsPage_reducer from "./dialogsPage_reducer";
import profilePage_reducer from "./profilePage_reducer";

let reRender = () => {

}

let State = {

  profilePage: {
    Videos: [
      { id: 1, name: "first video", likesCount: "" },
      { id: 2, name: "my cats", likesCount: "" },
      { id: 3, name: "cars", likesCount: "" },
  ],
  },

  dialogsPage: {
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
  },
  


  dispatch(action) { 
    
    profilePage_reducer(this.profilePage, action);
    dialogsPage_reducer(this.dialogsPage, action);
  },

  subscribe(observer)  {
    reRender = observer;
  }

}


 




export default State;