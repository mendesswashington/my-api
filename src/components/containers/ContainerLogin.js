import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import './ContainerLogin.css';
import FormLogin from '../forms/FormLogin';

class ContainerLogin extends React.Component {
  render(){
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" >
        <Paper m={1} border={1} style={{paddingLeft:'2vh', paddingRight:'4vh', paddingBottom:'6vh'}}>
          <Typography component="div" style={{height: '60vh', marginTop:'2vh', paddingTop: '6vh'}} >
            <center>
              <Typography variant="h6" component="div" >
                Formulário de Login!
              </Typography>
            </center>
            <FormLogin/>
          </Typography>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}

export default ContainerLogin;