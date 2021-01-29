import React from 'react'
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.componenet'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.util'

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error);
        }

    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'> I don't have an account</h2>
                <span> Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label='Name'
                        required
                        name='displayName'
                        type='text'
                        value={displayName}
                        handleChange={this.handleChange} />

                    <FormInput
                        label='Email'
                        required
                        name='email'
                        type='email'
                        value={email}
                        handleChange={this.handleChange} />

                    <FormInput
                        label='Password'
                        required
                        name='password'
                        type='password'
                        value={password}
                        handleChange={this.handleChange} />

                    <FormInput
                        label='Password'
                        required
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        handleChange={this.handleChange} />

                    <div className='buttons'>
                        <CustomButton type='submit' value='Submit Form'> SIGN UP</CustomButton>
                    </div>

                </form>


            </div>
        )
    }
}

export default SignUp;