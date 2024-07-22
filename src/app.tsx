import { useState } from "react";
import { ActionButtons } from "./components/action-buttons";
import { StepsBubbles } from "./components/steps-bubbles";

export function App() {
  const [currentStep, setCurrentStep] = useState(1)

  const messages = [
    "Hello",
    "This is a React Multi-Step Component",
    "Made by Mathias Navarre",
    "Used for study purposes"
  ]
  const stepsNumber = messages.length

  function handlePrevBtnClick() {
    setCurrentStep(((currentStep) => currentStep - 1))
  }
  function handleNextBtnClick() {
    setCurrentStep(((currentStep) => currentStep + 1))
  }

  return (
    <div className="text-center space-y-8 mx-auto min-w-96 max-w-2xl bg-gray-200 rounded-lg py-6 px-12">
      <StepsBubbles
        stepsNumber={stepsNumber} 
        currentStep={currentStep}
      />

      <h2 className="font-semibold text-lg">{`Step ${currentStep}: ${messages[currentStep - 1]}`}</h2>

      <div className="flex items-center justify-between">
        {currentStep === 1 ? (
          <ActionButtons disabled={true} variant="disabled"> 
            Prev.
          </ActionButtons>
        ) : (
          <ActionButtons onClickFunction={handlePrevBtnClick}> 
            Prev.
          </ActionButtons>
        )}
        
        {currentStep === stepsNumber ? (
          <ActionButtons disabled={true} variant="disabled"> 
            Next
          </ActionButtons>
        ) : (
          <ActionButtons onClickFunction={handleNextBtnClick}> 
            Next
          </ActionButtons>
        )}

      </div>
    </div>
  )
}
