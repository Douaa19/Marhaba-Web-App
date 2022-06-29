import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  CardGroup,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  Col,
  Row,
  Spinner,
} from "reactstrap";

function CardMeal() {
  const MEAL_URL = "http://localhost:8080/announce/announces";
  const header = useSelector((state) => state.auth.user);
  const [meals, setMeals] = useState({});
  const [pending, setPanding] = useState(true);

  useEffect(() => {
    (async () => {
      axios
        .get(`${MEAL_URL}`, {
          headers: { Authorization: `Bearer ${header}` },
        })
        .then((res) => {
          if (res) {
            setMeals(res.data);
            // console.log(res.data);
            setPanding(false);
          }
        })
        .catch((err) => console.log(err.message));
    })();
  }, []);
  // console.log(__dirname('C:/Users/Youcode/Documents/GitHub/ApiMarhabaLivraison/src/public/images/'));

  const changePath = (id) => {
    window.location = `/order/${id}`;
  };

  if (pending !== true) {
    return (
      <>
        <CardGroup>
          {meals.map((meal, index) => {
            return (
              <Row key={index}>
                <Col md={4}>
                  <Card style={{ width: "18rem", height: "auto" }}>
                    <CardImg
                      alt="Card image cap"
                      src="https://picsum.photos/318/180"
                      top
                      width="100%"
                      onClick={() => changePath(meal._id)}
                    />
                    <CardBody>
                      <CardTitle tag="h5">{meal.title}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {meal.price}.00 DH
                      </CardSubtitle>
                      <CardText>{meal.description}</CardText>
                      {/* <Button onClick={() => changePath(meal._id)}> */}
                      {/* Order
                      </Button> */}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </CardGroup>
      </>
    );
  } else {
    return (
      <>
        <Spinner>Loading...</Spinner>
      </>
    );
  }
}

export default CardMeal;
