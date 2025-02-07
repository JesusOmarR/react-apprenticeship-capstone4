import React from 'react'

// prettier-ignore
interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate:  any;
}
const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  paginate,
  totalPosts,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
