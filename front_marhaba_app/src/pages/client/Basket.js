import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
  Input,
  Label,
} from "reactstrap";
import { FaShoppingBasket } from "react-icons/fa";
import NavbarComponent from "../../components/shared-elemenets/NavbarComponent";
import { createCommand } from "../../services/order-service/OrderService";
import { setInitial } from "../../actions/orders";

function Basket() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const header = useSelector((state) => state.auth.user);
  const client_id = useSelector((state) => state.id);
  const [status, setStatus] = useState(false);
  const [address, setAddress] = useState({
    address: "",
  });

  const moreInfos = () => {
    setStatus(true);
  };

  const handleAddress = (e) => {
    setAddress({ ...address, address: e.target.value });
  };

  const newCommand = async () => {
    if (client_id && orders && address) {
      const data = {
        address: address.address,
        client_id: client_id,
        products: orders.orders,
      };
      await createCommand(data, header).then((res) => {
        if (res) {
          dispatch(setInitial([]));
          window.location = "/";
        } else {
          console.log("Order not created !!");
        }
      });
    }
  };

  return (
    <>
      <NavbarComponent />
      <Container>
        <div className="card" style={{ marginTop: "2rem" }}>
          {orders.orders.map((order, index) => {
            return (
              <Card key={index}>
                <CardBody>
                  <CardTitle tag="h5">{order.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Price: {order.price_product}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Quantity: {order.quantity}
                  </CardSubtitle>
                </CardBody>
              </Card>
            );
          })}
          {status === true && (
            <div className="form">
              <Label>Adrress</Label>
              <Input
                type="text"
                value={address.address}
                onChange={handleAddress}
              />
              <div className="btn">
                <Button
                  style={{
                    padding: "0.5rem 2rem",
                    marginTop: "0.8rem",
                    //   width: "100%",
                  }}
                  color="primary"
                  outline
                  onClick={() => newCommand()}
                >
                  Submit
                </Button>
              </div>
            </div>
          )}
          {status !== true && (
            <div
              className="btn"
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Button
                style={{
                  padding: "0.5rem 1rem",
                  marginTop: "0.8rem",
                  width: "20%",
                }}
                color="primary"
                outline
                onClick={() => moreInfos()}
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

export default Basket;
