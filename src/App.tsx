import './App.css'
import { Button } from 'antd'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button className="m-10" type="primary">
        antd btn test
      </Button>
    </div>
  )
}

export default App
