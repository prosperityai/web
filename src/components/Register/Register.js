import React, {Component} from 'react';
import './Register.css';
import '../../Utils/Util.css';
import {NavLink} from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleClick(event) {
        // var apiBaseUrl = "http://localhost:4000/api/";
        // var self = this;
        // var payload={
        //     "email":this.state.username,
        //     "password":this.state.password
        // }
        // axios.post(apiBaseUrl+'login', payload)
        //     .then(function (response) {
        //         console.log(response);
        //         if(response.data.code == 200){
        //             console.log("Register successfull");
        //             var uploadScreen=[];
        //             uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
        //             self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
        //         }
        //         else if(response.data.code == 204){
        //             console.log("Username password do not match");
        //             alert("username password do not match")
        //         }
        //         else{
        //             console.log("Username does not exists");
        //             alert("Username does not exist");
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-26">
                                Welcome
                            </span>
                            {/*<span className="login100-form-title p-b-48">*/}
                            {/*<i className="zmdi zmdi-font"/>*/}
                            {/*</span>*/}

                            <div className="wrap-input100 validate-input" data-validate="Enter you first name">
                                <input className="input100" type="text" name="first_name"/>
                                <span className="focus-input100" data-placeholder="First Name"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter you last name">
                                <input className="input100" type="text" name="last_name"/>
                                <span className="focus-input100" data-placeholder="Last Name"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                                <input className="input100" type="text" name="email"/>
                                <span className="focus-input100" data-placeholder="Email"/>
                            </div>


                            <div className="wrap-input100 validate-input" data-validate="Enter your phone number">
                                <input className="input100" type="text" name="phone_number"/>
                                <span className="focus-input100" data-placeholder="Phone Number"/>
                            </div>

                            <div className="wrap-radio-input100">
                                <span className="m-l-8">Gender</span>
                                <input className="m-l-50" type="radio" name="gender" value="male"/> Male
                                <input className="m-l-20" type="radio" name="gender" value="female"/> Female
                            </div>


                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <span className="btn-show-pass">
                                    <i className="zmdi zmdi-eye"/>
                                </span>
                                <input className="input100" type="password" name="pass"/>
                                <span className="focus-input100" data-placeholder="Password"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Confirm password">
                                <span className="btn-show-pass">
                                    <i className="zmdi zmdi-eye"/>
                                </span>
                                <input className="input100" type="password" name="confirm_pass"/>
                                <span className="focus-input100" data-placeholder="Confirm Password"/>
                            </div>

                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"/>
                                    <button className="login100-form-btn">
                                        Submit
                                    </button>
                                </div>
                            </div>

                            <div className="text-center p-t-40">
                                <span className="txt1">
                                    Do you have already account?
                                </span>

                                <NavLink className="txt2 m-l-4" exact to="/login">
                                    Sign In
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
