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

function PendingItem({ data }) {
  const header = useSelector((state) => state.auth.user);
  const role = useSelector((state) => state.role)
  console.log(role)

  const acceptDg = (id) => {
    if (id) {
      accept(id, header);
      window.location = "/pendingDg";
    }
  };

  const refuseDg = async (id) => {
    if (id) {
      await refuse(id, header);
      window.location = "/pendingDg";
    }
  };

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
                className="buttons"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div className="acceptButn">
                  <Button color="success" onClick={() => acceptDg(element._id)}>
                    Accept <FaCheck />
                  </Button>
                </div>
                <div className="refuseBtn">
                  <Button color="danger" onClick={() => refuseDg(element._id)}>
                    Refuse <FaTimes />
                  </Button>
                </div>
              </div>
            </td>
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

export default PendingItem;
