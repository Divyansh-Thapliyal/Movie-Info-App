
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import {useState,useEffect} from 'react';

import Header from "./components/Header";
import Home from "./components/Home";
// import MoviesList from "./components/MoviesList";

const apiKey='42d039fcc62cc28932ec0acf05964888';

function App() {
  

  return (<>
      <Router>  
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        {/* <Route path="/popular" element={<MoviesList/> } ></Route>
        <Route path="/top-rated" element={<MoviesList/> } ></Route>
        <Route path="/upcoming" element={<MoviesList/> }></Route> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
