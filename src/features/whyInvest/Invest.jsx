import React from 'react'
import { Row, Col, Card } from 'reactstrap'

import { HouseDoor } from 'react-bootstrap-icons'

const Invest = ({ heading }) => {
    return (
        <>
            <Row>
                <h2>{heading}</h2>
            </Row>
            <Row>
                <Col xs='12' sm='4'>
                    <Card className='custom-card'>
                        <HouseDoor height={90} width={90} fill='#9c3' className='custom-card__icon mb-3' />
                        <h5 className='car-title text-center mb-4'>
                            Zhodnocení peněz ležících na účtě ladem
                        </h5>
                        <p className='card-text text-justify'>
                            Investování do podílových fondů je v dnešní dobe jeden ze způsobů, jak můžete
                            zhodnotit své volné peníze, které by jinak ležely ladem na běžném účtě.
                        </p>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Invest
