import React, { Component } from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from './Table';
import { login } from './actions'



class App extends Component {
  constructor(props){
    super();
    this.state = {
      name: '',
      password: ''    
    }
  }

  onSubmit = () => {
    this.props.onLogin(this.state.name, this.state.password);
  }

  render() {
    console.log('aa', this.props.loginStatus );
    return (
      <div style={{margin: "50px 50px"}}>
        {(!this.props.loginStatus || this.props.loginStatus === 'wrongPassword') && 
        <>
          <TextField
            id="standard-name"
            label="Name"
            value={this.state.name}
            onChange={(e) => { this.setState({ name: e.target.value})}}
            margin="normal"
          />
          <br/>
          <TextField
            id="standard-name"
            label="Password"
            value={this.state.password}
            onChange={(e) => { this.setState({ password: e.target.value})}}
            margin="normal"
            type="password"
          />
          <br/>
          <br/>
          <Button variant="contained" color="primary" onClick={this.onSubmit} >
            Submit
          </Button>
        </>
        }
        {this.props.loginStatus === 'wrongPassword' && <div style={{margin: '10px', color: 'red'}}>Ur USerName or Password is wrong</div>}
        {this.props.loginStatus !== 'wrongPassword' && this.props.loginStatus && <Table />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginStatus: state.login.loginStatus
})

const mapDispatchToProps = dispatch => ({
  onLogin: (name,password) => dispatch(login(name,password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)