import React from 'react';

export default class HTML extends React.Component {

    handleChange(e) {
        this.props.value(e.target.value);
    }
    render() {
        return (
            <div className="form-group">
                <label>Include HTML:</label>
                <select className="form-control" selected={this.props.html} onChange={this.handleChange.bind(this)}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
        );
    }
}