import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from './pages'

function App() {
   return (
      <Router>
         <div className={"container"}>
            <Route path="/" exact component={LoginPage}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/signup" exact component={SignUpPage}/>
         </div>
      </Router>
   )
}

export default App;
