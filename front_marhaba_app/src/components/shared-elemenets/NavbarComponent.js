import React from "react";
import { Navbar, Container, ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import {
  FaShoppingBasket,
  FaHistory,
  FaHome,
  FaExclamationCircle,
} from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { IoMdContacts } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction, setIdAction, setRoleAction } from "../../actions/auth";
import img from "../../assets/images/marhaba-delivery.png";

function NavbarComponent() {
  const role = useSelector((state) => state.role);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAction());
    dispatch(setIdAction(""));
    dispatch(setRoleAction(""));
    window.location = "/auth/login";
  };
  // ---------------------------
  // Style
  // logo
  const logo = {
    width: "5rem",
    borderRadius: "5rem",
  };

  // link
  const link = {
    textDecoration: "none",
    color: "#FFFFFF",
  };

  // list
  const list = {
    listStyle: "none",
  };
  // ---------------------------

  return (
    <>
      <div className="header" style={{ background: "#000000" }}>
        <Container
          style={{
            display: "flex",
            padding: "1rem",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div className="logo">
            <img src={img} alt="logo" style={logo} />
          </div>
          <Navbar style={{ width: "50%" }}>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0",
                padding: "0",
                margin: "0 1rem 0",
                width: "100%",
              }}
            >
              <li style={list}>
                <Link style={link} to="/">
                  <FaHome /> Home
                </Link>
              </li>
              <li style={list}>
                <Link style={link} to="/contact">
                  <IoMdContacts /> Contact
                </Link>
              </li>
              <li style={list}>
                <Link style={link} to="/about">
                  <FaExclamationCircle /> About
                </Link>
              </li>
              {isLoggedIn && role === "admin" && (
                <>
                  <li style={list}>
                    <Link style={link} to="/admin-dashboard">
                      Dashboard
                    </Link>
                  </li>
                </>
              )}
              {isLoggedIn && role === "deliveryguy" && (
                <>
                  <li style={list}>
                    <Link style={link} to="/deliveryguy-dashboard">
                      Dashboard
                    </Link>
                  </li>
                </>
              )}
              {isLoggedIn && role === "client" && (
                <>
                  <li style={list}>
                    <Link style={link} to="/basket">
                      <FaShoppingBasket />
                    </Link>
                  </li>
                  <li style={list}>
                    <Link style={link} to="/history">
                      Orders <FaHistory />
                    </Link>
                  </li>
                </>
              )}
              {!isLoggedIn && (
                <>
                  <div
                    className="register"
                    style={{ position: "absolute", left: "72rem" }}
                  >
                    <li style={list}>
                      <Link style={link} to="/auth/register">
                        Register
                      </Link>
                    </li>
                  </div>
                </>
              )}

              {isLoggedIn && (
                <>
                  <span>{role}</span>
                </>
              )}
              {isLoggedIn && (
                <>
                  <div
                    className="logout"
                    style={{
                      position: "absolute",
                      left: "69.5rem",
                      bottom: "0",
                    }}
                  >
                    <li style={list}>
                      <Button
                        color="danger"
                        style={{ width: "max-content" }}
                        onClick={() => logout()}
                      >
                        Logout <ImExit />
                      </Button>
                    </li>
                  </div>
                </>
              )}
            </ul>
          </Navbar>
        </Container>
      </div>
    </>
  );
}

export default NavbarComponent;
