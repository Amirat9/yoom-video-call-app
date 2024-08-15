import React from 'react';
import { SignIn } from '@clerk/nextjs';

const SigninPage = () => {
  return (
    <SignIn
      appearance={{
        elements: {
          rootBox: 'mx-auto autofill:bg-transparent',
          socialButtonsProviderIcon__apple: 'invert',
          socialButtonsProviderIcon__github: 'invert',
          dividerLine: 'bg-[#252A41]',
          socialButtonsIconButton:
            'bg-[#252A41] hover:bg-[#252A41] hover:opacity-80',
          phoneInputBox: 'bg-[#252A41]',
          selectButtonIcon__countryCode: 'text-white',
          formFieldInputShowPasswordIcon: 'text-white/75',
          selectOption: 'text-white',
          selectOptionsContainer: 'shadow-xl bg-[#252A41]',
          otpCodeFieldInputs: 'bg-white',
        },
      }}
    />
  );
};

export default SigninPage;
