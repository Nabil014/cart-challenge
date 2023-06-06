/* eslint-disable react/prop-types */

export default function Cart ({ cart, total }) {


  return (
    <div className="rounded-lg p-3 bg-emerald-600 text-white">
      {
        cart.length ?
          <div className="flex gap-4">

            <span>{cart.length} productos</span>

            <span>(total: $ {total})</span>
          </div>
          :
          <span>No hay productos en el carrito</span>
      }
    </div>
  )
}
