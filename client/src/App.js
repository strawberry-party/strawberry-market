import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import SignIn from './components/Tabs/LoginTab/SignIn';
import SignUp from './components/Tabs/LoginTab/SignUp';
import MainTab from "./components/Tabs/MainTab/MainTab";
import CreateButton from './components/CreateButton';
import Header from './components/Header/Header';
import ShowItemTab from './components/Tabs/ShowItemTab/ShowItemTab';
import CreateTab from './components/Tabs/CreateTab/CreateTab';

class App extends Component {

  state = {
    posts: ''
  }

  render() {
    return (
      <div id='container'>
        <BrowserRouter>
          <Header/>
          <Route exact path="/">
            <MainTab />
            <CreateButton />
          </Route>
          <Route exact path='/item' component={ShowItemTab} />
          <Route exact path="/signin"><SignIn /></Route>
          <Route exact path="/signup"><SignUp /></Route>
          <Route exact path="/create"><CreateTab /></Route>
          {/* <Route exact path="/createDemand"><CreateDemandPost /></Route>
          <Route exact path="/createSupply"><CreateSupplyPost /></Route> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
