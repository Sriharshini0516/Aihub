import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-blue-500/25 active:shadow-inner before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400/20 before:to-purple-400/20 before:opacity-0 hover:before:opacity-100 before:transition',
    secondary: 'bg-purple-600 text-white shadow-md hover:shadow-purple-500/25 hover:bg-purple-700',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10',
    ghost: 'text-blue-500 hover:bg-blue-500/10',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-1.5',
    md: 'text-base px-6 py-2.5',
    lg: 'text-lg px-8 py-3',
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;