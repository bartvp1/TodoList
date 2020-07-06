import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({ title: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }

    render() {
        return (
            <form 
            onSubmit={this.onSubmit}
            style={{
                display: 'flex',
                backgroundColor: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted'}}
                >
                <input 
                    type="text" 
                    name="title" 
                    value={this.state.title}
                    onChange={this.onChange}
                    placeholder="Add Todo..."
                    autoComplete="off"
                    style={{
                        flex:'10', 
                        padding: '5px', 
                        border: 'none', 
                        background: '#f4f4f4'}}
                />
                <input 
                    type="submit" 
                    value="Add" 
                    className="btn"
                    style={{flex:'1'}}
                />
            </form>
        )
    }


}

AddTodo.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
}

export default AddTodo;
