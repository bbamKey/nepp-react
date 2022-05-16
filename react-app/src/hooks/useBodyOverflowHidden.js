import { useEffect } from "react";

const useBodyOverflowHidden = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = null;
    };
  }, []);
};

export default useBodyOverflowHidden;
