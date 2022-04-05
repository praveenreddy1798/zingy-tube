import { Link } from "react-router-dom";
import { Navbar, RenderForm } from "../components";
import { loginFormDataFields } from "../form-data/login";
import { useForm } from "../hooks/useForm";
import { validateLoginForm } from "../form-validation/login";
import { useLogin } from "../services";
import { useEffect } from "react";

const Login = () => {
  const handleLogin = (payload) => {
    requestLogin(payload);
  };
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    setValues,
  } = useForm(handleLogin, validateLoginForm);
  const { requestLogin, token } = useLogin();

  useEffect(() => {
    if (token) {
      setValues({});
    }
  }, [token, setValues]);

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-section main-section-strech flex-center pd-md">
        <div className="flex-center bg-white w-max-content">
          <form onSubmit={handleSubmit}>
            <div className="flex-vertical pd-xlg w-max-content">
              <h3 className="text-align-center">Login</h3>
              <RenderForm
                values={values}
                errors={errors}
                handleChange={handleChange}
                isSubmitting={isSubmitting}
                formFieldsData={loginFormDataFields}
              />
              <button
                onClick={handleSubmit}
                className="btn btn-action w-100 mg-t-md"
              >
                Login
              </button>
              <Link to="/signup">
                <button className="btn btn-secondary outline outline-secondary w-100 mg-t-sm">
                  Create New Account
                </button>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export { Login };