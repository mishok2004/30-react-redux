import './App.css'
import BookForm from './components/BookForm/BookForm'
import BookList from './components/BookList/BookList'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Liblery app</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookList />
        </div>
        <div className="app-right-column">
          {/* <Filter /> */}
          <BookForm />
        </div>
      </main>
    </div>
  )
}

export default App
