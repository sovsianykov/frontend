import React from "react";
import Page from "@/shared/components/Page/Page";
import SignupForm from "@/pages/SignUp/SignupForm";

const SignUp = () => {
  return (
    <Page pageTitle='Signup' centered >
       <SignupForm/>
      </Page>
  );
};

export default SignUp;
