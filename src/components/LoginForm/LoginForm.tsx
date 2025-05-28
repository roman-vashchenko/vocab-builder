import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import css from "./LoginsForm.module.css";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

interface FormValues {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().min(7).required(),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.field}>
        <input
          type="email"
          {...register("email", {
            pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          })}
          placeholder="Email"
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
      </div>
      <div className={css.field}>
        <input
          type={showPassword ? "text" : "password"}
          {...register("password", {
            pattern: /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
          })}
          placeholder="Password"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className={css.btnShowPassword}
        >
          {showPassword ? (
            <FaRegEye className={css.icon} />
          ) : (
            <FaRegEyeSlash className={css.icon} />
          )}
        </button>
        <p style={{ color: "red" }}>{errors.password?.message}</p>
      </div>
      <button type="submit" className={css.btn}>
        Login
      </button>
      <Link to="/register" className={css.link}>
        Register
      </Link>
    </form>
  );
};
export default LoginForm;
