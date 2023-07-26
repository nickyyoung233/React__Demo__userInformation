import React from "react";

function App() {
  return (
    <div className="card">
      <form className="card form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age(Years)</label>
        <input type="number" min="0" id="age" />
        <button className="button" type="submit">
          Add User
        </button>
      </form>
      <ul className="userList">
        <li className="userItem">Some Stuff</li>
        <li className="userItem">Some Stuff</li>
      </ul>
    </div>
  );
}

export default App;
