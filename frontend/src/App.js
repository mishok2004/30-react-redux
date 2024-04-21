import './App.css'
import BookForm from './components/BookForm/BookForm'
import BookList from './components/BookList/BookList'
import Filter from './components/Filter/Filter'
import { ErrorCard } from './components/ErrorCard/ErrorCard'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Liblery app</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
      <ErrorCard />
    </div>
  )
}

export default App
