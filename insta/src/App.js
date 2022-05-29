import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import "./App.css";
import Router from "./components/Router";
import instance from "./apis";
import { loginState } from "./stores";

function App() {
  const setIsLogin = useSetRecoilState(loginState);
  const [isChk, setIsChk] = useState(false);

  useEffect(() => {
    const { token } = localStorage;
    if (token) {
      instance.defaults.headers.common["Authorization"] = token;
      setIsLogin(true);
    }
    setIsChk(true);
  }, []);

  return isChk && <Router />;
}

export default App;
