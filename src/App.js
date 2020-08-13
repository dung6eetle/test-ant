import React from 'react';
import classes from './classes/App.module.css'
import Header from './components/Header/Header.js'
import Popular from './components/Popular/Popular.js'
import {Route, withRouter} from 'react-router-dom'
import NewPageContainer from './components/NewPage/NewPageContainer'
import RegisterForm from './components/Auth/RegisterForm';
import {authClient } from './redux/auth-reducer'
import { connect } from 'react-redux';
import { compose } from "redux";


class App extends React.Component {
  componentDidMount() {
     this.props.authClient() 
  }
  render() {
    return (
      <div className={classes.app_wrapper}>
        <Header/>
        <div className={classes.app_wrapper_content}>
          <Route path="/New" render={() => <NewPageContainer/>}/> 
          <Route path="/Popular" render={() => <Popular/>}/>
          <Route path="/registration" render={()=> <RegisterForm/>}/>
        </div>
      </div>
    );
  }
}



export default compose(
  withRouter,
  connect(null, {authClient})
)(App)
