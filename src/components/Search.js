import React,{useState} from 'react';
import { UseGlobalContext } from '../context';


const Search = () => {
  const [text, setText] = useState("");
  const {setSearchTerm, fetchRandomMeal} = UseGlobalContext();
  const handleChange = (e) =>{
    setText(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(text){
      setSearchTerm(text);
    }
  }
  const handleRandomMeal = () =>{
    setSearchTerm("");
    setText("");
    fetchRandomMeal()
  }

  return <header className='search-container'>
  <form onSubmit={handleSubmit}>
    <input type='text' placeholder='type favorite meal' value={text} className='form-input' onChange={handleChange}/>
    <button type="submit" className="btn">search</button>
    <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>suprise me !</button>
  </form>
</header>
}

export default Search