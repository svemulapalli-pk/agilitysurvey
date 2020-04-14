import React from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
import QuestionPanel from "./QuestionPanel";
import FormNavigation from "./FormNavigation";
import { connect } from 'react-redux';
import { updateFormStep } from '../redux/actions/assessmentStepsActions';

class QPanelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            panelAnswers: {},
            formValidated: false
        }
    }

    saveSelection(event) {
        const form = event.currentTarget,
            currentStep = this.props.currentStep;

        event.preventDefault();
        event.stopPropagation();

        if(form.checkValidity() === true) {
            this.setState({ formValidated: true })

            if (this.props.steps.length > currentStep + 1) {
                this.props.dispatch(updateFormStep(this.props.steps, this.props.steps[currentStep + 1]));
            }
        }
      
    }

    render() {
        return (
            <Form onSubmit={() => {this.saveSelection(event)}}>
                <section className="assessment-form">
                    <section>
                        <h2>Section heading</h2>
                        <p>Section description</p>
                    </section>
                    <Row xs={12} className="assessment-form__content">
                        {this.props.questionSet.set.map((query, index) => 
                            <QuestionPanel set={this.props.questionSet.setName+"-"+index} query={query} key={"query-" + index} /> 
                        )}
                    </Row>
                </section>
                <section className="assessment-form__navigation">
                    <Row className="assessment-form__navigation-wrapper">
                        <Col xs={12} lg={8}>
                            <Button variant="success" type="submit">Save answers</Button>
                        </Col>
                        <Col xs={12} lg={4}>
                            <FormNavigation validated={this.state.formValidated} />
                        </Col>
                    </Row>
                </section>
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

export default connect(mapStateToProps)(QPanelList);

