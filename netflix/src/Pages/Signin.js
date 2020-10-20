import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../Context/firebase';
import HeaderContainer from '../Containers/Header';
import { FooterContainer } from '../Containers/Footer';
import { Form } from '../Components';
import * as Routes from '../Constants/routes';

export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const isInvalid = password === '' || email === '';

    const handleSignin = e => {
        e.preventDefault()

        // firebase
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push(Routes.BROWSE);
            })
            .catch(error => {
                setEmail('')
                setPassword('')
                setError(error.message)
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error> {error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
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
                            Sign In
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Button to="/signup">Sign up now.</Form.Button>
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
