import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import "../../../node_modules/bootstrap-css-only/css/bootstrap.min.css";

class FooterPage extends React.Component {
    render() {
        return (
            <Footer color="stylish-color-dark" className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row className="text-center text-md-left mt-3 pb-3">
                        <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Thread</h6>
                            <p></p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none" />
                        <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Company</h6>
                            <p><a href="#!">About</a></p>
                            <p><a href="#!">Mission</a></p>
                            <p><a href="#!">Partners</a></p>
                            <p><a href="#!">Contact</a></p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none" />
                        <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                            <p><a href="#!">Your Account</a></p>
                            <p><a href="#!">Become an Affiliate</a></p>
                            <p><a href="#!">Want to donate?</a></p>
                            <p><a href="#!">Help</a></p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none" />
                        <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p><i className="fa fa-home mr-3"></i> Copenhagen, Denmark</p>
                            <p><i className="fa fa-envelope mr-3"></i> info@gmail.com</p>
                            <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="d-flex align-items-center">
                        <Col md="8" lg="8">
                            <p className="text-center text-md-left grey-text">&copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> Thread </a></p>
                        </Col>
                        <Col md="4" lg="4" className="ml-lg-0">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-google-plus"></i></a></li>
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        );
    }
}

export default FooterPage;