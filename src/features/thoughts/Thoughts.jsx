import React from 'react'
import { Row, Col, Card } from 'reactstrap'
import { Check2 } from 'react-bootstrap-icons'

const Thoughts = () => {
    return (
        <>
            <Row>
                <Col className={'text-center pt-3'}>
                    <h2 className={'font-weight-lighter font-36 mt-2 mb-6 text-graish'}>
                        Co je dobré si na začátku promyslet
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col sm='4' xs='12' className={'thoughts'}>
                    <Card className={'rounded thoughts__card'}>
                        <div className={'card-text text-center'}>
                            <Check2 width='35' height={28} fill={'#9c3'} className={'thoughts__icon'} />
                            <span>Jak dlouho nejspíš nebudete investované peníze potřebovat.</span>
                        </div>
                    </Card>
                </Col>
                <Col sm='4' xs='12' className={'thoughts'}>
                    <Card className={'rounded thoughts__card'}>
                        <div className={'card-text text-center'}>
                            <Check2 width='35' height={28} fill={'#9c3'} className={'thoughts__icon'} />
                            <span>Kolik byste chtěli vydělat.</span>
                        </div>
                    </Card>
                </Col>
                <Col sm='4' xs='12' className={'thoughts'}>
                    <Card className={'rounded thoughts__card'}>
                        <div className={'card-text text-center'}>
                            <Check2 width='35' height={28} fill={'#9c3'} className={'thoughts__icon'} />
                            <span>Jak moc si u toho troufáte riskovat.</span>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm='7' xs='12' className={'my-3 ml-auto mr-auto text-center'}>
                    <div className={'my-4'}>
                        Obecně platí, že čím riskantnějšíí, tím více na ni můžete vydělat, ale také tím větší
                        riziko, že se pokazí a vy o část svých peněz naopak příjdete. Obecně platí, že čím
                        delší dobu investice zvolíte, tím více se kolísání hosnoty v čase vyrovnává.
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Thoughts
