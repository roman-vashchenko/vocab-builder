import css from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useMediaQuery } from "react-responsive";

const LoginPage = () => {
  const isMobileOrDesktop: boolean = useMediaQuery({
    query: "(max-width: 767px) or (min-width: 1440px)",
  });
  const isTablet: boolean = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });

  return (
    <section className={css.section}>
      <div>
        <div className={css.bg}></div>
        {isMobileOrDesktop && (
          <p className={css.possibilities}>
            Word · Translation · Grammar · Progress
          </p>
        )}
      </div>
      <div className={css.wrapper}>
        <h1 className={css.title}>Login</h1>
        <p className={css.text}>
          Please enter your login details to continue using our service:
        </p>
        <LoginForm />
      </div>

      {isTablet && (
        <p className={css.possibilities}>
          Word · Translation · Grammar · Progress
        </p>
      )}
    </section>
  );
};

export default LoginPage;
