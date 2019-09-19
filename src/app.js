import React from 'react';
import Form from "./components/Form/form";
import Text from "./components/Text/text";
import './styles.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Jessica',
            count: 0,
        }
    }

    handleNameChange = (newName) => {
        this.setState( previousState => {
            return {
                name: newName,
                count: previousState.count + 1,
            }
        })
    };

    render() {
        return (
            <React.Fragment>
                <Form handleNameChange={this.handleNameChange} name={this.state.name} count={this.state.count}/>
                <Text name={this.state.name} count={this.state.count}/>
            </React.Fragment>
        );
    }
}

export default App;