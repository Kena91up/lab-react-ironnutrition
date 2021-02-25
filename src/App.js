import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './component/Foodbox'
import AddForm from './component/AddForm'

class App extends Component {

  state = {
    allFoods: foods,
    showForm: false,
    filterFoods: foods,
    todaysFoods:[]
  }

  handleShowForm = () => {
   this.setState({showForm: true})
  }

  handleAddItem =(event)=>{
      event.preventDefault()
      let name = event.target.name.value
      let image = event.target.image.value
      let quantity = event.target.quantity.value
      let calories = event.target.calories.value
      let newfood = {name:name.value,image:image.value,quantity:quantity.value,calories:calories.value}
  
    {
      this.setState({
        allFoods: [ newfood, ...this.state.allFoods]
      })
    }
  }

  handleSearch = (event) => {
    let searchText= event.target.value.toLowerCase()
    const{allFoods} =this.state
    let filterList = allFoods.filter((food)=>{
      return food.name.toLowerCase().startsWith(searchText)
    })
    this.setState({filterFoods:filterList})
  }

  handleAddTodaysFood = (food, quantity) => {
    let newFood = {
      name : food.name,
      calories : food.calories,
      quantity: quantity
    }

    this.state({
      todaysFoods: [...this.state.todaysFoods, newFood]
    })
  }
  render() {
     const { todaysFoods , showForm, filterFoods } =this.state
    return (
      <div className="column">
      <div className="column">
      <input onChange={this.handleSearch} type ="text" placeholder="Search food"/>
      { showForm ? <AddForm onAdd={this.handleAddItem}/> : <button onClick={this.handleShowForm}>Show Form</button>}
      
        {
          filterFoods.map((food, index) => {
        return <Foodbox
          key={index} food={food}
          />
          
        })
      }
      </div>
      <div className="column">
      <TodaysFood foods={todaysFoods}/>
      </div>

      </div>
    )
  }
}
export default App