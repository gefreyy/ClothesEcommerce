export default function CartItem({
    product,
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
    setModalInfo,
    onOpenedModal
}) {    
    // console.log(product[0])
    return (
        <table id="cart-table">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {product.map((item, index) => (
                    <tr key={index}>
                        <td className="product-cell">
                            <img src={item.imgProduct} alt="product-image" onClick={() => [setModalInfo(item), onOpenedModal(true)]} style={{cursor: 'pointer'}}/>
                            <div className="product-aside-container">
                                <div className="product-info" onClick={() => [setModalInfo(item), onOpenedModal(true)]} style={{cursor: 'pointer'}}>
                                    <p>{item.name}</p>
                                    <p>Marca: <strong>{item.brand.name}</strong></p>
                                    <p>Talla: <strong>{item.size}</strong></p>
                                    <div className="color-item-container" style={{display:'flex', alignItems:'center', gap:'.5rem'}}>
                                        <p>Color:</p>
                                        <div className="color-item" style={{background: item.color, width: '20px', height: '20px', borderRadius:'5px'}}></div>
                                    </div>
                                </div>
                                <div className="delete-single-prod">
                                    <button className="delete-item-btn" onClick={() => {deleteItem(index)}}>Eliminar</button>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="quantity-container">
                                <button onClick={() => {decreaseQuantity(index)}}>-</button>
                                <p><strong>{item.quantity}</strong></p>
                                <button onClick={() => {increaseQuantity(index)}}>+</button>
                            </div>
                        </td>
                        <td>S/{item.price}</td>
                        <td>xd</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}