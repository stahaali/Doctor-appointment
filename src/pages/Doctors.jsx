import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

export default function Doctors() 
{
  const { speciality } = useParams();

  const [filterDoc, setFilterDoc] = useState([]); 
  const [selectedSpeciality, setSelectedSpeciality] = useState(speciality || ''); 

  const { doctors } = useContext(AppContext); 

  const applyFilter = () => {
    if (selectedSpeciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === selectedSpeciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter(); 
  }, [doctors, selectedSpeciality]);

  const handleSpecialityClick = (speciality) => {
    setSelectedSpeciality(speciality); 
  };

  return (
    <>
      <section className="doctor-sectionlist">
        <Container>
          <Row className="mb-3">
            <p className="sectionlist-txt">Browse through the doctors specialist.</p>
          </Row>
          <Row>
            <Col lg={3} md={3} xs={12}>
              <div className="specialist-column">
                <ul>
                  {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((speciality) => (
                    <li key={speciality} onClick={() => handleSpecialityClick(speciality)}>
                      <p style={{ cursor: 'pointer' }}>{speciality}</p> 
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={9} md={9} xs={12}>
              <Row>
                    {filterDoc.map((item, index) => (
                      <Col key={index} lg={3} className="mb20">
                        <a href={`/appointment/${item._id}`} className="doctors-anchor">
                          <div className="doctors-column">
                            <div className="doctors-header">
                              <img
                                src={item.image}
                                className="img-fluid"
                                alt={item.name}
                              />
                            </div>
                            <div className="doctors-body">
                              <p className="doctor-title">{item.name}</p>
                              <p className="doctor-text">{item.speciality}</p>
                            </div>
                          </div>
                        </a>
                      </Col>
                    ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
