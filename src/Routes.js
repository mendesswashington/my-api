import React from 'react';
import ContainerLogin from './components/containers/ContainerLogin';
import ContainerCadastro from './components/containers/ContainerCadastro';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Routes() {
  const classes = useStyles();
  return (
    <Router>
        <div className={classes.root}>
            <Navbar/>
            <Route path="/" exact component={ContainerLogin} />
            <Route path="/login/" component={ContainerLogin} />
            <Route path="/cadastro/" component={ContainerCadastro} />
        </div>
    </Router>
  );
}