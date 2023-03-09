import Pagination from './components/Pagination'
import Search from './components/Search'
import Table from './components/Table'
import './index.scss'
import { useState } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  return (
    <div className="App">
      <Search search={search} setSearch={setSearch}></Search>
      <Table
        search={search}
        setSearch={setSearch}
        currentPage={currentPage}
      ></Table>
      <Pagination setCurrentPage={setCurrentPage}></Pagination>
    </div>
  )
}

export default App
