import React from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const button = cva('button', {
  variants: {
    intent: {
      primary: [
        'bg-slate-400',
        'text-black',
        'border-transparent',
        'hover:bg-slate-500',
        'rounded-md'
      ],
      secondary: [
        'bg-blue-500',
        'text-white',
        'border-transparent',
        'hover:bg-blue-600',
        'rounded-md'
      ]
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4']
    }
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium'
  }
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

// https://github.com/joe-bell/cva/blob/main/examples/react-with-tailwindcss/src/components/button/button.tsx

const Button = ({ children, className, intent, size }: ButtonProps) => {
  return (
    <button className={twMerge(button({ intent, size, className }))}>
      {children}
    </button>
  )
}

export default Button
