import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMealById } from "../../services/meal-service/MealService";
import {
  Container,
  Button,
  Input,
  Label,
  Card,
  CardGroup,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
  Alert,
} from "reactstrap";
import { setOrders } from "../../actions/orders";

function Order() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const header = useSelector((state) => state.auth.user);
  const id_client = useSelector((state) => state.id);
  const [announce, setAnnounce] = useState({
    title: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    getMealById(id, header).then((res) => setAnnounce(res[0]));
  }, []);

  const [product, setProduct] = useState({
    product_title: "",
    product_id: "",
    quantity: "",
    price_product: "",
  });

  const handleQuantity = (e) => {
    setProduct({ ...product, quantity: e.target.value });
  };

  const handleSubmit = () => {
    if (product.quantity === "0") {
      console.log("You must add quantity!");
    } else {
      product.product_title = announce.title;
      product.price_product = announce.price;
      product.product_id = announce._id;
      dispatch(setOrders([product]));
      window.location = "/";
    }
  };

  return (
    <div style={{ marginTop: "1rem", display: "flex", alignItems: "center" }}>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <CardGroup style={{ width: "50%" }}>
          <Card
            color="warning"
            outline
            style={{ padding: "1rem", display: "flex", alignItems: "center" }}
          >
            <CardBody>
              <CardTitle style={{ textAlign: "center" }}>
                {announce.title}
              </CardTitle>
              <CardText style={{ textAlign: "center" }}>
                {announce.description}
              </CardText>
              <CardSubtitle style={{ textAlign: "center" }}>
                {announce.price}.00 DH
              </CardSubtitle>
              <Label>Quantity</Label>
              <Input
                type="number"
                style={{ width: "30%" }}
                name="quantity"
                value={product.quantity}
                onChange={handleQuantity}
              />
              <div className="btn" style={{ display: "flex" }}>
                <Button
                  color="success"
                  outline
                  style={{ padding: "0.5rem 2rem", marginTop: "0.8rem" }}
                  onClick={() => handleSubmit()}
                >
                  Add
                </Button>
              </div>
            </CardBody>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default Order;
