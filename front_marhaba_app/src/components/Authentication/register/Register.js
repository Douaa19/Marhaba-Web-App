import React, { useState } from "react";
import { Container, Form, Input, Row, Col, Button } from "reactstrap";
import { register } from "../../../services/auth-service";
import NavbarComponent from "../../shared-elemenets/NavbarComponent";
import Background from "../../../assets/images/opacity-logo.png";

function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    repeated_password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const handleUsername = (e) => {
    setValues({ ...values, username: e.target.value });
  };

  const handleEmail = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handlePassword = (e) => {
    setValues({ ...values, password: e.target.value });
  };

  const handleRepeatedPassword = (e) => {
    setValues({ ...values, repeated_password: e.target.value });
  };

  const handleRole = (e) => {
    setValues({ ...values, role: e.target.value });
  };

  const handleErrors = (errors) => {
    setErrors({ ...errors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.username &&
      values.email &&
      values.role &&
      values.password &&
      values.repeated_password
    ) {
      register(
        values.username,
        values.email,
        values.password,
        values.repeated_password,
        values.role
      ).then((response) => {
        window.location = "http://localhost:3000/auth/login";
      });
    }
  };

  // ---------------------------
  // Styles
  // container
  const cont = {
    display: "grid",
    justifyContent: "center",
    position: "relative",
    top: "6rem",
  };

  // input
  const inp = {
    border: "1px solid #CECECE",
    backgroundColor: "#F6F7F7",
    color: "#B5B5B5",
    fontSize: "16px",
    margin: "1rem 0",
  };

  // button
  const btn = {
    width: "100%",
    margin: "1rem 0 0",
    backgroundColor: "#221ED9",
    fontSize: "16px",
  };

  // signin
  const si = {
    fontSize: "12px",
    letterSpacing: "1px",
  };

  // span
  const sp = {
    color: "#221ED9",
    textDecoration: "none",
  };

  // copyright
  const cr = {
    fontSize: "10px",
  };

  // div copyright
  const dcr = {
    padding: "0.8rem 0",
    position: "fixed",
    bottom: "0",
    left: "45.5%",
    textAlign: "center",
  };

  const slc = {
    width: "100%",
    borderRadius: "5px",
    padding: "0.4rem",
    border: "1px solid #CECECE",
    backgroundColor: "#F6F7F7",
    color: "#B5B5B5",
  };
  // ---------------------------

  return (
    <>
      <NavbarComponent />
      <Container className="text-center" style={cont}>
        <Row className="m-0 align-items-center">
          <Col
            className="justify-content-center col-12"
            style={{
              width: "22rem",
              backgroundImage: `url(${Background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* <div className="logo" style={{ padding: "0 0 3rem" }}>
              <img src={img} alt="logo" style={logo} />
            </div> */}
            <Form method="POST" onSubmit={handleSubmit}>
              <div className="form-groupe">
                <Input
                  type="text"
                  value={values.username}
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="form-control"
                  onChange={handleUsername}
                  style={inp}
                />
              </div>
              <div className="form-groupe">
                <Input
                  type="email"
                  value={values.email}
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-control"
                  onChange={handleEmail}
                  style={inp}
                />
              </div>
              <div className="form-groupe">
                <Input
                  type="password"
                  value={values.password}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={handlePassword}
                  style={inp}
                />
              </div>
              <div className="form-groupe">
                <Input
                  type="password"
                  value={values.repeated_password}
                  name="repeated-password"
                  id="repeated-password"
                  placeholder="Repeated password"
                  className="form-control"
                  onChange={handleRepeatedPassword}
                  style={inp}
                />
              </div>
              <div className="form-groupe">
                <select name="role" id="role" onChange={handleRole} style={slc}>
                  <option select desabled>
                    Choose a role
                  </option>
                  <option value="client">Client</option>
                  <option value="deliveryguy">Livreur</option>
                </select>
              </div>
              <Button style={btn} type="submit">
                REGISTER
              </Button>
            </Form>
            <span style={si}>
              You have an account,{" "}
              <a href="/auth/login" style={sp}>
                login
              </a>
            </span>
            <div className="copy-right" style={dcr}>
              <span style={cr}>copyright © marhaba delivery</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
