import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, FormGroup, Input, Label, Container, Button } from "reactstrap";
import createCategory from "../../../../services/category-service/CategoryService";

function AddCategory() {
  const header = useSelector((state) => state.auth.user);
  const [category, setCategory] = useState({
    name: "",
  });

  const handleCategory = (e) => {
    setCategory({ ...category, name: e.target.value });
  };

  const handleSubmit = () => {
    if (category) {
      createCategory(category, header)
        .then((res) => {
          window.location = `/category`
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <>
      <Container>
        <div className="form">
          <h4>Add category</h4>
          <Form method="post" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="category name">Category name</Label>
              <Input
                type="text"
                onChange={handleCategory}
                value={category.name}
              />
            </FormGroup>
            <Button color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default AddCategory;
