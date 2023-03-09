import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/exports'
import { fetchData } from '../../redux/slices/data'
import { RootState, useAppDispatch } from '../../redux/store'
import Row from '../Row'
import styles from './Table.module.scss'

const Table = ({ currentPage, search, setSearch }: any) => {
  const dispatch = useAppDispatch()

  const [sort, setSort] = useState('asc')
  const { posts } = useSelector((state: RootState) => state.data)

  useEffect(() => {
    dispatch(fetchData({ currentPage, sort, search }))
  }, [currentPage, sort])

  const changeSort = () => {
    if (sort === 'asc') {
      setSort('desc')
    } else {
      setSort('asc')
    }
  }
  console.log(sort)

  return (
    <div className={styles.table}>
      <div className={styles.thead}>
        <p className="id">ID</p>
        <img src="../img/arrow_down.svg" alt="arrow" onClick={changeSort} />
      </div>

      <div className={styles.thead}>
        <p>Заголовок</p>
        <img src="../img/arrow_down.svg" alt="arrow" onClick={changeSort} />
      </div>
      <div className={styles.thead}>
        <p>Описание</p>
        <img src="../img/arrow_down.svg" alt="arrow" onClick={changeSort} />
      </div>
      {posts
        .filter((post: any) => {
          if (post.body.toLowerCase().includes(search.toLowerCase())) {
            return true
          } else {
            return false
          }
        })
        .map((post: any) => (
          <Row
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.body}
          ></Row>
        ))}
    </div>
  )
}

export default Table
