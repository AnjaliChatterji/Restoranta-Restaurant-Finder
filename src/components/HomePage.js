import React from 'react';
import '../styles/HomePage.css';
import Search from './Search';

const HomePage = (props) => (
  <div className="App">  
      <Search {...props}/>
    <div className="col-sm-12 col-md-8">
    <img className="backdrop1" src="images/resto.jpg"></img>
      <img className="backdrop" src="images/restaurant-search.jpg"></img>
    </div>
  </div>
)
      

export default HomePage;
