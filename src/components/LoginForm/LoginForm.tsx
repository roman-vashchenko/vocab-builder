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
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  const passwordValue: string | undefined = watch("password");
  console.log(passwordValue);

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
        <p style={{ color: "rgb(216, 0, 39)" }}>{errors.email?.message}</p>
      </div>
      <div className={css.field}>
        <input
          type={showPassword ? "text" : "password"}
          {...register("password", {
            pattern: /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
          })}
          placeholder="Password"
          style={{
            borderColor: errors.password
              ? "rgb(216, 0, 39)"
              : passwordValue
              ? "rgb(60, 191, 97)"
              : undefined,
          }}
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
        <div style={{ color: "red" }}>
          {errors.password ? (
            <p style={{ color: "rgb(216, 0, 39)" }}>Error password</p>
          ) : passwordValue ? (
            <p style={{ color: "rgb(60, 191, 97)" }}>Success password</p>
          ) : undefined}
        </div>
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
