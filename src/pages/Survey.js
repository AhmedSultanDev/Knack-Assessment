import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { Card, Button, ButtonGroup, Breadcrumb } from '@themesberg/react-bootstrap';
import SurveyBuilder from '../components/survey_form/survey/SurveyBuilder';

export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            
            <Breadcrumb.Item active>Survey Builder</Breadcrumb.Item>
          </Breadcrumb>
          <h4 className="d-flex justify-content-between flex-wrap">Knack Survey Builder</h4>
         
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <ButtonGroup>
            <Button variant="outline-primary" size="sm">Share</Button>
            <Button variant="outline-primary" size="sm">Export</Button>
          </ButtonGroup>
        </div>
      </div>

      {/* We embed our survey builder in a responsive card wrapperso the user can create as many questions as they want to  */}
      <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <SurveyBuilder/>
      </Card.Body>
    </Card>
    </>
  );
};
