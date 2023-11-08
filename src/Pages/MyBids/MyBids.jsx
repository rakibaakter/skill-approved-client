import { useEffect, useState } from "react";
import PageBanner from "../../Component/PageBanner/PageBanner";
import useAuthInfoHook from "../../Hooks/useAuthInfoHook";
import axios from "axios";

const MyBids = () => {
  const { user } = useAuthInfoHook();
  const [mybids, setMybids] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bid?userEmail=${user.email}`)
      .then((res) => {
        setMybids(res.data);
      });
  }, [user]);
  console.log(mybids);

  return (
    <div>
      <PageBanner>My Bids</PageBanner>
      <div className="overflow-x-auto py-4 px-2 text-center md:px-10 lg:px-20">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Title</th>
              <th>User Email</th>
              <th>Poster Email</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>
            {mybids.map((bid) => (
              <tr key={bid._id}>
                <td>{bid.title}</td>
                <td>{user.email}</td>
                <td>{bid.posterEmail}</td>
                <td>{bid.bidDeadline}</td>
                <td>
                  <button className="btn btn-info">Pending</button>
                </td>
                <td>
                  <button className="btn btn-success btn-disabled ">
                    Complete
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

export default MyBids;
