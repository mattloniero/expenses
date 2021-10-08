import React from 'react'
import Balance from './Balance';

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <Balance title="Balance" />
        </header>
    )
}

export default Header
