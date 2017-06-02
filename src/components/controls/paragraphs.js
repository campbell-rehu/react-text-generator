import React from 'react';

export default class Paragraphs extends React.Component {
    handleChange(e) {
        this.props.value(e.target.value);
    }
    render() {
        return (
            <div className="form-group">
                <label>Number of Paragraphs:</label>
                <input className="form-control" name="paragraphs" type="number" value={this.props.paragraphs} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}