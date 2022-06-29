import React from "react";
import { Card, CardHeader, CardBody, Button } from "reactstrap";

function OrderCard() {
  const changePath = () => {
    return (window.location = "/orders");
  };

  return (
    <>
      <Card color="#F29557" outline>
        <CardHeader
          style={{
            backgroundColor: "#F29557",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Orders
        </CardHeader>
        <CardBody>Here you find all orders</CardBody>
        <Button color="#F29557" onClick={changePath}>
          Click for more
        </Button>
      </Card>
    </>
  );
}

export default OrderCard;
