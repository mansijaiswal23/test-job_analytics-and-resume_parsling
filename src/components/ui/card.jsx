
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Card component with forwarded ref
 * @param {object} props - Component props
 * @param {string} [props.className] - Optional CSS class name
 * @param {React.Ref<HTMLDivElement>} ref - Ref to be forwarded
 * @returns {JSX.Element} Card element
 */
const Card = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

/**
 * CardHeader component with forwarded ref
 * @param {object} props - Component props
 * @param {string} [props.className] - Optional CSS class name
 * @param {React.Ref<HTMLDivElement>} ref - Ref to be forwarded
 * @returns {JSX.Element} CardHeader element
 */
const CardHeader = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

/**
 * CardTitle component with forwarded ref
 * @param {object} props - Component props
 * @param {string} [props.className] - Optional CSS class name
 * @param {React.Ref<HTMLHeadingElement>} ref - Ref to be forwarded
 * @returns {JSX.Element} CardTitle element
 */
const CardTitle = React.forwardRef(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

/**
 * CardDescription component with forwarded ref
 * @param {object} props - Component props
 * @param {string} [props.className] - Optional CSS class name
 * @param {React.Ref<HTMLParagraphElement>} ref - Ref to be forwarded
 * @returns {JSX.Element} CardDescription element
 */
const CardDescription = React.forwardRef(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

/**
 * CardContent component with forwarded ref
 * @param {object} props - Component props
 * @param {string} [props.className] - Optional CSS class name
 * @param {React.Ref<HTMLDivElement>} ref - Ref to be forwarded
 * @returns {JSX.Element} CardContent element
 */
const CardContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

/**
 * CardFooter component with forwarded ref
 * @param {object} props - Component props
 * @param {string} [props.className] - Optional CSS class name
 * @param {React.Ref<HTMLDivElement>} ref - Ref to be forwarded
 * @returns {JSX.Element} CardFooter element
 */
const CardFooter = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
