import React, { Component } from 'react';
import { FormGroup, Card, CardBody, CardFooter, CardHeader, Row, Col, Label, Input, } from 'reactstrap';

class Feedback extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            Feedback
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg="8">
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="select">Select</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="select" name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label for="Name">Name</Label>
                  </Col>
                  <Col xs="12" md="9">
                  <Input type="text"
                    name="eventName"
                    id="eventName"/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="textarea-input">Question</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                      placeholder="Content..." />
                  </Col>
                </FormGroup>
              </Col>
           </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Feedback;
