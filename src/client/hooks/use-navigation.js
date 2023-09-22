import { useSlice } from "../slices";
import { useEffect } from "react";

export const useNavigation = () => {
  const [page, setPage] = useSlice("page");

  useEffect(() => {
    const handlePopstate = (e) => {
      e.preventDefault();
      setPage(e.state ?? { page: "home" });
    };
    addEventListener("popstate", handlePopstate);
    return () => {
      removeEventListener("popstate", handlePopstate);
    };
  }, []);

  return page;
};
