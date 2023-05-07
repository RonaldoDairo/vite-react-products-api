import React, { useState, useEffect } from 'react'
import Pagination from './Pagination';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const totalProducts = products.length
    const [productsPerPage, setProductsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage


    const productsList = async ()=>{
        const data = await fetch('https://fakestoreapi.com/products')
        const products = await data.json()
        setProducts(products)
            
    }
    useEffect(() => {
       productsList()
    }, []);



    return (
    <>
      <div className='container-products'>
            {products.map(product=> (
                <div className='card-product' key={product.id}>
                    <figure className='container-img'>
                            <img src={product.image} alt={product.title}/>

                    </figure>
                    <div className='info-product'>
                        <h3>{product.title}</h3>
                        <p className='price'> $ {product.price}</p>
                        <button> Añadir</button>
                     </div>
                </div>   
            )).slice(0,6 )}
      </div>
      <Pagination 
        productsPerPage= {productsPerPage}
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
        totalProducts = {totalProducts}
        />
    </>
  )
}

export default ProductList
