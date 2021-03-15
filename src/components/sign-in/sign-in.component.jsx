import React from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.componenet'
import CustomButton from '../custom-button/custom-button.component'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

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
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;
        console.log(email);
        console.log(password)
        emailSignInStart(email, password);
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props;
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
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>


                </form>


            </div>
        );
    };
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);