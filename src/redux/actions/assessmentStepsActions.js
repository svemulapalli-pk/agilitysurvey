export function initializeAssessmentForm(steps) {
    return function (dispatch) {
        dispatch ({
            type: "INITIALIZE_PROGRESS",
            steps
        })
    }
};

export function updateCurrentStep(steps, nextStep) {
    let updatedSteps = steps;

    return function (dispatch) {
        dispatch ({
            type: "UPDATE_PROGRESS",
            steps: updatedSteps,
            currentStep: nextStep
        })
    }
};