const formatSelect = (user, index) => ({
  value: user?._id,
  label: `User ${index + 1}`,
});

export default formatSelect;
