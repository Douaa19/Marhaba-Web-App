import React from "react";
import ClientCard from "./client/client-card/ClientCard";
import MealCard from "./meal/meal-card/MealCard";
import DgCard from "./deliveryguy/dg-card/DgCard";
import OrderCard from "./order-panel/order-card/OrderCard";
import CategoryCard from "./category/category-card/CategoryCard";
import { CardGroup, Container } from "reactstrap";

function Cards() {
  return (
    <>
      <Container>
        <CardGroup>
          <ClientCard />
          <MealCard />
          <CategoryCard />
          <OrderCard />
        </CardGroup>
        <CardGroup>
          <DgCard />
        </CardGroup>
      </Container>
    </>
  );
}

export default Cards;
