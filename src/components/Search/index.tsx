import styles from './Search.module.scss'
import { useState } from 'react'

interface SearchProps {
  search: string
  setSearch: (e: string) => void
}

const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <div className={styles.wrapper}>
      <input
        value={search}
        className={styles.input}
        type="text"
        placeholder="Поиск"
        onChange={(e) => setSearch(e.target.value)}
      />
      <img src="./img/search-alt-svgrepo-com (1).svg" alt="search" />
    </div>
  )
}

export default Search
