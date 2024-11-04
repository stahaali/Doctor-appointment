import { Col, Container, Row } from "react-bootstrap";
import { specialist } from '../../../data.js'

export default function Specialist() 
{
  return (
    <>
        <section className="specialist-section" id="speciality">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={8}>
                        <div className="special-gap">
                            <h2 className="title">Find by Speciality</h2>
                            <p className="text-desc">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                {
                    specialist.map((item, index) => (
                        <Col key={index} lg={2}>
                           <div className="specialist-wrapper">
                            <div className="specialist-div">
                                    <img src={item.image} alt="" className="img-fluid" />
                                </div>
                                    <p>{item.speciality}</p>
                           </div>
                        </Col>
                    ))
                }
                </Row>
            </Container>
        </section>
    </>
  )
}
