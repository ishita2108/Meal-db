import './App.css';
import Search from './components/Search'
import Meals from './components/Meals'
import Modal from './components/Modal'
import Favorites from './components/Favorites'
import { UseGlobalContext } from './context';

function App() {
  const {showModal} = UseGlobalContext();
  return (
    <main>
    <Search />
    {/* <Favorites/> */}
    <Meals />
    {showModal && <Modal />}
  </main>
  );
}

export default App;
