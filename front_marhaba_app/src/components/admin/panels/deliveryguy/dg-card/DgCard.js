import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardHeader, Card, CardBody, Button, CardImg } from "reactstrap";
import List from "../dg-list/DgList";
import { useSelector } from "react-redux";
const DG_URL = `http://localhost:8080/admin`;

function DgCard() {
  const acceptedPath = () => {
    window.location = "/acceptedDg";
  };
  const pendingPath = () => {
    window.location = "/pendingDg";
  };
  const refusedPath = () => {
    window.location = "/refusedDg";
  };

  const header = useSelector((state) => state.auth.user);
  const [pending, setPending] = useState([]);
  const [accepted, setAccepted] = useState([]);
  const [refused, setRefused] = useState([]);

  useEffect(() => {
    axios
      .get(`${DG_URL}/pendingDeliveryguys`, {
        headers: { Authorization: `Bearer ${header}` },
      })
      .then((res) => setPending(res.data))
      .catch((err) => console.log(err));
    axios
      .get(`${DG_URL}/acceptedDeliveryguys`, {
        headers: { Authorization: `Bearer ${header}` },
      })
      .then((res) => setAccepted(res.data))
      .catch((err) => console.log(err));
    axios
      .get(`${DG_URL}/refusedDeliveryguys`, {
        headers: { Authorization: `Bearer ${header}` },
      })
      .then((res) => setRefused(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Card>
        <CardHeader style={{ backgroundColor: "#67E696", color: "#FFFFFF" }}>
          Accepted delivery guys
        </CardHeader>
        <CardImg
          alt="Card image cap"
          src="../../../../../assets/img-card/maksym-tymchyk-jm70AzcV5AQ-unsplash.jpg"
          top
          width="100%"
        />
        <CardBody>Here you find accepted delivery guys</CardBody>
        <Button color="#CFA2ED" onClick={acceptedPath}>
          Click for more
        </Button>
      </Card>
      <Card>
        <CardHeader style={{ backgroundColor: "#FFE048", color: "#FFFFFF" }}>
          Pending delivery guys
        </CardHeader>
        <CardImg
          alt="Card image cap"
          src="../../../../../assets/img-card/maksym-tymchyk-jm70AzcV5AQ-unsplash.jpg"
          top
          width="100%"
        />
        <CardBody>Here you find pending delivery guys</CardBody>
        <Button color="#CFA2ED" onClick={pendingPath}>
          Click for more
        </Button>
      </Card>
      <Card>
        <CardHeader style={{ backgroundColor: "#E66966", color: "#FFFFFF" }}>
          Refused delivery guys
        </CardHeader>
        <CardImg
          alt="Card image cap"
          src="../../../../../assets/img-card/maksym-tymchyk-jm70AzcV5AQ-unsplash.jpg"
          top
          width="100%"
        />
        <CardBody>Here you find refused delivery guys</CardBody>
        <Button color="#CFA2ED" onClick={refusedPath}>
          Click for more
        </Button>
      </Card>
    </>
  );
}

export default DgCard;
