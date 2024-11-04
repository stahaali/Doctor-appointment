import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function MyProfile() {
  const [userData, setUserData] = useState({
    name: 'Syed Taha Ali Shahid',
    image: '/assets/images/profile_pic.png', // Placeholder image path
    email: 'staha086@gmail.com',
    phone: '+1 123 123 1234',
    address: '57th Cross, Richmond Circle, Church Road, London',
    gender: 'Male',
    birthday: '20 July, 2024',
  });

  const [isEdit, setEdit] = useState(false);
  const [tempData, setTempData] = useState(userData);

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleSaveClick = () => {
    setUserData(tempData);
    setEdit(false);
  };

  const handleCancelClick = () => {
    setTempData(userData);
    setEdit(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      // Use URL.createObjectURL to create a preview of the image
      setTempData({
        ...tempData,
        image: URL.createObjectURL(files[0])
      });
    } else {
      setTempData({
        ...tempData,
        [name]: value,
      });
    }
  };

  return (
    <>
      <section className="common-banner">
        <Container className="absolute-center">
          <Row className="justify-content-center">
            <h1>Profile</h1>
          </Row>
        </Container>
      </section>

      <section className="profile-section">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="profile-pic">
                <img src={tempData.image} className="img-fluid profile-picimage" alt="Profile" />
                <div className="profile-description">
                  {isEdit ? (
                    <Form>
                      <Form.Group>
                        <Form.Label>Profile Image</Form.Label>
                        <Form.Control 
                          type="file" 
                          name="image" 
                          onChange={handleChange} 
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="name" 
                          value={tempData.name} 
                          onChange={handleChange} 
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="email" 
                          value={tempData.email} 
                          onChange={handleChange} 
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="phone" 
                          value={tempData.phone} 
                          onChange={handleChange} 
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="address" 
                          value={tempData.address} 
                          onChange={handleChange} 
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Gender</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="gender" 
                          value={tempData.gender} 
                          onChange={handleChange} 
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="birthday" 
                          value={tempData.birthday} 
                          onChange={handleChange} 
                        />
                      </Form.Group>

                      <Button variant="success" onClick={handleSaveClick}>Save</Button>{' '}
                      <Button variant="secondary" onClick={handleCancelClick}>Cancel</Button>
                    </Form>
                  ) : (
                    <>
                      <h4 className="name-title">Name: {userData.name}</h4>
                      <h4 className="sub-title">Contact Information</h4>
                      <p>Email: {userData.email}</p>
                      <p>Phone: {userData.phone}</p>
                      <p>Address: {userData.address}</p>

                      <h4 className="sub-title sub-title2">Basic Information</h4>
                      <p>Gender: {userData.gender}</p>
                      <p>Birthday: {userData.birthday}</p>

                      <div className="edit">
                        <a href="#" onClick={(e) => { e.preventDefault(); handleEditClick(); }}>Edit</a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
