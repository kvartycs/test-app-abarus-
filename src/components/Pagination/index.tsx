import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

const Pagination = ({ setCurrentPage }: any) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel="Далее"
        onPageChange={(e) => setCurrentPage(++e.selected)}
        pageRangeDisplayed={10}
        pageCount={5}
        previousLabel="Назад"
      />
    </div>
  )
}

export default Pagination
