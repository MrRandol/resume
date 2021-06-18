import React from 'react';
import { basicsPropType } from '../common/PropTypes'
import { useTranslation } from 'react-i18next';

const Home = ({ basics, color }) => {
  const { t, i18n } = useTranslation();
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
    <div className="profile">
      <div s={12} m={6} l={6}>
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
      </div>
      <div s={12} m={6} l={6}>
      <div className="valign-wrapper">
        <h4 className="name">
          {name}
        </h4>
        <h3 className="light-color label">{t(label)}</h3>
        <p className="summary">{t(summary)}</p>

        <div className="contact-info">
          {phone &&
            <button className={color.className} >
              <i className="fas fa-phone" /> {phone}
            </button>
          }
          {website &&
            <button className={color.className}
                    waves="light"
                    node="a"
                    href={website}>
              <i className="fas fa-globe" /> {website}
            </button>}
          {email &&
            <button className={color.className}
                    waves="light"
                    node="a"
                    href={`mailto:${email}`}>
              <i className="far fa-envelope" /> {email}
            </button>}
        </div>
        </div>
      </div>
    </div>
  );
};

Home.defaultProps = {
  basics: basicsPropType
};

export default Home;
