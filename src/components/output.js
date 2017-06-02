import React from 'react';

export default class Output extends React.Component {
    render() {
        return (
            <div className="well">
                {this.props.value}
            </div>
        );
    }
}