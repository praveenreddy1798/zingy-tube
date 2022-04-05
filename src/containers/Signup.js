import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, RenderForm } from "../components";
import { signupFormDataFields } from "../form-data/signup";
import { validateSignupForm } from "../form-validation/signup";
import { useForm } from "../hooks/useForm";
import { useSignup } from "../services";

const Signup = () => {
  const handleSignup = (payload) => {
    requestSignup("/api/auth/signup", payload);
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    setValues,
  } = useForm(handleSignup, validateSignupForm);
  const { requestSignup, token } = useSignup("/api/auth/signup");

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
              <h3 className="text-align-center">Signup</h3>
              <RenderForm
                values={values}
                errors={errors}
                handleChange={handleChange}
                isSubmitting={isSubmitting}
                formFieldsData={signupFormDataFields}
              />
              <Link to="/signup">
                <button
                  onClick={handleSubmit}
                  className="btn btn-action w-100 mg-t-md"
                >
                  Signup
                </button>
              </Link>
              <Link to="/login">
                <button className="btn btn-secondary outline outline-secondary w-100 mg-t-sm">
                  Already have an account ?
                </button>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export { Signup };
