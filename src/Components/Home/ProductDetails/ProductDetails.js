import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    selectedProduct,
    removeSelectedProduct,
} from "../../../Redux/Actions/ProductAction.js";
import { Card, Col, Container, Row } from "react-bootstrap";

const ProductDetails = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();
    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail(productId);
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);
    console.log(productId);
    return (
        <Container>
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <Card className="p-2 border-0 shadow">
                    <Card.Body>

                        <Row className="d-flex flex-row justify-content-center align-items-center">
                            <Col xs={12} md={5}>
                                <Card.Img src={image} className='w-75 mx-auto' height="350px" />
                            </Col>
                            <Col xs={12} md={7}>
                                <Card.Text>
                                    <Card.Title>{title}</Card.Title>
                                    <h2>Price: {price}</h2>
                                    <p><b>Category: </b>{category}</p>
                                    <p>{description}</p>
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>

                </Card>
            )}
        </Container>
    );
};

export default ProductDetails;