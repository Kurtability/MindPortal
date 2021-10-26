import React from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../services/useAuth";
// import AuthButton from "../components/AuthButton";
import "../styles/Login.scss";
import { Row, Container, Button, Col, Form, Card } from "react-bootstrap";
import Header from "../components/Header";
import axios from "axios";

const DashBoardPage = () => {
    let location = useLocation();
    const auth = useAuth();
    const user = auth.user;

    let { from } = location.state || { from: { pathname: "/" } };

    const baseURL = 'https://data.nsw.gov.au/data/dataset/0a52e6c1-bc0b-48af-8b45-d791a6d8e289/resource/f3a28eed-8c2a-437b-8ac1-2dab3cf760f9/download/covid-case-locations-20210717-1753.json'
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);
    if (!post) return null;

    const monitorData = post.data.monitor;
    // console.log(monitorData);


    return (
        <Container fluid className="Dashboard page p-0">
            <Header />
            <Row>
                <Col lg={3} className="DashBoard card">
                    <p></p>

                    <Card>
                        <Card.Body>
                            <Card.Title style={{ color: 'red' }}>New Covid Venue Alert!</Card.Title>
                            <h6>
                                Venue: {JSON.stringify(post.data.monitor[50].Venue)}
                            </h6>
                            <h6>
                                Address: {JSON.stringify(post.data.monitor[50].Address)}
                            </h6>
                            <h6>
                                Suburb: {JSON.stringify(post.data.monitor[50].Suburb)}
                            </h6>
                            <h6 style={{ color: 'red' }}>
                                Alert: {JSON.stringify(post.data.monitor[50].Alert)}
                            </h6>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title style={{ color: 'red' }}>New Covid Venue Alert!</Card.Title>
                            <h6>
                                Venue: {JSON.stringify(post.data.monitor[80].Venue)}
                            </h6>
                            <h6>
                                Address: {JSON.stringify(post.data.monitor[80].Address)}
                            </h6>
                            <h6>
                                Suburb: {JSON.stringify(post.data.monitor[80].Suburb)}
                            </h6>
                            <h6 style={{ color: 'red' }}>
                                Alert: {JSON.stringify(post.data.monitor[80].Alert)}
                            </h6>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title style={{ color: 'red' }}>New Covid Venue Alert!</Card.Title>
                            <h6>
                                Venue: {JSON.stringify(post.data.monitor[120].Venue)}
                            </h6>
                            <h6>
                                Address: {JSON.stringify(post.data.monitor[120].Address)}
                            </h6>
                            <h6>
                                Suburb: {JSON.stringify(post.data.monitor[120].Suburb)}
                            </h6>
                            <h6 style={{ color: 'red' }}>
                                Alert: {JSON.stringify(post.data.monitor[120].Alert)}
                            </h6>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title style={{ color: 'red' }}>New Covid Venue Alert!</Card.Title>
                            <h6>
                                Venue: {JSON.stringify(post.data.monitor[150].Venue)}
                            </h6>
                            <h6>
                                Address: {JSON.stringify(post.data.monitor[150].Address)}
                            </h6>
                            <h6>
                                Suburb: {JSON.stringify(post.data.monitor[150].Suburb)}
                            </h6>
                            <h6 style={{ color: 'red' }}>
                                Alert: {JSON.stringify(post.data.monitor[150].Alert)}
                            </h6>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title style={{ color: 'red' }}>New Covid Venue Alert!</Card.Title>
                            <h6>
                                Venue: {JSON.stringify(post.data.monitor[180].Venue)}
                            </h6>
                            <h6>
                                Address: {JSON.stringify(post.data.monitor[180].Address)}
                            </h6>
                            <h6>
                                Suburb: {JSON.stringify(post.data.monitor[180].Suburb)}
                            </h6>
                            <h6 style={{ color: 'red' }}>
                                Alert: {JSON.stringify(post.data.monitor[180].Alert)}
                            </h6>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="DashBoard card">
                    <h1>Welcome to Dashboard</h1>
                    <p></p>
                    <h2>Hello {user.firstName}</h2>
                    <p></p>
                    <h4 style={{ color: 'red' }}>(Note: It is essential for you to have done at least one K-10 test! Please take one if you have not.)</h4>
                    <p></p>
                    <h3>
                        <Card>
                            <Card.Body>
                                <Card.Title>Mental Health Test</Card.Title>
                                <p></p>
                                <Card.Title>
                                    Click 'Take Test' to initiate the K-10 mental health test
                                </Card.Title>
                                <p></p>
                                <Link to="/testOptions" className="btn btn-primary">Take Test</Link>
                            </Card.Body>
                        </Card>
                    </h3>
                    <p></p>
                    <h4>Suggested Actions</h4>
                    <p></p>
                    <h3>
                        <Card>
                            <Card.Body>
                                <Card.Title>Moments To Appreciate</Card.Title>
                                <p></p>
                                <Card.Title>Videos of cute animals to brighten up your day!</Card.Title>
                                <p></p>
                                <Button variant={"secondary"}>Go</Button>
                            </Card.Body>
                        </Card>
                        <p></p>
                        <Card>
                            <Card.Body>
                                <Card.Title>Mindfulness Space</Card.Title>
                                <p></p>
                                <Card.Title>Scientifically researched binaural beats with Alpha wave to relax yourself, better result when used with earphones!</Card.Title>
                                <p></p>
                                <Button variant={"secondary"}>Go</Button>
                            </Card.Body>
                        </Card>
                        {/*<Card>*/}
                        {/*    <Card.Body>*/}
                        {/*        <Card.Title>Other Suggestion</Card.Title>*/}
                        {/*        <Card.Title>feature description ...</Card.Title>*/}
                        {/*        <Button variant={"secondary"}>Go</Button>*/}
                        {/*    </Card.Body>*/}
                        {/*</Card>*/}
                    </h3>
                </Col>
            </Row>
        </Container>
    );
};

export default DashBoardPage;
