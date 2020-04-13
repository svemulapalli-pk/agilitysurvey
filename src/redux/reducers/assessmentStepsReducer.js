const AssessmentSteps = {
    steps: [
        {
            active: true,
            enable: true,
            name: "Register",
            step: 0
        }
    ],
    currentStep: "Register"
}
  
export function assessmentStepsReducer(state = AssessmentSteps, action) {
    switch(action.type) {
        case "INITIALIZE_PROGRESS":
            return {
                ...state, 
                steps: action.steps
            }
        case "UPDATE_CURRENT_STEP":
            return {
                ...state,
                currentStep: action.currentStep
            }
        case "UPDATE_PROGRESS":
            return {
                ...state, 
                steps: action.steps,
                currentStep: action.currentStep
            }
        default:
            return state;
    }
}
