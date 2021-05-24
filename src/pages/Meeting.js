import React from "react";
import { Col, Row} from '@themesberg/react-bootstrap';
import { ProfileCardWidget } from "../components/Widgets";

import Calendar from './MyCalendar.tsx'

export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        
      </div>

      <Row>
        <Col xs={12} xl={8}>
          <Calendar/>
        </Col>

        <Col xs={12} xl={4}>
          <Row>
            <Col xs={15}>
              <ProfileCardWidget />
            </Col>
            
          </Row>
        </Col>
      </Row>
    </>
  );
};