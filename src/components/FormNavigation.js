import React from "react";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { updateCurrentStep } from '../redux/actions/assessmentStepsActions';

class FormNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickPrev() {
        this.props.dispatch(updateCurrentStep(this.props.currentStep - 1));
    }

    onClickNext() {
        this.props.dispatch(updateCurrentStep(this.props.currentStep + 1));
    }

    render() {
        let isLastStep = (this.props.currentStep === this.props.steps.length - 1);

        return (
            <div className="form-navigation__wrapper">
                <Button variant="success" type="button" onClick={() => {this.onClickPrev()}}>Prev</Button>
                <span>Section</span>
                {this.props.validated 
                    ?   <Button variant="success" type="button" onClick={() => {this.onClickNext()}}>
                            {isLastStep ? "Finish" : "Next"}
                        </Button> 
                    : <Button variant="success" type="button" disabled>Next</Button>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
        steps: state.assessmentStepsReducer.steps,
        currentStep: state.assessmentStepsReducer.currentStep
	}
}

export default connect(mapStateToProps)(FormNavigation);
