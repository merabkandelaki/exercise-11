const validateForm = (state) => {
  const { firstName, lastName, birthDate, email, password, confirmPassword } =
    state;
  const errors = {};

  if (!firstName) errors.firstName = "Enter firstname";
  if (!lastName) errors.lastName = "Enter lastname";
  if (!birthDate) errors.birthDate = "Enter birth date";
  if (!email) errors.email = "Enter email";
  else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Invalid email address";
  if (!password) errors.password = "Enter password";
  else if (password.length < 8)
    errors.password = "The password must consist of at least 8 characters";
  if (!confirmPassword) errors.confirmPassword = "Confirm password";
  else if (confirmPassword !== password)
    errors.confirmPassword = "Passwords do not match";

  return errors;
};

export default validateForm;
