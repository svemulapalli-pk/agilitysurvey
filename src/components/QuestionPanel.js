import React from "react";
import { Form } from 'react-bootstrap';

const QuestionPanel = (props) => {
    let query = props.query;

    return (
        <Form.Group controlId="formBasicRangeCustom" className="query__wrapper">
            <Form.Label>{formatQuery(query)}</Form.Label>
            <Form.Control type="range" custom />
        </Form.Group>
    );
};

function formatQuery(query) {
    const options = ["(1 - 2)", "(3 - 4)", "(5 - 6)", "(8 - 7)","(9 - 10)"]
    let queryOpts = [];

    for(var option in query.options) {
        queryOpts.push(query.options[option]);              
    }

    return (
        <React.Fragment>
            <p>{query.query}</p>
            <ul>
                {queryOpts.map((query, index) => <li>{options[index] + ' :   '}{query}</li>)}
            </ul>
        </React.Fragment>
    )
}

export default QuestionPanel;
