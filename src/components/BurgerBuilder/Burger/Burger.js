import React from 'react'
import Ingredients from './Ingredients/Ingredients'
import classes from './Burger.module.css'





const Burger = (props) => {


    let list = [];


    // for (let index1 = 0; index1 < table.length; index1++) {
    //     let aff = table[index1].count;
    for (let item of props.ingredients) {
        for (let i = 0; i < item.count; i++) {


            list.push(<Ingredients type={item.label} key={item.id + '-' + i} />);
        }
    }


    let message = null

    if (list.length === 0) {
        message = <p> please enter your ingredients!!! </p>
    }







    return (
        <div className={classes.Burger}>
            <Ingredients type='BreadTop' />


            {message}
            {list}
            <Ingredients type='BreadBottom' />


        </div>
    )

}
export default Burger