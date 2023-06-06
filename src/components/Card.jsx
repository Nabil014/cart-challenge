/* eslint-disable react/prop-types */
import Button from '@mui/material/Button'

export default function Card ({ data, addToCart, cart, deleteItem }) {



  return (
    <ul className='grid grid-cols-3 border p-4 gap-4 '>
      {
        data.map(product => (
          <li className='flex flex-col justify-between' key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className=' flex flex-col '>
              <h3 className='text-lg font-bold'>{product.title}</h3>
              <p className='text-md text-gray-500'>{product.description}</p>
              {
                cart.some(item => item.id === product.id)
                  ? <div className='flex w-full justify-between'>

                    <Button variant='contained' onClick={() => deleteItem(product)}>-</Button>
                    <p>{cart.filter(item => item.id === product.id).length}</p>
                    <Button variant='contained' onClick={() => addToCart(product)}>+</Button>
                  </div>
                  : <Button onClick={() => addToCart(product)} className='flex w-full' variant="contained">Agregar</Button>
              }
            </div>
          </li>
        ))
      }
    </ul>
  )
}
