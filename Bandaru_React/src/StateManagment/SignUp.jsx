import React, { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleName = (e) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };

  const handlePassword = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  return (
    <div>
      <h1>Sign Up Form</h1>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={user.name}
        onChange={handleName}
      />

      <br />
      <br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={user.email}
        onChange={handleEmail}
      />

      <br />
      <br />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={user.password}
        onChange={handlePassword}
      />

      <br />
      <br />

      <h2>Name: {user.name}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Password: {user.password}</h2>
    </div>
  );
};

export default SignUp;
