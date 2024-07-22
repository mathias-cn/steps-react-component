import { ReactNode } from "react"

interface StepMessageProps {
    step: number
    children: ReactNode
}

export function StepMessage({ step, children }: StepMessageProps) {
    return (
        <h2 className="font-semibold text-lg">
            Step {step}: {children}
        </h2>
    )
}