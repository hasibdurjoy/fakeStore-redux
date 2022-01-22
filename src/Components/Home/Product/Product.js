import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, title, image, price, category } = product;
    return (
        <Link to={`/products/${id}`}>
            <Col>
                <Card className='h-100'>
                    <Card.Img variant="top" src={image} className='p-4' height="250px" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p>{price}</p>
                            <p>{category}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col >
        </Link>
    );
};

export default Product;