import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <section className={css.section}>
      <div>
        <div className={css.bg}></div>
        <p className={css.possibilities}>
          Word · Translation · Grammar · Progress
        </p>
      </div>
      <div className={css.wrapper}>
        <h1 className={css.title}>Register</h1>
        <p className={css.text}>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
        <RegisterForm />
      </div>
      {/* <p className={css.possibilities}>
        Word · Translation · Grammar · Progress
      </p> */}
    </section>
  );
};

export default RegisterPage;
