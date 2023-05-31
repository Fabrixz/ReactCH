import Brand from "./Brand"
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CarWidget";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand />   
            </div>

            <nav className= "containerItemList">
                <ItemListContainer
                    itemUno = "Descartables"
                    itemDos = "Equipos POD"
                    itemTres = "Equipos MOD"
                    itemCuatro = "Liquidos"
                    itemCinco = "Repuestos"
                />
            </nav>

            <div className="containerCart">
                <CartWidget />
                
            </div>
        </header>
    )
}
export default NavBar;