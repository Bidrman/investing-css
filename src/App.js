import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap'

import styles from './styles/modules.scss'

import Link from './components/link'

const App = (props) => {
    return (
        <div className='page'>
            <header>
                <section className='header'>
                    <Container>
                        <Row>
                            <Col xs='6' sm='2'>
                                LOGO
                            </Col>
                            <Col xs='6' sm='5'>
                                <button>button 1</button>
                                <button>button 2</button>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className='menu'>
                    <Container>
                        <Row>
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
                        </Row>
                    </Container>
                </section>
            </header>
        </div>
    )
}

export default App
