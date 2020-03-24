import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'

class BurgerBuilder extends Component {
    state = {
        ingredients: [
            {
                id: 'aaa',
                label: 'Salad',
                prix: 1,
                count: 0
            },

            {
                id: 'bbb',
                label: 'Cheese',
                prix: 2,
                count: 0
            },

            {
                id: 'ccc',
                label: 'Meat',
                prix: 3,
                count: 0
            },

            {
                id: 'ddd',
                label: 'Escalope',
                prix: 3,
                count: 0
            }

        ],

        prixtotal: 0

    }

    addIngredientHandler = (id) => {

        let newIngredient = [...this.state.ingredients]
        let prixtt = this.state.prixtotal
        const index = newIngredient.findIndex((item) => {
            return item.id === id

        })
        newIngredient[index].count++
        prixtt = prixtt + newIngredient[index].prix
        this.setState({

            ingredients: newIngredient,
            prixtotal: prixtt
        })

    }

    removeIngredientHandler = (id) => {
        let new1Ingredient = [...this.state.ingredients]
        let prixtt = this.state.prixtotal
        const index1 = new1Ingredient.findIndex((item) => {
            return item.id === id
        })

        new1Ingredient[index1].count--
        if (new1Ingredient[index1].count >= 0) {

            prixtt = prixtt - new1Ingredient[index1].prix
        }
        this.setState({

            ingredients: new1Ingredient,
            prixtotal: prixtt
        })

    }


    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    rmvIngredient={this.removeIngredientHandler}
                    ingredients={this.state.ingredients}
                    curentprice={this.state.prixtotal} />

            </div>
        )
    }
}
export default BurgerBuilder