import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(7).required(),
  })
  .required();

const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      <input
        type="email"
        {...register("email", { pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ })}
        placeholder="email"
      />
      <input
        type="password"
        {...register("password", {
          pattern: /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
        })}
        placeholder="password"
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
