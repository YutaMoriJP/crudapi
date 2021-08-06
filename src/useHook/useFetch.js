import { useState, useEffect } from "react";

const useFetch = (
  url,
  method = "GET",
  headers = { "Content-Type": "application/json" },
  body,
  sent,
  requested
) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let didCancel = false;
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    const asyncReq = async () => {
      try {
        const res =
          method === "GET" || method === "DELETE"
            ? await fetch(url, { method, headers, signal })
            : await fetch(url, {
                method,
                headers,
                body: JSON.stringify(body),
                signal,
              });
        if (res.ok) {
          const jsonRes = await res.json();
          if (!didCancel) {
            setData(jsonRes);
            setLoading(false);
            setError(false);
          }
        } else {
          if (!didCancel) {
            setError(res);
          }
        }
      } catch (e) {
        if (controller.aborted) {
          controller.abort();
        }
        setLoading(false);
        setError(e);
      }
    };
    asyncReq();
    return () => {
      didCancel = true;
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, sent]);
  return [data, loading, error];
};

export default useFetch;
