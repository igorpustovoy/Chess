import useAuth from "hooks/useAuth";
import useRefreshToken from "hooks/useRefreshToken";
import { useState, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";

const PersistLogin: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useLayoutEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        console.log("Verifying refresh token");
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    //only run when no user in state
    if (Object.keys(auth).length === 0) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{isLoading ? <div>Loading...</div> : <Outlet />}</>;
};

export default PersistLogin;
