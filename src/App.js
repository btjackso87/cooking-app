import { BrowserRouter, Switch, Route } from 'react-router-dom'

// page components
import Home from './pages/Home/Home'
import Create from './pages/Create/Create'
import Search from './pages/Search/Search'
import Recipe from './pages/Recipe/Recipe'

// styles
import './App.css'
import NavBar from './components/NavBar.js'
import ThemeSelector from './components/ThemeSelector.js'
import { useTheme } from './hooks/useTheme.js'

function App() {

  const {mode} = useTheme()
  return (
    <div className={`App ${mode}`}>

      <BrowserRouter >
          <NavBar/>
          <ThemeSelector />

          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/create">
                <Create />
            </Route>
            <Route path="/search">
               <Search />
            </Route>
            <Route path="/recipes/:id">
                <Recipe />
            </Route>
          </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App
