
import './App.css';
import Todo from './components/Todo';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus />
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label for="toggle-all">
            Mark all as complete
          </label>
          <Todo />
        </section>

        <Footer />
      </section>

      
    </div>
  )
}

export default App;
