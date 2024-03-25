import './App.css'
import BookForm from './components/BookForm/BookForm'
import BookList from './components/BookList/BookList'
import Filter from './components/Filter/Filter'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Liblery app</h1>
      </header>
      <main className="app-main">
        <div className="app-left-colump">
          <BookList />
        </div>
        <div className="app-right-colum">
          <Filter />
          <BookForm />
        </div>
      </main>
    </div>
  )
}

export default App
