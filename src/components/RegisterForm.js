import React from "react";
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateFormStep, updateCurrentStep } from '../redux/actions/assessmentStepsActions';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOnSubmit(event) {
        const form = event.currentTarget,
            currentStep = this.props.currentStep;

        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === true) {
            this.props.dispatch(updateCurrentStep(currentStep + 1))
            this.props.dispatch(updateFormStep(this.props.steps, this.props.steps[currentStep + 1]));
        }
    }

    render() {
        return (
            <Form className="user-register-form" onSubmit={(e) => {this.handleOnSubmit(e)}}>
                <Form.Group controlId="userFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
            
                <Form.Group controlId="userLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
    
                <Form.Group controlId="userLastName">
                    <Form.Label>Email address (this is where your survey results will be sent)</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
    
                <Button variant="success" type="submit">Next</Button>
            </Form>
        );
    }
};

const mapStateToProps = (state) => {
	return {
        steps: state.assessmentStepsReducer.steps,
        currentStep: state.assessmentStepsReducer.currentStep
	}
}

export default connect(mapStateToProps)(RegisterForm);
