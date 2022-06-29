import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getMealById, updateMeal } from "../../../../services/meal-service/MealService";
import { Container, Form, Button, FormGroup, Label, Input } from "reactstrap";

function EditMeal() {
  const header = useSelector((state) => state.auth.user);
  const { id } = useParams();
  const URL = "http://localhost:8080/category/";

  const [Meal, setMeal] = useState({});
  const [categories, setCategories] = useState({});

  useEffect(() => {
    axios
      .get(`${URL}`, {
        headers: { Authorization: `Bearer ${header}` },
      })
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(categories);

  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    images: "",
  });

  useEffect(() => {
    (async () => {
      await getMealById(id, header).then((meal) => {
        // console.log(meal[0])
        setValues(meal[0]);
        console.log(values);
      });
    })();
  }, []);
  console.log(values.category_id.name);

  const handleTitle = (e) => {
    setValues({ ...values, title: e.target.value });
  };

  const handleDescription = (e) => {
    setValues({ ...values, description: e.target.value });
  };

  const handlePrice = (e) => {
    setValues({ ...values, price: e.target.value });
  };

  const handleCategory = (e) => {
    setValues({ ...values, gategory: e.target.value });
  };

  const getUpdatedValues = (values) => {
    let res = {};
    Object.keys(values).map((key) => {
      if (values[key] !== "") {
        res[key] = values[key];
      }
    });
    return res;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getUpdatedValues(values);
    await updateMeal(id, getUpdatedValues(values), header)
    window.location = "/meals"
  };

  return (
    <div>
      <Container>
        <div className="form">
          <h4>Add meal</h4>
          <Form
            method="post"
            //   onSubmit={handleSubmit}
          >
            <FormGroup>
              <Label for="category name">Title</Label>
              <Input
                type="text"
                name="title"
                value={values.title}
                onChange={handleTitle}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category name">Description</Label>
              <Input
                type="text"
                name="description"
                value={values.description}
                onChange={handleDescription}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category name">Price</Label>
              <Input
                type="text"
                name="price"
                value={values.price}
                onChange={handlePrice}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category name">Category</Label>
              <Input
                id="exampleSelect"
                name="category_id"
                type="select"
                onChange={handleCategory}
              >
                <option selected disabled>
                  {values.category_id.name}
                </option>
                {categories.map((category, index) => {
                  return <option value={category.name}>{category.name}</option>;
                })}
              </Input>
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

export default EditMeal;
