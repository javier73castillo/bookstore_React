import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'



 export const Books = () => {
    const [books, setBooks] = useState([]);

    const urlPage = `https://library-api-rest-86hi8hunh-javier73castillo.vercel.app/api/books`
  

   useEffect(() => {
     axios
     .get(urlPage)
     .then((response)=>{
      console.log(response);
     setBooks(response.data) 
     });
   }, [urlPage]);


  return (
    <>   
        <div className='cards'>
              {books.map((book)=>{
                return(
                  <div>
                    <h2>{book.name}</h2>
                    <h3>{book.editorial}</h3>
                    <h3>{book.year}</h3>
                    <img src={book.img} alt={book.name}/>
                  </div>

                );
              })}
            </div>
    </>
  )
}