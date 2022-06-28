import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  FacebookLoginAction,
  GoogleLoginAction,
  LoginActionAsync,
} from "../../redux/actions/login.action";
import { DivSocial, FacebookSignIn, FormSignIn, GoogleSignIn, ImgLogin, InputEmail, InputPassword, LoginBtn, SignInWith, SignUpWith, SiTitle } from "../../styles/StylesGlobals";

// ------------ Yup Validation ------------ //

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please Enter your email"),
  password: Yup.string()
    .required("Please Enter your password")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters"),
});

// ------------ End Yup Validation ------------ //

const SignIn = () => {
  
  const dispatch = useDispatch();

  return (
    <>
      <div className="auth">
        <div className="p-4 box">
          <ImgLogin src="https://res.cloudinary.com/dg29vcpk7/image/upload/v1656444935/Bulletinboard/Logo_3_hdfpgj.png" alt="loginimg"/>
          <SiTitle className="mb-3">Sign in</SiTitle>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              dispatch(LoginActionAsync(values.email, values.password));
            }}
          >
            {({ errors, touched }) => (
              <FormSignIn>
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <InputEmail
                  className="mb-3 form-control"
                  name="email"
                  placeholder="Email address"
                />

                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <InputPassword
                  className="mb-3 form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div className="d-grid gap-2">
                  <LoginBtn variant="primary" type="Submit">
                    Log In
                  </LoginBtn>
                </div>
              </FormSignIn>
            )}
          </Formik>
          <hr />
                <SignInWith>Sign in with</SignInWith>
          <DivSocial>
            <GoogleSignIn src="https://res.cloudinary.com/dg29vcpk7/image/upload/v1656454141/Bulletinboard/google_bfkl3e.png" alt="google" onClick={() => dispatch(GoogleLoginAction())} />
            <FacebookSignIn src="https://res.cloudinary.com/dg29vcpk7/image/upload/v1656454141/Bulletinboard/facebook_1_mqjbot.png" alt="facebook" onClick={() => dispatch(FacebookLoginAction())} />
           </DivSocial>
        </div>
        <SignUpWith className="p-4 box mt-3 text-center">
          <p>Don't have an account? <Link to="/signup" style={{'textDecoration':'none'}}><span style={{'fontWeight':'500', 'color':'#6EC999'}} >Sign up</span></Link></p>
        </SignUpWith>
      </div>
    </>
  );
};

export default SignIn;
