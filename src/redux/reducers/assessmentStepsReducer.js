const AssessmentSteps = {
    steps: [],
    currentStep: 0
}
  
export function assessmentStepsReducer(state = AssessmentSteps, action) {
    switch(action.type) {
        case "INITIALIZE_PROGRESS":
            return {
                ...state, 
                steps: action.steps
            }
        case "UPDATE_PROGRESS":
            return {
                ...state, 
                currentStep: action.currentStep
            }
        default:
            return state;
    }
}
