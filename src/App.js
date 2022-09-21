import './App.css';
import Search from './components/Search'
import Meals from './components/Meals'
import Modal from './components/Modal'
import Favorites from './components/Favorites'
import { UseGlobalContext } from './context';

function App() {
  const {showModal,favorites} = UseGlobalContext();
  return (
    <main>
    <Search />
    {favorites.length > 0 && <Favorites/>}
    <Meals />
    {showModal && <Modal />}
  </main>
  );
}

export default App;
