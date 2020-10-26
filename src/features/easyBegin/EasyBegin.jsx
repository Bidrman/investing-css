import React from 'react'
import { Row, Col, Card } from 'reactstrap'

const EasyBegin = () => {
    return (
        <>
            <Row>
                <Col>
                    <h2 className={'font-weight-lighter font-36 text-center mb-5'}>Už od sto korun</h2>
                </Col>
            </Row>
            <Row>
                <Col xs='12' sm='6'>
                    <Card className={'border-0 mr-3'}>
                        <div className={'card-title'}>
                            <h4 className={'font-24 text-black'}>Stačí pár set korun</h4>
                        </div>
                        <div className={'easy__text card-text py-4'}>
                            Investovat může prakticky každý, kdo má nějaký peníze navíc. Stačí pár set korun.
                            Když je necháte jen tak ležet na běžném účtu, většinou vám to pokryje sotva
                            infalci. V tom případě vaše peníze ztrácejí reálnou hodnotu.
                        </div>
                    </Card>
                </Col>
                <Col xs='12' sm='6'>
                    <Card className={'border-0 mr-3'}>
                        <div className={'card-title'}>
                            <h4 className={'font-24 text-black'}>Vstupní poplatky</h4>
                        </div>
                        <div className={'easy__text card-text py-4'}>
                            S investováním do fondů bývají spojené jednorázové vstupní poplatky za správu,
                            zobrazovaný výnos bývá ale o průběžné poplatky už očištěný. Podrobné informace o
                            jednotlivých nabízených fondech najdete na našich stránkách.
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default EasyBegin
