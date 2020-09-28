import React from 'react'
import { Col } from 'reactstrap'
import { PersonPlus, Lock, Search } from 'react-bootstrap-icons'

import Airbank from '../icons/airbank'

const HeaderButtons = () => {
    return (
        <>
            <Col xs='6' sm='2'>
                <Airbank />
            </Col>
            <Col xs='6' sm='10' className='text-right'>
                <button className='header__btn mr-3'>
                    <PersonPlus fill='#9c3' />
                    <span className='header__btn-text'>Stát se klientem</span>
                </button>
                <button className='header__btn mr-3'>
                    <Lock fill='#9c3' />
                    <span className='header__btn-text'>Internetové bankovnictví</span>
                </button>
                <button className='header__btn'>
                    <Search fill='#9c3' />
                </button>
            </Col>
        </>
    )
}

export default HeaderButtons
