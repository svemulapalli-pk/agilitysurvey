import React from "react";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { updateCurrentStep } from '../redux/actions/assessmentStepsActions';

class FormNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickPrev = () => {
        console.log('clicked previous');
    }

    onClickNext = () => {
        this.props.dispatch(updateCurrentStep());
    }

    render() {
        return (
            <div className="form-navigation__wrapper">
                <Button variant="success" type="button" onClick={() => {this.onClickPrev()}}>Prev</Button>
                <span>Section</span>
                <Button variant="success" type="button" onClick={() => {this.onClickNext()}}>Next</Button>
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
