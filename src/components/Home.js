import { Row, Col, Button } from 'react-materialize';
import React from 'react';
import PropTypes from 'prop-types'

const Home = ({basics}) => {
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
    <div>
      <Row>
        <Col s={3}>
          <img src={picture} alt="avatar" className="circle responsive-img" style={{ border: '10px solid rgba(0,0,0,.05)' }} />
        </Col>
        <Col s={9}>
          <h4 style={{ fontSize: '50px' }}>
            {name}
          </h4>
          {/*<Profiles profiles={profiles} />*/}
          <h4 color="grey" size="large">{label}</h4>
          <h4 color="grey" style={{ marginTop: '0px' }}>
            {summary}
          </h4>
          <div>
            {phone &&
              <Button
                style={{ margin: '10px' }}
                size="tiny"
                icon="phone"
                content={phone}
              />}
            {email &&
              <Button waves="light" style={{ margin: '10px' }} color="#333333" node="a" href={`mailto:${email}`}>
                {email}
              </Button>}
            {website &&
              <Button waves="light" style={{ margin: '10px' }} color="#333333" node="a" href={website}>
                {website}
              </Button>
              }
          </div>
        </Col>
      </Row>
    </div>
  );
};

Home.defaultProps = {
  basics: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    picture: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    summary: PropTypes.string,
    location: PropTypes.shape({
      address: PropTypes.string,
      postalCode: PropTypes.string,
      city: PropTypes.string,
      countryCode: PropTypes.string,
      region: PropTypes.string,
    }),
    profiles: PropTypes.arrayOf({
      network: PropTypes.string,
      username: PropTypes.string,
      url: PropTypes.string,
    })
  })
};

export default Home;
