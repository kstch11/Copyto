import React, {useState} from "react";
import {Button, Form, Row, Alert, Container, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import AuthService from "../services/authService";

export const RegistrationModal = () => {
    const [show, setShow] = useState({"show":false});
    const [validated, setValidated] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [userType, setUserType] = useState('');

    const registration = (e) => {
        e.preventDefault();
        AuthService.register(firstname, surname, email, number, dateOfBirth, password, userType)
            .then(() => {
                setShow({"show": true});
                setTimeout(() => setShow({"show":false}), 5000)
            })
    }

    // const handleSubmit = (e) => {
    //     const form = e.currentTarget;
    //     if (form.checkValidity() === false) {
    //         e.preventDefault();
    //         // e.stopPropagation();
    //         if (firstname.trim().length === 0 ||
    //             surname.trim().length === 0 ||
    //             email.trim().length === 0 ||
    //             number.trim().length === 0 ||
    //             password.trim().length === 0
    //         ) {
    //             e.preventDefault();
    //         } else {
    //             const regex = /[^a-zA-Z]/;
    //             if (firstname.trim().length >= 3) {
    //                 if (firstname.match(regex)) {
    //                     e.preventDefault();
    //                     return;
    //                 }
    //             }
    //             if (surname.trim().length >= 3) {
    //                 if (surname.match(regex)) {
    //                     e.preventDefault();
    //                     return;
    //                 }
    //             }
    //             if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    //
    //                 e.preventDefault();
    //                 return;
    //             }
    //             if (number.trim().length >= 6) {
    //                 if (password.match(regex)) {
    //                     e.preventDefault();
    //                     return;
    //                 }
    //             }
    //             if (password.trim().length >= 6) {
    //                 if (!password.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)) {
    //                     e.preventDefault();
    //                     return;
    //                 }
    //             }
    //
    //         }
    //     }
    //
    //     setValidated(true);
    // }

    return (
        <div>
            <div>
                <div style={{"display": show.show ? "block" : "none"}}>
                    <Alert>Registration went successfully.</Alert>
                </div>
            </div>
            <Container>
                <Row className={" justify-content-md-center"}>
                    <Card className={"border border-dark bg-dark text-white"} style={{ width: '20rem' }}>
                    <Card.Header>Registration</Card.Header>
                        <Card.Body>
                            <Form  onSubmit={registration} style={{fontSize: "17px"}}>
                                <Form.Group className="mb-3" controlId="firstName">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter first name"
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="surname">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter surname"
                                        value={surname}
                                        onChange={(e) => setSurname(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="number">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter phone number"
                                        required
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="dateOfBirth">
                                    <Form.Label>Date of birth</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="Enter date of birth"
                                        required
                                        value={dateOfBirth}
                                        onChange={(e) => setDateOfBirth(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>User type</Form.Label>
                                    <Form.Select
                                        name="userType"
                                        required
                                        value={userType}
                                        onChange={(e) => setUserType(e.target.value)}
                                    >
                                        <option value="ROLE_COPYWRITER">Copywriter</option>
                                        <option value="ROLE_CLIENT">Client</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="passwordSubmit">
                                    <Form.Label>Submit password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Submit password"
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary"
                                        type="submit"
                                        disabled={firstname.length === 0 || password.length === 0 || email.length === 0 || number.length === 0 || surname.length === 0}
                                >Register</Button>
                            </Form>

                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )

}