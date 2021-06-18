import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Profile = ({ basics }) => {
  const { t } = useTranslation();
  const {
    name,
    label,
    picture,
    email,
    phone,
    website,
    summary,
    profiles
  } = basics

  let show = false;

  const handleClose = () => show = false;
  const handleShow = () => show = true;

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Container className="d-flex justify-content-center">
            <div className="profile-pic">
              <div className="offset-border back"></div>
              <Image src={picture} />
              <div className="offset-border front"></div>
            </div>
          </Container>
        </Col>
        <Col md={8}>


          <h1 className="intro-title pixel-border">{name}</h1>
          <h2>{t(label)}</h2>
          <ReactMarkdown>{t(summary)}</ReactMarkdown>

          <hr className="small"/>

          <Container fluid>
            <Row>
              <Col className="flex-centered"><h3 className="category">{t('contact')}</h3></Col>
            </Row>

            <Row>
              <Col>
                <Container className="flex-centered">
                  <h3>Email</h3>
                  <a className="profile-email" target="_blank" href={`mailto:${email}`}>
                    <i className="fas fa-envelope" /> {email}
                  </a>
                </Container>
              </Col>
              <Col>
                <Container className="flex-centered">
                  <h3>Socials</h3>
                  <div>
                    {profiles.map(profile => (
                      <a key={"social-" + profile.network} href={profile.url} target="_blank" rel="noopener noreferrer">
                        <i className={"social-icon fab fa-" + profile.network.toLowerCase()}></i>
                      </a>
                    ))}
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
