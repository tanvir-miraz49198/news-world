import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import Footer from '../pages/Shared/Header/Footer/Footer';
import RightNav from '../pages/Shared/RightNav/RightNav';




const Layout = () => {
    return (
        <div>

<Header></Header>
            <Container>

                <Row>
                    
                    <Col className='rows text-center' lg={3}>
                        <RightNav></RightNav>
                    </Col>
                    <Col className='rows text-center' lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col className='rows text-center' lg={3}>
                        <LeftNav></LeftNav>

                    </Col>
                </Row>
            </Container>


            <Footer></Footer>
        </div>
    );
};

export default Layout;