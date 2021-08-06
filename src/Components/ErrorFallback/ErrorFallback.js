function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" style={{ margin: "auto" }}>
      <p>Something went wrong :(</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Please try again</button>
    </div>
  );
}

export default ErrorFallback;
