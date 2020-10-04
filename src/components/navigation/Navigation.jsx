import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Col } from 'reactstrap'
import { PersonPlus, Lock, Search } from 'react-bootstrap-icons'

import Airbank from '../icons/airbank'
import Link from '../link/Link'

const Navigation = () => {
    return (
        <Navbar expand={'lg'} collapseOnSelect className={'w-100 navigation'}>
            <Col xs='2' lg='2'>
                <Navbar.Brand href='https://www.airbank.cz'>
                    <Airbank />
                </Navbar.Brand>
            </Col>
            <Col xs='8' md='9' lg='10' className='text-right'>
                <button className='navigation__btn mr-3'>
                    <PersonPlus fill='#9c3' />
                    <span className='navigation__btn-text'>Stát se klientem</span>
                </button>
                <button className='navigation__btn mr-3'>
                    <Lock fill='#9c3' />
                    <span className='navigation__btn-text'>Internetové bankovnictví</span>
                </button>
                <button className='navigation__btn'>
                    <Search fill='#9c3' />
                </button>
            </Col>
            <Col xs='1' lg='12'>
                <Navbar.Toggle aria-controls='collapsibleNavbar' className={'bg-green'}>
                    <span className={'navbar-toggler-icon'}></span>
                </Navbar.Toggle>
                <Navbar.Collapse id={'collapsibleNavbar'}>
                    <ul className='navbar-nav navigation__list'>
                        <li className={'nav-item font-15'}>
                            <Link className={'nav-link'} text='Běžný účet' />
                        </li>
                        <li className={'nav-item font-15'}>
                            <Link className={'nav-link'} text='Spořící účet' />
                        </li>{' '}
                        <li className={'nav-item font-15'}>
                            <Link className={'nav-link'} text='Půjčka' />
                        </li>
                        <li className={'nav-item font-15'}>
                            <Link className={'nav-link'} text='Hypotéka' />
                        </li>{' '}
                        <li className={'nav-item font-15'}>
                            <Link className={'nav-link'} text='Pojištění' />
                        </li>
                        <li className={'nav-item font-15'}>
                            <Link className={'nav-link'} text='Investice' />
                        </li>
                        <li className={'nav-item font-15'}>
                            <Link className={'nav-link'} text='O nás' />
                        </li>
                        <li className={'nav-item font-15'}>
                            <Link className={'nav-link'} text='Aplikace My Air' />
                        </li>
                        <li className={'nav-item font-15'}>
                            <Link className={'nav-link'} text='Pobočky a bankomaty' />
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Col>
        </Navbar>
    )
}

export default Navigation
