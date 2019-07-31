import React from "react";
import ContainerLogin from './components/containers/ContainerLogin';
import ContainerCadastro from './components/containers/ContainerCadastro';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import { isAuthenticated, logout } from "./services/auth";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default class Routes extends React.Component{
 constructor(){
   super();
   this.state={
     sair:"sair",
     error:""
   }
   this.sairChang = this.sairChang.bind(this);
   this.sairApp   = this.sairApp.bind(this);
 }
 sairChang(event){
   this.setState({sair: event.target.value});
 }
  sairApp =  event => {
    event.preventDefault();
   alert(this.state.sair);
    if(this.state.sair === "sair"){
      logout();
      window.location.href= `http://localhost:3000/`;
    }
  }
  render(){
    return(
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ContainerLogin} />
        <Route path="/login" component={ContainerLogin} />
        <Route path="/cadastro" component={ContainerCadastro} />
        <PrivateRoute path="/app" component={()=> 
          <center>
            <form>
            <h1>Bem vindo ao sistema</h1>
            <Button 
              className={useStyles.button} 
              variant="outlined"
              onChange={this.sairChang}
              value={this.state.sair}
              onClick={this.sairApp}
              type="submit"
            >
              Sair.
            </Button>
            </form>
          </center>} />
          <Route path="*" component={() => <h1>Page not found </h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}