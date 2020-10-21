import React from 'react';
import { Header } from '../Components';
import * as Routes from '../Constants/routes';
import logo from '../logo.svg';

export function SelectProfileContainer({ user, setProfile }) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={Routes.HOME} src={logo} alt='Netflix' />
                </Header.Frame>
            </Header>
        </>
    )
}