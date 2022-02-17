import React, { useEffect, useState } from 'react'
import { ListContainer, NotFound } from './SearchPage.styled'
import { useSearchProducts } from '../../utils/hooks/useSearchPoducts'
import { useLocation } from 'react-router-dom'
import Loader from '../../UI/Loader'
import ItemList from '../../components/ItemsList/ItemList'
import Pagination from '../../UI/Pagination'

export default function SearchPage() {
  const { search } = useLocation()
  const query = new URLSearchParams(search)
  const { data, isLoading } = useSearchProducts(query.get('q'))
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(20)

  useEffect(() => {
    if (data.results) {
      setProducts(data.results)
    }
  }, [data])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber)

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      {data?.results.length > 0 ? (
        <div>
          <ListContainer>
            {currentPosts?.map((product: any) => (
              <ItemList
                key={product.id}
                item={{ ...product.data, id: product.id }}
              />
            ))}
          </ListContainer>
          <div className="pagination-container">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={products.length}
              paginate={paginate}
            />
          </div>
        </div>
      ) : (
        <NotFound>No encontramos resultados</NotFound>
      )}
    </div>
  )
}
