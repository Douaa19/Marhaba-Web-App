import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Spinner, Container, Table, Button, Progress } from "reactstrap";

function MyOrders() {
  const header = useSelector((state) => state.auth.user);
  const id = useSelector((state) => state.id);
  const MYORDERS_URL = "http://localhost:4000/delivery/myOrders";
  const [pending, setPending] = useState(true);
  const [myOrders, setMyOrders] = useState({
    address: "",
    status: "",
    client_name: "",
    client_email: "",
    total: "",
  });

  useEffect(() => {
    (async () => {
      await axios
        .get(`${MYORDERS_URL}/${id}`, {
          headers: { Authorization: `Bearer ${header}` },
        })
        .then((res) => {
          setMyOrders(res.data);
          setPending(false);
        });
    })();
  }, []);

  if (pending !== true) {
    return (
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
              </tr>
            </thead>
            <tbody style={{ borderTop: "none" }}>
              {myOrders.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>{element.address}</td>
                    <td>{element.status}</td>
                    <td>{element.client_id.username}</td>
                    <td>{element.client_id.email}</td>
                    <td>{element.totale}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  } else {
    return (
      <>
        <Spinner>Loading...</Spinner>
      </>
    );
  }
}

export default MyOrders;
