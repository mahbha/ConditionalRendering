import React from "react";
import Login from "./Login";

var isLoggedIn = true;

function App() {
  return (
    <div className="container">
      {
        isLoggedIn === true ? <h1>Hello</h1> : <Login />
        //(isLoggedIn === true) ? <h1>Hello</h1> : null
        //isLoggedIn === true && <h1>Hello</h1>
      }
    </div>
  );
}

export default App;
