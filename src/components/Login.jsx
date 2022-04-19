import React, { useState } from "react";
import Form from "./Form";
import Image from "./../Assets/img.png";
import Profile from "./../Assets/dp.png";

import "./Login.css";

function Login({ Login }) {
  const data = {
    data: {
      name: "rohit",
      email: "rroo@gmail.com",
      password: "1234567890",
      phoneNumber: "9876543210",
    },
  };

  return (
    <div>
      <div className="headerLogin">
        <img src={Image} className="Loginimage" />
        <img src={Profile} className="profileImg" alt="" />
      </div>
      <Form data={data} Login={Login} />
    </div>
  );
}

export default Login;
