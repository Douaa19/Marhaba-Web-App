import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Table, Container } from "reactstrap";
import RefusedItem from "./items/RefusedItem";
import AcceptedItem from "./items/AcceptedItem";
import PendingItem from "./items/PendingItem";

function DgList({ type }) {
  const header = useSelector((state) => state.auth.user);
  const role = useSelector((state) => state.role);
  console.log(role)
  const URL = "http://localhost:8080/admin";
  const [accepted, setAccepted] = useState([]);
  const [pending, setPending] = useState([]);
  const [refused, setRefused] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/acceptedDeliveryguys`, {
        headers: { Authorization: `Bearer: ${header}` },
      })
      .then((res) => setAccepted(res.data))
      .catch((err) => console.log(err));
    axios
      .get(`${URL}/pendingDeliveryguys`, {
        headers: { Authorization: `Bearer: ${header}` },
      })
      .then((res) => setPending(res.data))
      .catch((err) => console.log(err));
    axios
      .get(`${URL}/refusedDeliveryguys`, {
        headers: { Authorization: `Bearer: ${header}` },
      })
      .then((res) => setRefused(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Container>
        <Table bordered style={{ borderColor: "#CFA2ED" }}>
          <thead>
            <tr style={{ color: "#DA78F5" }}>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              {type === "pending" && <th>Actions</th>}
              {type !== "accepted" && <th>Delete</th>}
            </tr>
          </thead>
          <tbody>
            {type === "accepted" && <AcceptedItem data={accepted} />}
            {type === "pending" && <PendingItem data={pending} />}
            {type === "refused" && <RefusedItem data={refused} />}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default DgList;
