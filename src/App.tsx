import Pagination from './components/Pagination'
import Search from './components/Search'
import Table from './components/Table'
import './index.scss'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Search search={search} setSearch={setSearch}></Search>

              <Table search={search} currentPage={currentPage}></Table>
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              ></Pagination>
            </div>
          }
        ></Route>
        <Route
          path={`/:${currentPage}`}
          element={
            <div className="App">
              <Search search={search} setSearch={setSearch}></Search>

              <Table search={search} currentPage={currentPage}></Table>
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              ></Pagination>
            </div>
          }
        ></Route>
      </Routes>
    </>
  )
}

export default App
