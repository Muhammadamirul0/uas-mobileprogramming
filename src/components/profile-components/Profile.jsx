import React, { useState, useEffect, Fragment } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import HeaderComponent from '../header-components/HeaderComponent';
import { getUsersAsync } from '../../redux/services/users';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await getUsersAsync();
        setUserProfile(usersData[0]); // Menggunakan data dari pengguna pertama sebagai contoh
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <HeaderComponent />
                {/* <div className='pb-4'>
                    <Image width={'100%'}  src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-1400,pr-true,f-auto/uploads/page/banner/ahm-update-website-slide16-homedbanner-1366x573-1-26102023-031757.jpg" fluid />
                </div> */}
      <Container className="mt-4">
        <Row>
          <Col md={12}>
            {/* Kolom kosong untuk mendorong konten ke kiri */}
          </Col>
          <Col md={3}>
            <h1 className="mb-4">My Profile</h1>
            {userProfile && (
              <div>
                <p>
                  <strong>Name:</strong> {userProfile.name}
                </p>
                <p>
                  <strong>Email:</strong> {userProfile.email}
                </p>
                <p>
                  <strong>Address:</strong> {userProfile.address}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {userProfile.date_of_birth}
                </p>
                <p>
                  <strong>Place of Birth:</strong> {userProfile.place_of_birth}
                </p>
                {/* <p><strong>ID:</strong> {userProfile.id}</p> */}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Profile;
