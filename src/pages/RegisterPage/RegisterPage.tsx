import { useMediaQuery } from "react-responsive";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  return (
    <section className={css.section}>
      <div>
        <div className={css.bg}></div>
        {isDesktop && (
          <p className={css.possibilities}>
            Word · Translation · Grammar · Progress
          </p>
        )}
      </div>
      <div className={css.wrapper}>
        <h1 className={css.title}>Register</h1>
        <p className={css.text}>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
        <RegisterForm />
      </div>
      {isTablet && (
        <p className={css.possibilities}>
          Word · Translation · Grammar · Progress
        </p>
      )}
    </section>
  );
};

export default RegisterPage;
