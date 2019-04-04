import { Row, Col, Button } from 'react-materialize';
import React from 'react';
import { basicsPropType } from '../common/PropTypes'

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
    <div className="profile row">
      <div className="infos col s8">
        <h4 className="name">
          {name}
        </h4>
        <h3 className="light-color label">{label}</h3>
        <p className="summary">{summary}</p>

        <div>
          {phone &&
            <Button className="light-blue lighten-4" >
              <i className="fas fa-phone" /> {phone}
            </Button>
          }
          {email &&
            <Button className="light-blue lighten-4"
                    waves="light"
                    node="a"
                    href={`mailto:${email}`}>
              <i className="far fa-envelope" /> {email}
            </Button>}
        </div>
      </div>

      <div className="picture col s4">
        <img src={picture} alt="avatar" className="avatar circle responsive-img" />
        <div className="social">
          {profiles.map(profile => (
            <i key={"social-" + profile.network}
              className={"light-color social-icon fab fa-" + profile.network.toLowerCase()}>
            </i>
          ))}
        </div>
      </div>
    </div>
  );
};

Home.defaultProps = {
  basics: basicsPropType
};

export default Home;
