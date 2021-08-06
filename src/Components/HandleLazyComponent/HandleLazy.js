export default function componentLoader(lazyComponent, attemptsLeft) {
  return new Promise((resolve, reject) => {
    lazyComponent()
      .then(resolve)
      .catch(error => {
        // let us retry after 0 ms
        console.log("lazy loading failed, re-trying");
        setTimeout(() => {
          if (attemptsLeft === 1) {
            reject(error);
            return;
          }
          componentLoader(lazyComponent, attemptsLeft - 1).then(
            resolve,
            reject
          );
        }, 500);
      });
  });
}
