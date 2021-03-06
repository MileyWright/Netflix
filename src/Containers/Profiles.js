import React from 'react';
import { Header, Profiles } from '../Components';
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
            
            <Profiles>
                <Profiles.Title>Who's Watching</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => 
                        setProfile({
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        })}>
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name> {user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}