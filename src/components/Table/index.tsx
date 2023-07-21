import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/exports'
import { fetchData } from '../../redux/slices/data'
import { RootState, useAppDispatch } from '../../redux/store'
import Row from '../Row'
import styles from './Table.module.scss'

interface TableProps {
  currentPage: number
  search: string
}

const Table = ({ currentPage, search }: TableProps) => {
  const dispatch = useAppDispatch()

  const [sortId, setSortId] = useState('ASC')
  const [sortTitle, setSortTitle] = useState('ASC')
  const [sortBody, setSortBody] = useState('ASC')
  const { posts } = useSelector((state: RootState) => state.data)

  useEffect(() => {
    dispatch(fetchData({ currentPage, sortId, sortTitle, sortBody, search }))
  }, [currentPage, sortId, sortTitle, sortBody, search])

  const changeSortId = () => {
    if (sortId === 'ASC') {
      setSortId('DESC')
    } else {
      setSortId('ASC')
    }
  }
  const changeSortTitle = () => {
    if (sortTitle === 'ASC') {
      setSortTitle('DESC')
    } else {
      setSortTitle('ASC')
    }
  }
  const changeSortBody = () => {
    if (sortBody === 'ASC') {
      setSortBody('DESC')
    } else {
      setSortBody('ASC')
    }
  }

  return (
    <div className={styles.table}>
      <div className={styles.thead} onClick={changeSortId}>
        <p className="id">ID</p>
        <img src="./img/arrow_down.svg" alt="arrow" />
      </div>

      <div className={styles.thead} onClick={changeSortTitle}>
        <p>Заголовок</p>
        <img src="./img/arrow_down.svg" alt="arrow" />
      </div>
      <div className={styles.thead} onClick={changeSortBody}>
        <p>Описание</p>
        <img src="./img/arrow_down.svg" alt="arrow" />
      </div>
      {posts.map((post: any) => (
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
