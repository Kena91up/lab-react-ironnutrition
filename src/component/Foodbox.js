import React, { Component } from 'react'

class Foodbox extends Component {

    state = {
         quantity: 1
    }

    handleQuantityChange = (event) => {
        this.setState({
            quantity : Number(event.target.value)
        })
    }

    render() {
        const{food , handleAddTodaysFood} = this.props
        return (
            <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
      <img src={food.image} alt={this.props.name} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.calories} cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input  onChange={this.handleQuantityChange} className="input" type="number" value="1" />
        </div>
        <div className="control">
          <button onClick={() =>{handleAddTodaysFood(food, this.state.quantity)}} className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
        )
    }
}
export default Foodbox