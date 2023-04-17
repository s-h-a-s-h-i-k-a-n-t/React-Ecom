import React from 'react';
import './sign-in.styles.scss'
import { FormControl, InputLabel, Input, FormHelperText, FormGroup,Button } from '@material-ui/core';
import {signInWithGoogle, auth} from  '../../firebase/firebase.utils';
import {withRouter} from 'react-router-dom'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = async (event) => {
        console.log("event",event);
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.props.history.push('/');
        } catch (error) {
            console.log("error while signin in");
        }
        this.setState({
            email: "",
            password: ""
        })
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <FormGroup onSubmit={this.handleSubmit}>
                    <FormControl className="input-class " variant="outlined" >
                        <InputLabel htmlFor="my-input">Email </InputLabel>
                        <Input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                    </FormControl>


                    <FormControl className="input-class" >
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                    </FormControl>
                    <Button onClick = {this.handleSubmit} className = "custom-padding"  type = "submit" variant="contained" color="primary">
                        Submit Form
                    </Button>

                            <Button  onClick = {signInWithGoogle} className = "custom-padding"  type = "submit" variant="contained" color="primary">
                                Sign In With  Google
                            </Button>

                </FormGroup>
            </div>
        )
    }
}
 

export default withRouter (SignIn);