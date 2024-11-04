import { Col, Container, Row } from "react-bootstrap";

export default function About1() 
{
  return (
    <>
        <section className="common-banner">
          <Container className="absolute-center">
              <Row className="justify-content-center">
                <h1>about us</h1>
              </Row>
          </Container>
        </section>
        <section className="about-section">
          <Container>
            <Row>
              <Col lg={3} md={3} xs={12}>
                <img src="/public/assets/images/about/about_image.png" className="img-fluid" alt=""/>
              </Col>
              <Col lg={9} md={9} xs={12}>
                <div className="mission">
                  <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                  <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you are booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
                </div>

                <div className="vission">
                  <h2 className="title">our vission</h2>
                  <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                </div>
                </Col>
            </Row>
          </Container>
        </section>

        <section className="whychooseus-section">
          <Container>
            <Row>
                <h2 className="title">why choose</h2>
            </Row>
            <Row>
                <Col lg={4} md={4} xs={12}>
                  <div className="whychoose-div">
                      <h3>efficiency</h3>
                      <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                  </div>
                </Col>
                <Col lg={4} md={4} xs={12}>
                  <div className="whychoose-div">
                      <h3>Convenience</h3>
                      <p>Access to a network of trusted healthcare professionals in your area.</p>
                  </div>
                </Col>
                <Col lg={4} md={4} xs={12}>
                  <div className="whychoose-div">
                      <h3>Personalization</h3>
                      <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                  </div>
                </Col>
            </Row>
          </Container>
        </section>
    </>
  )
}
