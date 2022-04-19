import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import "./Form.css";
function UserForm({ data, Login }) {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", phoneNumber: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = "Required*";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.name) {
          errors.name = "Required*";
        } else if (!/^[A-Za-z ]{2,30}$/i.test(values.name)) {
          errors.name = "Invalid  name";
        }

        if (!values.password) {
          errors.password = "Required*";
        } else if (!/^[0-9]{4,16}$/i.test(values.password)) {
          errors.password = "Password should be in num and mini 4 and max 16  ";
        }
        if (!values.phoneNumber) {
          errors.phoneNumber = "Required*";
        } else if (!/^[0-9]{10}$/i.test(values.phoneNumber)) {
          errors.phoneNumber = "Invalid Number";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          if (JSON.stringify(values) === JSON.stringify(data.data)) {
            Login(true);
            alert("YOU ARE VALID USER");
            navigate("/");
          } else {
            alert("Not a Valid User");
          }

          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, resetForm }) => (
        <Form>
          <div className="form">
            <div className="formInput">
              <Field type="text" placeholder="YOUR NAME" name="name" />
              <ErrorMessage name="name" className="errorMsg" component="span" />
            </div>
            <div className="formInput">
              <Field type="email" placeholder="EMAIL" name="email" />
              <ErrorMessage
                name="email"
                className="errorMsg"
                component="span"
              />
            </div>
            <div className="formInput">
              <Field
                type="password"
                autoComplete="on"
                placeholder="PASSWORD"
                name="password"
              />
              <ErrorMessage
                name="password"
                className="errorMsg"
                component="span"
              />
            </div>
            <div className="formInput">
              <Field type="text" placeholder="PHONE" name="phoneNumber" />
              <ErrorMessage
                name="phoneNumber"
                className="errorMsg"
                component="span"
              />
            </div>
            <div className="formBtns">
              <button type="button" onClick={resetForm}>
                Reset
              </button>
              <button type="submit" disabled={isSubmitting}>
                Register
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default UserForm;
