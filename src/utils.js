const users = [];

const registerUser = (user) => {
  users.push(user);
};

const findUser = (email, password) => {
  return users.find(
    (user) => user.email === email && user.password === password
  );
};

export { registerUser, findUser };
