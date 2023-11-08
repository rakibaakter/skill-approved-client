import { useEffect, useState } from "react";
import PageBanner from "../../Component/PageBanner/PageBanner";
import useAuthInfoHook from "../../Hooks/useAuthInfoHook";
import axios from "axios";

const BidRequest = () => {
  const { user } = useAuthInfoHook();
  const [mybids, setMybids] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bid?posterEmail=${user.email}`)
      .then((res) => {
        setMybids(res.data);
      });
  }, [user]);
  return (
    <div>
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
                <td>Pending</td>
                <td>
                  <button className="btn btn-success  ">Accept</button>
                </td>
                <td>
                  <button className="btn btn-error  ">Reject</button>
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
