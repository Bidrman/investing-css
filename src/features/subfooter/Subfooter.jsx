import React from 'react'
import { Row, Col, Container, Card } from 'reactstrap'

import { Envelope, Telephone, GeoAlt } from 'react-bootstrap-icons'

const Subfooter = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h4 className='green'>Kontaktujte nás</h4>
                    <div className='mb-4'>
                        <Telephone width='20' height='20' className='mr-3' fill='#9c3' />
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
                    <h4 className='green'>O Air Bank</h4>
                    <div>
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
                    </div>
                </Col>
                <Col>
                    <h4 className='green'>Nabídka</h4>
                    <div>
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
                    </div>
                </Col>
                <Col>
                    <h4 className='green'>Podpora</h4>
                    <div>
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
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Subfooter
