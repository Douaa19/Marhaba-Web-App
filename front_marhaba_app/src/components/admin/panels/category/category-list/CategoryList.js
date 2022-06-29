import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Container, Table, Button } from "reactstrap";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { deleteCategory } from "../../../../../services/category-service/CategoryService";

function CategoryList() {
  const URL = "http://localhost:8080/category";
  const header = useSelector((state) => state.auth.user);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}`, {
        headers: { Authorization: `Bearer ${header}` },
      })
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addPath = () => {
    return (window.location = "/addCategory");
  };

  const deleteId = (id) => {
    if (id) {
      deleteCategory(id, header);
      window.location = "/category";
    }
  };

  return (
    <>
      <Container>
        <Table bordered style={{ borderColor: "#FF71C9" }}>
          <thead>
            <tr style={{ color: "#FF71C9", textAlign: "center" }}>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{ borderTop: "none" }}>
            {categories.map((category, index) => {
              return (
                <tr>
                  <td>{category.name}</td>
                  <td
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="delete-button">
                      <Button
                        color="danger"
                        onClick={() => deleteId(category._id)}
                      >
                        Delete
                        <FaTrashAlt />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button color="primary" onClick={addPath}>
          Add category
        </Button>
      </Container>
    </>
  );
}

export default CategoryList;
