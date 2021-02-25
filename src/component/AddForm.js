import React, { Component } from 'react'

class AddForm extends Component {
    render() {
        const {onAdd} = this.props
        return (
            <form onSubmit={onAdd}>
            <input name="name" type="text" placeholder="Enter name" />

            <label for="photo">Upload Photo</label>
        <input type="file" name="image"  autocomplete="off"/>

            <input name="calories" type="number" />
            <input name="quantity" type="number" />
            <button type="submit" >Add food</button>
        </form>
        )
    }
}


export default AddForm 