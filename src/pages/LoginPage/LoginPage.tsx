import css from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <section className={css.section}>
      <div className={css.bg}></div>
      <p className={css.possibilities}>
        Word · Translation · Grammar · Progress
      </p>
      <div className={css.wrapper}>
        <h1 className={css.title}>Login</h1>
        <p className={css.text}>
          Please enter your login details to continue using our service:
        </p>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
