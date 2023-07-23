import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useNavigate } from 'react-router-dom'

interface PaginationProps {
  setCurrentPage: (e: any) => void
  currentPage: number
}

const Pagination = ({ setCurrentPage, currentPage }: PaginationProps) => {
  const { posts } = useSelector((state: RootState) => state.data)
  const navigate = useNavigate()

  const handleClick = (e: any) => {
    return navigate(`/${e.event.target.innerHTML}`)
  }

  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel="Далее"
        //@ts-ignore
        onPageChange={(e) => setCurrentPage(++e.selected)}
        pageRangeDisplayed={10}
        onClick={(e) => handleClick(e)}
        pageCount={10}
        previousLabel="Назад"
      />
    </div>
  )
}

export default Pagination
