import React from "react";
import useAuthInfoHook from "../../Hooks/useAuthInfoHook";
import axios from "axios";

const MyBidRow = ({ bid }) => {
  const { user } = useAuthInfoHook();
  const { _id, title, posterEmail, userEmail, bidDeadline, bidSalary, status } =
    bid;

  const handleComplete = (id) => {
    console.log(id);
    const newStatus = "completed";

    const updatedBid = {
      title,
      userEmail,
      posterEmail,
      bidDeadline,
      bidSalary,
      status: newStatus,
    };

    axios
      .put(
        `  https://online-marketplace-server-5qhhmytgs-rakibaakter.vercel.app/bid/${id}`,
        updatedBid
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <tr>
      <td>{title}</td>
      <td>{user.email}</td>
      <td>{posterEmail}</td>
      <td>{bidDeadline}</td>
      <td>{status}</td>
      <td>
        <button
          onClick={() => handleComplete(_id)}
          className="btn btn-accent  "
          disabled={
            status === "canceled" ||
            status === "completed" ||
            status === "pending"
          }
        >
          Complete
        </button>
      </td>
    </tr>
  );
};

export default MyBidRow;
