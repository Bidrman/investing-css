import React from 'react'
import { Row, Col, Card } from 'reactstrap'

import CoolectiveImage from '../../files/images/collective.PNG'

const CollectiveInvesting = () => {
    return (
        <Row className={'collective-investing'}>
            <Col className={'collective-investing__left'}>
                <h3 className={'mb-5 mt-4 font-weight-lighter collective-investing__heading'}>
                    Co je kolektivní investování
                </h3>
                <div className={'collective-investing__text'}>
                    <p>
                        Kolektivné investování je takové skupinové investování ku prospěchu všech
                        zúčastněných. Místo toho, abyste investovali do jedné věci sami, svěřite svoje peníze
                        stejně jako další investoři podílovému fondu a fond je následně investuje za vás.
                        Samozřejmě podle pravidel, která vám předem vysvětlí
                    </p>
                    <p>
                        Má to dvě hlavní výhody. První výhodou je rozložení rizika. Fond zpravdidla investuje
                        do různých venných papírů, do různých odvětví průmyslu. firem a tak podobně. Tím se
                        riziko případného výkyvu hodnoty invstice rozkládá. Druhá výhoda je, že se o vaše
                        investice starají odborníci a vy nemusíte dalšího řešit.
                    </p>
                </div>
            </Col>
            <Col className={'pr-0'}>
                <img src={CoolectiveImage} alt='illustrated picture' className={''} />
            </Col>
        </Row>
    )
}

export default CollectiveInvesting
