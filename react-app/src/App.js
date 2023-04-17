import React from 'react';
import './App.css';
import HomePage from './pages/homePage/homepage.component'
import {Route,Switch} from 'react-router-dom'
import ShopPage from './pages/shopPage/shoppage.component';
import Header from './components/header/header.component';
import AuthPage from './pages/authPage/authPage.component';
import SignIn from './components/sign-in/sign-in.component';
import {auth} from './firebase/firebase.utils'
import checkoutComponent from './components/checkout/checkout.component';


class  App extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
    currentUser : null
  }
 }

 unsubscribeFromAuth = null;

 componentDidMount(){
  this.unsubscribeFromAuth =  auth.onAuthStateChanged((user)=>{
     console.log("user",user);
     this.setState({
       currentUser: user
     });
     console.log("state",this.state);

   })
 }

 componentWillUnmount() {
   this.unsubscribeFromAuth();
   console.log("called");
 }

 render() {
  return (
    <div>
      <Header currentUser = {this.state.currentUser} />
      <Switch>
       <Route exact path = '/' component = {HomePage} />
       <Route  path = '/shop' component = {ShopPage} />
       <Route exact path = '/signin' component = {AuthPage} />
       <Route exact path = '/checkout' component = {checkoutComponent} />
      </Switch>
    </div>
  );
 }

}

export default App;
