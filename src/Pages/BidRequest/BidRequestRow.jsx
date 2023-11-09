import axios from "axios";
import Swal from "sweetalert2";

const BidRequestRow = ({ bid }) => {
  const { _id, title, userEmail, bidDeadline, bidSalary, status } = bid;

  const handleRejectBtn = (id) => {
    console.log(id);
    const newStatus = "canceled";

    const updatedBid = {
      title,
      userEmail,
      bidDeadline,
      bidSalary,
      status: newStatus,
    };

    axios
      .put(
        `   https://online-marketplace-server-j666mjnnd-rakibaakter.vercel.app/bid/${id}`,
        updatedBid
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAcceptBtn = (id) => {
    console.log(id);
    const newStatus = "in progress";

    const updatedBid = {
      title,
      userEmail,
      bidDeadline,
      bidSalary,
      status: newStatus,
    };

    axios
      .put(
        `https://online-marketplace-server-j666mjnnd-rakibaakter.vercel.app/bid/${id}`,
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
      <td>{userEmail}</td>
      <td>{bidDeadline}</td>
      <td>${bidSalary}</td>
      <td>{status}</td>
      <td>
        <button
          onClick={() => handleAcceptBtn(_id)}
          className="btn btn-success"
          disabled={status === "canceled" || status === "in progress"}
        >
          Accept
        </button>
      </td>
      <td>
        <button
          onClick={() => handleRejectBtn(_id)}
          className="btn btn-error  "
          disabled={status === "canceled"}
        >
          Reject
        </button>
      </td>
    </tr>
  );
};

export default BidRequestRow;
