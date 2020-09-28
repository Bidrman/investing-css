import React from 'react'
import { Container, Row } from 'reactstrap'

import styles from './styles/modules.scss'

import Navigation from './components/navigation/Navigation'
import HeaderButtons from './components/headerButtons'
import Hero from './features/hero'
import Subfooter from './features/subfooter'
import Footer from './features/footer/Footer'

import background from '../src/files/images/night.jpg'
import Invest from './features/whyInvest/Invest'

const App = (props) => {
    return (
        <div className='page'>
            <header className='pt-2'>
                <section className='header mb-2'>
                    <Container>
                        <Row>
                            <HeaderButtons />
                        </Row>
                    </Container>
                </section>
                <section className='menu'>
                    <Container>
                        <Row>
                            <Navigation />
                        </Row>
                    </Container>
                </section>
            </header>
            <section className='hero pt-5' style={{ backgroundImage: `url(${background})` }}>
                <Container>
                    <Row>
                        <Hero heading='Základy Investování' />
                    </Row>
                </Container>
            </section>
            <section className='investing'>
                <Container className='py-4'>
                    <Invest />
                </Container>
            </section>
            <footer>
                <section className='subfooter'>
                    <Subfooter />
                </section>
                <section className='footer'>
                    <Footer />
                </section>
            </footer>
        </div>
    )
}

export default App
