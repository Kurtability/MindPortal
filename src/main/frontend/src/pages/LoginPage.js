import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../services/useAuth";
// import AuthButton from "../components/AuthButton";
import "../styles/Login.scss";
import { Row, Container, Button, Col, Form } from "react-bootstrap";
import LogoTxt from "../components/LogoTxt";
import LampSVG from "../components/LampSVG";
import { motion, useMotionValue } from "framer-motion";

const LoginPage = () => {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [fail, setFail] = useState(false);
    const [loading, setLoading] = useState(false);

    let { from } = location.state || { from: { pathname: "/" } };

    const findErrors = () => {
        const errors = {};
        if (email === "") errors.email = "Email cannot be blank";
        else if (!isValidEmail()) errors.email = "Enter a valid email";
        else if (email.length < 3) errors.email = "Enter a valid email";

        if (password === "") errors.password = "Password cannot be blank";

        return errors;
    };

    let login = (e) => {
        e.preventDefault();
        console.log(`email: ${email} password: ${password}`);
        // console.log(history);
        console.log(location);
        // // validate here
        const newErrors = findErrors();
        if (Object.keys(newErrors).length > 0) {
            // we have errors
            setErrors(newErrors);
        } else {
            setLoading(true);
            auth.signin(email, password, success, failure);
        }
    };

    const isValidEmail = () => {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)
            ? true
            : false;
    };

    // useEffect(() => {
    //     startLampAnimation();
    // });

    const success = () => {
        // history.push(from);
        setLoading(false);
        history.push("/dashboard");
    };

    const failure = () => {
        setLoading(false);
        setFail(true);
    };

    // const lampVal = useMotionValue(0);

    // const startLampAnimation = () => {
    //     lampVal.set(-25);
    //     // lampVal.set(lampVal.get() + 10);
    //     // if (lampVal.get() < 45) {
    //     //     );
    //     // } else if (lampVal.get() < -45) {
    //     //     lampVal.set(lampVal.get() + 1);
    //     // }
    // };

    /* <motion.div
                transition={{ repeat: Infinity, duration: 2 }}
                animate={{
                    rotate: [-25, 0, 25, 0, -25],
                }}
                style={{
                    position: "fixed",
                    x: 0,
                    y: 0,
                    padding: 0,
                    width: 150,
                }}
            > */

    return (
        <Container fluid className="Login__container ps-0">
            <div
                style={{
                    position: "fixed",
                    x: 0,
                    y: 0,
                    padding: 0,
                    width: 150,
                }}
            >
                <LampSVG />
            </div>

            <Row className="justify-content-md-center pt-3 mb-5">
                <LogoTxt />
            </Row>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0, duration: 0.25 }}
            >
                <Row className="justify-content-md-center">
                    <Col className="Login form" md={6}>
                        <p className="Login__form__title">Login</p>
                        <p className="Login__form__subtitle">
                            Not a member?{" "}
                            <Link
                                className="Login__form__link"
                                to={{
                                    pathname: "/signup",
                                    state: { from: from },
                                }}
                            >
                                Sign up now
                            </Link>
                        </p>
                        <Form>
                            <Form.Group
                                as={Row}
                                className="justify-content-md-center"
                            >
                                <Col sm={{ span: 10 }}>
                                    <Form.Label className="Login form__label">
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="justify-content-md-center"
                            >
                                <Col sm={{ span: 10 }}>
                                    <Form.Label className="Login form__label">
                                        Password
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Row className="justify-content-md-center">
                                <motion.button
                                    className="Login form__btn"
                                    onClick={login}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {/* <Button
                                        className="Login form__btn"
                                        size="lg"
                                        style={{
                                            backgroundColor: "#FBDFB6",
                                            borderColor: "#FBDFB6",
                                            color: "#2E2D2D",
                                        }}
                                        onClick={login}
                                    > */}
                                    Login
                                    {/* </Button> */}
                                </motion.button>
                                {/* <Col sm={{ span: 10 }}>
                                    <motion.button
                                        className="Login form__btn"
                                        onClick={login}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {/* <Button
                                        className="Login form__btn"
                                        size="lg"
                                        style={{
                                            backgroundColor: "#FBDFB6",
                                            borderColor: "#FBDFB6",
                                            color: "#2E2D2D",
                                        }}
                                        onClick={login}
                                    > */}

                                {/* </Button> */}
                                {/* </motion.button> */}
                                {/* </Col> */}
                            </Row>
                        </Form>

                        {fail ? (
                            <div style={{ color: "red" }}>Failed to log in</div>
                        ) : null}
                    </Col>
                </Row>
            </motion.div>
        </Container>
    );
};

export default LoginPage;
