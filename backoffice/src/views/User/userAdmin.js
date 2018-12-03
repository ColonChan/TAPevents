import React, { Component } from 'react';
import {
  Modal, ModalBody, ModalFooter, ModalHeader, Row, Col, FormGroup, Label, Button, CardHeader, Card, CardBody, Input
} from 'reactstrap';



class userAdmin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      modalEdit: false,
      userid: "email@domain.com"
    };
    this.toggle = this.toggle.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleEdit() {
    this.setState({
      modalEdit: !this.state.modalEdit,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <span className="header">Admin User List</span>
            <div className="rightbox">
              <Button block onClick={this.toggle} className="btncreate"><i className="icon icon-user-follow font-lg"></i> Add User</Button>
            </div>
          </CardHeader>
          <CardBody>
            <ul className="userlist-box">
              <li className="flexbox userlist header">
                <div className="item">#</div>
                <div className="item">User ID</div>
                <div className="item">Role</div>
                <div className="item">Status</div>
                <div className="item">Action</div>
              </li>

              <li className="flexbox userlist">
                <div className="item">1</div>
                <div className="item">username@yourdomain.com</div>
                <div className="item">Admin</div>
                <div className="item">Active</div>
                <div className="item">
                  <Button color="primary" onClick={this.toggleEdit}><i className="icon-note font-lg"></i> Edit</Button>
                </div>
              </li>

              <li className="flexbox userlist">
                <div className="item">2</div>
                <div className="item">username@yourdomain.com</div>
                <div className="item">Owner</div>
                <div className="item">Active</div>
                <div className="item">
                  <Button color="primary" onClick={this.toggleEdit}><i className="icon-note font-lg"></i> Edit</Button>
                </div>
              </li>

              <li className="flexbox userlist">
                <div className="item">3</div>
                <div className="item">username@yourdomain.com</div>
                <div className="item">Guest</div>
                <div className="item">Inactive</div>
                <div className="item">
                  <Button color="primary" onClick={this.toggleEdit}><i className="icon-note font-lg"></i> Edit</Button>
                </div>
              </li>
            </ul>
          </CardBody>
        </Card>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add User</ModalHeader>
          <ModalBody>
            <Row>
              <Col md="12">
                <FormGroup>
                  <Label>User ID</Label>
                  <Input type="text" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                  <Label>User Role</Label>
                  <Input type="select" id="UserRole">
                    <option value="">Select</option>
                    <option value="1">Admin</option>
                    <option value="2">Owner</option>
                    <option value="3">Staff</option>
                    <option value="4">Guest</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label>Status</Label>
                  <Input type="select" id="Status">
                    <option value="">Select</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                    <option value="3">Pending</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input type="password" placeholder="Password"/>
                </FormGroup>
                <FormGroup>
                  <Label>Confirm Password</Label>
                  <Input type="password" placeholder="Confirm Password"/>
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Add</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.modalEdit} toggle={this.toggleEdit} className={this.props.className}>
          <ModalHeader toggle={this.toggleEdit}>Edit User</ModalHeader>
          <ModalBody>
            <Row>
              <Col md="12">
                <FormGroup>
                  <Label>User ID</Label>
                  <Input type="text" placeholder="Email" defaultValue={this.state.userid} readOnly />
                </FormGroup>
                <FormGroup>
                  <Label>User Role</Label>
                  <Input type="select" id="UserRole" defaultValue="1">
                    <option value="">Select</option>
                    <option value="1">Admin</option>
                    <option value="2">Owner</option>
                    <option value="3">Staff</option>
                    <option value="4">Guest</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label>Status</Label>
                  <Input type="select" id="Status" defaultValue="1">
                    <option value="">Select</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                    <option value="3">Pending</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input type="password" placeholder="Password" />
                </FormGroup>
                <FormGroup>
                  <Label>Confirm Password</Label>
                  <Input type="password" placeholder="Confirm Password"/>
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleEdit}>Add</Button>{' '}
            <Button color="secondary" onClick={this.toggleEdit}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default userAdmin;
