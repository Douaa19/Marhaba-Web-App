import React from "react";
import { Button } from "reactstrap";
import { FaTrashAlt } from "react-icons/fa";

function AcceptedItem({ data }) {
  

  return (
    <>
      {data.map((element, index) => {
        return (
          <tr key={index}>
            <td>{element.username}</td>
            <td>{element.email}</td>
            <td>{element.role.name}</td>
            <td>{element.role.status}</td>
          </tr>
        );
      })}
    </>
  );
}

export default AcceptedItem;
