import { useContext } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { AppContext } from '../../context/AppContext'; 
import { useNavigate } from 'react-router-dom';

export default function DoctorsSection() 
{
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext); 

    return (
        <>
            <section className="doctors-section">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={8}>
                            <div className="special-gap">
                                <h2 className="title">Top Doctors to Book</h2>
                                <p className="text-desc">Simply browse through our extensive list of trusted doctors.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {
                            doctors.slice(0, 8).map((item, index) => (
                                <Col key={index} lg={3} className="mb20">
                                    <div className="doctors-column">
                                        <div className="doctors-header">
                                            <img src={item.image} className="img-fluid" alt={item.name} />
                                        </div>
                                        <div className="doctors-body">
                                            <p className="doctor-title">{item.name}</p>
                                            <p className="doctor-text">{item.speciality}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                    <Col lg={12}>
                        <button onClick={() => { navigate('/doctors'); window.scrollTo(0, 0); }} className="read-more">more</button>
                    </Col>
                </Container>
            </section>
        </>
    );
}
