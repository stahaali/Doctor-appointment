import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <>
        <section className="footer">
          <Container>
            <Row className="justify-content-between upper-footer">
                <Col lg={6} md={6} xs={12}>
                  <div className="footer-txt">
                      <div className="footerlogo">
                        <img src="/public/assets/images/logo.svg" className="img-fluid" alt="" />
                      </div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </Col>    
                <Col lg={6} md={6} xs={12}>
                  <Row className="justify-content-between">
                      <Col lg={6} md={6} xs={12}>
                        <div className="pl20">
                          <div className="widget">
                              <h6>company</h6>
                          </div>
                          <div className="footer-menu">
                              <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">contact us</a></li>
                                <li><a href="#">privacy policy</a></li>
                              </ul>
                          </div>   
                        </div>               
                      </Col>    
                      <Col lg={6} md={6} xs={12}>
                          <div className="pl20">
                            <div className="widget">
                                <h6>get in touch</h6>
                            </div>
                            <div className="footer-menu">
                                <ul>
                                  <li><a href="#">+0-000-000-000</a></li>
                                  <li className="email"><a href="#">greatstackdev@gmail.com</a></li>
                                </ul>
                            </div>
                          </div>
                      </Col>    
                  </Row>
                </Col>          
            </Row>
            <Row className="bottom-footer">
                <p>Copyright © 2024 GreatStack - All Right Reserved.</p>
            </Row>
          </Container>
        </section>
    </>
  )
}
