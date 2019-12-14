import React from 'react'
import Joi from 'joi-browser'
import Form from './common/form';

class LoginForm extends Form {

    // Create a ref object
    // username=React.createRef()
    // componentDidMount() {
    //     this.username.current.focus()
    // }

    // Create a ref object in react
    state = {
        data: {
            username: '',
            password: ''
        },
        errors: {
            // username:"Usename is required"
        }

    }
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

  

    //errors['usename']
  
    doSubmit=()=>{
         //Call the server 
         console.log("submitted");
    }

   
    render() {

        
        return (
            <div>
                <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
                  
         { this.renderInput('username',"Usename")}
        { this.renderInput('password',"Password","password")}
          {this.renderButton('Login')}
                </form>
            </div>
        );
    }
}

export default LoginForm;