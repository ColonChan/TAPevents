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
                <FormGroup>
                  <Label for="startDate">Start Time</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText><i className="fa fa-clock-o"></i></InputGroupText>
                    </InputGroupAddon>
                    <TextMask
                      mask={[/\d/, /\d/, ':', /\d/, /\d/]}
                      Component={InputAdapter}
                      className="form-control"
                    />
                  </InputGroup>
                  <FormText color="muted">
                    ex. 09:30
                                </FormText>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" placeholder="Enter name" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="vat">Location</Label>
                  <Input type="text" id="vat"/>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="vat">Description</Label>
                  <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                    placeholder="Content..." />
                </FormGroup>
             </Col>
             <Col lg="4">
                <FormGroup>
                  <Label htmlFor="vat">Speaker Name</Label>
                  <Input type="text" id="vat" />
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="file-input">Document</Label>
                  </Col>
                  <Col md="9">
                    <div class="btnupload">
                      <button class="btn">Upload file</button>
                      <Input type="file" id="file-input" name="file-input" />
                    </div>
                  </Col>
                </FormGroup>
             </Col>
             </Row>

          </CardBody>
          <CardFooter>
            <FormGroup>
              <Button type="submit" color="primary" className="mr-1 btnsubmit">Submit</Button>
              <Button type="reset" className="mr-1 btncancel">Cancel</Button>

            </FormGroup>

          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Agenda;
