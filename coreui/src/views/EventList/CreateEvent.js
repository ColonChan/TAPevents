import React from 'react';
import {
  Modal, ModalBody, ModalFooter, ModalHeader, InputGroup, InputGroupAddon, 
  InputGroupText, FormText, Button, Card, CardHeader, CardBody, Col, 
  Form, FormFeedback, FormGroup, Label, Input, Row, CardFooter 
} from 'reactstrap';
import { TextMask, InputAdapter } from 'react-text-mask-hoc';
import { Formik } from 'formik';
import * as Yup from 'yup';


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

class CreateEvent extends React.Component {
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
            <span className="header">Create Event</span>
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
              <Col lg="7" className="event-info">
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
                    <Input type="textarea" name="event-description" id="eventDescription" rows="4"
                      placeholder="Description" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="talkerName">Location</Label>
                    <Input type="textarea" name="event-location" id="eventLocation" rows="3"
                      placeholder="Location"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.location} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="newfeature">Add Feature</Label>
                    <Card className="bdrcard">
                      <CardBody className="py-2 px-3">
                        <ol className="featurelist">
                          <li>
                            <div className="featurebox">
                              Frist Feature: Customize appointment scheduling among the participants
                              <Button type="button" color="danger" className="delcol"><i className="icon-close"></i></Button>
                            </div>
                          </li>
                        </ol>
                        <div className="feature-addbox">
                          <Button color="primary" onClick={this.toggle} className="addcol mr-1"><i className="icon-plus"></i> Add</Button>
                        </div>
                      </CardBody>
                    </Card>
                  </FormGroup>
                </Form>
              </Col>

              <Col lg="5" className="event-info">
                
                <div className="subformarea">
                  <FormGroup row>
                    <Col md="3">
                      <Label>Type</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="typeRadio1" name="type" value="public" />
                        <Label check className="form-check-label" htmlFor="typeRadio1">Public</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="typeRadio2" name="type" value="private" />
                        <Label check className="form-check-label" htmlFor="typeRadio2">Private</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="typeRadio3" name="type" value="exclusive" />
                        <Label check className="form-check-label"  htmlFor="typeRadio3">Exclusive</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label className="mt-1" htmlFor="logoUpload">Logo</Label>
                    </Col>
                    <Col md="9">
                      <div className="btnupload">
                        {/* <button className="btn">Upload a logo</button> */}
                        <Input type="file" id="logoUpload" name="logo-upload" label="Upload" />
                      </div>
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="fileUpload">Attachment</Label>
                    </Col>
                    <Col md="9">
                      <div className="btnupload">
                        {/* <button class="btn">Upload file</button> */}
                        <Input type="file" id="fileUpload" name="file-upload" />
                      </div>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label className="mt-1" for="startDate">Start Date</Label>
                    </Col>
                    <Col md="9">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText><i className="fa fa-calendar"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input type="date" id="startDate" name="start-date" placeholder="date"
                          className="form-control"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.startdate}
                         />
                      </InputGroup>
                      <FormText color="muted"> ex. 21/06/2019 </FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label className="mt-1" for="startDate">Start Time</Label>
                    </Col>
                    <Col md="9">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText><i className="fa fa-clock-o"></i></InputGroupText>
                        </InputGroupAddon>
                        <TextMask id="startTime" name="start-time" placeholder="hh:mm"
                          mask={[/\d/, /\d/, ':', /\d/, /\d/]}
                          Component={InputAdapter}
                          className="form-control"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.starttime}
                        />
                      </InputGroup>
                      <FormText color="muted"> ex. 09:30 </FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label className="mt-1" for="endDate">End Date</Label>
                    </Col>
                    <Col md="9">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText><i className="fa fa-calendar"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input type="date" id="endDate" name="end-date" placeholder="date"
                          className="form-control"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.enddate}
                         />
                      </InputGroup>
                      <FormText color="muted"> ex. 21/07/2019 </FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row className="mb-0">
                    <Col md="3">
                      <Label className="mt-1" for="startDate">End Time</Label>
                    </Col>
                    <Col md="9">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText><i className="fa fa-clock-o"></i></InputGroupText>
                        </InputGroupAddon>
                        <TextMask id="endTime" name="end-time" placeholder="hh:mm"
                          mask={[/\d/, /\d/, ':', /\d/, /\d/]}
                          Component={InputAdapter}
                          className="form-control"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.endtime}
                        />
                      </InputGroup>
                      <FormText color="muted"> ex. 15:30 </FormText>
                    </Col>
                  </FormGroup>
                </div>
                {/* <div className="subformarea mt-2">
                  <FormGroup row className="mb-0">
                    <Col md="3">
                      <Label>Status</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="status-radio1" name="status" value="oline" />
                        <Label className="form-check-label" check htmlFor="inlineRadio1">Online</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio2" name="status" value="offline" />
                        <Label className="form-check-label" check htmlFor="statusRadio2">Offline</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div> */}
              </Col>
            </Row>
          </CardBody>

          <CardFooter>
            <FormGroup>
              <Button type="submit" color="primary" className="mr-1 btnsubmit" disabled={isSubmitting || !isValid}>{isSubmitting ? 'Wait...' : 'Create'}</Button>
              <Button type="reset" color="secondary " className="mr-1" onClick={handleReset}>Reset</Button>
            </FormGroup>
          </CardFooter>
          </span>
          )} />
        </Card>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Feature</ModalHeader>
          <ModalBody>
            <Row>
              <Col md="12">
                <FormGroup>
                  <Label htmlFor="ccmonth">Feature List</Label>
                  <Input type="select" name="ccmonth" id="ccmonth">
                    <option value="1">[Risk Management Series – Professional Liability] Professional Liability Part II – Cyber Liability</option>
                    <option value="2">Add Biography Feature</option>
                    <option value="3">Add Agenda Feature</option>
                    <option value="4">Add Feedback</option>
                    <option value="5">Add Theme</option>
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
      </div>
    )
  }
}

export default CreateEvent;
