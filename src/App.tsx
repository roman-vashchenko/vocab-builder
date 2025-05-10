import { FC, lazy, ReactNode, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

const App: FC = (): ReactNode => {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
