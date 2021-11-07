import React from 'react'
import { StatLogo, Stats } from './Header.components'

const Stat = ({ Logo, number, name }) => {
    return (
        <Stats>
            <StatLogo src={Logo}></StatLogo>
            <h1>{number}</h1>
            <p>{name}</p>
        </Stats >
    )
}

export default Stat
