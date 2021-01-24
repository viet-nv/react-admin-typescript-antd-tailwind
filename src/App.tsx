import './App.css'
import AdminLayout from 'layouts/AdminLayout'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AdminLayout} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
