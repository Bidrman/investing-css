import React from 'react'
import { Container, Row } from 'reactstrap'

import styles from './styles/modules.scss'

import Navigation from './components/navigation/Navigation'
import Hero from './features/hero'
import Subfooter from './features/subfooter'
import Footer from './features/footer/Footer'

import background from '../src/files/images/night.jpg'
import Invest from './features/whyInvest/Invest'
import CollectiveInvesting from './features/collectiveInvesting/CollectiveInvesting'
import Thoughts from './features/thoughts/Thoughts'
import EasyBegin from './features/easyBegin/EasyBegin'

const App = (props) => {
    return (
        <div className='page'>
            <header className='pt-2'>
                <section>
                    <Container className={'px-3'}>
                        <Navigation />
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
                <Container className='pt-5 pb-3 px-0'>
                    <Invest heading='Proč investovat do fondů' />
                </Container>
            </section>
            <section className='bg-gray'>
                <Container className=''>
                    <CollectiveInvesting />
                </Container>
            </section>
            <section className='py-4'>
                <Container className=''>
                    <Thoughts />
                </Container>
            </section>
            <section className='py-4'>
                <Container className=''>
                    <EasyBegin />
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
