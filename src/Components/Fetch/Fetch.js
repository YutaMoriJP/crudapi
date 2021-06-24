import React, { useEffect } from "react";
import useFetch from "../../useHook/useFetch";
import reloadPage from "../../helper/reloadPage";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";

const handleError = error => {
  const { msg } = error;
  if (msg) return <h1>{msg}</h1>;
  if (typeof error === "object") return null;
  return (
    <>
      <h1>
        An Error occured in your request and the Server is not responding.
      </h1>
      <Button onClick={reloadPage} color="secondary">
        Reload the page?
      </Button>
    </>
  );
};

const Fetch = ({
  url,
  method = "GET",
  query = "",
  requested = null,
  renderData = () => null,
  setSelects = () => null,
  body,
  headers,
  sent,
  crossed = false,
}) => {
  const [data, loading, error] = useFetch(
    `${url}/${query}`,
    method,
    headers,
    body,
    sent || requested
  );
  useEffect(() => {
    if (method === "GET" && !query.length) {
      setSelects(data ? data : "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, method]);
  if (loading) return <Loading color="secondary" isText={true} />;
  if (error) return <>{method === "DELETE" ? null : handleError(error)}</>;
  return Array.isArray(data)
    ? data.map((data, index) => renderData(data, index, crossed))
    : [data].map((data, index) => renderData(data, index, crossed));
};
export default Fetch;
