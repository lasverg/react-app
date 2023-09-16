import './App.scss'
import Chart from './components/Chart'
import Table from './components/Table'

function App() {
  return (
    <div>
      <header className="border-bottom mb-5">
        <div className="container">
          <h1>Coding Assesment | Quarks Technosoft</h1>
        </div>
      </header>
      <main className="container">
        <Chart />
        <Table />
      </main>
    </div>
  )
}

export default App
