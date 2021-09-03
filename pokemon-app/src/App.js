import React, {useState, useEffect} from 'react';
import logo from './logo.png'
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();   
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    setLoading(true);
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c) 
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel()
  }, [currentPageUrl])

  function gotonextPage(){
    setCurrentPageUrl(nextPageUrl)
  }
  
  function gotoPrevPage(){
    setCurrentPageUrl(prevPageUrl)
  }

  if(loading) return "Loading....."


  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems:'center',backgroundColor:'#CAD5E2'}}>
      <img src={logo} alt="Logo" style={{height: '7rem', width:'14rem'}} />
      <PokemonList pokemon= {pokemon}/>
      <Pagination
        gotonextPage={ nextPageUrl ?gotonextPage : null}
        gotoPrevPage={prevPageUrl? gotoPrevPage: null}
      />
    </div>
  );
}

export default App;
