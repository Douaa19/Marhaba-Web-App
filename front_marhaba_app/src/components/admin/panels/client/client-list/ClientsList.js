import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Table, Container, Button } from "reactstrap";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { deletClient } from "../../../../../services/client-service/clients";

function ClientsList() {
  const CLIENT_URL = `http://localhost:8080/admin/clients`;
  const header = useSelector((state) => state.auth.user);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get(`${CLIENT_URL}`, {
        headers: { Authorization: `Bearer ${header}` },
      })
      .then((res) => {
        setClients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteId = (id) => {
    if (id) {
      deletClient(id, header)
      window.location = "/clients"
    }
  };

  return (
    <div style={{ margin: "1rem" }}>
      <Container>
        <Table bordered style={{ borderColor: "#51A3F5" }}>
          <thead>
            <tr style={{ color: "#51A3F5", textAlign: "center" }}>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{ borderTop: "none" }}>
            {clients.map((client, index) => {
              return (
                <tr key={index}>
                  <td>{client.username}</td>
                  <td>{client.email}</td>
                  <td>{client.role.name}</td>
                  <td
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Button
                      color="danger"
                      onClick={() => deleteId(client._id)}
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
  );
}

export default ClientsList;
