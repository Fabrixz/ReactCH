import { ProductCard } from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";
export const ItemListPresentacional = ({ items }) => {
  return (
    <>
      <div className="kairos">
        <img
          src="https://res.cloudinary.com/drmkzftbn/image/upload/v1689329372/sport_f%C3%A9nix_1_ykrvwk.gif"
          alt=""
          className="Logo"
        />
        <div className="kairos-cinema">
          <h1>La Papada</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem natus adipisci sapiente hic architecto consectetur itaque maiores dolores saepe reiciendis esse cum laudantium voluptates maxime ex accusamus neque quaerat libero dolor animi, modi ullam temporibus? Laudantium alias quae sapiente dicta sit veritatis non natus. Consequuntur quibusdam voluptate quos laboriosam quia.
          </p>
        </div>
      </div>
      <div className="cards-container">
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </>
  );
};
