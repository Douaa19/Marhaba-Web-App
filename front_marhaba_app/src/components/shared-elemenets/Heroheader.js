import React from "react";
import { Button } from "reactstrap";
import Background from "../../assets/images/burger.jpg";

function Heroheader() {
  // STYLES --------------------
  const desc = {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  };

  const background = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    width: "100%",
    height: "63rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const p = {
    color: "#FFFFFF",
    fontSize: "18px",
    width: "50%",
  };

  const title = {
    fontSize: "60px",
    fontWeight: "bold",
    color: "#E6A115",
  };

  const btn = {
    color: "#FFFFFF",
    backgroundImage: "linear-gradient(315deg, #f0ecfc 0%, #E6A115 80%)",
    border: "none",
    padding: "0.5rem 1rem",
    transition: "color .2s",
    "&:hover": {
      color: "red",
    },
  };
  // STYLES --------------------

  return (
    <div className="background" style={background}>
      <div className="title" style={desc}>
        <h1 style={title}>MARHABA </h1>
        <p style={p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minus
          dicta laboriosam! Autem saepe
        </p>
        <div className="more-btn">
          <Button style={btn}>Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default Heroheader;
