import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from "reactstrap";
import {
  Link
} from "react-router-dom";

import classnames from "classnames";
const Navsection = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand className="ml-lg-5" href="/">
          LOGO
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav-div mr-auto" navbar>
            <NavItem className="mx-auto mb-2">
              <Link to="/" className="text-white p-0 text-decoration-none ">
                Home
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                nav
                caret
                className="text-white p-0 text-decoration-none mr-2 mb-2"
              >
                Products
                <Badge color="secondary" className="ml-2 rounded-circle">
                  6
                </Badge>
              </DropdownToggle>
              <DropdownMenu right className="dropDown">
                <DropdownItem>
                  <Link
                    className="text-decoration-none p-0 text-secondary"
                    to="/product/children"
                  >
                    Children
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    className="text-decoration-none p-0 text-secondary"
                    to="/product/adults"
                  >
                    Adults
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    className="text-decoration-none p-0 text-secondary"
                    to="/product/elder-old"
                  >
                    Elders or Old
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="mx-auto mb-2">
              <Link
                to="/company"
                className="text-white p-0 text-decoration-none ml-2 "
              >
                Company
                <Badge color="secondary" className="ml-2 rounded-circle">
                  6
                </Badge>
              </Link>
            </NavItem>
            <NavItem className="mx-auto mb-2">
              <Link
                className="text-white p-0 text-decoration-none "
                to="/contacts"
              >
                Contacts
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
};
// function Products() {
//   let match = useRouteMatch();
//   return (
//     <div>
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Product />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

/*
function Product() {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  let { topicId } = useParams();
  let match = useRouteMatch();

  return (
    <div className="container mt-5">
      <h1 className="my-3"> Products for {topicId}</h1>
      <div className="w-75 mx-auto mt-3">
        <Nav tabs>
            <NavItem className="w-50">
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                Medicines
              </NavLink>
            </NavItem>
            <NavItem className="w-50">
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Health Suppliments
              </NavLink>
            </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row className="bg-light mx-0  pt-3 d-flex flex-row align-items-center justify-content-around">
              <Col
                sm="12"
                lg="6"
                md="6"
                className="d-flex flex-column align-items-center justify-content-center mt-3 "
              >
                <div className="med-1"></div>
                <p className="mt-3">Paracetamol Tablets</p>
              </Col>
              <Col
                sm="12"
                lg="6"
                md="6"
                className="d-flex flex-column align-items-center"
              >
                <Button color="success" className="med-btn my-2">
                  Place Order
                </Button>
                <Button color="info" className="med-btn my-2">
                  View Details
                </Button>
              </Col>
            </Row>
            <Row className="bg-light mx-0  pt-3 d-flex flex-row align-items-center justify-content-around">
              <Col
                sm="12"
                lg="6"
                md="6"
                className="d-flex flex-column align-items-center justify-content-center mt-3 "
              >
                <div className="med-2"></div>
                <p className="mt-3">Levocitrizine Tablets</p>
              </Col>
              <Col
                sm="12"
                lg="6"
                md="6"
                className="d-flex flex-column align-items-center"
              >
                <Button color="success" className="med-btn my-2">
                  Place Order
                </Button>
                <Button color="info" className="med-btn my-2">
                  View Details
                </Button>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row className="bg-light mx-0">
              <Col sm="12">
                <h4 className="mt-3">Health Suppliments Content</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}
*/
export default Navsection;
