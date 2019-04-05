import { Row, Col, Button } from 'react-materialize';
import React from 'react';
import { basicsPropType } from '../common/PropTypes'

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
      <Col className="picture" s="12" m="6" l="6">
        <img src={picture}
          alt="avatar"
          className="circle responsive-img"
          style={{border: "10px solid " + color.hex}}
        />
        <div className="social">
          {profiles.map(profile => (
            <i key={"social-" + profile.network}
              className={"light-color social-icon fab fa-" + profile.network.toLowerCase()}>
            </i>
          ))}
        </div>
      </Col>
      <Col className="picture" s="12" m="6" l="6">
        <h4 className="name">
          {name}
        </h4>
        <h3 className="light-color label">{label}</h3>
        <p className="summary">{summary}</p>

        <div>
          {phone &&
            <Button className={color.ClassName} >
              <i className="fas fa-phone" /> {phone}
            </Button>
          }
          {website &&
            <Button className={color.ClassName}
                    waves="light"
                    node="a"
                    href={website}>
              <i className="fas fa-globe" /> {website}
            </Button>}
          {email &&
            <Button className={color.ClassName}
                    waves="light"
                    node="a"
                    href={`mailto:${email}`}>
              <i className="far fa-envelope" /> {email}
            </Button>}
        </div>
      </Col>
    </Row>
  );
};

Home.defaultProps = {
  basics: basicsPropType
};

export default Home;
