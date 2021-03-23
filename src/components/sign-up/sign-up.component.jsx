import React, { useState } from 'react';
import { connect } from 'react-redux';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.componenet';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        signUpStart(displayName, email, password);
        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password);
        //     await createUserProfileDocument(user, { displayName });
        //     this.setState({
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: ''
        //     });
        // } catch (error) {
        //     console.log(error);
        // }
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <div className='sign-up'>
            <h2 className='title'> I don't have an account</h2>
            <span> Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Name'
                    required
                    name='displayName'
                    type='text'
                    value={displayName}
                    handleChange={handleChange} />

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
                    handleChange={handleChange} />

                <FormInput
                    label='Password'
                    required
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    handleChange={handleChange} />

                <div className='buttons'>
                    <CustomButton type='submit' value='Submit Form'> SIGN UP</CustomButton>
                </div>
            </form>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    signUpStart: (displayName, email, password, confirmPassword) => dispatch(signUpStart({ displayName, email, password })),
});

export default connect(null, mapDispatchToProps)(SignUp);