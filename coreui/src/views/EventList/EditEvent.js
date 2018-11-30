import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, InputGroup, InputGroupAddon, InputGroupText, FormText, Button, Card, CardHeader, CardBody, Col, CustomInput, Form, FormFeedback, FormGroup, Label, Input, Row, CardFooter } from 'reactstrap';
import { TextMask, InputAdapter } from 'react-text-mask-hoc';
import { Formik } from 'formik';
import * as Yup from 'yup'


const validationSchema = function (values) {
  return Yup.object().shape({
    eventName: Yup.string()
      .min(2, `Event Name has to be at least 2 characters`)
      .required('Event Name is required'),
    talkerName: Yup.string()
      .min(1, `Last name has to be at least 1 character`)
      .required('Last name is required'),
  })
}

const validate = (getValidationSchema) => {
  return (values) => {
    const validationSchema = getValidationSchema(values)
    try {
      validationSchema.validateSync(values, { abortEarly: false })
      return {}
    } catch (error) {
      return getErrorsFromValidationError(error)
    }
  }
}

const getErrorsFromValidationError = (validationError) => {
  const FIRST_ERROR = 0
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    }
  }, {})
}

const initialValues = {
  eventName: "",
  talkerName: ""
}

const onSubmit = (values, { setSubmitting, setErrors }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    // console.log('User has been successfully saved!', values)
    setSubmitting(false)
  }, 2000)
}

class EditEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    };
    this.touchAll = this.touchAll.bind(this);
    this.toggle = this.toggle.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  findFirstError(formName, hasError) {
    const form = document.forms[formName]
    for (let i = 0; i < form.length; i++) {
      if (hasError(form[i].name)) {
        form[i].focus()
        break
      }
    }
  }

  validateForm(errors) {
    this.findFirstError('simpleForm', (fieldName) => {
      return Boolean(errors[fieldName])
    })
  }

  touchAll(setTouched, errors) {
    setTouched({
      eventName: true,
      talkerName: true
    }
    )
    this.validateForm(errors)
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <span className="header">Edit Event</span>
          </CardHeader>
          <Formik
            initialValues={initialValues}
            validate={validate(validationSchema)}
            onSubmit={onSubmit}
            render={
              ({
                values,
                errors,
                touched,
                status,
                dirty,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                isValid,
                handleReset,
                setTouched
              }) => (
                  <span>
                    <CardBody>


                      <Row>
                        <Col lg="8">
                          <Form onSubmit={handleSubmit} noValidate name='simpleForm'>


                            <FormGroup>
                              <Label for="eventName">Event Name</Label>
                              <Input type="text"
                                name="eventName"
                                id="eventName"
                                placeholder="Event Name"
                                autoComplete="given-name"
                                valid={!errors.eventName}
                                invalid={touched.eventName && !!errors.eventName}
                                autoFocus={true}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.eventName} />
                              <FormFeedback>{errors.eventName}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                              <Label for="talkerName">Talker Name</Label>
                              <Input type="text"
                                name="talkerName"
                                id="talkerName"
                                placeholder="Talker Name"
                                autoComplete="family-name"
                                valid={!errors.talkerName}
                                invalid={touched.talkerName && !!errors.talkerName}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.talkerName} />
                              <FormFeedback>{errors.talkerName}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                              <Label for="talkerName">Description</Label>
                              <Input type="textarea" name="textarea-input" id="textarea-input" rows="8"
                                placeholder="Content..." />
                            </FormGroup>
                            <FormGroup>
                              <Label for="talkerName">Location</Label>
                              <Input type="text"
                                name="location"
                                id="location"
                                placeholder="location"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.location} />
                            </FormGroup>
                            <FormGroup>
                              <Label for="newfeature" className="deleteCol">New Feature 1 <i className="fa fa-close"></i></Label>
                              <Input type="text"
                                name="newfeature"
                                id="newfeature"
                                placeholder="New Feature"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.newfeature} />
                            </FormGroup>
                            <FormGroup>
                              <Label for="newfeature" className="deleteCol">New Feature 2 <i className="fa fa-close"></i></Label>
                              <Input type="text"
                                name="newfeature"
                                id="newfeature"
                                placeholder="New Feature"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.newfeature} />
                            </FormGroup>
                            <Button onClick={this.toggle} className="mr-1">Add New Feature</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                              <ModalHeader toggle={this.toggle}>Add New Feature</ModalHeader>
                              <ModalBody>
                                <Row>
                                  <Col md="12">
                                    <FormGroup>
                                      <Label htmlFor="name">Label</Label>
                                      <Input type="text" id="name" placeholder="Enter label name" required />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label htmlFor="ccmonth">Kind</Label>
                                      <Input type="select" name="ccmonth" id="ccmonth">
                                        <option value="1">text</option>
                                        <option value="2">number</option>
                                      </Input>
                                    </FormGroup>
                                  </Col>
                                </Row>




                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>Add</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                              </ModalFooter>
                            </Modal>





                          </Form>
                        </Col>
                        <Col lg="4">
                          <FormGroup row>

                            <Col md="12">
                              <div className="formOnline">
                                <FormGroup check inline>
                                  <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                                  <Label className="form-check-label" check htmlFor="inline-radio1">Online</Label>
                                </FormGroup>
                                <FormGroup check inline>
                                  <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                                  <Label className="form-check-label" check htmlFor="inline-radio2">Offline</Label>
                                </FormGroup>
                              </div>
                            </Col>
                          </FormGroup>
                          <div className="subformarea">
                            <FormGroup row>
                              <Col md="3">
                                <Label>Type</Label>
                              </Col>
                              <Col md="9">
                                <FormGroup check className="radio">
                                  <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                                  <Label check className="form-check-label" htmlFor="radio1">Public</Label>
                                </FormGroup>
                                <FormGroup check className="radio">
                                  <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                                  <Label check className="form-check-label" htmlFor="radio2">Private</Label>
                                </FormGroup>
                                <FormGroup check className="radio">
                                  <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                                  <Label check className="form-check-label" htmlFor="radio3">Exclusive</Label>
                                </FormGroup>

                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Col md="3">
                                <Label htmlFor="file-input">Brand</Label>
                              </Col>
                              <Col md="9">
                                <Input type="file" id="file-input" name="file-input" />
                              </Col>
                            </FormGroup>

                            <Row>
                              <Col md={12}>
                                <FormGroup>
                                  <Label for="startDate">Start Date</Label>
                                  <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText><i className="fa fa-calendar"></i></InputGroupText>
                                    </InputGroupAddon>
                                    <TextMask
                                      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                      Component={InputAdapter}
                                      className="form-control"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.startdate}
                                    />
                                  </InputGroup>
                                  <FormText color="muted">
                                    ex. 21/06/2016
                                </FormText>
                                </FormGroup>
                              </Col>
                              <Col md={12}>
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
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.starttime}
                                    />
                                  </InputGroup>
                                  <FormText color="muted">
                                    ex. 09:30
                                </FormText>
                                </FormGroup>
                              </Col>


                              <Col md={12}>

                                <FormGroup>
                                  <Label for="endDate">End Date</Label>
                                  <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText><i className="fa fa-calendar"></i></InputGroupText>
                                    </InputGroupAddon>
                                    <TextMask
                                      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                      Component={InputAdapter}
                                      className="form-control"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.startdate}
                                    />
                                  </InputGroup>
                                  <FormText color="muted">
                                    ex. 21/06/2016
                                </FormText>
                                </FormGroup>
                              </Col>
                              <Col md={12}>
                                <FormGroup>
                                  <Label for="startDate">End Time</Label>
                                  <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText><i className="fa fa-clock-o"></i></InputGroupText>
                                    </InputGroupAddon>
                                    <TextMask
                                      mask={[/\d/, /\d/, ':', /\d/, /\d/]}
                                      Component={InputAdapter}
                                      className="form-control"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.endtime}
                                    />
                                  </InputGroup>
                                  <FormText color="muted">
                                    ex. 15:30
                                </FormText>
                                </FormGroup>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>

                    </CardBody>
                    <CardFooter>
                      <FormGroup>
                        <Button type="submit" color="primary" className="mr-1 btnsubmit" disabled={isSubmitting || !isValid}>{isSubmitting ? 'Wait...' : 'Save Changes'}</Button>
                        <Button type="reset" className="mr-1 btncancel">Cancel</Button>
                        <Button type="reset" className="mr-1 btnremove">Remove Event</Button>
                      </FormGroup>

                    </CardFooter>
                  </span>
                )} />
        </Card>
      </div>
    )
  }
}

export default EditEvent;
