import { useEffect, useState } from "react";
import PageBanner from "../../Component/PageBanner/PageBanner";
import useAuthInfoHook from "../../Hooks/useAuthInfoHook";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import BidRequestRow from "./BidRequestRow";

const BidRequest = () => {
  const { user, status, setStatus } = useAuthInfoHook();
  const [isdisbale, setDisable] = useState(false);
  const [mybidRequests, setMybidRequests] = useState([]);

  useEffect(() => {
    axios
      .get(
        `      https://online-marketplace-server-5qhhmytgs-rakibaakter.vercel.app/bid?posterEmail=${user.email}`
      )
      .then((res) => {
        setMybidRequests(res.data);
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
            {mybidRequests.map((bid) => (
              <BidRequestRow key={bid._id} bid={bid} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidRequest;
