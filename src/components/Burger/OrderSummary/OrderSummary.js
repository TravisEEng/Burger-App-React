import React from 'react';

import Button from '../../UI/Button/Button';
import Auxilary from '../../../hoc/Auxiliary';

const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (  
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: 
                {props.ingredients[igKey]}</li>
            
            )
        });
    return(
        <Auxilary>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price: <strong>${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType = "Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType = "Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxilary>
    );
};

export default orderSummary;