import React from "react";
import { CardHeader, Card, CardBody, Button } from "reactstrap";

function MealCard() {
  const changePath = () => {
    window.location = "/meals";
  };

  return (
    <>
      <Card color="#CFA2ED" outline>
      <CardHeader
          style={{
            backgroundColor: "#CFA2ED",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Meals
        </CardHeader>
        <CardBody>Here you find all meals</CardBody>
        <Button color="#CFA2ED" onClick={changePath}>
          Click for more
        </Button>
      </Card>
    </>
  );
}

export default MealCard;
