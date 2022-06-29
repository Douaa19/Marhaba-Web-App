import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Container, Spinner, Button, Table, Progress } from "reactstrap";
import NavbarComponent from "../../components/shared-elemenets/NavbarComponent";

function History() {
  const header = useSelector((state) => state.auth.user);
  const Id = useSelector((state) => state.id);
  const [pending, setPending] = useState(true);
  const [orders, setOrders] = useState({});
  const URL = "http://localhost:8080/command/commands";

  useEffect(() => {
    (async () => {
      await axios
        .get(`${URL}/${Id}`, {
          headers: { Authorization: `Bearer ${header}` },
        })
        .then((res) => {
          setOrders(res.data);
          setPending(false);
        });
    })();
  }, []);

  if (pending !== true) {
    return (
      <>
        <NavbarComponent />
        <Container>
          <Table bordered style={{ borderColor: "#F29557" }}>
            <thead>
              <tr style={{ color: "#F29557", textAlign: "center" }}>
                <th>Address</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody style={{ borderTop: "none" }}>
              {orders.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>{element.address}</td>
                    <td>
                      {element.status === "new" && (
                        <>
                          {element.status}
                          <Progress color="danger" value={25} />
                        </>
                      )}
                      {element.status === "prepared" && (
                        <>
                          {element.status}
                          <Progress color="warning" value={50} />
                        </>
                      )}
                      {element.status === "delivered" && (
                        <>
                          {element.status}
                          <Progress color="primary" value={75} />
                        </>
                      )}
                      {element.status === "lunched" && (
                        <>
                          {element.status}
                          <Progress color="success" value={100} />
                        </>
                      )}
                    </td>
                    <td>{element.totale}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
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

export default History;
