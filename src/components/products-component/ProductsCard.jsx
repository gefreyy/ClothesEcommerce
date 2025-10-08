import { FaSpinner } from "react-icons/fa";

export default function ProductCard({
    onOpenedModal,
    setModalInfo,
    data,
    isLoading,
    isFetching,
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 justify-items-center items-center">
            {isLoading || isFetching ? (
                <FaSpinner className="text-center absolute top-1/2 left-1/2 transform md:-translate-x-[-4rem] -translate-y-1/2 translate-x-[-50%] animate-spin text-gray-600 text-4xl" />
            ) : data?.data?.length === 0 ? (
                <p className="text-center absolute top-1/2 left-1/2 transform md:-translate-x-[-50%] -translate-y-1/2">No hay productos</p>
            ) : (
                data?.data?.map((product, index) => (
                <article
                    className="flex flex-col items-center w-max cursor-pointer"
                    key={index}
                    onClick={() => {
                        setModalInfo(product);
                        onOpenedModal(true);
                    }}
                >
                    <div className="border border-gray-300 py-4 px-4">
                        <img
                            src={product.imgProduct}
                            alt={product.name}
                            className="w-[250px] h-[250px] object-cover aspect-square object-cover"
                        />
                        <div className="product-card-info">
                            <h3 className="product-card-name">{product.name}</h3>
                            <p className="product-card-price">Precio: S/{product.price}</p>
                        </div>
                        <button className="product-card-button">Ver Producto</button>
                    </div>
                </article>
                ))
            )}
        </div>
    )
}