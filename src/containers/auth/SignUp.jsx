import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { FacebookLoginAction, GoogleLoginAction, registerAsyncAction } from "../../redux/actions/login.action";
import { DivSocial2, FacebookSignUp, GoogleSignUp, ImgLogin, InputConfirm, InputEmail2, InputName, InputPassword2, InputPhone, SignInWith, SignUpBtn, SignUpWith, SiTitle } from "../../styles/StylesGlobals";

// ------------ Yup Validation ------------ //

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please Enter your email"),
  password: Yup.string()
    .required("Please Enter your password")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters"),
  passwordConfirm: Yup.string()
    .required("Please Enter your password")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  name: Yup.string()
    .required("Please Enter your name")
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be less than 20 characters"),
  phone: Yup.string()
    .required("Please Enter your phone")
    .min(10, "Phone must be at least 10 characters")
    .max(10, "Phone must be less than 10 characters"),
});

// ------------ End Yup Validation ------------ //

const SignUp = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="auth">
        <div className="p-4 box">
          <ImgLogin src="https://res.cloudinary.com/dg29vcpk7/image/upload/v1656444935/Bulletinboard/Logo_3_hdfpgj.png" alt="logoapp"/>
          <SiTitle className="mb-3">Signup</SiTitle>
          <Formik
            initialValues={{
              email: "",
              password: "",
              passwordConfirm: "",
              name: "",
              phone: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              dispatch(registerAsyncAction(values.email, values.password, values.name, values.phone));
            }}
          >
            {({ errors, touched }) => (
              <Form>
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <InputName
                  className="mb-3 form-control"
                  type="name"
                  name="name"
                  placeholder="Name"
                />
                {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
                <InputPhone
                  className="mb-3 form-control"
                  type="phone"
                  name="phone"
                  placeholder="Phone"
                />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                <InputEmail2
                  className="mb-3 form-control"
                  name="email"
                  placeholder="Email address"
                />
        
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <InputPassword2
                  className="mb-3 form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
        
                {errors.passwordConfirm && touched.passwordConfirm ? (
                  <div>{errors.passwordConfirm}</div>
                ) : null}
                <InputConfirm
                  className="mb-3 form-control"
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirm your Password"
                />
        
                <div className="d-grid gap-2">
                  <SignUpBtn variant="primary" type="Submit">
                    Sign Up
                  </SignUpBtn>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        
        <SignInWith>Sign up with</SignInWith>
        <DivSocial2>
            <GoogleSignUp src="https://res.cloudinary.com/dg29vcpk7/image/upload/v1656454141/Bulletinboard/google_bfkl3e.png" alt="google" onClick={() => dispatch(GoogleLoginAction())} />
            <FacebookSignUp src="https://res.cloudinary.com/dg29vcpk7/image/upload/v1656454141/Bulletinboard/facebook_1_mqjbot.png" alt="facebook" onClick={() => dispatch(FacebookLoginAction())} />
           </DivSocial2>

        <SignUpWith className="p-4 box mt-3 text-center">
          <p>Already have an account?<Link to="/login" style={{'textDecoration':'none'}}><span style={{'fontWeight':'500', 'color':'#6EC999'}} > Log in</span></Link></p> 
        </SignUpWith>
      </div>
    </>
  );
};

export default SignUp;
