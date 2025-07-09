import React from "react"

export const Card = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}
    {...props}
  >
    {children}
  </div>
))
Card.displayName = "Card"

export const CardContent = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div ref={ref} className={`p-6 ${className}`} {...props}>
    {children}
  </div>
))
CardContent.displayName = "CardContent"

export const CardHeader = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div ref={ref} className={`p-6 pb-3 ${className}`} {...props}>
    {children}
  </div>
))
CardHeader.displayName = "CardHeader"

export const CardTitle = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <h3 ref={ref} className={`text-lg font-semibold text-gray-900 ${className}`} {...props}>
    {children}
  </h3>
))
CardTitle.displayName = "CardTitle"

export const CardDescription = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <p ref={ref} className={`text-sm text-gray-600 mt-1 ${className}`} {...props}>
    {children}
  </p>
))
CardDescription.displayName = "CardDescription"