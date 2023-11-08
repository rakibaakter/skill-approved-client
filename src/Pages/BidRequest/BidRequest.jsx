import { useEffect, useState } from "react";
import PageBanner from "../../Component/PageBanner/PageBanner";
import useAuthInfoHook from "../../Hooks/useAuthInfoHook";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const BidRequest = () => {
  const { user, status, setStatus } = useAuthInfoHook();
  const [isdisbale, setDisable] = useState(false);
  const [mybids, setMybids] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bid?posterEmail=${user.email}`)
      .then((res) => {
        setMybids(res.data);
      });
  }, [user]);

  const handleRejectBtn = () => {
    setStatus("rejected");
    setDisable(true);
  };

  return (
    <div>
      <Helmet>
        <title>Skill-Approved|bid-requests</title>
      </Helmet>
      <PageBanner>My Bid Request</PageBanner>
      <div className="overflow-x-auto py-4 px-2 text-center md:px-10 lg:px-20">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Title</th>
              <th>Requested Email</th>
              <th>Deadline</th>
              <th>Salary</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mybids.map((bid) => (
              <tr key={bid._id}>
                <td>{bid.title}</td>
                <td>{bid.userEmail}</td>
                <td>{bid.bidDeadline}</td>
                <td>${bid.bidSalary}</td>
                <td>{bid.status}</td>
                <td>
                  <button
                    onClick={() => handleAcceptBtn(bid._id)}
                    className="btn btn-success "
                  >
                    Accept
                  </button>
                </td>
                <td>
                  <button onClick={handleRejectBtn} className="btn btn-error  ">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidRequest;
