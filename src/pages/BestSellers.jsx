import React from 'react'
import ProductCard from '../components/ProductCard'
import productsData from '../components/productsData'
const BestSellers = () => {

  const data = Object.values(productsData).flat()
  return (
    <div>
      <div className="grid sm:grid-cols-3 max-sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {data.map((card, idx) => (
          <ProductCard key={idx} product={card} />
        ))
        }
        
      </div>
    </div>
  )
}

export default BestSellers
