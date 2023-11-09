import { useEffect, useState } from "react";
import PageBanner from "../../Component/PageBanner/PageBanner";
import useAuthInfoHook from "../../Hooks/useAuthInfoHook";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import MyBidRow from "./MyBidRow";

const MyBids = () => {
  const { user, status, setStatus } = useAuthInfoHook();
  const [mybids, setMybids] = useState([]);

  useEffect(() => {
    axios
      .get(
        ` https://online-marketplace-server-j666mjnnd-rakibaakter.vercel.app/bid?userEmail=${user.email}`
      )
      .then((res) => {
        setMybids(res.data);
      });
  }, [user]);
  console.log(mybids);

  return (
    <div>
      <Helmet>
        <title>Skill-Approved|my-bids</title>
      </Helmet>
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
              <MyBidRow key={bid._id} bid={bid} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
