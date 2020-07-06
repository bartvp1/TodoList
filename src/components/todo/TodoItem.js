import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    itemStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    textStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    
    render() {
        const {id, title, completed} = this.props.todo
        return (
            <div style={this.itemStyle()}>
                <p>
                    <input type="checkbox" 
                        onChange={this.props.toggleComplete.bind(this, id)} 
                        checked={completed}
                        style={{marginRight: '1em'}} />
                    <span>{ title }</span>
                    <button 
                        style={btnStyle} 
                        onClick={this.props.removeTodo.bind(this, id)}>Remove</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '3px',
    cursor: 'pointer',
    float: 'right'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
}

export default TodoItem
