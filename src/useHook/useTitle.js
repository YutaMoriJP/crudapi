import { useEffect } from "react";

const useTitle = (title = "USER API") => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useTitle;
