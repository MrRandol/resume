import PropTypes from 'prop-types'

export const basicsPropType = PropTypes.shape({
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
}).isRequired

export const workPropType = PropTypes.arrayOf(PropTypes.shape({
  company: PropTypes.string,
  position: PropTypes.string,
  website: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired

export const educationPropType = PropTypes.arrayOf(PropTypes.shape({
  institution: PropTypes.string,
  area: PropTypes.string,
  studyType: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  gpa: PropTypes.string,
  courses: PropTypes.arrayOf(PropTypes.string),
})).isRequired

export const skillsPropType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  level: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired

export const interestsPropType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired

export const languagesPropType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  level: PropTypes.string,
})).isRequired
