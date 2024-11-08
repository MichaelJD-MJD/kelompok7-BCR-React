// import React from "react";
// import { Link } from "@tanstack/react-router";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import "../Manufacture/ManufactureItem.css";
import carImg from "../../assets/car01.min.jpg";

const ManufactureItem = ({ manufacture }) => {
    return (
        <Col md={3}>
            <div className="">
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={carImg} />
                    <Card.Body>
                        <Card.Title>{manufacture?.name}nama</Card.Title>
                        <Card.Text>
                            {manufacture?.description}deskripsi
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            {manufacture?.establishment}tahun
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {manufacture?.country}kota
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {manufacture?.office}office
                        </ListGroup.Item>
                    </ListGroup>
                    <Card.Body className="d-flex flex-row justify-content-center">
                        <Button
                            className="btn-del btn btn-primary px-4 p-2 me-2"
                            variant="danger"
                        >
                            <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.5 4.5H4H16"
                                    stroke="#FA2C5A"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6.25 4.5V3C6.25 2.60218 6.40804 2.22064 6.68934 1.93934C6.97064 1.65804 7.35218 1.5 7.75 1.5H10.75C11.1478 1.5 11.5294 1.65804 11.8107 1.93934C12.092 2.22064 12.25 2.60218 12.25 3V4.5M14.5 4.5V15C14.5 15.3978 14.342 15.7794 14.0607 16.0607C13.7794 16.342 13.3978 16.5 13 16.5H5.5C5.10218 16.5 4.72064 16.342 4.43934 16.0607C4.15804 15.7794 4 15.3978 4 15V4.5H14.5Z"
                                    stroke="#FA2C5A"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.75 8.25V12.75"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.75 8.25V12.75"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            &nbsp;Delete
                        </Button>
                        <Button
                            className="btn-up btn btn-primary px-4 p-2 me-2"
                            variant="success"
                        >
                            <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_73024_26)">
                                    <path
                                        d="M9 3H3.75C3.35218 3 2.97064 3.15804 2.68934 3.43934C2.40804 3.72064 2.25 4.10218 2.25 4.5V15C2.25 15.3978 2.40804 15.7794 2.68934 16.0607C2.97064 16.342 3.35218 16.5 3.75 16.5H14.25C14.6478 16.5 15.0294 16.342 15.3107 16.0607C15.592 15.7794 15.75 15.3978 15.75 15V9.75"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M14.625 1.87499C14.9234 1.57662 15.328 1.409 15.75 1.409C16.172 1.409 16.5766 1.57662 16.875 1.87499C17.1734 2.17336 17.341 2.57803 17.341 2.99999C17.341 3.42194 17.1734 3.82662 16.875 4.12499L9.75 11.25L6.75 12L7.5 8.99999L14.625 1.87499Z"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_73024_26">
                                        <rect
                                            width="18"
                                            height="18"
                                            fill="white"
                                            transform="translate(0.75)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            Edit
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    );
};

ManufactureItem.propTypes = {
    manufacture: PropTypes.object,
};

export default ManufactureItem;
