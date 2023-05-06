import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Header/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightNav from '../pages/Shared/RightNav/RightNav';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import './Layout.css'


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
                        <h1>Main content coming</h1>
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