import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "@fontsource/nunito"
import reportWebVitals from './reportWebVitals';

let Videos = [
  { id: 1, name: "Nikolay" },
  { id: 2, name: "Katya" },
  { id: 3, name: "Thomas" }
]

let Dialogs = [
  { id: 1, name: "Nikolay" },
  { id: 2, name: "Katya" },
  { id: 3, name: "Thomas" }
]

let messages = [

  { id: 1, msgtext: "Hello world!" },
  { id: 2, msgtext: "Я пукаю" },
  { id: 3, msgtext: "KEK" },

]

ReactDOM.render(
  
  <React.StrictMode>
    
    <App Videos={Videos} Dialogs={Dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
