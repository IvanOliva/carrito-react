import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.componenet'
import CustomButton from '../custom-button/custom-button.component'
import { auth, sigInWithGoogle } from '../../firebase/firebase.util'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>
                    I've already has an account
                </h2>
                <span> Sign in with your username and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label='Email'
                        required
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange} />

                    <FormInput
                        label='Password'
                        required
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    <div className='buttons'>
                        <CustomButton type='submit' value='Submit Form'>SIGN IN</CustomButton>
                        <CustomButton onClick={sigInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>


                </form>


            </div>
        );
    };
}

export default SignIn;