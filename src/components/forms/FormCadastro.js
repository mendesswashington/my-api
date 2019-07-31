import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from '../../services/api';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
    margin: theme.spacing(0),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


export default class OutlinedTextFields extends React.Component{
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = e => {
    e.preventDefault();
    api.post('/auth/register');
  };  
  
    render(){

      return (
        <form className={useStyles.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Nome"
            style={{ margin: 8 }}
            placeholder="Digite seu nome."
            type="text"
            helperText="O campo deve ser preenchido com seu nome completo!"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => this.setState({ username: e.target.value })}
            required
          />
          <TextField
            id="outlined-email-input"
            label="email"
            style={{ margin: 8 }}
            placeholder="Digite seu email."
            type="email"
            helperText="O campo deve ser preenchido de forma coerente."
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => this.setState({ useremail: e.target.value })}
            required
          />
          <TextField
            id="outlined-password-input"
            label="password"
            style={{ margin: 8 }}
            placeholder="Digite sua senha."
            type="password"
            helperText="O campo deve ser preenchido de forma coerente."
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => this.setState({ userpassword: e.target.value })}
            required
          />
          <TextField
            id="outlined-password-input2"
            label="Confirme o password"
            style={{ margin: 8 }}
            placeholder="confirme seu password."
            type="password"
            helperText="O campo deve ser preenchido de forma coerente."
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => this.setState({ userpassword2: e.target.value })}
            required
          />
          <Button type="submit" variant="contained" size="large" color="primary" className={useStyles.margin}>
            Cadastrar  
          </Button>
        </form>
      );
    }
}