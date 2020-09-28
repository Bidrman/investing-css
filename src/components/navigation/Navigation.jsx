import React from 'react'

import Link from '../link/Link'

const Navigation = () => {
    return (
        <ul className='navigation'>
            <li>
                <Link text='Běžný účet' />
            </li>
            <li>
                <Link text='Spořící účet' />
            </li>{' '}
            <li>
                <Link text='Půjčka' />
            </li>
            <li>
                <Link text='Hypotéka' />
            </li>{' '}
            <li>
                <Link text='Pojištění' />
            </li>
            <li>
                <Link text='Investice' />
            </li>
            <li>
                <Link text='O nás' />
            </li>
            <li>
                <Link text='Aplikace My Air' />
            </li>
            <li>
                <Link text='Pobočky a bankomaty' />
            </li>
        </ul>
    )
}

export default Navigation
