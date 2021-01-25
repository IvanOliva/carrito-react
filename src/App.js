import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SingInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import Header from './components/header/header.component'




function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/signin' component={SingInAndSignUp} />
      </Switch>

    </div>
  );
}

export default App;
