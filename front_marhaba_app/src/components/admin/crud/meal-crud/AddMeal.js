import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, FormGroup, Input, Label, Container, Button } from "reactstrap";
import { createMeal } from "../../../../services/meal-service/MealService";

function AddMeal() {
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

  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    images: "",
  });

  const handleTitle = (e) => {
    setValues({ ...values, title: e.target.value });
  };

  const handleDescription = (e) => {
    setValues({ ...values, description: e.target.value });
  };

  const handlePrice = (e) => {
    setValues({ ...values, price: e.target.value });
  };

  const handleImage = (e) => {
    setValues({ ...values, images: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values) {
      createMeal(values, header)
      .then((res) => console.log(res));
      window.location = "/meals";
    }
  };

  return (
    <div>
      <Container>
        <div className="form">
          <h4>Add meal</h4>
          <Form method="post" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="category name">Title</Label>
              <Input
                type="text"
                name="title"
                onChange={handleTitle}
                value={values.title}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category name">Description</Label>
              <Input
                type="text"
                name="description"
                onChange={handleDescription}
                value={values.description}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category name">Price</Label>
              <Input
                type="text"
                name="price"
                onChange={handlePrice}
                value={values.price}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category name">Category</Label>
              <Input
                id="exampleSelect"
                name="category_id"
                type="select"
                onChange={({ target }) =>
                  setValues({ ...values, category: target.value })
                }
              >
                <option selected disabled>
                  Choose a category
                </option>
                {categories.map((category, index) => {
                  return <option key={index} value={category.name}>{category.name}</option>;
                })}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="category name">Category</Label>
              <Input type="file" label="Upload" onChange={handleImage} />
            </FormGroup>
            <Button color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default AddMeal;
