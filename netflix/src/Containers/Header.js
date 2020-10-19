import React from 'react'
import { Header } from '../Components'
import * as Routes from '../Constants/routes';
import logo from '../logo.svg';
export default function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={Routes.HOME} src={logo} alt='Netflix' />
                <Header.Button to={Routes.SIGN_IN}>Sign In</Header.Button>
            </Header.Frame>
            {children}
        </Header>
    )
}
