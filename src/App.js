import React, { useState } from 'react'
import axios from 'axios'

import Search from './my-components/Search'
import Results from './my-components/Results'

function App() {

  // two functions we're pulling from state
  const [state, setState ] = useState({
    //search query
    s: "", 
    results: [],
    selected: {}
  });

  // API key as a variable
  const apiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=3f313b6e";

  // search
  const search = (e) => {
    if(e.key === "Enter") {
      axios(apiKey + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return{...prevState, results: results }
        });
      });
    }
  }

  //to handle input
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s: s}
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie database</h1>
      </header>

      <main>
        <Search handleInput = {handleInput} search={search}/>
        <Results results = {state.results}/>
      </main>
    </div>
  );
}

export default App;
