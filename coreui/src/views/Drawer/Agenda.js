import React, { Component } from 'react';
import { Form, InputGroup, InputGroupAddon, InputGroupText, Button, FormText, FormGroup, Card, CardBody, CardFooter, CardHeader, Row, Col, Label, Input, } from 'reactstrap';
import { TextMask, InputAdapter } from 'react-text-mask-hoc';
class Agenda extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            Agenda
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg="8">
                <ul className="agendalist">
                  <li>
                    <div className="date">8:30</div>
                    <div className="content">
                      <div className="summary">
                        <div className="title">How we can good?</div>
                        <div className="document">PDF</div>
                      </div>
                      <div className="detail">
                        <div className="speaker">James Columbia</div>
                        <div className="location">Hall 3</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="date">8:30</div>
                    <div className="content">
                      <div className="summary">
                        <div className="title">How we can good?</div>
                        <div className="document">PDF</div>
                      </div>
                      <div className="detail">
                        <div className="speaker">James Columbia</div>
                        <div className="location">Hall 3</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="date">8:30</div>
                    <div className="content">
                      <div className="summary">
                        <div className="title">How we can good?</div>
                        <div className="document">PDF</div>
                      </div>
                      <div className="detail">
                        <div className="speaker">James Columbia</div>
                        <div className="location">Hall 3</div>
                      </div>
                    </div>
                  </li>

                </ul>
             </Col>
             </Row>

          </CardBody>

        </Card>
      </div>
    );
  }
}

export default Agenda;
