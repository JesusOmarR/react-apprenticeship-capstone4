import { useState, useEffect } from 'react'
import { SideBar, ProductsContainer, ProductsGrid } from './ProductList.styled'
import productsMock from '../../mocks/en-us/products.json'
import ItemList from '../../components/ItemsList/ItemList'
import categories from '../../mocks/en-us/product-categories.json'
import { Pagination } from 'react-bootstrap'
import Loader from '../../UI/Loader'

const ProductList = () => {
  const { results } = productsMock
  const [products, setProducts] = useState(results)
  const [filters, setFilters] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    filterProducts(filters)
  }, [filters])

  const filterProducts = (filter) => {
    if (filter.length === 0) {
      setProducts(productsMock.results)
      return
    }
    const filtered = productsMock.results.filter((product: any) =>
      filter.includes(product.data.category.id)
    )
    console.log(filtered)
    setProducts(filtered)
  }

  const addFilters = (filter) => {
    if (filters.includes(filter)) {
      removeFilters(filter)
      return
    }
    setFilters((oldArray) => [...oldArray, filter])
    console.log(filter)
  }
  const removeFilters = (filter) => {
    setFilters((oldArray) => oldArray.filter((item) => item != filter))
  }

  return loading ? (
    <Loader />
  ) : (
    <ProductsContainer>
      <SideBar>
        {categories.results.map((category: any) => (
          <p
            className={filters.includes(category.id) ? 'active' : 'nonactive'}
            onClick={() => addFilters(category.id)}
            key={category.id}
          >
            {category.data.name}
          </p>
        ))}
      </SideBar>
      <div className="grid-wrapper">
        <h2>Products page</h2>
        <ProductsGrid>
          {products.map((product: any) => (
            <ItemList key={product.id} item={product.data} />
          ))}{' '}
        </ProductsGrid>
        <div className="pagination-container">
          <Pagination className="pagination-container">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </ProductsContainer>
  )
}

export default ProductList
