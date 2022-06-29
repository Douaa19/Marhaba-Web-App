import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Container, Button, Table } from "reactstrap";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { deleteOrd } from "../../../../../services/order-service/OrderService";
import NavbarComponent from "../../../../shared-elemenets/NavbarComponent";

function OrdersList() {
  const ORDER_URL = "http://localhost:4000/admin/commands";
  const header = useSelector((state) => state.auth.user);
  const [orders, setOrders] = useState([]);
  console.log(header);

  useEffect(() => {
    (async () => {
      await axios
        .get(`${ORDER_URL}`, {
          headers: { Authorization: `Bearer: ${header}` },
        })
        .then((res) => setOrders(res.data))
        .catch((err) => console.log(err.message));
    })();
  }, []);

  const deleteOrder = (id) => {
    deleteOrd(id, header);
  };

  return (
    <>
      <NavbarComponent />
      <div style={{ margin: "1rem" }}>
        <Container>
          <Table bordered style={{ borderColor: "#F29557" }}>
            <thead>
              <tr style={{ color: "#F29557", textAlign: "center" }}>
                <th>Address</th>
                <th>Total</th>
                <th>Client name</th>
                <th>Client email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody style={{ borderTop: "none" }}>
              {orders.map((order, index) => {
                return (
                  <tr key={index}>
                    <td>{order.address}</td>
                    <td>{order.totale}</td>
                    <td>{order.client_id.username}</td>
                    <td>{order.client_id.email}</td>
                    <td style={{ color: "red" }}>{order.status}</td>
                    <td
                      style={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        color="danger"
                        onClick={() => deleteOrder(order._id)}
                      >
                        Delete
                        <FaTrashAlt />
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
}

export default OrdersList;
