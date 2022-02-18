import { useState, useEffect } from 'react'
import { SideBar, ProductsContainer, ProductsGrid } from './ProductList.styled'
import ItemList from '../../components/ItemsList/ItemList'
import { Button } from 'react-bootstrap'
import Loader from '../../UI/Loader'
import { useFeaturedCategories } from '../../utils/hooks/useFeaturedCategory'
import { useFeaturedProducts } from '../../utils/hooks/useFeaturedProducts'
import Pagination from '../../UI/Pagination'

const ProductList = () => {
  const { data: featuredCategories, isLoading: LoadingCategories } =
    useFeaturedCategories()
  const { data: featuredProducts, isLoading: loadingProducts } =
    useFeaturedProducts()

  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)
  const [currentPost, setCurrentPosts] = useState([])

  useEffect(() => {
    filterProducts(filters)
  }, [filters])

  useEffect(() => {
    if (featuredProducts.results) {
      const indexOfLastPost = currentPage * postsPerPage
      const indexOfFirstPost = indexOfLastPost - postsPerPage
      const currentPosts = featuredProducts.results.slice(
        indexOfFirstPost,
        indexOfLastPost
      )
      setCurrentPosts(currentPosts)
      setProducts(featuredProducts.results)
    }
  }, [featuredProducts, currentPage])

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber)

  const filterProducts = (filter: any) => {
    if (filter.length === 0) {
      setCurrentPage(1)
      const indexOfLastPost = 1 * postsPerPage
      const indexOfFirstPost = indexOfLastPost - postsPerPage
      const currentPosts = featuredProducts?.results?.slice(
        indexOfFirstPost,
        indexOfLastPost
      )
      setCurrentPosts(currentPosts)
      setProducts(featuredProducts.results)
      return
    }

    const filtered = featuredProducts.results.filter((product: any) =>
      filter.includes(product.data.category.id)
    )
    console.log(filtered)
    setCurrentPage(1)
    const indexOfLastPost = 1 * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = filtered?.slice(indexOfFirstPost, indexOfLastPost)
    setCurrentPosts(currentPosts)
    setProducts(filtered)
  }

  const addFilters = (filter: any) => {
    if (filters.includes(filter)) {
      removeFilters(filter)
      return
    }
    setFilters((oldArray) => [...oldArray, filter])
    console.log(filter)
  }
  const removeFilters = (filter: any) => {
    setFilters((oldArray) => oldArray.filter((item) => item != filter))
  }

  return loadingProducts || LoadingCategories ? (
    <Loader />
  ) : (
    <ProductsContainer>
      <SideBar>
        {featuredCategories?.results?.map((category: any) => (
          <p
            className={filters.includes(category.id) ? 'active' : 'nonactive'}
            onClick={() => addFilters(category.id)}
            key={category.id}
          >
            {category.data.name}
          </p>
        ))}
        {filters.length > 0 && (
          <Button onClick={() => setFilters([])}>Remove Filters</Button>
        )}
      </SideBar>
      <div className="grid-wrapper">
        <h2>Products page</h2>
        <ProductsGrid>
          {currentPost?.map((product: any) => (
            <ItemList
              key={product.id}
              item={{ ...product.data, id: product.id }}
            />
          ))}{' '}
        </ProductsGrid>
        <div className="pagination-container">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={products?.length}
            paginate={paginate}
          />
        </div>
      </div>
    </ProductsContainer>
  )
}

export default ProductList
