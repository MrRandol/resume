import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';

const Languages = ({ languages }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <h2 className="category">{t('languages')}</h2>
        <Row>
          {languages.map((language, index) => 
            <Col className="flex-centered" key={"language-"+index}>
              <div className="language">
                <div className="flex-centered language-label">
                  <b>{t(language.name)}</b>
                  <i>{t(language.level)}</i>
                </div>
              </div>
            </Col>
          )} 
        </Row>
    </Container>
  );
};

export default Languages;
