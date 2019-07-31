import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormCadastro from '../forms/FormCadastro';
import Paper from '@material-ui/core/Paper';
import './ContainerCadastro.css';

export default class ContainerCadastro extends React.Component {
  render(){
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" >
        <Paper  m={1} border={1} style={{paddingLeft:'2vh', paddingRight:'4vh', paddingBottom:'6vh'}}>
          <Typography component="div" style={{height: '75vh', marginTop:'2vh'}} >
              <center className="">
                <Typography variant="h6" component="div" >
                  Formulário de Cadastro!
                </Typography>
              </center>
              <FormCadastro />
          </Typography>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}