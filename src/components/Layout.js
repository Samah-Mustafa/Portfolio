import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => {
    // smah
    return (
        <Container>
            {props.children}
        </Container>
    )
}