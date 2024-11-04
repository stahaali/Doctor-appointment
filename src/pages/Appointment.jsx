import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from "../context/AppContext";

export default function Appointment() {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState({});
  const daysofweek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);

  const fetchDocInfo = () => {
    const foundDoc = doctors.find(doc => doc._id === docId);
    setDocInfo(foundDoc || {}); // Set to empty object if doctor is not found
  };

  const getAvailableSlot = () => {
    const tempDocSlots = [];
    let today = new Date();
  
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
  
      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);
  
      if (i === 0) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
  
      let timeSlots = [];
  
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
  
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
  
      tempDocSlots.push(timeSlots);
    }
  
    setDocSlots(tempDocSlots);
  };

  useEffect(() => {
    if (doctors && docId) {
      fetchDocInfo();
    }
  }, [doctors, docId]);


  useEffect(() => {
    getAvailableSlot();
  }, [docInfo]);
  
  return (
    <>
      <section className="appointment-section">
        <Container>
          <Row>
            <Col lg={3} md={3} xs={12}>
              <div className="appointment-column">
              <img
                src={docInfo.image} 
                className="img-fluid"
                alt={docInfo?.name || 'Doctor Image'}
              />
              </div>
            </Col>
            <Col lg={9} md={9} xs={12}>
              <Row>
              <div className="appointment-row">
                  <div className="appointmentrow-title">
                    <h2>{docInfo?.name || 'Name not available'}</h2> <img src="/public/assets/images/doctors/badge-icon.png" className="img-fluid badge-icon" alt="" />
                  </div>
                  <div className="appointment-tagline">
                    <p>{docInfo?.degree || 'Degree not available'}</p>
                    <p>-</p>
                    <p>{docInfo?.speciality || 'Speciality not available'}</p>
                    <p className="appointment-experience">{docInfo?.experience || 'Experience not available'}</p>
                  </div>
                <div className="about-desc"><h4>About <FontAwesomeIcon icon={faInfo} /></h4></div>
                <p>{docInfo?.about || 'Information not available'}</p>
                <p><strong>Appointment Fee:</strong> {docInfo?.fees || 'Fees not available'}</p>
              </div>
              </Row>
              <Row>
                <div className='appointment-slot'>
                  {docSlots.length > 0 &&
                    docSlots.map((item, index) => (
                      <div
                        className={`slot ${index === slotIndex ? 'selected' : ''}`}
                        key={index}
                        onClick={() => setSlotIndex(index)}
                      >
                        <div className='appointmentslot-content'>
                          <p>{daysofweek[index]}</p> {/* Use index to directly access day names */}
                          <p>{item[0] && item[0].datetime.getDate()}</p>
                        </div>
                      </div>
                    ))}
                </div>
              <div className='appointment-time'>
                {docSlots.length > 0 &&
                  docSlots[slotIndex].slice(0,7).map((item, index) => (
                    <div className="time-slot" key={index}>
                      <p>{item.time.toLowerCase()}</p>
                    </div>
                  ))}
              </div>

              <button className='book-appointmetnbtn'>book an appointment</button>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
