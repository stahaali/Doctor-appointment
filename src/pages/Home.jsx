import { Col, Container, Row } from "react-bootstrap";
import Specialist from "./section/specialist";
import DoctorsSection from "./section/DoctorsSection";
import CtaSection from "./section/CtaSection";

export default function Home() 
{
  return (
    <>
      <section className="homebanner">
        <Container className="absolute-center bg-blue">
            <Row className="justify-content-between">
                <Col lg={6} md={6} xs={12} className="my-auto">
                  
                  <div className="banner-content">
                    <h1>Book Appointment With Trusted Doctors</h1>
                  </div>

                  <Row className="align-items-center">
                        <Col lg={4} md={4} xs={12}>
                            <div className="profile-image">
                                <ul>
                                  <li><img src="/public/assets/images/homebanner/profile/1.png" alt="" className="img-fluid"/></li>
                                  <li><img src="/public/assets/images/homebanner/profile/2.png" alt="" className="img-fluid"/></li>
                                  <li><img src="/public/assets/images/homebanner/profile/3.png" alt="" className="img-fluid"/></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={8} md={8} xs={12}>
                          <p className="banner-txt">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                        </Col>
                  </Row>

                  <div className="book-appointment">
                    <a href="#speciality">book apppointment</a>
                  </div>

                </Col>
                <Col lg={6} md={6} xs={12}>   
                    <div className="header-image">
                        <img src="/public/assets/images/homebanner/header_img.png" alt="" className="img-fluid"/>
                    </div>                 
                </Col>
            </Row> 
        </Container>  
      </section>     
      
      <Specialist/>
      <DoctorsSection/>
      <CtaSection/>
      
    </>
  )
}
