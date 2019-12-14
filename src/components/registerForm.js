import React from 'react'
import Joi from 'joi-browser'
import Form from './common/form';

class RegisterForm extends Form {

    // Create a ref object
    // username=React.createRef()
    // componentDidMount() {
    //     this.username.current.focus()
    // }

    // Create a ref object in react
    state = {
        data: {username: '', password: '' ,name:""},
        errors: {}

    }
    schema = {
        username: Joi.string().required().email().label('Username'),
        password: Joi.string().required().min(5).label('Password'),
        name:Joi.string().required().label("Name")
    }

  

    //errors['usename']
  
    doSubmit=()=>{
         //Call the server 
         console.log("submitted");
    }

   
    render() {

        
        return (
            <div>
                <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
                  
         { this.renderInput('username',"Usename")}
        { this.renderInput('password',"Password","password")}
        { this.renderInput('name',"Name")}
          {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

export default RegisterForm;