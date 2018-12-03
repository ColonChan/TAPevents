import React, { Component } from 'react';
import { 
  // DropdownMenu, DropdownToggle, 
  Nav, NavItem, NavLink 
} from 'reactstrap';
import PropTypes from 'prop-types';
import { 
  // AppAsideToggler, AppHeaderDropdown, 
  AppNavbarBrand, 
  AppSidebarToggler 
} from '@coreui/react';

import logo from '../../assets/img/brand/applogo.svg'
import logomin from '../../assets/img/brand/logomin.svg'
// import avatar from '../../assets/img/avatars/6.jpg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 113, height: 36, alt: 'App Logo' }}
          minimized={{ src: logomin, width: 32, height: 32, alt: 'App Logo' }}
        />
        {/* <AppSidebarToggler className="d-md-down-none" display="lg" /> */}
        <Nav className="ml-auto" navbar>
          <NavItem className="border-item">
            <NavLink href="#"><i className="cui-user"></i></NavLink>
          </NavItem>
          <NavItem className="border-item">
            <NavLink href="#"><i className="cui-settings"></i></NavLink>
          </NavItem>
          <NavItem className="border-item">
            <NavLink href="#"><i className="cui-account-logout"></i></NavLink>
          </NavItem>
          {/* <AppHeaderDropdown>
            <DropdownToggle nav>
              <img src={avatar} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto', height: '400px' }}>
              AppHeaderDropdown
            </DropdownMenu>
          </AppHeaderDropdown> */}
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
