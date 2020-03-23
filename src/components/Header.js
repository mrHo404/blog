import React, { useState } from "react"
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default props => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <header>
      <Navbar fixed="top" expand="sm" light>
        <div className="container">
          <NavbarBrand href="/">{props.siteTitle}</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/forum">Forum</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Wir sind BMR!
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/about">Über Uns</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/pilots">Piloten</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/404">Media</NavLink>
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
      <StaticQuery
        query={headerQuery}
        render={data => (
          <div className="background-img">
            <Img fluid={data.headerImg.childImageSharp.fluid}/>
            <Link to={"/about"} className="logo card-img-overlay">
              <Img fluid={data.logoImg.childImageSharp.fluid} className="w-50 mx-auto" />
              <h1 className="sub-title-line">
                Das FPV Portal für München und Bayern
              </h1>
            </Link>
          </div>
        )}
      />
    </header>
  )
}

export const headerQuery = graphql`
  query headerQuery {
    headerImg: file(relativePath: { eq: "Header.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logoImg: file(relativePath: { eq: "BMR_Logo.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 832) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
