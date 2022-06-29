import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Table, Container, Button, Spinner } from "reactstrap";
import { updateOredr } from "../../../services/order-service/OrderService";
import NavbarComponent from "../../shared-elemenets/NavbarComponent";

function NewOrers() {
  const header = useSelector((state) => state.auth.user);
  const userId = useSelector((state) => state.id);
  const newOrdersPath = "http://localhost:4000/delivery/newCommands";
  const [pending, setPending] = useState(true);
  const [newOrders, setNewOrders] = useState({
    address: "",
    status: "",
    total: "",
    client_name: "",
    client_email: "",
  });

  useEffect(() => {
    (async () => {
      await axios
        .get(`${newOrdersPath}`, {
          headers: { Authorization: `Bearer: ${header}` },
        })
        .then((res) => {
          setNewOrders(res.data);
          setPending(false);
        })
        .catch((err) => console.log(err.message));
    })();
  }, []);

  const updateStatus = async (id) => {
    if (id) {
      await updateOredr(id, userId, header).then((response) => {
        window.location = "/deliveryguy-dashboard";
      });
    }
  };

  if (pending !== true) {
    return (
      <>
        <NavbarComponent />
        <div style={{ margin: "1rem" }}>
          <Container>
            <Table bordered style={{ borderColor: "#F29557" }}>
              <thead>
                <tr style={{ color: "#F29557", textAlign: "center" }}>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Client name</th>
                  <th>Client email</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody style={{ borderTop: "none" }}>
                {newOrders.map((element, index) => {
                  return (
                    <tr key={index}>
                      <td>{element.address}</td>
                      <td>{element.status}</td>
                      <td>{element.client_id.username}</td>
                      <td>{element.client_id.email}</td>
                      <td>{element.totale}</td>
                      <td
                        style={{
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Button
                          color="primary"
                          onClick={() => updateStatus(element._id)}
                        >
                          Start
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Spinner>Loading...</Spinner>
      </>
    );
  }
}

export default NewOrers;
