import React from "react";
import { Row, Col, Nav, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';

import data from '../query-data.json';
import RegisterForm from "./RegisterForm";
import QPanelList from "./QPanelList";
import {initializeAssessmentForm} from '../redux/actions/assessmentStepsActions';

class AssessmentTabs extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let assessmentSteps = data.questions.map((set, index) => {
            return {
                name: set.setName,
                step: (index + 1),
                enable: false,
                active: false
            }
        })
        this.props.dispatch(initializeAssessmentForm(assessmentSteps));
    }

    render() {
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="Register">
                <Row xs={12}>
                    <Col xs={5} lg={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="Register">Register</Nav.Link>
                            </Nav.Item>
                            {this.props.steps.map((set, index) =>  
                                <Nav.Item key={"tab-" + index}>
                                    <Nav.Link eventKey={"set-" + index} disabled={set.enable ? "true" : "false"}>{set.name}</Nav.Link>
                                </Nav.Item>
                            )}
                        </Nav>
                    </Col>
                    <Col xs={7} lg={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="Register">
                                <RegisterForm />
                            </Tab.Pane>
                            {data.questions.map((set, index) =>  
                                <Tab.Pane key={"tab-content-" + index} eventKey={"set-" + index} >
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
        steps: state.assessmentStepsReducer.steps
	}
}

export default connect(mapStateToProps)(AssessmentTabs);
