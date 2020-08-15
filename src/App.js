import React from "react";
import UserList from "./userList";
import UserDetails from "./userDetails";

function App() {
  return (
    <div>
      <h2>username list: </h2>
      <UserList />
      <hr />
      <h2>user details: </h2>
      <UserDetails />
    </div>
  );
}

export default App;
