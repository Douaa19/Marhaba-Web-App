import React, { useState } from "react";
import { Form, Input, Container, Row, Col, Button } from "reactstrap";
import jwtDecode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { loginAction, setIdAction, setRoleAction } from "../../../actions/auth";
import { login } from "../../../services/auth-service";
import NavbarComponent from "../../shared-elemenets/NavbarComponent";
import img from "../../../assets/images/marhaba-delivery.png";

function Login() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const handlePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(data.email, data.password)
      .then((response) => {
        (async () => {
          await dispatch(loginAction());
          dispatch(setRoleAction(jwtDecode(response.myToken).role.name));
          dispatch(setIdAction(jwtDecode(response.myToken).id));
          window.location = "/";
        })();
      })
      .catch((err) => console.log(err));
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
  };

  // button
  const btn = {
    width: "100%",
    margin: "1.5rem 0 0",
    backgroundColor: "#221ED9",
    fontSize: "16px",
  };

  // link
  const forgetPassword = {
    color: "#8A8A8A",
    fontSize: "12px",
    textDecoration: "none",
    letterSpacing: "1px",
  };

  // signin
  const si = {
    fontSize: "12px",
    letterSpacing: "1px",
  };

  // div signin
  const dsi = {
    padding: "0.8rem 0",
    position: "fixed",
    bottom: "0",
    bottom: "5rem",
    left: "43%",
    textAlign: "center",
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

  // logo
  const logo = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "8rem",
    borderRadius: "5rem",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  };
  // ---------------------------

  return (
    <>
      <NavbarComponent />
      <Container className="text-center" style={cont}>
        <Row className="m-0 align-items-center">
          <Col
            className="justify-content-center col-12"
            style={{ width: "22rem" }}
          >
            <div className="logo" style={{ padding: "0 0 3rem" }}>
              <img src={img} alt="logo" style={logo} />
            </div>
            <Form method="POST" onSubmit={handleSubmit}>
              <div className="form-groupe">
                <Input
                  type="email"
                  value={data.email}
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-control"
                  onChange={handleEmail}
                  style={inp}
                />
              </div>
              <div className="form-groupe">
                <label htmlFor="password"></label>
                <Input
                  type="password"
                  value={data.password}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={handlePassword}
                  style={inp}
                />
              </div>
              <Button style={btn} type="submit">
                LOGIN
              </Button>
            </Form>
            <a href="/" style={forgetPassword}>
              forget password?
            </a>
            <div className="signin" style={dsi}>
              <span style={si}>
                Don't you have an account,{" "}
                <a href="/auth/register" style={sp}>
                  sign in
                </a>
              </span>
            </div>
            <div className="copy-right" style={dcr}>
              <span style={cr}>copyright © marhaba delivery</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
