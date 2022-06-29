import React from "react";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import {
  accept,
  refuse,
} from "../../../../../../services/deliveryguy-service/DgService";
import { FaCheck, FaTimes } from "react-icons/fa";
import { deleteDg } from "../../../../../../services/deliveryguy-service/DgService";
import { FaTrashAlt } from "react-icons/fa";

function RefusedItem({ data }) {
  const header = useSelector((state) => state.auth.user);

  const deleteDeliveryguy = async (id) => {
    await deleteDg(id, header);
    // window.location = "/acceptedDg";
  };

  return (
    <>
      {data.map((element, index) => {
        return (
          <tr key={index}>
            <td>{element.username}</td>
            <td>{element.email}</td>
            <td>{element.role.name}</td>
            <td>{element.role.status}</td>
            <td>
              <div
                className="deleteBtn"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  color="danger"
                  onClick={() => deleteDeliveryguy(element._id)}
                >
                  Delete <FaTrashAlt />
                </Button>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default RefusedItem;
