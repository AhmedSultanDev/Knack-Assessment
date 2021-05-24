
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';

import { CounterWidget, TeamMembersWidget, SalesValueWidget, SalesValueWidgetPhone } from "../../components/Widgets";


export default () => {
  return (
    <>

    {/*The dashboard mainly consists of some widgets and icons
    taken from bootstraps like themesberg and fontawesome */}

      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
            <FontAwesomeIcon icon={faPlus} className="me-2" />New Task
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faTasks} className="me-2" /> New Task
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" /> Upload Files
            </Dropdown.Item>
            
            <Dropdown.Divider />
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Customers"
            title="345k"
            period="Feb 1 - Apr 1"
            percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Revenue"
            title="$43,594"
            period="Feb 1 - Apr 1"
            percentage={28.4}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
        </Col>
        <Col xs={13} lg={10} className="mb-4">
          <TeamMembersWidget />
        </Col>
      </Row> 
    </>
  );
};
