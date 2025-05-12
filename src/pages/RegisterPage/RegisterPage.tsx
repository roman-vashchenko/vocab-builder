import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <section className={css.section}>
      <div className={css.bg}></div>
      <RegisterForm />
    </section>
  );
};

export default RegisterPage;
