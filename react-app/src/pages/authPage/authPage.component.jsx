import React from 'react';
import './authPage.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


const AuthPage = () => {
    return (
        <div className = "sign-in-and-sign-up">
         <SignIn  />
         <SignUp />

        </div>
    )
}

export default AuthPage;        