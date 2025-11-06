import React from "react";

const Button = ({
  children,
  onClick,
  className = "",
  variant = "dark", // dark | blue | transparent | round
  size = "md",      // sm | md | lg
}) => {
  // 🔹 Color + style variants
  const variants = {
    dark: "bg-[#113f58]/90 text-white hover:bg-[#113f58]",
    blue: "bg-[#0084CE] text-white hover:bg-[#0096E0]",
    transparent:
      "bg-[#113f58]/40 text-white border border-white hover:bg-[#113f58]/60",

    
    round:
      "w-[30px] h-[30px] bg-[#0084CE] text-white border border-white rounded-full flex items-center justify-center hover:bg-[#0096E0] transition-colors",
  };

  
  const sizes = {
    sm: "px-3 py-[4px] text-xs",
    md: "px-4 py-[5px] text-sm",
    lg: "px-5 py-[6px] text-base",
  };

  const appliedSize = variant === "round" ? "" : sizes[size];

  return (
    <button
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${appliedSize}
        ${variant !== "round" ? "rounded-md" : ""}
        font-semibold flex items-center justify-center gap-2
        transition-colors duration-300 whitespace-nowrap
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;


