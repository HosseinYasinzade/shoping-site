"use client";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "light" | "dark";
}

function Input({ variant = "default", className = "", ...props }: InputProps) {
  const variantClasses =
    variant === "light"
      ? "text-white placeholder-white bg-transparent border-white"
      : variant === "dark"
      ? "text-black placeholder-gray-500 bg-gray-100"
      : "text-gray-700 placeholder-gray-500 bg-transparent";

  return (
    <input
      {...props}
      className={`flex-grow outline-none text-lg ${variantClasses} ${className}`}
    />
  );
}

export default Input;
