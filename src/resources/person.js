import profilePic from './img/profile.jpg';

import worldine from './img/worldline.png';
import ubisoft from './img/ubisoft.png';
import nalys from './img/nalys.png';
import utbm from './img/utbm.png';
import captive from './img/captive.png';
import sii from './img/sii.png';

export const person = {
  basics: {
    name: 'Maxime CHOFFAT',
    label: 'Product Owner',
    picture: profilePic,
    email: 'maxime.choffat@gmail.com',
    phone: '+33 6 33 56 36 25',
    summary: 'my_summary',
    location: {
      address: '',
      postalCode: '',
      city: 'Montréal',
      countryCode: 'CANADA',
      region: 'Québec',
    },
    profiles: [
      {
        network: 'GitHub',
        username: 'MrRandol',
        url: 'https://github.com/MrRandol',
      },
      {
        network: 'Twitter',
        username: 'Mr_Randol',
        url: 'https://twitter.com/Mr_Randol',
      },
      {
        network: 'LinkedIn',
        username: 'maxime-choffat',
        url: 'https://www.linkedin.com/in/maxime-choffat-b2423a75/',
      },
    ]
  },
  skills: [
    { type: "methodology", name: "DevOps", level: "95" },
    { type: "methodology", name: "Agile", level: "90" },
    { type: "methodology", name: "Scrum", level: "90" },
    { type: "methodology", name: "GestionDeProjet", level: "50" },

    { type: "tools", name: "Gitlab", level: "95" },
    { type: "tools", name: "Jira", level: "90" },
    { type: "tools", name: "Confluence", level: "90" },
    { type: "tools", name: "Jenkins", level: "95" },
    { type: "tools", name: "Git", level: "95" },

  ],
  work: [
    {
      company: 'Ubisoft Montréal',
      logo: ubisoft,
      position: 'online_sysops',
      website: 'https://montreal.ubisoft.com/',
      startDate: '2019-06-01',
      endDate: null,
      summary: "ubisoft_summary",
      highlights: [
        'JavaScript',
        'C#',
        'Python',
        'Angular',
        'Jira',
        'Confluence',
        'Kubernetes',
        'Gitlab',
        'Docker',
        'Git',
        'Agile',
        'DevOps',
        'Analysis',
        'Architecture'
      ],
    },
    {
      company: 'SII Canada',
      logo: sii,
      position: 'devops_cata_inte',
      website: 'https://www.siicanada.com/',
      startDate: '2019-01-01',
      endDate: '2019-06-01',
      summary: "sii_summary",
      highlights: [
        'Jenkins',
        'SonarQube',
        'Nexus',
        'Jira',
        'Bitbucket',
        'Confluence',
        'Nginx',
        'Ansible',
        'Git',
        'Maven',
        'Gradle',
        'Agile',
        'DevOps',
        'Analysis',
        'Architecture',
        'Training'
      ],
    },
    {
      company: 'Nalys',
      logo: nalys,
      position: 'nalys_title',
      website: 'https://www.nalys-group.com/en/home',
      startDate: '2017-02-01',
      endDate: '2018-08-01',
      summary: 'nalys_summary',
      highlights: [
        'Jenkins',
        'SonarQube',
        'Nexus',
        'Gitlab',
        'Jira',
        'Kubernetes',
        'Docker',
        'Git',
        'Maven',
        'Agile',
        'Devops',
        'Training',
        'Artifactory',
        'Conluence',
        'TFS',
        'Gradle',
        'JavaScript',
        'Java',
        'OpenLayers',
        'Nginx',
        'Geoserver',
        'Wildfly',
        'SIG'
      ]
    },
    {
      company: 'Worldline',
      logo: worldine,
      position: 'worldline_title',
      website: 'https://worldline.com/',
      startDate: '2012-02-01',
      endDate: '2015-07-01',
      summary: 'worldline_summary',
      highlights: [
        "Project Management",
        "Flex",
        "JavaScript",
        "Java",
        "Bash",
        "Nginx",
        "Tomcat",
        "NodeJs",
        "Geoserver",
        "Rok4",
        "OpenScales",
        "ReactJs",
        "Cucumber",
        "PostgreSQL (PostGIS)",
        "MySQL",
        "ElasticSearch",
        "Redis",
        "Maven",
        "Git",
        "Docker",
        "Vagrant",
        "Jenkins",
        "Nexus",
        "Jira",
        "Agile",
        "DevOps",
        "SIG",
        "Architecture",
        "Mercurial",
      ]
    },
    {
      company: 'Captive Studio',
      logo: captive,
      position: 'web_developer',
      website: 'https://www.captive.fr/',
      startDate: '2010-08-01',
      endDate: '2011-02-01',
      summary: 'captive_studio_summary',
      highlights: [
        "Ruby On Rails",
        "MySQL",
        "Agile",
        "Extreme Programming"
      ]
    }
  ],
  education: [
    {
      institution: 'UTBM (Université de Technologie de Belfort Montbéliard), France',
      logo: utbm,
      website: 'https://www.utbm.fr/',
      area: 'utbm_area',
      studyType: 'utbm_studytype',
      startDate: '2007-09-01',
      endDate: '2012-06-01',
      gpa: '0.0',
      courses: [
        'education_english_course'
      ],
    },
    {
      institution: 'Lycée Saint André - Colmar, France',
      area: 'st_andre_area',
      studyType: 'st_andre_studytype',
      startDate: '2003-08-01',
      endDate: '2004-05-01',
      gpa: '0.0',
      courses: [
        'education_spe_math'
      ],
    }
  ],
  interests: [
    {
      name: 'Hobbies',
      keywords: [
        'hobby_high_tech',
        'hobby_travel',
      ],
    },
    {
      name: 'Sports',
      keywords: [
        'sport_fencing',
        'sport_judo',
      ],
    },
  ],
  languages: [
    {
      name: 'french',
      level: 'native_speaker',
      percent: 100
    },
    {
      name: 'english',
      level: 'fluent',
      percent: 90
    },
  ]
};
