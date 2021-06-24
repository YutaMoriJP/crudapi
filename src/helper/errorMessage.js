import { notEmpty, correctType } from "./authenticateInput";

export const notName = name => !/^[a-z\s]+$/i.test(name);

export const notNum = num => !/^[\d]+$/.test(num);

const errorMessage = (name, username, age) => {
  let n = name;
  let u = username;
  let a = age;
  [name, username, age] = [name, username, age].map(notEmpty);
  return !name && !age && !username
    ? "Name, Age, and Username are missing"
    : !name && !age
    ? "Name and Age are missing"
    : !name && !username
    ? "Name and username are missing"
    : !age && !username
    ? "Age and username are missing"
    : !name
    ? "Name is misisng"
    : !age
    ? "Age is missing"
    : !username
    ? "Username is missing"
    : "" + typeMessage(n, u, a);
};
const typeMessage = (name, username, age) => {
  console.log("name is", name);
  console.log(notName(name));
  console.log("username is", username);
  console.log(notName(username));
  console.log("age is", age);
  console.log(notNum(age));
  if (notName(name) && notName(username) && notNum(age))
    return "Name, Username, and Age are in the wrong format.";
  if (notName(name) && notName(username))
    return "Name and Username are in the wrong format.";
  if (notName(name) && notNum(age))
    return "Name and Age are in the wrong format";
  if (notName(username) && notNum(age))
    return "Username and Age are in the wrong format";
  if (notName(username)) return "Username is in the wrong format";
  if (notNum(age)) return "Age is in the wrong format";
  if (notName(name)) return "Name is in the wrong format";
  return "Your Input is wrong. Please try something else.";
};

export const getError = (userID, isEmpty, types) => {
  if (!userID && !isEmpty.length)
    return "Please select a user data to update from the select menu and update at least one field";
  if (!userID) return "Please select a user to update.";
  if (!isEmpty.length) return "Please update at least one field to update";
  return [
    "Name Must be a property name and not numbers",
    "Username must be a proper name and not numbers",
    "Age must be a number",
  ][types.findIndex((v, i) => !correctType(v, i))];
};

export default errorMessage;
/*
const typeMessage = (name, username, age) => {
  if (isNaN(name) && isNaN(username) && !isNaN(+age))
    return "Name, username, and age are in the wrong format";
  if (isNaN(name) && isNaN(username))
    return "Name and Username are in the wrong format";
  if (isNaN(name) && !isNaN(+age))
    return "Name and Age are in the wrong format";
  if (!isNaN(+age) && isNaN(username))
    return "Age and Username are in the wrong format";
  if (isNaN(name)) return "Name is in the wrong format";
  if (!/\d/.test(+age)) return "Age is in the wrong format";
  return "Username is in the wrong format";
};
*/
