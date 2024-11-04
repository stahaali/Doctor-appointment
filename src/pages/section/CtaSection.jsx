import { Col, Container, Row } from "react-bootstrap";

export default function CtaSection() 
{
  return (
    <>
        <section className="cta-section">
            <Container>
                <div className="cta-bg">
                    <Row>
                        <Col lg={8} className="my-auto">
                            <div className="cta-details">
                                <h2 className="title">Book Appointment <br/> With 100+ Trusted Doctors</h2>
                                <a href="#">create account</a>
                            </div>
                        </Col>
                        <Col lg={4} className="cta-imagediv">
                            <div className="cta-image">
                                <img src="/public/assets/images/cta/appointment_img.png" className="img-fluid" alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    </>
  )
}
