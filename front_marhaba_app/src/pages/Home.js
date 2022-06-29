import React from "react";
import { Container } from "reactstrap";
import CardMeal from "../components/shared-elemenets/CardMeal";
import NavbarComponent from "../components/shared-elemenets/NavbarComponent";
import Heroheader from "../components/shared-elemenets/Heroheader";

function Home() {
  return (
    <>
      <NavbarComponent />
      <Heroheader />
      <Container>
        <CardMeal></CardMeal>
      </Container>
    </>
  );
}

export default Home;
