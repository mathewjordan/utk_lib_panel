import React, {Component} from 'react';
import {Button, Form, Input, Select, Tab} from "semantic-ui-react";

const searchEndpoint = "https://www.lib.utk.edu/search/submit?go=1"

class SearchForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            option: null
        };
    }

    getOptions = (options, defaultOptions) => {
        if (options) {
            return <Select compact
                           icon
                           className="icon-down-open"
                           options={options}
                           defaultValue={options[0].key}
                           onChange={this.handleOptionChange} />
        } else {
            return null
        }
    }

    handleInputChange = (e, {value}) => this.setState({ query : value })

    handleOptionChange = (e, {value}) => this.setState({ option : value })

    render() {

        const {selection, placeholder, options, defaultOption} = this.props

        return (
            <Tab.Pane attached={false}>
                <Form method="post"
                      action={searchEndpoint}>
                    <Input type='hidden'
                           name='method'
                           value={selection}/>
                    <Input type='text'
                           name="value"
                           placeholder={placeholder}
                           aria-label={placeholder}
                           onChange={this.handleInputChange}
                           action>
                        <input />
                        {this.getOptions(options, defaultOption)}
                        <Button type='submit'>Submit</Button>
                    </Input>
                </Form>
            </Tab.Pane>
        )
    }
}

export default SearchForm;
