import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [contentList, setContentList] = useState([]);

  //setting the function as a variable to be returned the value of the created div
  
  const renderDivContent = () => {
    <div>
      <p>Hi!</p>
    </div>
  }
  
const addContentToList = () => {
  setContentList(contentList => [...contentList, renderDivContent()]);
}

  return (
    <div className="App">
      <button id="list-creator-button" onclick={GetListCreatorTextBoxContents}>Create a list</button>
      {/** When I click the button, I want the linked function to set its contained div value as... */}
      <input id="list-creator-text-box" type="text"></input>

      <div id="ul-container-div">
        {/** the unordered list needs to go here when the button is clicked */}
      </div>
    </div>
  );
}

export default App;