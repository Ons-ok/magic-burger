import React from 'react'


const orderSummary = (props) => {

    let list = []

    for (let item of props.ingredients) {
        list.push(
            <div>
                {item.label}:{item.count}
            </div>

        )


    }
    return (
        <div>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients: </p>
            {list}
            <h5>prix total : {props.prix}</h5>
            <button >continue</button>
            <button onClick={props.modal}>cancel</button>
        </div>
    )

}
export default orderSummary