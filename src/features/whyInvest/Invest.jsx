import React from 'react'
import { Row, Col, Card } from 'reactstrap'

import Wallet from '../../components/icons/wallet'
import Withdraw from '../../components/icons/withdraw'
import Graph from '../../components/icons/graph'

const Invest = ({ heading }) => {
    return (
        <>
            <Row className='text-center'>
                <h2 className='ml-auto mr-auto mb-3 font-weight-lighter font-36 text-black'>{heading}</h2>
            </Row>
            <Row>
                <Col xs='12' sm='4' className={'py-4 px-5'}>
                    <Card className='custom-card'>
                        <Graph height={90} width={90} fill='#9c3' />
                        <h5 className='custom-card__title text-center mb-4 font-24 text-black'>
                            Zhodnocení peněz ležících na účtě ladem
                        </h5>
                        <p className='card-text text-center'>
                            Investování do podílových fondů je v dnešní dobe jeden ze způsobů, jak můžete
                            zhodnotit své volné peníze, které by jinak ležely ladem na běžném účtě.
                        </p>
                    </Card>
                </Col>
                <Col xs='12' sm='4' className={'py-4 px-5'}>
                    <Card className='custom-card'>
                        <Wallet height={90} width={90} fill='#9c3' />
                        <h5 className='custom-card__title text-center mb-4 font-24 text-black'>
                            Motivace ušetřit
                        </h5>
                        <p className='card-text text-center'>
                            Je úplně jedno, co vás k tomu vede, jestli chcete nové bydlení, našetřit na další
                            vzdělání dětí, nebo si třeba přilepšit na stará kolena.
                        </p>
                    </Card>
                </Col>
                <Col xs='12' sm='4' className={'py-4 px-5'}>
                    <Card className='custom-card'>
                        <Withdraw height={90} width={90} fill='#9c3' />
                        <h5 className='custom-card__title text-center mb-4 font-24 text-black'>
                            Výběr peněz během pár dní
                        </h5>
                        <p className='card-text text-center'>
                            Na rozdíl od všemožných složitých investičních nástrojů je velkou výhodou
                            kolektivního investování to, že peníze do fondů můžete mít zpátky k dispozici
                            během několika dní, pokud je budete nutně potřebovat.
                        </p>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Invest
