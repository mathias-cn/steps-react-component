import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const bubbleVariants = tv({
    base: 'flex items-center justify-center p-5 rounded-full w-6 h-6',

    variants: {
        variant: {
            default: 'bg-purple-600 text-white',
            disabled: 'bg-gray-400'
        },
    },

    defaultVariants: {
        variant: 'default',
    }
})

interface ActionButtonsProps extends ComponentProps<'button'>, VariantProps<typeof bubbleVariants> {
    children: ReactNode
}

export function Bubble({ children, variant }: ActionButtonsProps) {
    return (
        <div className={bubbleVariants({ variant })}>
            <p>{children}</p>
        </div>
    )
}