import React from "react";
import LoginHeroSection from "../features/login/LoginHeroSection";
import LoginAuthForm from "../features/login/LoginAuthForm";

export default function Login() {
  return (
    <div className="w-full flex flex-col items-center bg-gray-900">
    
      <LoginHeroSection />

      <LoginAuthForm />
    </div>
  );
}
