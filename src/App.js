import logo from './logo.svg';
import './App.css';
import {Route, Routes, Link} from 'react-router-dom';

import SearchPoke from './components/SearchPoke';
import OnePoke from './components/OnePoke';
import AllPoke from './components/AllPoke';

function App() {




  return (
    <div className="App">
      <h1>Welcome to Pokedex</h1>
      <Link className="navLink" to={"/"}>HOME</Link>
      |
      <Link className="navLink" to={"/search"}>SEARCH</Link>
      |
      <Link className="navLink" to={"/all"}>ALL POKEMON</Link>



<Routes>
    <Route path='/search' element={<SearchPoke/>}></Route>
    <Route path='/one/:poke' element={<OnePoke/>}></Route>
    <Route path='/all' element={<AllPoke/>}></Route>



</Routes>


    </div>
  );
}

export default App;
