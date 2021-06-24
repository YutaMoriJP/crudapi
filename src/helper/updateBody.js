import { replaceSpace } from "./authenticateInput";

const updateBody = properties =>
  Object.fromEntries(
    properties
      .filter(obj => {
        // eslint-disable-next-line no-unused-vars
        const [[_, v]] = Object.entries(obj);
        return replaceSpace(v).length;
      })
      .map(obj => {
        const key = Object.keys(obj)[0];
        const value = Object.values(obj)[0];
        return [key, value];
      })
  );

export default updateBody;
