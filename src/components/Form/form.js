import React from 'react';
import Text from "../Text/text";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
        };
    }

    handleChange = event => {
        this.setState({
            name: event.target.value,
        }, () => {

        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleNameChange(this.state.name)
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <button type="submit"> Update | {this.props.count}</button>
                </form>
            </>
        )
    }
}

export default Form;