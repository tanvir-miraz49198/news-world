import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

const LeftNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button variant="outline-primary" className="mb-2"> <FaGoogle></FaGoogle> Login with Google</Button> <br />
            <Button variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>

            <div>
                <h4>Find us on</h4>

                <ListGroup>
                    <ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>

                </ListGroup>
            </div>
        </div>
    );
};

export default LeftNav;