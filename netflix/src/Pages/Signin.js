import React, { useState } from 'react'
import HeaderContainer from '../Containers/Header';
import { FooterContainer } from '../Containers/Footer';
import { Form } from '../Components';

export default function Signin() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');
    
    const isInvalid = password === '' || email === '';
    
    const handleSignin = e => {
        e.preventDefault()
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
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>

    )
}
