import { useState } from "react";
import SignUpContext from "./SignUpProvider";

import InforBasic from "./InforBasicForm/InforBasicForm";
import BirthDayForm from "./BirthDayForm/BirthDayForm";
import ConfirmationForm from "./ConfirmationForm/ConfirmationForm";
import { useAuth } from "../../../context/AuthProvider";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const auth = useAuth();
  const [input, setInput] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    birthday: "",
  });

  const handleFormFirstComplete = () => {
    setStep(2);
  };

  const handleFormSecondSubmit = () => {
    setStep(3);
    auth.signupAction(input);
  };

  const handleFormThirdSubmite = () => {
    
  };

  return (
    <>
      <SignUpContext.Provider value={{ input, setInput }}>
        {step === 1 && <InforBasic onNext={handleFormFirstComplete} />}
        {step === 2 && <BirthDayForm onSubmit={handleFormSecondSubmit} />}
        {step === 3 && <ConfirmationForm onSubmit={handleFormThirdSubmite} />}
      </SignUpContext.Provider>
    </>
  );
};

export default SignUp;
