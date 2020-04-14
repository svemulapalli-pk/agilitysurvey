export function initializeAssessmentForm(steps) {
    return function (dispatch) {
        dispatch ({
            type: "INITIALIZE_PROGRESS",
            steps
        })
    }
};

export function updateCurrentStep(step) {
    return function (dispatch) {
        dispatch ({
            type: "UPDATE_CURRENT_STEP",
            currentStep: step
        })
    }
}

export function updateFormStep(steps, nextStep) {
    let activeSteps = [...steps];
    activeSteps[nextStep.step] = {
        name: nextStep.name,
        step: nextStep.step,
        enable: true,
        active: true
    }

    return function (dispatch) {
        dispatch ({
            type: "UPDATE_PROGRESS",
            steps: activeSteps,
            currentStep: nextStep.name
        })
    }
};