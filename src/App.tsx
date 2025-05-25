import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./components/Layout/Layout"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
