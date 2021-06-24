import { notName, notNum } from "./errorMessage";

export const replaceSpace = string => `${string}`.replace(/\s/g, "");

export const notEmpty = string => replaceSpace(string).length;

export const correctType = (value, index) =>
  index === 0 ||
  (index === 1 && isNaN(value)) ||
  (index === 2 && !isNaN(+value)) ||
  !value.length;

const authenticatePost = (...users) => {
  return users.length && users.some(notEmpty) && users.every(correctType);
};

export const authenticatePut = (...users) => {
  const [name, username, age] = users;
  return (
    !notName(replaceSpace(name)) &&
    !notName(replaceSpace(username)) &&
    !notNum(age)
  );
  //return users.length && users.every(notEmpty) && users.every(correctType);
};
export default authenticatePost;
