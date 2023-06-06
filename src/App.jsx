import Card from "./components/Card"
import data from '../src/data/products.json'
import Cart from "./components/Cart"
import { useContext } from "react"
import { CartContext } from "./context/CartContext"


function App () {

  const cartContext = useContext(CartContext)
  const { cart, setCart, addToCart, deleteItem, total } = cartContext

  return (
    <div className='px-12 bg-slate-100'>
      <div className='bg-white'>
        <h1 className='text-2xl border flex h-16 items-center px-4 font-bold'>Estampitiency</h1>
        <Card data={data} addToCart={addToCart} cart={cart} setCart={setCart} deleteItem={deleteItem} />
      </div>
      <div className="w-screen fixed bottom-14 flex  justify-center z-40">
        <Cart cart={cart} total={total} />
      </div>
    </div>
  )
}

export default App
