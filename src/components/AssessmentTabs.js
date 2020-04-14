import React from "react";
import { Row, Col, Nav, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';

import data from '../query-data.json';
import RegisterForm from "./RegisterForm";
import QPanelList from "./QPanelList";
import { initializeAssessmentForm, updateCurrentStep } from '../redux/actions/assessmentStepsActions';

class AssessmentTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initializeFormSteps: []
        }
    }

    componentDidMount() {
        let assessmentSteps = [...this.props.steps];
        data.questions.forEach((set, index) => {
            assessmentSteps.push({
                active: false,
                enable: false,
                name: set.setName,
                step: (index + 1)
            })
        })
        this.setState({ initializeFormSteps: assessmentSteps })
        this.props.dispatch(initializeAssessmentForm(assessmentSteps));
    }

    render() {
        let selectedStep = this.props.currentStep;
     
        return (
            <Tab.Container id="left-tabs-example" activeKey={selectedStep}>
                <Row xs={12} className="questions-panel">
                    <Col xs={5} lg={3} className="questions-panel--tabs">
                        <Nav variant="pills" className="flex-column tablist">
                            {this.props.steps.map((set, index) =>  
                                <Nav.Item key={"tab-" + index}>
                                    {set.enable 
                                        ? <Nav.Link eventKey={set.step} onClick={() => {this.props.dispatch(updateCurrentStep(set.step))}}>{set.name}</Nav.Link>
                                        : <Nav.Link eventKey={set.step} disabled>{set.name}</Nav.Link>
                                    }
                                </Nav.Item>
                            )}
                        </Nav>
                    </Col>
                    <Col xs={7} lg={9} className="questions-panel--tabs-content">
                        <Tab.Content>
                            <Tab.Pane eventKey={0}>
                                <RegisterForm />
                            </Tab.Pane>
                            {data.questions.map((set, index) =>  
                                <Tab.Pane key={"tab-content-" + index} eventKey={(index + 1)} >
                                    <QPanelList questionSet={set} />
                                </Tab.Pane>
                            )}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }
};

function mapStateToProps(state) {
	return {
        steps: state.assessmentStepsReducer.steps,
        currentStep: state.assessmentStepsReducer.currentStep
	}
}

export default connect(mapStateToProps)(AssessmentTabs);
