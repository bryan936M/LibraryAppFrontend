import React from "react";
import { Button } from "../ui/button";

type Props = {};

const Auth = (props: Props) => {
  return (
    <div className="flex space-x-2">
      <Button>Login</Button>
      <Button>Register</Button>
    </div>
  );
};

export default Auth;
