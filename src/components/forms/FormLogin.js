import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import api from '../../services/api';
import { login } from "../../services/auth";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin:0,
    padding: 0,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  margin: {
    marginRight: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

class FormLogin extends React.Component{
  constructor(props) {
    super(props);
      this.state  = {
        email:'',
        password:'',
        error:''
      };
      this.emailChange    = this.emailChange.bind(this);
      this.passwordChange = this.passwordChange.bind(this);
      this.handleSubmit   = this.handleSubmit.bind(this);
  }

  emailChange(event) {
    this.setState({
      email: event.target.value
    });
  };

  passwordChange(event) {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const {email, password} = this.state;
      const response = await api.post('/auth/authenticate',{ email, password });
      const token = response.data.token;
      login(token);
      window.location.href = `http://localhost:3000/app`;
    } catch (error) {
      this.setState({
        error:"Erro ao se autenticar! "+error
      });
    }
    
  }
  render(){
    return (
      <form className={useStyles.container} onSubmit={this.handleSubmit}  autoComplete="on" >
          <TextField
            label="email"
            name="email"
            style={{ margin: 8 }}
            placeholder="Digite seu email."
            type="email"
            helperText="O campo deve ser preenchido de forma coerente."
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{ shrink: true, }}
            onChange={this.emailChange}
            value={this.state.email}
            required ={true}
          />
          <TextField
            id="password"
            label="password"
            name="password"
            style={{ margin: 8 }}
            placeholder="Digite sua senha."
            type="password"
            helperText="O campo deve ser preenchido de forma coerente."
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{ shrink: true, }}
            onChange={this.passwordChange}
            value={this.state.password}
            required ={true}
          />
          <Button 
            variant="contained"
            size="large"
            color="primary"
            name ="enviar"
            className={useStyles.margin}
            type="submit"
            value="Login"
          >
            Logar
          </Button>
          <center><h3>{this.state.error}</h3></center>
      </form>
    );
  }
}

export default FormLogin;