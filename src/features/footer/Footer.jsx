import React from 'react'
import { Row, Col, Container } from 'reactstrap'

import Google from '../../components/icons/google'
import Ios from '../../components/icons/ios'
import Airbank from '../../files/images/airbank.PNG'
import Fb from '../../components/icons/fb'
import Twitter from '../../components/icons/twitter'
import LinkedIn from '../../components/icons/linkedin'

const Footer = () => {
    return (
        <Container>
            <Row className='mb-3'>
                <Col>
                    <h4 className='green text-center'>Sledujte nás</h4>
                    <Row className='medias'>
                        <span className='social-media'>
                            <Fb />
                        </span>
                        <span className='social-media'>
                            <Twitter />
                        </span>
                        <span className='social-media'>
                            <LinkedIn />
                        </span>
                    </Row>
                </Col>
                <Col>
                    <h4 className='green'>Mobilní bankovnictví My Air</h4>
                    <Row>
                        <div className='mx-2'>
                            <Google fill='#fff' />
                        </div>
                        <div className='mb-2'>
                            <img src={Airbank} />
                        </div>
                        <div className='mx-2'>
                            <Ios />
                        </div>
                    </Row>
                    <Row className='footer__logo mt-4'>
                        <img
                            src='https://cdn.siteone.io/img.siteone.cz/rs_75_fill_auto,o_webp/https%3A%2F%2Fwww.airbank.cz%2Fnovinky-z-airbank%2F2020%2FPPF_logo.png'
                            alt='PPF-logo'
                        />
                    </Row>
                </Col>
                <Col>
                    <h4 className='green'>Kurzovní lístek</h4>
                    <div>
                        <span>Kurz1</span>
                        <span>Kurz2</span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='text-sm-center'>
                    <div className='footer__copyright'>
                        Člen skupiny PPF, IČO 29045371 / Evropská 2690/17, 160 00 Praha 6, zapsaná u
                        rejstříkového soudu v Praze — spisová značka B 16013
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
