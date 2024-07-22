import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({
    base: 'font-semibold text-sm rounded-full px-4 py-2',

    variants: {
        variant: {
            default: 'bg-purple-600 text-white hover:bg-purple-700',
            disabled: 'bg-gray-400'
        },
    },

    defaultVariants: {
        variant: 'default',
    }
})

interface ActionButtonsProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode
    onClickFunction?: () => void
}

export function ActionButtons({ children, onClickFunction, variant, ...props }: ActionButtonsProps) {
    return (
        <div className="flex items-center justify-between">
            <button onClick={onClickFunction} type="button" {...props} className={buttonVariants({ variant })}>
                {children}
            </button>
        </div>
    )
}