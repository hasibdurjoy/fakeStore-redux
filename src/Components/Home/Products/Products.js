import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { setProducts } from "../../../Redux/Actions/ProductAction";
import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products);

    console.log("Products :", products);

    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                {products.map(product => <Product product={product}></Product>)}
            </Row>
        </Container>
    );
};

export default Products;