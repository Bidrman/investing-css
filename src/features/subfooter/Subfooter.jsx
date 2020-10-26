import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Navbar from 'react-bootstrap/Navbar'

import { Envelope, Telephone, GeoAlt } from 'react-bootstrap-icons'

const Subfooter = () => {
    return (
        <Container>
            <Navbar expand={'lg'} collapseOnSelect className={'w-100 subfooter__navigation'}>
                <Col>
                    <h4 className='green mb-3  font-20'>Kontaktujte nás</h4>
                    <div className='mb-4'>
                        <Telephone width='25' height='25' className='mr-2' fill='#9c3' />
                        <a href='tel:+420515202202' className='icon-phone'>
                            +420 515 202 202
                        </a>
                    </div>
                    <div className='mb-3'>
                        <GeoAlt width='17' height='17' className='mr-3' fill='#9c3' />
                        <a href='#' className='icon'>
                            Pobočky a bankomaty
                        </a>
                    </div>
                    <div className='mb-3'>
                        <Telephone width='17' height='17' className='mr-3' fill='#9c3' />
                        <a href='#' className='icon'>
                            Zavoláme vám
                        </a>
                    </div>
                    <div className='mb-3'>
                        <Envelope width='17' height='17' className='mr-3' fill='#9c3' />
                        <a href='#' className='icon'>
                            Napište nám
                        </a>
                    </div>
                </Col>
                <Col>
                    <Navbar.Toggle aria-controls='footerAirbank'>
                        <h4 className='green mb-3 font-20'>O Air Bank</h4>
                    </Navbar.Toggle>
                    <h4 className='green mb-3 ghost  font-20'>O Air Bank</h4>
                    <Navbar.Collapse id={'footerAirbank'}>
                        <ul className='subfooter__list'>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    O nás
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Žhavé novinky
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Pro novináře
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Pracujte u nás
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Dokumenty
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Kontakty
                                </a>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Col>
                <Col>
                    <Navbar.Toggle aria-controls='footerOffer'>
                        <h4 className='green mb-3  font-20'>Nabídka</h4>
                    </Navbar.Toggle>
                    <h4 className='green mb-3 ghost font-20'>Nabídka</h4>
                    <Navbar.Collapse id={'footerOffer'}>
                        <ul className='subfooter__list'>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Běžný účet
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Spořící účet
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Půjčky
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Hypotéky
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Kontokorent
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Pojištění
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Mobilní bankovnictví
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Internetové bankovnictví
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Šanon
                                </a>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Col>
                <Col>
                    <Navbar.Toggle aria-controls='footerSupport'>
                        <h4 className='green mb-3 font-20'>Podpora</h4>
                    </Navbar.Toggle>
                    <h4 className='green mb-3 ghost font-20'>Podpora</h4>
                    <Navbar.Collapse id={'footerSupport'}>
                        <ul className='subfooter__list'>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Kurzovní lístek
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Co vás nejvíc zajímá
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Pokračovat v žádosti
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Aplikace třetích stran
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Bezpečnost a soukromí
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Ceník ke stažení
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Přehled úrokových sazeb
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Reklamační řád
                                </a>
                            </li>
                            <li className='subfooter__list-item mb-2'>
                                <a href='#' className='subfooter__link'>
                                    Obchodní podmínky
                                </a>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Col>
            </Navbar>
        </Container>
    )
}

export default Subfooter
