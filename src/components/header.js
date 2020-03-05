import PropTypes from "prop-types"
import React, { useState } from "react"
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap"

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (

    <Navbar fixed='top' expand="sm" light>
      <div className='container'>
        <NavbarBrand href="/">{props.siteTitle}</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/forum">Forum</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Wir Sind BMR!
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/about">Über Uns</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/pilots">Piloten</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Partner
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/adelsried">SV. Adelsried</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/partners">BMR Buddies</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/imprint">Impressum</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}

export default Header

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

