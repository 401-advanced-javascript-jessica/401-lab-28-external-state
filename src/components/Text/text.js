import React from 'react';

class Text extends React.Component {
  render() {
    return (
            <div>
                <div>Name: {this.props.name} </div>
                <p># of Updates: {this.props.count} </p>
            </div>
    );
  }
}

export default Text;
