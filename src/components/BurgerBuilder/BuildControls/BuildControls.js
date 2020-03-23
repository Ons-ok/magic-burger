import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) => {

    let ingredientControls = [];

    for (let item of props.ingredients) {

        ingredientControls.push(
            <BuildControl label={item.label}

                more={() => { props.addIngredient(item.id) }}
                less={() => { props.rmvIngredient(item.id) }}

            />
        )
    }





    return (
        <div className={classes.BuildControls}>
            <p>Current Price : {props.curentprice} TND</p>
            {ingredientControls}

            <button className={classes.OrderButton}> Order Now </button>

        </div>
    )


}
export default buildControls