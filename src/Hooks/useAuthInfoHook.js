import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAuthInfoHook = () => {
  const allInfo = useContext(AuthContext);
  // console.log(allInfo);

  return allInfo;
};

export default useAuthInfoHook;
