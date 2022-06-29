import React from "react";
import { Card, CardHeader, CardBody, Button } from "reactstrap";

function CategoryCard() {
  const listPath = () => {
    return (window.location = "/category");
  };
  return (
    <>
      <Card>
        <CardHeader style={{ backgroundColor: "#FF71C9", color: "#FFFFFF" }}>
          Categories meal
        </CardHeader>
        <CardBody>Here you find all categories of meal</CardBody>
        <Button color="#FF71C9" onClick={listPath}>
          Click for more
        </Button>
      </Card>
    </>
  );
}

export default CategoryCard;
