import React from 'react'
import { Header } from '../Components'

export default function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo/>
                <Header.Button />
            </Header.Frame>
            {children}
        </Header>
    )
}
