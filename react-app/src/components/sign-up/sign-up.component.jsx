import React from 'react';
import './sign-up.styles.scss'
import { FormControl, InputLabel, Input, FormHelperText, FormGroup, Button } from '@material-ui/core';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }



    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, password, confirmPassword } = this.state;
        if (password != confirmPassword) {
            alert("password don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { name });
            this.setState({
                name: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        } catch (error) {
            console.log("error while signing up", error);
        }

    }


    render() {
        const { name, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2>Don't  have an account</h2>
                <span>Create your account</span>

                <FormGroup className="custom-padding" onSubmit={this.handleSubmit}>
                    <FormControl className="input-class" variant="outlined" >
                        <InputLabel htmlFor="my-input">Name </InputLabel>
                        <Input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            required
                        />
                        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                    </FormControl>
                    <FormControl className="input-class" variant="outlined" >
                        <InputLabel htmlFor="my-input">Email </InputLabel>
                        <Input
                            type="email"
                            name="email"
                            value={email}
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
                            value={password}
                            onChange={this.handleChange}
                            required
                        />
                        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
                        <Input
                          type="password"
                          name="confirmPassword"
                          value={confirmPassword}
                          onChange={this.handleChange}
                          required />
                        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                    </FormControl>

                    <Button onClick={this.handleSubmit} className="custom-padding" type="submit" variant="contained" color="primary">
                        Submit Form
                    </Button>

                </FormGroup>
            </div>
        )
    }
}


export default SignUp;