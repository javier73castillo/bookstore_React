import React from 'react'
import { useBookContext } from '../../shared/contexts/BookContext'

export const Cart = () => {
    const {items} = useBookContext();
    console.log(items[0])
  return (
    <div className=''>
        {items.map(libro => {
            return (
                <div className='bookRow'>
                    <p>{libro.name}</p>
                    <p>{libro.price}</p>
                </div>
            )
        })}
    </div>
  )
}
