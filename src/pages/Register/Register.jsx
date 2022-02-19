import React from "react";
import { LoginRegistrationLayout } from "components/loginRegistrationLayout";
import { FormHeader } from "components/loginRegistrationLayout";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <LoginRegistrationLayout>
      <FormHeader title={"register"} subtitle={"coming soon"} />
      <Link to="/login" className={"heading4-alt"}>
        Sign up
      </Link>
    </LoginRegistrationLayout>
  );
};
