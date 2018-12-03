import React, { Component } from 'react';
import { NavLink, Badge } from 'reactstrap';
import {
  // InputGroup, FormGroup, Form
  InputGroupAddon, Button, CardHeader, Pagination, PaginationItem, PaginationLink, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input
} from 'reactstrap';
import { SVGIconTrash } from '../Common/svgicon.jsx';



class EventList extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(6).fill(false),
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <span className="header">Show All Event</span>
            <div className="rightbox">
              <div className="searchbtn">
                <InputGroupAddon addonType="prepend">
                  <Button type="button" color="primary"><i className="fa fa-search"></i></Button>
                </InputGroupAddon>
                <Input type="text" id="input1-group2" name="input1-group2" placeholder="Search" className="searchbox" />
              </div>
              <NavLink href="/#/createevent"><Button block className="btncreate"><i className="icon icon-plus font-lg"></i> Create Event</Button></NavLink>
            </div>
          </CardHeader>

          <CardBody>
            <ul className="eventlist-box">
              <li className="flexbox eventlist header">
                <div className="itemClient">
                  Event
                </div>
                <div className="itemAction">
                  <div className="type">Type</div>
                  <div className="action">Action</div>
                </div>
              </li>
              <li className="flexbox eventlist">
                <div className="itemClient">
                  <div className="logo"><img src="http://pluspng.com/img-png/pepsi-logo-eps-png-pepsi-vertical-logo-format-ai-222.png" alt="eventLogo" /></div>
                  <div className="content">
                    <div className="title online">[Risk Management Series – Professional Liability] Professional Liability Part I – Cyber Liability</div>
                    <div className="date">04, Dec, 2018 7:30pm - 04, Dec, 2018 9:55pm <span>- <b className="talker">Jamies Spthill</b></span></div>
                    <div className="desp"><p>A strong and clear event description excites punters: tell them what will happen at the event, who will be speaking, and what they might get out of attending. Your event may be brilliant, but no one else will ...</p></div>
                  </div>
                </div>
                <div className="itemAction">
                  <div className="type">
                    <Badge className="mr-1 public">Public</Badge>
                  </div>
                  <div className="action">
                    <Dropdown className="btnviewdetail" isOpen={this.state.dropdownOpen[1]} toggle={() => {
                      this.toggle(1);
                    }}>
                      <DropdownToggle caret>
                        Event Info
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem><NavLink href="/#/editevent">Modify Event</NavLink></DropdownItem>
                        <DropdownItem className="btndelete">Offline Event</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
              </li>
              <li className="flexbox eventlist">
                <div className="itemClient">
                  <div className="logo"><img src="http://pluspng.com/img-png/logo-ups-png-file-united-parcel-service-logo-2014-svg-644.png" alt="eventLogo" /></div>
                  <div className="content">
                    <div className="title online">[Risk Management Series – Professional Liability] Professional Liability Part II – Large Liability</div>
                    <div className="date">04, Dec, 2018 10:30am - 11, Dec, 2018 5:55pm <span>- <b className="talker">Jamies Spthill</b></span></div>
                    <div className="desp">A strong and clear event description excites punters: tell them what will happen at the event, who will be speaking, and what they might get out of attending. Your event may be brilliant, but no one else will ...</div>
                  </div>
                </div>
                <div className="itemAction">
                    <div className="type">
                      <Badge className="mr-1 private">Private</Badge>
                    </div>
                  <div className="action">
                      <Dropdown className="btnviewdetail" isOpen={this.state.dropdownOpen[2]} toggle={() => {
                        this.toggle(2);
                      }}>
                        <DropdownToggle caret>
                          Event Info
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem><NavLink href="/#/editevent">Modify Event</NavLink></DropdownItem>
                          <DropdownItem className="btndelete">Offline Event</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                  </div>
                </div>
              </li>
              <li className="flexbox eventlist">
                <div className="itemClient">
                  <div className="logo"><img src="http://pluspng.com/img-png/dbs-logo-png-dbs-bank-logo-logotype-logo-dbs-png-4519.png" alt="eventLogo" /></div>
                  <div className="content">
                    <div className="title offline">[Risk Management Series – Professional Liability] Professional Liability Part III – Data Liability<Badge color="secondary" className="ml-1">Expired</Badge></div>
                    <div className="date">12, Dec, 2016 5:30pm - 12, Dec, 2018 5:55pm  <span>- <b className="talker">Jamies Spthill</b></span></div>
                    <div className="desp">A strong and clear event description excites punters: tell them what will happen at the event, who will be speaking, and what they might get out of attending. Your event may be brilliant, but no one else will ...</div>
                  </div>
                </div>
                <div className="itemAction">
                  <div className="type">
                    <Badge className="mr-1 exclusive">Exclusive</Badge>
                  </div>
                  <div className="action">
                    <Dropdown className="btnviewdetail" isOpen={this.state.dropdownOpen[3]} toggle={() => {
                      this.toggle(3);
                    }}>
                      <DropdownToggle caret>
                        Event Info
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem><NavLink href="/#/editevent">Modify Event</NavLink></DropdownItem>
                        <DropdownItem className="btndelete">Offline Event</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
              </li>
            </ul>

            <Pagination className="pagination mt1">
              <PaginationItem>
                <PaginationLink previous tag="button" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next tag="button" />
              </PaginationItem>
            </Pagination>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default EventList;
