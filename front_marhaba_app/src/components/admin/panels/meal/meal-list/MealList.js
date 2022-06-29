import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Button, Table } from "reactstrap";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { deleteM } from "../../../../../services/meal-service/MealService";
import EditMeal from "../../../crud/meal-crud/EditMeal";
import NavbarComponent from "../../../../shared-elemenets/NavbarComponent";

function MealList() {
  const MEAL_URL = "http://localhost:8080/announce/announces";
  const header = useSelector((state) => state.auth.user);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get(`${MEAL_URL}`, {
        headers: { Authorization: `Bearer ${header}` },
      })
      .then((res) => setMeals(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const deleteMeal = (id) => {
    if (id) {
      deleteM(id, header);
      window.location = "/meals";
    }
  };
  const path = "../../../../../../../../ApiMarhabaLivraison/src/public/images"

  const addPath = () => {
    return (window.location = "/addMeal");
  };

  return (
    <>
      <NavbarComponent />
      <div style={{ margin: "1rem" }}>
        <Container>
          <Table bordered style={{ borderColor: "#CFA2ED" }}>
            <thead>
              <tr style={{ color: "#CFA2ED", textAlign: "center" }}>
                <th>Title</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody style={{ borderTop: "none" }}>
              {meals.map((meal, index) => {
                return (
                  <tr key={index}>
                    <td>{meal.title}</td>
                    <td><img src="{path}" alt="" /></td>
                    <td>{meal.description}</td>
                    <td>{meal.price}</td>
                    <td>{meal.category_id.name}</td>
                    <td>
                      <div
                        className="buttons"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          color="none"
                          onClick={() => deleteMeal(meal._id)}
                        >
                          Delete
                          <FaTrashAlt />
                        </Button>
                        <Link
                          className="btn btn-link text-dark px-3 mb-0"
                          to={"editMeal/" + meal._id}
                        >
                          Edit
                          <FaPencilAlt />
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button color="primary" onClick={addPath}>
            Add meal
          </Button>
        </Container>
      </div>
    </>
  );
}

export default MealList;
