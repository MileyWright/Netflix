import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../Context/firebase';
import HeaderContainer from '../Containers/Header';
import { FooterContainer } from '../Containers/Footer';
import { Form } from '../Components';
import * as Routes from '../Constants/routes';


export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || email === '';

    const handleSignup = e => {
        e.preventDefault();

        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => 
                res.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
                    .then(() => {
                        history.push(Routes.BROWSE);
                    })
            )
            .catch(err => {
                setFirstName('');
                setEmail('');
                setPassword('');
                setError(err.message);
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error> {error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email Address"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Input
                            type='password'
                            placeholder="Password"
                            autoComplete='off'
                            value={password}
                            onChange={({ target}) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type='submit'>
                            Sign Up
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Already a User? <Form.Button to="/signin">Sign In.</Form.Button>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <Form.Button>Learn more.</Form.Button>
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
