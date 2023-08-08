export default (data) => {
  const errors = {};

  if (!data.email.includes("@")) {
    errors.e1 = "Please enter a valid email address";
  }
  if (!data.email) {
    errors.e2 = "Please enter an email address";
  }
  if (data.email.length > 35) {
    errors.e3 = "The email maximum length is 35 characters";
  }
  if (!/\d/.test(data.password)) {
    errors.p1 = "The password must contain at least 1 number";
  }
  if (data.password.length < 6 || data.password.length > 10) {
    errors.p2 = "The password must contain between 6 and 10 characters";
  }
  return errors;
};
