import React, { Component } from 'react'

class TodaysFood extends Component {
    render() {
        const{foods= this.props}
        let total = foods.reduce((acc, food) => {
            return acc+ (food.calories* food.quantity)
        },0)
        return (
            <>
            <ul>
             {
                 foods.map((food, index) => {
                      return <li>{food.quantity} {food.name}= {food.calories* food.quantity}</li>
                 })
             }
            </ul>
            <h1>Total {total} cal</h1>
            </>
        )
    }
}
export default TodaysFood