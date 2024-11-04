import { Col, Container, Row } from "react-bootstrap";

export default function Contact() 
{
  return (
    <>
        <section className="common-banner">
          <Container className="absolute-center">
              <Row className="justify-content-center">
                <h1>contact us</h1>
              </Row>
          </Container>
        </section>
        <section className="contact-section">
          <Container>
            <Row>
              <Col lg={6} md={6} xs={12}>
                <img src="/public/assets/images/contact/contact_image.png" className="img-fluid" alt=""/>
              </Col>
              <Col lg={6} md={6} xs={12}>
                <div className="mission">
                    <h2 className="title">Our OFFICE</h2>

                    <div className="contact-list">
                      <ul>
                        <li>54709 Willms Station 
                        Suite 350, Washington, USA</li>
                        <li>Tel: (415) 555‑0132</li>
                        <li>Email: greatstackdev@gmail.com</li>
                      </ul>
                    </div>
                </div>               
                </Col>
            </Row>
          </Container>
        </section>
    </>
  )
}
