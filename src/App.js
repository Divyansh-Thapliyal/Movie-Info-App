
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import {useState,useEffect} from 'react';

import Header from "./components/Header";
import Home from "./components/Home";
import MoviesList from "./components/MoviesList";
import MovieDetails from '../src/components/MovieDetails.js';


const apiKey='42d039fcc62cc28932ec0acf05964888';

function App() {
  

  return (<>
      <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<MovieDetails />}></Route>
                <Route path="movies/:type" element={<MoviesList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
    </>
  );
}

export default App;
