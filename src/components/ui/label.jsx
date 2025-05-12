
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

/**
 * Label component with forwarded ref
 * @param {object} props - Component props
 * @param {string} [props.className] - Optional CSS class name
 * @param {React.Ref<HTMLLabelElement>} ref - Ref to be forwarded
 * @returns {JSX.Element} Label element
 */
const Label = React.forwardRef(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}
      {...props}
    />
  )
)
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
