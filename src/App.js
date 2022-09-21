import './App.css';
import Search from './components/Search'
import Meals from './components/Meals'
import Modal from './components/Modal'
import Favorites from './components/Favorites'

function App() {
  return (
    <main>
    <Search />
    {/* <Favorites/> */}
    <Meals />
    {/* <Modal /> */}
  </main>
  );
}

export default App;
