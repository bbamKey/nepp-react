import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Outlet, useNavigate } from "react-router-dom";
import { loginState } from "../stores";

const LoginCheck = () => {
  const isLogin = useRecoilValue(loginState);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, []);
  return <Outlet />;
};

export default LoginCheck;
