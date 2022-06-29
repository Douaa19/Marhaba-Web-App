import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  CardGroup,
  Container,
  Card,
  CardBody,
  CardHeader,
  Button,
  Progress,
  Spinner,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { updateOredr } from "../../services/order-service/OrderService";

function Cards() {
  const header = useSelector((state) => state.auth.user);
  const deliveryGuy_id = useSelector((state) => state.id);
  const [pending, setPending] = useState(true);
  const [value, setValue] = useState(25);
  const [order, setOrder] = useState({});
  // console.log(deliveryGuy_id, header)

  useEffect(() => {
    (async () => {
      axios
        .get(
          `http://localhost:8080/delivery/workingCommands/${deliveryGuy_id}`,
          {
            headers: { Authorization: `Bearer ${header}` },
          }
        )
        .then((res) => {
          console.log(res.data)
          setOrder(res.data);
          setPending(false);
        });
    })();
  }, []);

  const updateStatus = async (id) => {
    if (id) {
      await updateOredr(id, deliveryGuy_id, header).then((response) => {
        window.location = "/deliveryguy-dashboard";
      });
    }
  };

  const newOrdersPath = () => {
    window.location = "/newOrders";
  };
  const myOrdersPath = () => {
    window.location = "/myOrders";
  };

  if (pending !== true) {
    return (
      <>
        <Container>
          <CardGroup>
            <Card color="#51A3F5" outline>
              <CardHeader
                style={{
                  backgroundColor: "#51A3F5",
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                New orders
              </CardHeader>
              <CardBody>Here you find all new orders</CardBody>
              <Button color="#51A3F5" onClick={newOrdersPath}>
                Click for more
              </Button>
            </Card>
            <Card color="#51A3F5" outline>
              <CardHeader
                style={{
                  backgroundColor: "#51A3F5",
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                My orders
              </CardHeader>
              <CardBody>Here you find all the oredrs that I worked</CardBody>
              <Button color="#51A3F5" onClick={myOrdersPath}>
                Click for more
              </Button>
            </Card>
          </CardGroup>
          {order.map((element, index) => {
            return (
              <Card
                body
                className="text-center"
                style={{ marginTop: "2rem" }}
                key={index}
              >
                <CardTitle tag="h5">{element._id}</CardTitle>
                <CardSubtitle>{element.address}</CardSubtitle>
                {element.status === "prepared" && (
                  <>
                    <Progress value={50} />
                    <Button
                      onClick={() => updateStatus(element._id)}
                      color="warning"
                    >
                      Lunched
                    </Button>
                  </>
                )}
                {element.status === "delivered" && (
                  <>
                    <Progress value={75} />
                    <Button
                      onClick={() => updateStatus(element._id)}
                      color="success"
                    >
                      Delivered
                    </Button>
                  </>
                )}
              </Card>
            );
          })}
        </Container>
      </>
    );
  } else {
    return <Spinner>Loading...</Spinner>;
  }
}

export default Cards;
