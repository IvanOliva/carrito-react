import React, { useState } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.componenet'
import CustomButton from '../custom-button/custom-button.component'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(userCredentials);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
        console.log({ userCredentials })
    }


    return (
        <div className='sign-in'>
            <h2 className='title'>
                I've already has an account
                </h2>
            <span> Sign in with your username and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    required
                    name='email'
                    type='email'
                    value={email}
                    handleChange={handleChange} />

                <FormInput
                    label='Password'
                    required
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                />
                <div className='buttons'>
                    <CustomButton type='submit' value='Submit Form'>SIGN IN</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                </div>


            </form>


        </div>
    );
};


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (userCredentials) => dispatch(emailSignInStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignIn);