import React from "react";
import { CardHeader, Card, CardBody, Button } from "reactstrap";

function ClientCard() {
  const changePath = () => {
    window.location = "/clients";
  };

  return (
    <>
      <Card color="#51A3F5" outline>
        <CardHeader
          style={{
            backgroundColor: "#51A3F5",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Clients
        </CardHeader>
        <CardBody>Here you find all your clients</CardBody>
        <Button color="#51A3F5" onClick={changePath}>
          Click for more
        </Button>
      </Card>
    </>
  );
}

export default ClientCard;
