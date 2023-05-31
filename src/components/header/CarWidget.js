import cart from "../img/cart.png"

const CartWidget = () => {
    return(
        <div> <img src={cart} alt="Cart"></img> 
        <span className="cantCart"></span>
        5
        </div>
    )
}

export default CartWidget;