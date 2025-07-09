import React from "react"

export const Button = React.forwardRef(
  ({ className = "", variant = "default", size = "default", children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
    
    const variantClasses = {
      default: "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 shadow-lg hover:shadow-xl transform hover:scale-105",
      outline: "border border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 bg-white hover:bg-gray-50",
      ghost: "text-gray-700 hover:text-primary-600 hover:bg-gray-100",
      link: "text-primary-600 hover:text-primary-700 underline-offset-4 hover:underline"
    }
    
    const sizeClasses = {
      default: "px-6 py-3 text-sm rounded-lg",
      sm: "px-4 py-2 text-sm rounded-md",
      lg: "px-8 py-4 text-lg rounded-lg",
      icon: "p-3 rounded-lg"
    }
    
    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
    
    return (
      <button
        ref={ref}
        className={combinedClasses}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"