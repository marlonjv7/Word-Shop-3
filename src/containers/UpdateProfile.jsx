import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, Image, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateUserActionAsync } from "../redux/actions/updateUser.action";

// ------------ Yup Validation ------------ //

const ChangeProfileDataSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please Enter your email"),
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

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const [success, setSuccess] = useState(false);
  const user = useSelector((state) => state.user);
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const updateUser = (values) => {
    setNewUser({
      email: values.email,
      name: values.name,
      phone: values.phone,
    });
    console.log("dasdasd")
    if (values.email !== user.email || values.name !== user.displayName) {
      dispatch(updateUserActionAsync(newUser));
      setSuccess(true);
      setEnabled(true);
      console.log(values.name);
    }
  };

  useEffect(() => {
    setIsLoading(false);
    setEnabled(true);
  }, [user]);

  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  }

  return (
    <>
      <div className="auth">
        <div className="p-4 box">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
            }}
            validationSchema={ChangeProfileDataSchema}
            onSubmit={(values) => {
              updateUser(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Image src={user.photoURL} roundedCircle className="avatar" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <Field
                  className="mb-3 form-control"
                  type="name"
                  name="name"
                  placeholder="Name"
                  // value={user.providerData[0].displayName}
                  // disabled={!enabled}
                  disabled={enabled}
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <Field
                  className="mb-3 form-control"
                  name="email"
                  placeholder="Email address"
                  // value={user.email}
                  // disabled={!enabled}
                  disabled={enabled}
                />
                {errors.phone && touched.phone ? (
                  <div>{errors.phone}</div>
                ) : null}
                <Field
                  className="mb-3 form-control"
                  type="phone"
                  name="phone"
                  placeholder="Phone"
                  disabled={enabled}
                />
                <div className="d-grid gap-2">
                  {!enabled && (
                    <>
                      <Button variant="primary" type="Submit">
                        Confirm
                      </Button>
                      <Button
                        variant="primary"
                        type="Button"
                        onClick={() => setEnabled(!enabled)}
                      >
                        Cancel
                      </Button>
                    </>
                  )}
                </div>
              </Form>
            )}
          </Formik>
          {enabled && (
            <Button
              variant="primary"
              type="Submit"
              onClick={() => setEnabled(!enabled)}
            >
              Edit
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
