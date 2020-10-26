import React from 'react'
import { Row, Col, Container } from 'reactstrap'

import Google from '../../components/icons/google'
import Ios from '../../components/icons/ios'
import Airbank from '../../files/images/airbank.PNG'
import Fb from '../../components/icons/fb'
import Twitter from '../../components/icons/twitter'
import LinkedIn from '../../components/icons/linkedin'
import Youtube from '../../components/icons/youtube'

const Footer = () => {
    return (
        <Container>
            <Row className='mb-3 footer__socials'>
                <Col>
                    <h4 className='green text-center mb-3 font-20'>Sledujte nás</h4>
                    <Row className='medias'>
                        <span className='social-media'>
                            <Fb />
                        </span>
                        <span className='social-media'>
                            <LinkedIn />
                        </span>
                        <span className='social-media'>
                            <Twitter />
                        </span>
                        <span className='social-media'>
                            <Youtube />
                        </span>
                    </Row>
                </Col>
                <Col>
                    <h4 className='green text-center mb-4 font-20'>Mobilní bankovnictví My Air</h4>
                    <Row>
                        <div className={'d-flex m-auto'}>
                            <div className='mx-2'>
                                <Google fill='#fff' />
                            </div>
                            <div className='mb-2'>
                                <img src={Airbank} alt='airbank logo' />
                            </div>
                            <div className='mx-2'>
                                <Ios />
                            </div>
                        </div>
                    </Row>
                </Col>
                <Col>
                    <h4 className='green text-center mb-4 font-20'>Kurzovní lístek</h4>
                    <Row className='center'>
                        <div className='ratio'>
                            <div className='ratio__logo'>
                                <span>€</span>
                            </div>
                            <div className='ratio__text ml-2 mr-5'>
                                <span className='ratio__currency font-13'>EUR/CZK</span>
                                <span className='ratio__value'>27,43</span>
                            </div>
                        </div>
                        <div className='ratio'>
                            <div className='ratio__logo'>
                                <span>$</span>
                            </div>
                            <div className='ratio__text ml-2'>
                                <span className='ratio__currency font-13'>USD/CZK</span>
                                <span className='ratio__value'>23,36</span>
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className='text-sm-center'>
                    <div className='footer__copyright font-12'>
                        Člen skupiny PPF, IČO 29045371 / Evropská 2690/17, 160 00 Praha 6, zapsaná u
                        rejstříkového soudu v Praze — spisová značka B 16013
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
