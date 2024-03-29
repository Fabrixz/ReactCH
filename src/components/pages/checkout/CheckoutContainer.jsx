import { useFormik } from "formik";
import { Checkout } from "./Checkout";
import * as Yup from "yup";
import { dataBase } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

export const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  let total = getTotalPrice();
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: total,
      };
      let ordersCollection = collection(dataBase, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((product) => {
        updateDoc(doc(dataBase, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });
      clearCart();
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe contener al menos 3 caracteres"),
      email: Yup.string().email("Este campo no corresponde a un email valido"),
      phone: Yup.string()
        .required("Este campo es obligatorio")
        .min(10, "El telefono ingresado no cumple con los requisitos"),
    }),
  });

  return (
    <div className="Compra-exitosa">
      {orderId ? (
        <div className="Caja_texto">
          <h2 className="texto">Felicidades!! Su compra fue exitosa </h2>
          <p className="texto">Le deseamos que disfrute de la serie 😊 </p>
          <p className="texto">
            Adjuntamos aqui su numero de comprobante: {orderId}
          </p>
        </div>
      ) : (
        <Checkout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};
