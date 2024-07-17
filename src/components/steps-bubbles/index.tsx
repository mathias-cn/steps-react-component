import { Bubble } from "./bubble";

interface StepsBubblesProps {
    stepsNumber: number
    currentStep: number
}

export function StepsBubbles({ stepsNumber, currentStep }: StepsBubblesProps) {
    const stepsArray = Array.from({ length: stepsNumber }, (_, index) => index + 1);

    return (
        <div className="flex justify-between">
            {stepsArray.map(step => (
                step === currentStep ? (
                    <Bubble key={step}>
                    {step}
                    </Bubble>
                ) : (
                    <Bubble key={step} variant="disabled">
                    {step}
                    </Bubble>
                )
            ))}
        </div>
    )
}