import React from "react";
import { Form } from 'react-bootstrap';

const QuestionPanel = (props) => {
    const options = ["(1 - 2)", "(3 - 4)", "(5 - 6)", "(8 - 7)","(9 - 10)"];
    let query = props.query;
    let queryOpts = [];

    for(var option in query.options) {
        queryOpts.push(query.options[option]);              
    }

    return (
        <Form.Group controlId="formBasicRangeCustom" className="query__wrapper">
            <p>{query.query}</p>
            <ul>
                {queryOpts.map((query, index) => 
                    <li key={props.set + '-' + index}>
                        <Form.Check 
                            type="radio" 
                            label={options[index] + ' :   ' + query} 
                            custom 
                            name={"radio-group-"+props.set} 
                            id={props.set + '-' + index}
                            required
                        />
                    </li>
                )}
            </ul>
        </Form.Group>
    );
};

export default QuestionPanel;
