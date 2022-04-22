import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import { useNavigate } from "react-router-dom";


export const RegisterForm = () => {
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    API.post("users/register", formData).then((response) => {
      console.log(response);

      navigate("/login");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username</label>
      <input
        type="text"
        name="name"
        {...register("name", { required: true })}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        {...register("email", {
          required: true,
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        {...register("password", {
          required: true,
          pattern:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
        })}
      />
      <button className="botonSubmit">Register</button>
    </form>
  );
};
