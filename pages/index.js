import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container">
          <NavbarBrand className="navbar-brand" href="#">
            Dog Whistle Records
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="nav-item active">
                <Link href="/" passHref>
                  <NavLink>Home</NavLink>
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link href="/about" passHref>
                  <NavLink>About</NavLink>
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link href="/videos" passHref>
                  <NavLink>Videos</NavLink>
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link href="/contact" passHref>
                  <NavLink>Contact</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="font-weight-light">
                Vertically Centered Masthead Content
              </h1>
              <p className="lead">A great starter layout for a landing page</p>
            </div>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container">
          <h2 className="font-weight-light">Page Content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus ab nulla dolorum autem nisi officiis blanditiis
            voluptatem hic, assumenda aspernatur facere ipsam nemo ratione
            cumque magnam enim fugiat reprehenderit expedita.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
