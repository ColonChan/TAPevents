import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import logoWhite from '../../../assets/img/brand/logowhite.svg'
import mainbk from '../../../assets/img/mainbk.jpg'

class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center" style={{ position: 'relative' }}>
        <span className="frontbk" />
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4 sibox">
                  <CardBody className="login-form text-center">
                    <h1>Admin Login</h1>
                    <p className="text-muted mb-6">Sign In to manage your events</p>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="username" />
                    </InputGroup>
                    <div className="wraning-msg">
                      {/* Warning message for LoginID */}
                    </div>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="current-password" />
                    </InputGroup>
                    <div className="wraning-msg">
                      {/* Warning message for Password */}
                    </div>
                    <Row>
                      <Col xs="12" className="mb-6">
                        <Button color="link" className="px-0 pt-0">Forgot password?</Button>
                      </Col>
                      <Col xs="12">
                        <Button color="primary" className="px-4 btn-brand">Login</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="text-white py-4 d-md-down-none sibar">
                  <CardBody className="text-center p-3">
                      <div className="inner-up">
                        <span>Welcome to</span>
                        <span><img src={logoWhite} className="svg-logowhite" alt="TAPevents" /></span>
                        <span>Events Management BackOffice</span>
                      </div>
                      <div className="inner-down">
                        <p>Have problems with login issues?</p>
                        <Button color="primary" className="mt-3 btn-flat px-4">Contact Us</Button>
                        {/* Suggest: button onclick mailto: something like HelpDesk */}
                      </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
