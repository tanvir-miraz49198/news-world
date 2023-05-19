import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import Header from '../../pages/Shared/Header/Header';
import Footer from '../../pages/Shared/Header/Footer/Footer';
import RightNav from '../../pages/Shared/RightNav/RightNav';
import LeftNav from '../../pages/Shared/LeftNav/LeftNav';

const NewsLayout = () => {
    return (
        <div>

            
<Header></Header>
            <Container>

                <Row>
                    
                   
                    <Col className='rows text-center' lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col className='rows text-center' lg={6}>
                        <LeftNav></LeftNav>

                    </Col>
                </Row>
            </Container>


            <Footer></Footer>
            


        </div>
    );
};

export default NewsLayout;