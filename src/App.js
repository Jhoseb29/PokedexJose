import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProtectedPages from './pages/ProtectedPages';
import Login from './pages/Login';
import PokemonList from './pages/PokemonList';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedPages />}>
          <Route path='/pokedex' element={<PokemonList />} />
          <Route path='/pokedex/:id' element={<Pokemon />} />
          <Route path='/pokedex/:id/encounters' />
        </Route>
        <Route path='/pokedex/settings' />

      </Routes>
    </div>
  );
}

export default App;
