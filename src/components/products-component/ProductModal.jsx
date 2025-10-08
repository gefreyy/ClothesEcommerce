import AddToCart from "./AddProduct";
import StarRating from "./StarRating";
import { CartContext } from "../../context/CartContext.jsx";
import { useContext, useEffect, useState } from "react";

export default function ModalProduct({ modalInfo, isModalOpened, setIsModalOpen, closeModal }) {
  const { addToCart, setSelectedSize, setSelectedColor } = useContext(CartContext);

  // ahora guardamos el valor seleccionado, no solo si existe
  const [selectedSize, setLocalSelectedSize] = useState(null);
  const [selectedColor, setLocalSelectedColor] = useState(null);

  useEffect(() => {
    if (!isModalOpened) {
      setLocalSelectedSize(null);
      setLocalSelectedColor(null);
    }
  }, [isModalOpened]);

  return (
    <div className={`modal-product-dialog ${isModalOpened ? "show" : "hide"}`}>
      <div className="modal-product">
        <div className="modal-img-container">
          <img src={modalInfo.imgProduct} alt="product-image" />
        </div>

        <div className="modal-info-container">
          <div className="text-container">
            <div className="title-and-brand">
              <h1>{modalInfo.name}</h1>
              {modalInfo.brand !== undefined ? (
                <h2>
                  {modalInfo.brand.name} | {modalInfo.category.name}
                </h2>
              ) : null}
            </div>

            <div className="rating-container">
              <p>3.6</p>
              <StarRating />
            </div>

            <div className="stock-and-price-container">
              <h3>
                Precio:{" "}
                <strong>
                  S/
                  {modalInfo.price !== undefined
                    ? modalInfo.price
                    : modalInfo.price}
                </strong>
              </h3>
              <h3>Stock: {modalInfo.stock}</h3>
            </div>

            <p>{modalInfo.desc}</p>
          </div>

          <div className="flex flex-col w-full gap-2">
            <p>
              Tallas: <strong>Seleccione una talla</strong>
            </p>
            <div className="flex justify-between gap-2">
              {modalInfo.sizes?.map((size, index) => (
                <button
                  key={index}
                  className={`py-4 rounded w-full hover:bg-gray-300 transition-colors cursor-pointer
                    ${
                      selectedSize === size.name
                        ? "border-gray-800 border-2"
                        : "border-gray-400 border-2"
                    }`}
                  onClick={() => {
                    if(selectedSize === size.name) {
                      setSelectedSize(null);
                      setLocalSelectedSize(null);
                    } else {
                      setSelectedSize(size.name);
                      setLocalSelectedSize(size.name);
                    }
                  }}
                >
                  <strong>{size.name}</strong>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full gap-2 mt-4">
            <p>
              Colores: <strong>Seleccione un color</strong>
            </p>
            <div className="flex justify-between gap-2">
              {modalInfo.colors?.map((color, index) => (
                <button
                  key={index}
                  className={`w-full py-5 rounded cursor-pointer transition-colors
                    ${
                      selectedColor === color.hex
                        ? "border-gray-600 border-2"
                        : "border-gray-400 border-2"
                    }`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => {
                    if(selectedColor === color.hex) {
                      setSelectedColor(null);
                      setLocalSelectedColor(null);
                    } else {
                      setSelectedColor(color.hex);
                      setLocalSelectedColor(color.hex);
                    }
                  }}
                ></button>
              ))}
            </div>
          </div>

          <AddToCart
            product={modalInfo}
            setIsModalOpen={setIsModalOpen}
            addToCart={addToCart}
          />
          <button className="close-btn" onClick={closeModal}>
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
