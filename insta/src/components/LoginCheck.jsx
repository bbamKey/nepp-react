import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Outlet, useNavigate } from "react-router-dom";
import { loginState } from "../stores";

const LoginCheck = () => {
  const isLogin = useRecoilValue(loginState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/signin");
    }
  }, []);
  return <Outlet />;
};

export default LoginCheck;
