import { Row, Col, Button } from 'react-materialize';
import React from 'react';
import { basicsPropType } from '../common/PropTypes'
import { Trans } from 'react-i18next';

const Home = ({ basics, color }) => {
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
  return (
    <Row className="profile">
      <Col s={12} m={6} l={6}>
        <div className="valign-wrapper">
          <img src={picture}
            alt="avatar"
            className="circle responsive-img"
            style={{border: "0.5em solid " + color.hex}}
          />
          <div className="social">
            {profiles.map(profile => (
              <a key={"social-" + profile.network}
                href={profile.url} target="_blank"
                rel="noopener noreferrer">
                <i className={"light-color social-icon fab fa-" + profile.network.toLowerCase()}>
                </i>
              </a>
            ))}
          </div>
        </div>
      </Col>
      <Col s={12} m={6} l={6}>
      <div className="valign-wrapper">
        <h4 className="name">
          {name}
        </h4>
        <h3 className="light-color label"><Trans>{label}</Trans></h3>
        <p className="summary"><Trans>{summary}</Trans></p>

        <div className="contact-info">
          {phone &&
            <Button className={color.className} >
              <i className="fas fa-phone" /> {phone}
            </Button>
          }
          {website &&
            <Button className={color.className}
                    waves="light"
                    node="a"
                    href={website}>
              <i className="fas fa-globe" /> {website}
            </Button>}
          {email &&
            <Button className={color.className}
                    waves="light"
                    node="a"
                    href={`mailto:${email}`}>
              <i className="far fa-envelope" /> {email}
            </Button>}
        </div>
        </div>
      </Col>
    </Row>
  );
};

Home.defaultProps = {
  basics: basicsPropType
};

export default Home;
