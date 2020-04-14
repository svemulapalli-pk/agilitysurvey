const AssessmentSteps = {
    steps: [
        {
            active: true,
            enable: true,
            name: "Register",
            step: 0
        }
    ],
    currentStep: 0
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
                steps: action.steps
            }
        default:
            return state;
    }
}
