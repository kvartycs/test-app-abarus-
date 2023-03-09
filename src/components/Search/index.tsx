import styles from './Search.module.scss'
import { useState } from 'react'

const Search = ({ search, setSearch }: any) => {
  return (
    <div className={styles.wrapper}>
      <input
        value={search}
        className={styles.input}
        type="text"
        placeholder="Поиск"
        onChange={(e) => setSearch(e.target.value)}
      />
      <img src="../img/search-alt-svgrepo-com (1).svg" alt="search" />
    </div>
  )
}

export default Search
