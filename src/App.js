import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import SignIn from './components/Tabs/LoginTab/SignIn';
import SignUp from './components/Tabs/LoginTab/SignUp';
import Main from './main';


class App extends Component {
  render(){
    return (
      <div>
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/signin"><SignIn></SignIn></Route>
        <Route exact path="/signup"><SignUp></SignUp></Route>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;